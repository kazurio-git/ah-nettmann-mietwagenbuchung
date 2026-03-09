import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-mietwagenbuchung',
  imports: [
    FormsModule,
    MatButton,
  ],
  templateUrl: './mietwagenbuchung.html',
  styleUrl: './mietwagenbuchung.css',
})
export class Mietwagenbuchung {
}
