import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-mietwagenbuchung',
  imports: [FormsModule, CommonModule],
  templateUrl: './mietwagenbuchung.html',
  styleUrl: './mietwagenbuchung.css',
})
export class Mietwagenbuchung {
  submitted = false;
  datumFehler = false;

  /** Heutiges Datum im Format YYYY-MM-DD für das min-Attribut */
  todayStr = new Date().toISOString().split('T')[0];

  model = {
    kundennummer: '',
    datumVon: '',
    datumBis: '',
    fahrzeugart: '',
    abholstation: 'AN',
    zusatzNavi: false,
    zusatzKlimaanlage: true,
    zusatzStandheizung: false,
  };

  onDatumChange() {
    if (this.model.datumVon && this.model.datumBis) {
      this.datumFehler = this.model.datumBis < this.model.datumVon;
    } else {
      this.datumFehler = false;
    }
  }

  onSubmit(form: any) {
    this.submitted = true;
    this.onDatumChange();
    if (form.invalid || this.datumFehler) return;
    console.log('Buchung:', this.model);
  }

  onReset(form: any) {
    this.submitted = false;
    this.datumFehler = false;
    form.resetForm({
      kundennummer: '',
      datumVon: '',
      datumBis: '',
      fahrzeugart: '',
      abholstation: 'AN',
      zusatzNavi: false,
      zusatzKlimaanlage: true,
      zusatzStandheizung: false,
    });
  }
}
