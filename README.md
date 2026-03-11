# AH-Nettmann-Prototyp

![Angular](https://img.shields.io/badge/Angular-v21.2-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.9-3178C6?logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-v21.2-9C27B0?logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/Lizenz-Privat-lightgrey)

Prototyp einer Webanwendung für das Unternehmen **Nettmann**, entwickelt mit Angular 21 und Angular Material. Die Anwendung umfasst eine Homepage, eine Mietwagenbuchung sowie eine Mitarbeiterverwaltung.

---

## Inhaltsverzeichnis

- [Voraussetzungen](#voraussetzungen)
- [Angular installieren](#angular-installieren)
- [Projekt installieren & starten](#projekt-installieren--starten)
- [Projektstruktur](#projektstruktur)
- [Verfügbare Skripte](#verfügbare-skripte)
- [Technologie-Stack](#technologie-stack)
- [Weiterführende Ressourcen](#weiterführende-ressourcen)

---

## Voraussetzungen

Stelle sicher, dass folgende Software auf deinem System installiert ist:

| Software | Mindestversion  | Download                            |
|----------|-----------------|-------------------------------------|
| Node.js  | 18.x oder höher | [nodejs.org](https://nodejs.org/)   |
| npm      | 9.x oder höher  | Wird mit Node.js mitgeliefert       |
| Git      | beliebig        | [git-scm.com](https://git-scm.com/) |

Versionen prüfen:

```bash
node --version
npm --version
```

---

## Angular installieren

Falls Angular CLI noch nicht installiert ist, kann es global über npm eingerichtet werden:

```bash
npm install -g @angular/cli
```

Nach der Installation die erfolgreiche Einrichtung verifizieren:

```bash
ng version
```

Die Ausgabe sollte die Angular CLI Version sowie weitere Paketversionen anzeigen.

> **Hinweis:** Dieses Projekt verwendet Angular CLI **v21.2.1**. Bei einer abweichenden globalen Version kann es zu Kompatibilitätsproblemen kommen. In diesem Fall empfiehlt sich die Verwendung von `npx ng` statt `ng`.

---

## Projekt installieren & starten

### 1. Repository klonen

```bash
git clone <repository-url>
cd AH-Nettmann-Prototyp
```

### 2. Abhängigkeiten installieren

```bash
npm install
```

### 3. Entwicklungsserver starten

```bash
npm start
```

Der Entwicklungsserver ist anschließend unter [`http://localhost:4200/`](http://localhost:4200/) erreichbar. Die Anwendung lädt automatisch neu, sobald Quelldateien geändert werden.

---

## Projektstruktur

```
AH-Nettmann-Prototyp/
├── public/                     # Statische Assets (Favicon, Bilder)
│   └── assets/
│       └── Logo-Nettmann.png
├── src/
│   ├── index.html              # Einstiegspunkt der Anwendung
│   ├── main.ts                 # Bootstrap der Angular-Anwendung
│   ├── styles.css              # Globale Styles
│   ├── material-theme.scss     # Angular Material Theme-Konfiguration
│   └── app/
│       ├── app.ts              # Root-Komponente
│       ├── app.routes.ts       # Routing-Konfiguration
│       ├── app.config.ts       # Anwendungskonfiguration
│       ├── homepage/           # Homepage-Komponente
│       ├── mietwagenbuchung/   # Mietwagenbuchungs-Formular
│       └── mitarbeiterverwaltung/ # Mitarbeiterverwaltungs-Formular
├── angular.json                # Angular CLI Konfiguration
├── package.json                # Projektabhängigkeiten & Skripte
└── tsconfig.json               # TypeScript-Konfiguration
```

---

## Verfügbare Skripte

| Befehl          | Beschreibung                                                        |
|-----------------|---------------------------------------------------------------------|
| `npm start`     | Startet den Entwicklungsserver auf Port 4200                        |
| `npm run build` | Erstellt einen optimierten Produktions-Build im `dist/`-Verzeichnis |
| `npm run watch` | Erstellt den Build im Watch-Modus (Development-Konfiguration)       |
| `npm test`      | Führt Unit-Tests mit [Vitest](https://vitest.dev/) aus              |

### Code-Generierung

Neue Komponenten und andere Angular-Bausteine lassen sich über die Angular CLI generieren:

```bash
ng generate component komponenten-name
```

Eine vollständige Übersicht aller verfügbaren Schematics:

```bash
ng generate --help
```

---

## Technologie-Stack

| Technologie      | Version | Verwendungszweck            |
|------------------|---------|-----------------------------|
| Angular          | ^21.2.0 | Frontend-Framework          |
| Angular Material | ^21.2.1 | UI-Komponentenbibliothek    |
| Angular CDK      | ^21.2.1 | Komponentenentwicklungs-Kit |
| TailwindCSS      | ^4.1.12 | Utility-First CSS-Framework |
| TypeScript       | ~5.9.2  | Typsicheres JavaScript      |
| RxJS             | ~7.8.0  | Reaktive Programmierung     |
| Vitest           | ^4.0.8  | Unit-Test-Framework         |

---

## Weiterführende Ressourcen

- [Angular Dokumentation](https://angular.dev/)
- [Angular CLI Referenz](https://angular.dev/tools/cli)
- [Angular Material Komponenten](https://material.angular.io/components/categories)
- [TailwindCSS Dokumentation](https://tailwindcss.com/docs)
- [Vitest Dokumentation](https://vitest.dev/)
