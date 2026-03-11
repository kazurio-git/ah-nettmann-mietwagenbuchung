import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

/** Datenmodell eines Mitarbeiters */
export interface Mitarbeiter {
  /** Eindeutige numerische ID (3–6 Stellen) */
  id: string;
  nachname: string;
  passwort: string;
  /** Steuert, ob das Passwort in der Tabelle im Klartext angezeigt wird */
  passwortSichtbar: boolean;
}

@Component({
  selector: 'app-mitarbeiterverwaltung',
  imports: [FormsModule, CommonModule],
  templateUrl: './mitarbeiterverwaltung.html',
  styleUrl: './mitarbeiterverwaltung.css',
})
export class Mitarbeiterverwaltung {

  /** Lokale Liste aller Mitarbeiter – wird beim Start mit Demo-Daten befüllt */
  mitarbeiterListe: Mitarbeiter[] = [
    {id: '004', nachname: 'Müller', passwort: 'abc12', passwortSichtbar: false},
    {id: '005', nachname: 'Nettmann', passwort: 'xyz99', passwortSichtbar: false},
    {id: '006', nachname: 'Schmidt', passwort: 'pass1', passwortSichtbar: false},
    {id: '007', nachname: 'Schröder', passwort: 'qwert', passwortSichtbar: false},
    {id: '008', nachname: 'Thorsten', passwort: 'hello', passwortSichtbar: false},
    {id: '009', nachname: 'Weber', passwort: 'web42', passwortSichtbar: false},
  ];

  /** Sichtbarkeit des Dialogs (true = Dialog geöffnet) */
  dialogSichtbar = false;

  /** Unterscheidet, ob ein neuer Mitarbeiter angelegt oder ein bestehender bearbeitet wird */
  dialogModus: 'neu' | 'bearbeiten' = 'neu';

  /** Referenz auf den aktuell bearbeiteten Mitarbeiter (null im "neu"-Modus) */
  ausgewaehlterMitarbeiter: Mitarbeiter | null = null;

  /** Zwischenspeicher für die aktuellen Formulareingaben */
  formDaten = {id: '', nachname: '', passwort: ''};

  /** Angular HttpClient für die REST-API-Kommunikation */
  private http = inject(HttpClient);

  /** Öffnet den Dialog im "neu"-Modus mit leerem Formular */
  dialogOeffnenNeu(): void {
    this.dialogModus = 'neu';
    this.ausgewaehlterMitarbeiter = null;
    this.formDaten = {id: '', nachname: '', passwort: ''};
    this.dialogSichtbar = true;
  }

  /** Entfernt den übergebenen Mitarbeiter aus der lokalen Liste */
  mitarbeiterLoeschen(ma: Mitarbeiter): void {
    this.mitarbeiterListe = this.mitarbeiterListe.filter(m => m.id !== ma.id);
  }

  /** Öffnet den Dialog im "bearbeiten"-Modus und befüllt das Formular mit den vorhandenen Daten */
  dialogOeffnenBearbeiten(ma: Mitarbeiter): void {
    this.dialogModus = 'bearbeiten';
    this.ausgewaehlterMitarbeiter = ma;
    this.formDaten = {id: ma.id, nachname: ma.nachname, passwort: ma.passwort};
    this.dialogSichtbar = true;
  }

  /** Schließt den Dialog ohne zu speichern */
  dialogSchliessen(): void {
    this.dialogSichtbar = false;
  }

  /**
   * Setzt alle Formularfelder auf leere Werte zurück und markiert das
   * Angular-Formular als unberührt (pristine/untouched), damit Fehlermeldungen
   * wieder verschwinden.
   * Im "bearbeiten"-Modus wird die gesperrte ID nach dem Reset wiederhergestellt.
   */
  formZuruecksetzen(form: NgForm): void {
    const modus = this.dialogModus;
    this.formDaten = {id: '', nachname: '', passwort: ''};
    form.resetForm();
    // ID-Feld ist im Bearbeitungsmodus deaktiviert und darf nicht gelöscht werden
    if (modus === 'bearbeiten' && this.ausgewaehlterMitarbeiter) {
      setTimeout(() => this.formDaten.id = this.ausgewaehlterMitarbeiter!.id);
    }
  }

  /**
   * Versendet die Formulardaten per HTTP POST (neu) oder PUT (bearbeiten) an die REST-API.
   * Bei Erfolg wird die lokale Liste aktualisiert und der Dialog geschlossen.
   */
  onSubmit(): void {
    const url = '/api/mitarbeiter';
    // Neuer Mitarbeiter → POST; bestehender Mitarbeiter → PUT mit ID in der URL
    const request$ = this.dialogModus === 'neu'
      ? this.http.post(url, this.formDaten)
      : this.http.put(`${url}/${this.formDaten.id}`, this.formDaten);

    request$.subscribe({
      next: () => {
        if (this.dialogModus === 'neu') {
          // Neuen Eintrag an die lokale Liste anhängen
          this.mitarbeiterListe.push({
            id: this.formDaten.id,
            nachname: this.formDaten.nachname,
            passwort: this.formDaten.passwort,
            passwortSichtbar: false,
          });
        } else if (this.ausgewaehlterMitarbeiter) {
          // Bestehenden Eintrag in der lokalen Liste aktualisieren
          this.ausgewaehlterMitarbeiter.nachname = this.formDaten.nachname;
          this.ausgewaehlterMitarbeiter.passwort = this.formDaten.passwort;
        }
        this.dialogSchliessen();
      },
      error: (err) => {
        console.error('Fehler beim Speichern:', err);
      },
    });
  }
}
