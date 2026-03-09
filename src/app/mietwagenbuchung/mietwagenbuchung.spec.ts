import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mietwagenbuchung } from './mietwagenbuchung';

describe('Mietwagenbuchung', () => {
  let component: Mietwagenbuchung;
  let fixture: ComponentFixture<Mietwagenbuchung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mietwagenbuchung],
    }).compileComponents();

    fixture = TestBed.createComponent(Mietwagenbuchung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
