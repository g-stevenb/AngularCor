import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwReservaLavadoComponent } from './cw-reserva-lavado.component';

describe('CwReservaLavadoComponent', () => {
  let component: CwReservaLavadoComponent;
  let fixture: ComponentFixture<CwReservaLavadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwReservaLavadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwReservaLavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
