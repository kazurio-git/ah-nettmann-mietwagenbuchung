import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

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

  editIndex: number | null = null;
  editModel: { nachname: string; passwort: string } = {nachname: '', passwort: ''};

  showAddDialog = false;
  newModel: { nachname: string; passwort: string } = {nachname: '', passwort: ''};

  togglePasswort(ma: Mitarbeiter): void {
    ma.passwortSichtbar = !ma.passwortSichtbar;
  }

  startEdit(index: number): void {
    this.editIndex = index;
    const ma = this.mitarbeiterListe[index];
    this.editModel = {nachname: ma.nachname, passwort: ma.passwort};
  }

  saveEdit(index: number): void {
    if (!this.editModel.nachname.trim() || !this.editModel.passwort.trim()) return;
    this.mitarbeiterListe[index].nachname = this.editModel.nachname.trim();
    this.mitarbeiterListe[index].passwort = this.editModel.passwort.trim();
    this.editIndex = null;
  }

  cancelEdit(): void {
    this.editIndex = null;
  }

  deleteMitarbeiter(index: number): void {
    this.mitarbeiterListe.splice(index, 1);
  }

  openAddDialog(): void {
    this.newModel = {nachname: '', passwort: ''};
    this.showAddDialog = true;
  }

  addMitarbeiter(): void {
    if (!this.newModel.nachname.trim() || !this.newModel.passwort.trim()) return;
    const maxId = this.mitarbeiterListe.reduce(
      (max, ma) => Math.max(max, parseInt(ma.id, 10)),
      0
    );
    const newId = String(maxId + 1).padStart(3, '0');
    this.mitarbeiterListe.push({
      id: newId,
      nachname: this.newModel.nachname.trim(),
      passwort: this.newModel.passwort.trim(),
      passwortSichtbar: false,
    });
    this.showAddDialog = false;
  }

  cancelAdd(): void {
    this.showAddDialog = false;
  }
}
