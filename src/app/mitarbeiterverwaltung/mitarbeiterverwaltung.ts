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


}
