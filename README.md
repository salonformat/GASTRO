# GASTRO — SALONFORMAT · L’art du service

Interaktive Grundlagenfortbildung für den gehobenen Restaurantservice auf Deutsch, Englisch und Französisch. GASTRO ist nur der interne Projekt- und Repositoryname.

## Enthalten

- 20 Lerneinheiten mit kurzen Erklärungen, Entscheidungsfragen und begründetem Feedback.
- 60 konkrete Praxisaufgaben im Restaurant, jeweils dreisprachig.
- Geschmackslabor mit sechs Produkten, zwölf Zubereitungen und Wein- sowie alkoholfreien Begleitungen.
- Fünf Aromafamilien mit alltagstauglichen Formulierungsbeispielen.
- Vier Servicegespräche mit Entscheidungen und Rückmeldung.
- Privates Notizbuch mit Export und rückgängig machbarem Löschen.
- Fortschritt, Antworten und Aufgaben lokal gespeichert; kein Mitarbeitermonitoring.
- Eigene SVG-Linienzeichnungen und lokal eingebundene OFL-Schriften.

## Lokal starten

Keine Installation nötig. Im Projektverzeichnis `python3 -m http.server 4173 --directory dist` starten und http://localhost:4173 öffnen.

## Struktur

- `dist/content.js`: Lehrtexte, Quellen, Grundübersetzungen.
- `dist/lab.js`: Pairings, Aromaübungen und Gesprächssituationen.
- `dist/missions.js`: Praxisaufgaben und Abschlusslogik.
- `dist/app.js`: Navigation, Darstellung, Notizen und lokaler Zustand.
- `dist/styles.css`, `dist/assets`: Gestaltung, Zeichnungen und Schriften.
- `docs/SOURCES-AND-RIGHTS.md`: Quellen, Lizenzen und fachliche Grenzen.

## Didaktik

Lesen → digital entscheiden → drei konkrete Schritte im Restaurant üben → reflektieren → abschließen. Ein Abschluss ist eine Selbstauskunft, keine Qualifikation oder betriebliche Freigabe. Die Aufgaben verteilen sich über die ersten Arbeitswochen. Fortschritt bleibt beim Sprachwechsel erhalten. Die Reihenfolge ist empfohlen, nicht gesperrt.

Für einen betrieblichen Pilotbetrieb sollen Küche und Serviceleiter die Inhalte und Hausabläufe prüfen. Es gibt keine Konten, zentrale Datenspeicherung oder automatische Zertifikate. Browserdaten gehen beim Löschen des Website-Speichers verloren; Notizen können exportiert werden.
