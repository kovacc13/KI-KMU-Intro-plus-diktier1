"""
CORS Proxy Server for E-Control API (Python Flask version)
Simple Flask backend to bypass CORS restrictions

Deploy to: Vercel, Heroku, PythonAnywhere, or any Python hosting
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)

# Enable CORS for all origins (adjust in production)
CORS(app)

# Configuration
E_CONTROL_API_BASE = 'https://api.e-control.at/sprit/1.0'

@app.route('/')
def index():
    """Service information endpoint"""
    return jsonify({
        'status': 'ok',
        'service': 'Diesel Price Checker - CORS Proxy',
        'version': '1.0.0',
        'endpoints': {
            '/api/prices': 'GET - Fetch fuel prices by location',
            '/api/health': 'GET - Health check'
        }
    })

@app.route('/api/health')
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/prices')
def get_prices():
    """
    Main endpoint: Fetch fuel prices from E-Control API

    Query parameters:
    - latitude: Latitude (required)
    - longitude: Longitude (required)
    - fuelType: Fuel type, e.g., DIE (default: DIE)
    - includeClosed: Include closed stations (default: false)
    """
    try:
        # Extract query parameters
        latitude = request.args.get('latitude')
        longitude = request.args.get('longitude')
        fuel_type = request.args.get('fuelType', 'DIE')
        include_closed = request.args.get('includeClosed', 'false')

        # Validate required parameters
        if not latitude or not longitude:
            return jsonify({
                'error': 'Missing required parameters',
                'message': 'Both latitude and longitude are required'
            }), 400

        # Build E-Control API URL
        api_url = f"{E_CONTROL_API_BASE}/search/gas-stations/by-address"
        params = {
            'latitude': latitude,
            'longitude': longitude,
            'fuelType': fuel_type,
            'includeClosed': include_closed
        }

        print(f"[{datetime.now().isoformat()}] Fetching prices: lat={latitude}, lng={longitude}, fuel={fuel_type}")

        # Fetch from E-Control API
        response = requests.get(
            api_url,
            params=params,
            headers={
                'User-Agent': 'Diesel-Price-Checker/1.0',
                'Accept': 'application/json'
            },
            timeout=10
        )

        response.raise_for_status()

        # Parse and return data
        data = response.json()

        print(f"[{datetime.now().isoformat()}] Success: {len(data)} stations found")

        return jsonify(data)

    except requests.exceptions.RequestException as e:
        print(f"[{datetime.now().isoformat()}] Error: {str(e)}")

        return jsonify({
            'error': 'Failed to fetch fuel prices',
            'message': str(e)
        }), 500

    except Exception as e:
        print(f"[{datetime.now().isoformat()}] Unexpected error: {str(e)}")

        return jsonify({
            'error': 'Internal server error',
            'message': str(e)
        }), 500

@app.errorhandler(404)
def not_found(e):
    """404 error handler"""
    return jsonify({
        'error': 'Not Found',
        'message': f'Endpoint {request.path} does not exist'
    }), 404

@app.errorhandler(500)
def internal_error(e):
    """500 error handler"""
    return jsonify({
        'error': 'Internal Server Error',
        'message': str(e)
    }), 500

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 3000))

    print(f"""
╔══════════════════════════════════════════════════════════╗
║  Diesel Price Checker - CORS Proxy Server (Python)      ║
║  Status: RUNNING                                         ║
║  Port: {port}                                              ║
║  API Base: {E_CONTROL_API_BASE}                          ║
╚══════════════════════════════════════════════════════════╝

Available endpoints:
  GET  /                  - Service info
  GET  /api/health        - Health check
  GET  /api/prices        - Fetch fuel prices

Example request:
  http://localhost:{port}/api/prices?latitude=46.9625&longitude=15.4787&fuelType=DIE

Press Ctrl+C to stop server
    """)

    app.run(host='0.0.0.0', port=port, debug=False)
