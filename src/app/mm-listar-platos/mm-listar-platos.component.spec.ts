import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmListarPlatosComponent } from './mm-listar-platos.component';

describe('MmListarPlatosComponent', () => {
  let component: MmListarPlatosComponent;
  let fixture: ComponentFixture<MmListarPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmListarPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmListarPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
