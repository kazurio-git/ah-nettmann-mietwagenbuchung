import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mitarbeiterverwaltung } from './mitarbeiterverwaltung';

describe('Mitarbeiterverwaltung', () => {
  let component: Mitarbeiterverwaltung;
  let fixture: ComponentFixture<Mitarbeiterverwaltung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mitarbeiterverwaltung],
    }).compileComponents();

    fixture = TestBed.createComponent(Mitarbeiterverwaltung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
