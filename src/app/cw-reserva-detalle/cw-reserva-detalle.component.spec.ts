import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwReservaDetalleComponent } from './cw-reserva-detalle.component';

describe('CwReservaDetalleComponent', () => {
  let component: CwReservaDetalleComponent;
  let fixture: ComponentFixture<CwReservaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwReservaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwReservaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
