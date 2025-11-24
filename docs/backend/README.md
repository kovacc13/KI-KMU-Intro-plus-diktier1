# 🔧 Backend: CORS Proxy für E-Control API

Dieses Backend löst das CORS-Problem beim direkten Zugriff auf die E-Control API vom Browser aus.

---

## 📋 Übersicht

### Das Problem
Die E-Control API erlaubt keine direkten Aufrufe vom Browser (CORS-Restriktion). Dieser Proxy-Server fungiert als Middleware und leitet Anfragen weiter.

### Die Lösung
Ein einfacher Backend-Server, der:
- ✅ Anfragen vom Frontend empfängt
- ✅ An die E-Control API weiterleitet
- ✅ Daten zurück zum Frontend sendet
- ✅ CORS-Header hinzufügt

---

## 🚀 Schnellstart

### Option 1: Node.js (empfohlen)

```bash
# Installation
cd docs/backend
npm install

# Entwicklung
npm run dev

# Produktion
npm start
```

Server läuft auf: `http://localhost:3000`

### Option 2: Python/Flask

```bash
# Installation
cd docs/backend
pip install -r requirements.txt

# Starten
python server.py
```

Server läuft auf: `http://localhost:3000`

---

## 🧪 Testen

### Health Check
```bash
curl http://localhost:3000/api/health
```

Erwartete Antwort:
```json
{
  "status": "healthy",
  "timestamp": "2024-11-24T10:30:00.000Z"
}
```

### Preise abrufen
```bash
curl "http://localhost:3000/api/prices?latitude=46.9625&longitude=15.4787&fuelType=DIE"
```

Erwartete Antwort: Array mit Tankstellen-Daten

---

## 🌐 Deployment

### Vercel (Node.js) - EMPFOHLEN ⭐

**Vorteile:**
- ✅ Kostenlos
- ✅ Automatisches Deployment bei Git Push
- ✅ Schnelles CDN
- ✅ Einfaches Setup

**Anleitung:**

1. **Vercel-Account erstellen**
   - Gehen Sie zu https://vercel.com
   - Sign up with GitHub

2. **Projekt verbinden**
   ```bash
   # Vercel CLI installieren
   npm install -g vercel

   # In backend/ Ordner wechseln
   cd docs/backend

   # Deployment
   vercel
   ```

3. **Konfiguration** (`vercel.json` erstellen)
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```

5. **URL notieren**
   - Z.B. `https://diesel-backend-xyz.vercel.app`

---

### Netlify (Node.js)

**Anleitung:**

1. **Netlify-Account erstellen**
   - https://www.netlify.com

2. **netlify.toml erstellen**
   ```toml
   [build]
     functions = "functions"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

3. **Serverless Function erstellen**
   ```bash
   mkdir -p functions
   # Kopieren Sie server.js nach functions/api.js
   # Anpassen für Netlify Functions format
   ```

4. **Deploy via GitHub**
   - Repository mit Netlify verbinden
   - Automatisches Deployment bei Push

---

### Heroku (Node.js oder Python)

**Anleitung:**

1. **Heroku-Account erstellen**
   - https://www.heroku.com

2. **Heroku CLI installieren**
   ```bash
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

3. **Login**
   ```bash
   heroku login
   ```

4. **App erstellen**
   ```bash
   cd docs/backend
   heroku create diesel-price-backend
   ```

5. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a diesel-price-backend
   git push heroku main
   ```

6. **URL**
   - Z.B. `https://diesel-price-backend.herokuapp.com`

**Kosten:** Kostenlos für erste 1000 Dyno-Stunden/Monat

---

### Railway (Node.js oder Python)

**Anleitung:**

1. **Railway-Account erstellen**
   - https://railway.app

2. **GitHub Repository verbinden**

3. **New Project → Deploy from GitHub**

4. **Automatisches Deployment**
   - Railway erkennt automatisch Node.js/Python
   - Umgebungsvariablen bei Bedarf setzen

**Kosten:** $5 Startguthaben, dann Pay-as-you-go

---

### Render (Node.js oder Python)

**Anleitung:**

1. **Render-Account erstellen**
   - https://render.com

2. **New Web Service**

3. **GitHub Repository verbinden**

4. **Konfiguration:**
   - Build Command: `npm install` oder `pip install -r requirements.txt`
   - Start Command: `npm start` oder `python server.py`

**Kosten:** Kostenlos (mit Einschränkungen), dann ab $7/Monat

---

## 🔧 Frontend anpassen

Nach dem Deployment müssen Sie die Frontend-URL anpassen:

### In `diesel-checker.html` ändern:

**Vorher:**
```javascript
const CONFIG = {
    API_URL: 'https://api.e-control.at/sprit/1.0/search/gas-stations/by-address',
    // ...
};
```

**Nachher:**
```javascript
const CONFIG = {
    API_URL: 'https://your-backend.vercel.app/api/prices',
    // REMOVE latitude, longitude, fuelType from URL
    // They are now sent as query parameters
};
```

### Fetch-Funktion anpassen:

**Vorher:**
```javascript
async function fetchFuelPrices() {
    const url = `${CONFIG.API_URL}?latitude=${CONFIG.KALSDORF_LAT}&longitude=${CONFIG.KALSDORF_LNG}&fuelType=${CONFIG.FUEL_TYPE}&includeClosed=false`;
    const response = await fetch(url);
    return response.json();
}
```

**Nachher:**
```javascript
async function fetchFuelPrices() {
    const url = `${CONFIG.API_URL}?latitude=${CONFIG.KALSDORF_LAT}&longitude=${CONFIG.KALSDORF_LNG}&fuelType=${CONFIG.FUEL_TYPE}&includeClosed=false`;
    const response = await fetch(url);
    return response.json();
}
```

*(Eigentlich keine Änderung nötig, nur die API_URL ändern)*

---

## 📊 API-Dokumentation

### GET /

Service-Informationen

**Response:**
```json
{
  "status": "ok",
  "service": "Diesel Price Checker - CORS Proxy",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

---

### GET /api/health

Health Check

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-11-24T10:30:00.000Z"
}
```

---

### GET /api/prices

Fuel Prices abfragen

**Query Parameters:**
- `latitude` (required): Breitengrad, z.B. `46.9625`
- `longitude` (required): Längengrad, z.B. `15.4787`
- `fuelType` (optional): Treibstofftyp, default `DIE`
- `includeClosed` (optional): Geschlossene Tankstellen, default `false`

**Beispiel-Request:**
```
GET /api/prices?latitude=46.9625&longitude=15.4787&fuelType=DIE&includeClosed=false
```

**Success Response (200):**
```json
[
  {
    "id": 12345,
    "name": "OMV Kalsdorf",
    "location": {
      "address": "Hauptstraße 1",
      "postalCode": "8401",
      "city": "Kalsdorf bei Graz"
    },
    "distance": 1.2,
    "prices": [
      {
        "fuelType": "DIE",
        "amount": 1.649,
        "label": "Diesel"
      }
    ]
  }
]
```

**Error Response (400):**
```json
{
  "error": "Missing required parameters",
  "message": "Both latitude and longitude are required"
}
```

**Error Response (500):**
```json
{
  "error": "Failed to fetch fuel prices",
  "message": "Error details..."
}
```

---

## 🔒 Sicherheit

### Produktions-Setup

1. **CORS Origins einschränken**

   **Node.js:**
   ```javascript
   const corsOptions = {
     origin: ['https://your-domain.com', 'https://www.your-domain.com'],
     optionsSuccessStatus: 200
   };
   app.use(cors(corsOptions));
   ```

   **Python:**
   ```python
   from flask_cors import CORS
   CORS(app, resources={
       r"/api/*": {
           "origins": ["https://your-domain.com", "https://www.your-domain.com"]
       }
   })
   ```

2. **Rate Limiting**

   **Node.js (express-rate-limit):**
   ```javascript
   const rateLimit = require('express-rate-limit');

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });

   app.use('/api/', limiter);
   ```

   **Python (Flask-Limiter):**
   ```python
   from flask_limiter import Limiter

   limiter = Limiter(
       app,
       default_limits=["100 per hour"]
   )
   ```

3. **HTTPS erzwingen**
   - Alle Hosting-Provider (Vercel, Netlify, etc.) bieten automatisch HTTPS

4. **Umgebungsvariablen**
   ```bash
   # .env Datei
   PORT=3000
   NODE_ENV=production
   ALLOWED_ORIGINS=https://your-domain.com
   ```

---

## 📈 Monitoring

### Logs anzeigen

**Vercel:**
```bash
vercel logs
```

**Heroku:**
```bash
heroku logs --tail
```

**Render:**
- Dashboard → Logs Tab

### Uptime Monitoring (optional)

Kostenlose Services:
- **UptimeRobot** - https://uptimerobot.com/
- **Pingdom** - https://www.pingdom.com/
- **StatusCake** - https://www.statuscake.com/

---

## 🐛 Troubleshooting

### Problem: "CORS error" im Frontend

**Lösung:**
- Prüfen Sie CORS-Konfiguration im Backend
- Testen Sie mit `curl` direkt
- Prüfen Sie Browser Console für genaue Fehlermeldung

### Problem: "500 Internal Server Error"

**Lösung:**
- Prüfen Sie Backend-Logs
- Testen Sie E-Control API direkt: https://api.e-control.at/sprit/1.0/
- Prüfen Sie API-Parameter (latitude, longitude)

### Problem: "Deployment failed"

**Lösung:**
- Prüfen Sie `package.json` / `requirements.txt`
- Prüfen Sie Node.js / Python Version
- Prüfen Sie Build-Logs

---

## 💰 Kosten-Übersicht

| Anbieter | Kostenlos | Bezahlt ab | Empfehlung |
|----------|-----------|------------|------------|
| **Vercel** | ✅ Hobby Plan | $20/Monat | ⭐ Beste Wahl |
| **Netlify** | ✅ Starter | $19/Monat | ⭐ Gut |
| **Heroku** | ✅ 1000h/Monat | $7/Monat | OK |
| **Railway** | $5 Guthaben | Pay-as-go | Gut |
| **Render** | ✅ Free Tier | $7/Monat | OK |

**Empfehlung:** Vercel für Node.js, da:
- Einfaches Setup
- Schnelles CDN
- Gute Free Tier
- Automatische Deployments

---

## 📚 Weitere Ressourcen

- **E-Control API Docs**: https://api.e-control.at/sprit/1.0/doc/
- **Express.js Docs**: https://expressjs.com/
- **Flask Docs**: https://flask.palletsprojects.com/
- **Vercel Docs**: https://vercel.com/docs
- **CORS Explained**: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

---

## ✅ Checkliste: Produktiv-Deployment

- [ ] Backend-Code lokal getestet
- [ ] Hosting-Anbieter gewählt (empf: Vercel)
- [ ] Account erstellt
- [ ] Projekt deployed
- [ ] URL notiert
- [ ] Frontend-Code angepasst (API_URL)
- [ ] Frontend getestet mit neuem Backend
- [ ] CORS Origins eingeschränkt (Produktion)
- [ ] Rate Limiting aktiviert (optional)
- [ ] Monitoring eingerichtet (optional)
- [ ] Dokumentation aktualisiert

---

**Backend ist einsatzbereit! 🚀**

Bei Fragen oder Problemen: [Support-Email]
