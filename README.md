# 🚛 Diesel-Preischecker für Kalsdorf bei Graz

**Automatische Preisüberwachung und Zuschlagsberechnung nach Dieselfloater-Tabelle**

Entwickelt für: **Josef Poscharnegg GmbH**

---

## 🌐 Live-Demo

**Öffnen Sie die Anwendung:**
- 🔗 [Diesel-Preischecker starten](diesel-checker.html)

---

## ✨ Features

### Automatische Preisabfrage
- ✅ Tagesaktuelle Dieselpreise von E-Control API
- ✅ Medianpreis-Berechnung für Kalsdorf bei Graz (PLZ 8401)
- ✅ Automatische Zuschlagsberechnung nach Poscharnegg-Tabelle
- ✅ Übersicht aller Tankstellen mit Einzelpreisen

### 📊 Preisverlauf (30 Tage)
- 📈 Interaktives Chart.js Diagramm
- 📊 Statistiken: Durchschnitt, Maximum, Minimum
- 💾 Lokale Speicherung im Browser (LocalStorage)
- 🔄 Tägliche Datenerfassung

### ⏰ Automatische Updates
- 🕕 Täglich um **6:30 Uhr** automatische Aktualisierung
- ⏱️ Live-Countdown bis zur nächsten Abfrage
- 🔄 Manuelle Aktualisierung jederzeit möglich

### 📱 Responsive Design
- 💻 Funktioniert auf Desktop, Tablet und Smartphone
- 🎨 Modernes Design mit Tailwind CSS
- ⚡ Schnell und performant

---

## 🚀 Schnellstart

### Option 1: Direkt öffnen (einfachste Methode)
```bash
# Datei einfach im Browser öffnen:
open diesel-checker.html
# oder doppelklicken auf die Datei
```

### Option 2: Lokaler Webserver (empfohlen)
```bash
# Mit Python 3:
python3 -m http.server 8000

# Im Browser öffnen:
http://localhost:8000/diesel-checker.html
```

### Option 3: GitHub Pages (öffentlich zugänglich)
Die Anwendung ist über GitHub Pages verfügbar:
```
https://kovacc13.github.io/KI-KMU-Intro-plus-diktier1/diesel-checker.html
```

---

## 📋 Verwendung

### 1. **Erste Öffnung**
- Beim ersten Laden werden automatisch die aktuellen Preise abgerufen
- Der erste Datenpunkt wird im Verlaufsdiagramm gespeichert

### 2. **Tägliche Nutzung**
- Öffnen Sie die Seite täglich oder
- Lassen Sie sie im Hintergrund laufen für automatische Updates um 6:30 Uhr
- Das Diagramm baut sich täglich auf

### 3. **Interpretation der Daten**
- **Medianpreis Kalsdorf**: Durchschnitt aller Tankstellen in der Nähe
- **Zuschlag**: Automatisch aus der Dieselfloater-Tabelle ermittelt
- **Tankstellenliste**: Zeigt alle einbezogenen Tankstellen mit Preisen

### 4. **Verlaufsdaten verwalten**
- Button "Verlauf löschen" setzt alle historischen Daten zurück
- Daten werden nur lokal gespeichert (kein Server)

---

## 🔧 Technische Details

### Datenquelle
- **API**: E-Control Spritpreisrechner API
- **URL**: `https://api.e-control.at/sprit/1.0/`
- **Aktualisierung**: Täglich um 6:30 Uhr
- **Standort**: Kalsdorf bei Graz (46.9625°N, 15.4787°E)

### Technologie-Stack
- **Frontend**: HTML5, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Charts**: Chart.js 4.4.1
- **Storage**: LocalStorage (Browser)

### Browser-Kompatibilität
- ✅ Chrome/Edge (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile Browser (iOS/Android)

---

## 📊 Dieselfloater-Tabelle

Die Zuschlagsberechnung erfolgt nach folgender Tabelle (gültig ab 14.03.2022):

| Preis von (€/L) | Preis bis (€/L) | Zuschlag |
|-----------------|-----------------|----------|
| 2,657 | 2,707 | 25% |
| 2,606 | 2,656 | 24% |
| ... | ... | ... |
| 1,433 | 1,483 | 1% |
| 1,382 | 1,432 | 0% |

**Hinweis**: Die Zuschläge erfolgen in **5-Cent-Schritten** und betragen jeweils **+1%** auf den vereinbarten Transporttarif.

---

## 🛠️ Entwicklung

### Projekt-Struktur
```
KI-KMU-Intro-plus-diktier1/
├── diesel-checker.html          # Hauptanwendung
├── index.html                   # Original KI-Einführungsseite
├── README.md                    # Diese Datei
├── docs/
│   ├── presentation.md          # Präsentations-Slides
│   ├── demo-script.md           # Demo-Video-Skript
│   └── backend/                 # CORS-Proxy Backend
└── .github/
    └── workflows/
        └── pages.yml            # GitHub Pages Deployment
```

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/kovacc13/KI-KMU-Intro-plus-diktier1.git
cd KI-KMU-Intro-plus-diktier1

# Webserver starten
python3 -m http.server 8000

# Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"
git push origin claude/diesel-price-checker-01XNWiXY2gKjrtkcKPqUD9Vq
```

---

## 🐛 Troubleshooting

### CORS-Fehler beim Laden der Preise
**Problem**: Die E-Control API erlaubt keine direkten Aufrufe vom Browser

**Lösung**:
1. Nutzen Sie das mitgelieferte Backend (`docs/backend/`)
2. Oder öffnen Sie die Seite über einen Webserver (nicht als `file://`)

### Keine Verlaufsdaten sichtbar
**Problem**: Noch kein Datenpunkt vorhanden

**Lösung**:
- Warten Sie bis zur ersten Abfrage (beim Öffnen oder um 6:30 Uhr)
- Das Diagramm baut sich täglich auf

### Countdown läuft nicht
**Problem**: JavaScript-Fehler oder Browser-Kompatibilität

**Lösung**:
- Prüfen Sie die Browser-Konsole (F12)
- Verwenden Sie einen modernen Browser
- Aktualisieren Sie die Seite (Strg+F5)

---

## 📄 Lizenz

Dieses Projekt wurde entwickelt für **Josef Poscharnegg GmbH**.

---

## 👨‍💻 Support

Bei Fragen oder Problemen:
- 📧 E-Mail: [Ihre Support-Email]
- 📱 Telefon: [Ihre Telefonnummer]
- 🐛 Issues: [GitHub Issues](https://github.com/kovacc13/KI-KMU-Intro-plus-diktier1/issues)

---

## 🗓️ Changelog

### Version 1.1 (2024-11-24)
- ✨ Preisverlauf-Diagramm (30 Tage)
- ⏰ Tägliche automatische Updates um 6:30 Uhr
- 📊 Statistiken (Durchschnitt, Max, Min)
- 💾 LocalStorage für Datenpersistenz
- ⏱️ Live-Countdown Timer

### Version 1.0 (2024-11-24)
- 🎉 Initiale Version
- ⛽ Dieselpreis-Abfrage für Kalsdorf
- 📋 Tankstellenliste
- 📊 Zuschlagsberechnung nach Poscharnegg-Tabelle

---

**Entwickelt mit ❤️ für effiziente Transporttarif-Verwaltung**
