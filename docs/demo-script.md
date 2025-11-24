# 🎥 Demo-Video-Skript: Diesel-Preischecker

**Zielgruppe**: Josef Poscharnegg GmbH (Kunde)
**Videolänge**: 5-7 Minuten
**Format**: Bildschirmaufnahme mit Voice-Over
**Tools**: OBS Studio, Loom, oder Zoom Recording

---

## 🎬 Vorbereitung vor Aufnahme

### Technisches Setup
- [ ] Browser geöffnet (Chrome empfohlen)
- [ ] `diesel-checker.html` im Tab geöffnet
- [ ] Seite einmal aktualisiert (damit Daten geladen sind)
- [ ] Bildschirmauflösung: 1920x1080 oder 1280x720
- [ ] Mikrofon getestet
- [ ] Hintergrundgeräusche minimiert

### Optional: Mock-Daten
Falls API nicht funktioniert, bereiten Sie Beispiel-Screenshots vor.

---

## 📝 Skript

### **SZENE 1: Intro & Titel (0:00 - 0:20)**

#### 🎥 Was zeigen:
- Öffnen Sie den Browser
- Zeigen Sie kurz die Datei `diesel-checker.html` im Dateisystem

#### 🎤 Was sagen:
> "Hallo und herzlich willkommen! In diesem Video zeige ich Ihnen den neuen **Diesel-Preischecker** für Kalsdorf bei Graz."
>
> "Dieses Tool wurde speziell für die Josef Poscharnegg GmbH entwickelt und automatisiert die tägliche Preisabfrage und Zuschlagsberechnung nach Ihrer Dieselfloater-Tabelle."
>
> "Lassen Sie uns direkt hineinspringen!"

#### ⏱️ Timing: 20 Sekunden

---

### **SZENE 2: Erste Ansicht & Hauptfunktionen (0:20 - 1:30)**

#### 🎥 Was zeigen:
- Laden Sie die Seite (Ladeanimation zeigen)
- Warten Sie, bis Daten geladen sind
- Zeigen Sie langsam von oben nach unten:
  - Titel "Diesel-Preischecker"
  - Medianpreis Kalsdorf (große Zahl)
  - Österreich Median
  - Zuschlag-Anzeige

#### 🎤 Was sagen:
> "Hier sehen wir die Hauptansicht der Anwendung. Beim Öffnen werden automatisch die aktuellen Dieselpreise abgerufen."
>
> *[Zeigen Sie auf Medianpreis]*
> "Der **Medianpreis für Kalsdorf** beträgt aktuell [X,XXX Euro] pro Liter. Dieser Wert wird berechnet aus allen Tankstellen im Umkreis von 5 Kilometern um Kalsdorf."
>
> *[Zeigen Sie auf Zuschlag]*
> "Und hier - das ist der Kern der Anwendung - sehen Sie sofort den **berechneten Transporttarif-Zuschlag**: **[X Prozent]**."
>
> "Dieser Wert wird vollautomatisch aus Ihrer Dieselfloater-Tabelle ermittelt. Kein manuelles Nachschlagen mehr nötig!"

#### ⏱️ Timing: 70 Sekunden (insgesamt 1:30)

---

### **SZENE 3: Details & Informationen (1:30 - 2:15)**

#### 🎥 Was zeigen:
- Scrollen Sie leicht nach unten
- Zeigen Sie "Anzahl Tankstellen"
- Zeigen Sie "Letzte Aktualisierung"
- Zeigen Sie Auto-Update Countdown

#### 🎤 Was sagen:
> "Schauen wir uns die Details an."
>
> *[Zeigen auf Tankstellen-Anzahl]*
> "Aktuell fließen **[X] Tankstellen** in die Berechnung ein. Das garantiert einen repräsentativen Medianpreis für die Region."
>
> *[Zeigen auf Zeitstempel]*
> "Hier sehen Sie genau, wann die Daten zuletzt aktualisiert wurden: **[Datum und Uhrzeit]**."
>
> *[Zeigen auf Countdown]*
> "Und das Beste: Die Anwendung aktualisiert sich **jeden Tag automatisch um 6:30 Uhr morgens**. Der Countdown zeigt Ihnen, wann die nächste Aktualisierung stattfindet. Sie müssen nichts tun - beim Arbeitsbeginn sind die Preise bereits aktuell!"

#### ⏱️ Timing: 45 Sekunden (insgesamt 2:15)

---

### **SZENE 4: Manuelles Update (2:15 - 2:45)**

#### 🎥 Was zeigen:
- Klicken Sie auf "Preise aktualisieren" Button
- Zeigen Sie Ladeanimation ("Lade Preisdaten...")
- Warten Sie, bis neue Daten geladen sind
- Zeigen Sie aktualisierte Uhrzeit

#### 🎤 Was sagen:
> "Natürlich können Sie die Preise auch jederzeit manuell aktualisieren."
>
> *[Klicken Sie auf Button]*
> "Ein Klick auf diesen Button..."
>
> *[Warten auf Ladevorgang]*
> "...und die Anwendung holt sich die neuesten Daten direkt von der offiziellen E-Control API des Bundesministeriums."
>
> *[Neue Daten anzeigen]*
> "Fertig! Die Daten sind aktualisiert. Das dauert weniger als eine Sekunde."

#### ⏱️ Timing: 30 Sekunden (insgesamt 2:45)

---

### **SZENE 5: Preisverlauf-Diagramm (2:45 - 4:00)**

#### 🎥 Was zeigen:
- Scrollen Sie zum Diagramm
- Fahren Sie mit der Maus über verschiedene Datenpunkte (Tooltips zeigen)
- Zeigen Sie die Statistiken darunter:
  - Durchschnitt
  - Höchstpreis
  - Tiefstpreis

#### 🎤 Was sagen:
> "Jetzt kommen wir zu einem besonders spannenden Feature: dem **Preisverlauf-Diagramm**."
>
> *[Scrollen zum Chart]*
> "Hier sehen Sie die Entwicklung der letzten 30 Tage. Die **cyan-blaue Linie** zeigt den Dieselpreis in Euro pro Liter, und die **orange Linie** zeigt den entsprechenden Zuschlag in Prozent."
>
> *[Fahren Sie über Datenpunkte]*
> "Das Diagramm ist interaktiv. Wenn ich mit der Maus über einen Datenpunkt fahre, sehe ich die genauen Werte für diesen Tag:"
>
> *[Zeigen Sie Tooltip]*
> "Am [Datum]: Preis [X,XXX Euro], Zuschlag [Y Prozent]."
>
> *[Scrollen zu Statistiken]*
> "Und hier unten sehen Sie auf einen Blick die wichtigsten Kennzahlen:"
> - "**Durchschnittspreis** der letzten 30 Tage: [X,XXX Euro]"
> - "**Höchstpreis** in diesem Zeitraum: [X,XXX Euro]"
> - "**Tiefstpreis**: [X,XXX Euro]"
>
> "Das ist perfekt für Ihre Monatsabschlüsse und Budgetplanung!"

#### ⏱️ Timing: 75 Sekunden (insgesamt 4:00)

---

### **SZENE 6: Tankstellenliste (4:00 - 4:40)**

#### 🎥 Was zeigen:
- Scrollen Sie zur Tankstellenliste
- Zeigen Sie 2-3 Tankstellen im Detail
- Highlighten Sie:
  - Namen
  - Adressen
  - Entfernungen
  - Einzelpreise

#### 🎤 Was sagen:
> "Vollständige Transparenz ist wichtig. Deshalb zeigt die Anwendung alle Tankstellen, die in die Median-Berechnung einfließen."
>
> *[Zeigen auf erste Tankstelle]*
> "Hier zum Beispiel: **[Tankstellen-Name]** in **[Adresse]**, nur **[X,X] Kilometer** entfernt, mit einem aktuellen Dieselpreis von **[X,XXX Euro]**."
>
> *[Scrollen durch Liste]*
> "Sie sehen genau, welche Preise berücksichtigt werden. Das schafft Vertrauen und Nachvollziehbarkeit - besonders wichtig, wenn Sie diese Zuschläge gegenüber Kunden kommunizieren müssen."

#### ⏱️ Timing: 40 Sekunden (insgesamt 4:40)

---

### **SZENE 7: Dieselfloater-Tabelle (4:40 - 5:20)**

#### 🎥 Was zeigen:
- Scrollen Sie zur Zuschlagstabelle
- Zeigen Sie die hervorgehobene Zeile (cyan hinterlegt)
- Scrollen Sie langsam durch die Tabelle

#### 🎤 Was sagen:
> "Und hier ist Ihre bekannte **Dieselfloater-Tabelle** - jetzt digital und immer griffbereit."
>
> *[Zeigen auf hervorgehobene Zeile]*
> "Sehen Sie? Die **aktuelle Preisstufe ist automatisch hervorgehoben**. Bei einem Preis von [X,XXX Euro] befinden wir uns in dieser Zeile, also [Y Prozent] Zuschlag."
>
> *[Scrollen durch Tabelle]*
> "Die Tabelle zeigt alle 26 Stufen von 0% bis 25%, in 5-Cent-Schritten. Sie ist gültig ab dem 14. März 2022 und wird bei jeder Preisänderung automatisch neu ausgewertet."

#### ⏱️ Timing: 40 Sekunden (insgesamt 5:20)

---

### **SZENE 8: Abschluss & Zusammenfassung (5:20 - 6:00)**

#### 🎥 Was zeigen:
- Scrollen Sie zurück nach oben zum Hauptbereich
- Zeigen Sie nochmal kurz alle Hauptelemente

#### 🎤 Was sagen:
> "Lassen Sie mich kurz zusammenfassen, was Sie mit diesem Tool bekommen:"
>
> "**Erstens**: Vollautomatische Preisabfrage jeden Morgen um 6:30 Uhr."
>
> "**Zweitens**: Sofortige, fehlerfreie Zuschlagsberechnung nach Ihrer Tabelle."
>
> "**Drittens**: 30 Tage Preisverlauf mit aussagekräftigen Statistiken."
>
> "**Und viertens**: Vollständige Transparenz über alle einbezogenen Tankstellen."
>
> "Das Beste: Die Anwendung läuft komplett im Browser, keine Installation nötig. Sie können sie auf dem Desktop, Tablet oder Smartphone nutzen."

#### ⏱️ Timing: 40 Sekunden (insgesamt 6:00)

---

### **SZENE 9: Call-to-Action & Outro (6:00 - 6:30)**

#### 🎥 Was zeigen:
- Zeigen Sie kurz die URL oder den Dateinamen
- Optional: Zeigen Sie README oder Dokumentation

#### 🎤 Was sagen:
> "Die Anwendung ist einsatzbereit und wartet auf Ihren produktiven Einsatz."
>
> "Sie finden die vollständige Dokumentation in der README-Datei, inklusive Anleitungen für verschiedene Hosting-Optionen."
>
> "Wenn Sie Fragen haben oder Anpassungen wünschen, melden Sie sich gerne!"
>
> "Vielen Dank fürs Zuschauen, und viel Erfolg mit Ihrem neuen Diesel-Preischecker!"
>
> *[Optional: Fade zu schwarzem Bildschirm mit Text]*
> **"Diesel-Preischecker | Josef Poscharnegg GmbH | 2024"**

#### ⏱️ Timing: 30 Sekunden (insgesamt 6:30)

---

## 🎬 Aufnahme-Tipps

### Vor der Aufnahme
1. **Skript mehrmals laut vorlesen** - üben Sie den natürlichen Tonfall
2. **Browser-Tabs schließen** - nur die Demo-Seite öffnen
3. **Benachrichtigungen deaktivieren** - keine Pop-ups während der Aufnahme
4. **Cursor-Highlighting aktivieren** (optional) - OBS Studio hat Plugins dafür

### Während der Aufnahme
1. **Langsam sprechen** - Kunden brauchen Zeit zum Verstehen
2. **Pausen machen** - nach jedem Hauptpunkt 2-3 Sekunden Stille
3. **Cursor bewusst einsetzen** - zeigen Sie auf wichtige Elemente
4. **Zoom nutzen** (optional) - für kleine Details näher heranzoomen

### Nach der Aufnahme
1. **Video schneiden** - Versprecher oder lange Pausen entfernen
2. **Intro/Outro hinzufügen** - professioneller Anfang/Ende
3. **Untertitel** (optional) - für Barrierefreiheit
4. **Qualität prüfen** - Audio klar? Video scharf?

---

## 🎨 Video-Produktion Checkliste

### Software-Empfehlungen

#### Für Aufnahme
- **OBS Studio** (kostenlos) - https://obsproject.com/
- **Loom** (kostenlos für 5 Min.) - https://www.loom.com/
- **Zoom** (falls verfügbar) - Record Screen Sharing

#### Für Schnitt
- **DaVinci Resolve** (kostenlos) - https://www.blackmagicdesign.com/
- **Shotcut** (kostenlos) - https://shotcut.org/
- **Camtasia** (kostenpflichtig) - https://www.techsmith.com/

#### Für Untertitel
- **YouTube Auto-Generate** (nach Upload)
- **Subtitle Edit** (kostenlos) - https://www.nikse.dk/subtitleedit

---

## 📤 Export-Einstellungen

### Für YouTube/Vimeo
- Format: MP4
- Codec: H.264
- Auflösung: 1920x1080 (Full HD)
- Framerate: 30 fps
- Bitrate: 8-12 Mbps

### Für Email-Versand
- Format: MP4
- Codec: H.264
- Auflösung: 1280x720 (HD)
- Framerate: 30 fps
- Bitrate: 3-5 Mbps
- Dateigröße: < 50 MB

### Für Website-Einbettung
- Format: MP4 + WebM
- Codec: H.264 / VP9
- Responsive Player (z.B. video.js)

---

## 📊 Alternative: Kurz-Version (2-3 Min.)

Falls 6-7 Minuten zu lang sind, hier eine gekürzte Version:

### **KURZSKRIPT (2:30 Min.)**

1. **Intro** (0:00-0:15): "Diesel-Preischecker - Was ist das?"
2. **Hauptfunktion** (0:15-0:45): Medianpreis & Zuschlag zeigen
3. **Preisverlauf** (0:45-1:30): Diagramm kurz erklären
4. **Auto-Update** (1:30-1:50): Countdown zeigen
5. **Zusammenfassung** (1:50-2:20): Vorteile aufzählen
6. **Outro** (2:20-2:30): Call-to-Action

---

## 🎤 Voice-Over Alternativen

Falls Sie nicht selbst sprechen möchten:

### Text-to-Speech Dienste
- **ElevenLabs** (sehr natürlich) - https://elevenlabs.io/
- **Play.ht** (Deutsch verfügbar) - https://play.ht/
- **Amazon Polly** (AWS) - https://aws.amazon.com/polly/

### Professionelle Sprecher
- **Fiverr** (ab 5 €) - https://www.fiverr.com/
- **Upwork** - https://www.upwork.com/

---

## 📝 Skript-Variationen

### Für technische Zielgruppe
- Mehr Details zu API
- Zeigen Sie Developer Tools (F12)
- Erklären Sie LocalStorage

### Für Management
- Fokus auf ROI & Zeitersparnis
- Business Case betonen
- Weniger technische Details

### Für Endnutzer
- Schritt-für-Schritt ganz langsam
- "Wie öffne ich die Anwendung?"
- "Was klicke ich wo?"

---

## ✅ Qualitätskontrolle

### Vor Veröffentlichung prüfen:

- [ ] Audio klar und verständlich?
- [ ] Video scharf und flüssig?
- [ ] Alle Features gezeigt?
- [ ] Kein sensible Daten sichtbar?
- [ ] Intro/Outro vorhanden?
- [ ] Länge passt (nicht zu lang)?
- [ ] Call-to-Action klar?
- [ ] Kontaktdaten korrekt?

---

## 🚀 Distribution

### Wo das Video teilen:

1. **YouTube** (unlisted oder public)
   - Gute Qualität
   - Einfaches Teilen per Link
   - Einbettbar auf Website

2. **Vimeo** (professioneller)
   - Keine Werbung
   - Passwortschutz möglich
   - Höhere Qualität

3. **Loom** (schnellste Lösung)
   - Direkt nach Aufnahme teilbar
   - Link zum Kunden senden
   - Limitierung: 5 Min. kostenlos

4. **Google Drive / Dropbox**
   - Direkter Download
   - Keine Kompression
   - Gut für interne Nutzung

---

**Viel Erfolg mit Ihrer Video-Demo! 🎬**

---

## 📋 Anhang: Sprechtext als Teleprompter

Kopieren Sie diesen Text in einen Teleprompter (z.B. https://cueprompter.com/):

```
Hallo und herzlich willkommen!
In diesem Video zeige ich Ihnen den neuen Diesel-Preischecker für Kalsdorf bei Graz.
Dieses Tool wurde speziell für die Josef Poscharnegg GmbH entwickelt.
Es automatisiert die tägliche Preisabfrage und Zuschlagsberechnung.

[Pause 2 Sekunden]

Hier sehen wir die Hauptansicht der Anwendung.
Beim Öffnen werden automatisch die aktuellen Dieselpreise abgerufen.

[Zeigen auf Bildschirm]

Der Medianpreis für Kalsdorf beträgt aktuell X Euro pro Liter...

[Weiter wie oben im Skript...]
```

---

**Ende des Demo-Video-Skripts**
