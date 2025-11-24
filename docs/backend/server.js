/**
 * CORS Proxy Server for E-Control API
 * Simple Express.js backend to bypass CORS restrictions
 *
 * Deploy to: Vercel, Netlify, Heroku, or any Node.js hosting
 */

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
const E_CONTROL_API_BASE = 'https://api.e-control.at/sprit/1.0';

// Enable CORS for all origins (adjust in production)
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Diesel Price Checker - CORS Proxy',
    version: '1.0.0',
    endpoints: {
      '/api/prices': 'GET - Fetch fuel prices by location',
      '/api/health': 'GET - Health check'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

/**
 * Main endpoint: Fetch fuel prices from E-Control API
 *
 * Query parameters:
 * - latitude: Latitude (required)
 * - longitude: Longitude (required)
 * - fuelType: Fuel type, e.g., DIE (default: DIE)
 * - includeClosed: Include closed stations (default: false)
 */
app.get('/api/prices', async (req, res) => {
  try {
    // Extract query parameters
    const {
      latitude,
      longitude,
      fuelType = 'DIE',
      includeClosed = 'false'
    } = req.query;

    // Validate required parameters
    if (!latitude || !longitude) {
      return res.status(400).json({
        error: 'Missing required parameters',
        message: 'Both latitude and longitude are required'
      });
    }

    // Build E-Control API URL
    const apiUrl = `${E_CONTROL_API_BASE}/search/gas-stations/by-address?latitude=${latitude}&longitude=${longitude}&fuelType=${fuelType}&includeClosed=${includeClosed}`;

    console.log(`[${new Date().toISOString()}] Fetching prices: lat=${latitude}, lng=${longitude}, fuel=${fuelType}`);

    // Fetch from E-Control API
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Diesel-Price-Checker/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`E-Control API error: ${response.status} ${response.statusText}`);
    }

    // Parse and return data
    const data = await response.json();

    console.log(`[${new Date().toISOString()}] Success: ${data.length} stations found`);

    res.json(data);

  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error:`, error.message);

    res.status(500).json({
      error: 'Failed to fetch fuel prices',
      message: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Endpoint ${req.path} does not exist`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║  Diesel Price Checker - CORS Proxy Server               ║
║  Status: RUNNING                                         ║
║  Port: ${PORT}                                              ║
║  API Base: ${E_CONTROL_API_BASE}                          ║
╚══════════════════════════════════════════════════════════╝

Available endpoints:
  GET  /                  - Service info
  GET  /api/health        - Health check
  GET  /api/prices        - Fetch fuel prices

Example request:
  ${PORT === 3000 ? `http://localhost:${PORT}` : `https://your-domain.com`}/api/prices?latitude=46.9625&longitude=15.4787&fuelType=DIE

Press Ctrl+C to stop server
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  process.exit(0);
});
