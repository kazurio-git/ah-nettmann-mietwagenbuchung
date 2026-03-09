import {Routes} from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Mietwagenbuchung} from './mietwagenbuchung/mietwagenbuchung';
import {Mitarbeiterverwaltung} from './mitarbeiterverwaltung/mitarbeiterverwaltung';

export const routes: Routes = [
  {path: '', component: Homepage},
  {path: 'mietwagenbuchung', component: Mietwagenbuchung},
  {path: 'mitarbeiterverwaltung', component: Mitarbeiterverwaltung},
];
