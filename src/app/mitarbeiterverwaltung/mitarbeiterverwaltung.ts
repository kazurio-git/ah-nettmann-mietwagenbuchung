import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

export interface Mitarbeiter {
  id: string;
  nachname: string;
  passwort: string;
  passwortSichtbar: boolean;
}

@Component({
  selector: 'app-mitarbeiterverwaltung',
  imports: [FormsModule, CommonModule],
  templateUrl: './mitarbeiterverwaltung.html',
  styleUrl: './mitarbeiterverwaltung.css',
})
export class Mitarbeiterverwaltung {
  mitarbeiterListe: Mitarbeiter[] = [
    {id: '004', nachname: 'Müller', passwort: 'abc12', passwortSichtbar: false},
    {id: '005', nachname: 'Nettmann', passwort: 'xyz99', passwortSichtbar: false},
    {id: '006', nachname: 'Schmidt', passwort: 'pass1', passwortSichtbar: false},
    {id: '007', nachname: 'Schröder', passwort: 'qwert', passwortSichtbar: false},
    {id: '008', nachname: 'Thorsten', passwort: 'hello', passwortSichtbar: false},
    {id: '009', nachname: 'Weber', passwort: 'web42', passwortSichtbar: false},
  ];
  dialogSichtbar = false;
  dialogModus: 'neu' | 'bearbeiten' = 'neu';
  ausgewaehlterMitarbeiter: Mitarbeiter | null = null;
  formDaten = {id: '', nachname: '', passwort: ''};
  private http = inject(HttpClient);

  dialogOeffnenNeu(): void {
    this.dialogModus = 'neu';
    this.ausgewaehlterMitarbeiter = null;
    this.formDaten = {id: '', nachname: '', passwort: ''};
    this.dialogSichtbar = true;
  }

  mitarbeiterLoeschen(ma: Mitarbeiter): void {
    this.mitarbeiterListe = this.mitarbeiterListe.filter(m => m.id !== ma.id);
  }

  dialogOeffnenBearbeiten(ma: Mitarbeiter): void {
    this.dialogModus = 'bearbeiten';
    this.ausgewaehlterMitarbeiter = ma;
    this.formDaten = {id: ma.id, nachname: ma.nachname, passwort: ma.passwort};
    this.dialogSichtbar = true;
  }

  dialogSchliessen(): void {
    this.dialogSichtbar = false;
  }

  onSubmit(): void {
    const url = '/api/mitarbeiter';
    const request$ = this.dialogModus === 'neu'
      ? this.http.post(url, this.formDaten)
      : this.http.put(`${url}/${this.formDaten.id}`, this.formDaten);

    request$.subscribe({
      next: () => {
        if (this.dialogModus === 'neu') {
          this.mitarbeiterListe.push({
            id: this.formDaten.id,
            nachname: this.formDaten.nachname,
            passwort: this.formDaten.passwort,
            passwortSichtbar: false,
          });
        } else if (this.ausgewaehlterMitarbeiter) {
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
