import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwListaReservaComponent } from './cw-lista-reserva.component';

describe('CwListaReservaComponent', () => {
  let component: CwListaReservaComponent;
  let fixture: ComponentFixture<CwListaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwListaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwListaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
