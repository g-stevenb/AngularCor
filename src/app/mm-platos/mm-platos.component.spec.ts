import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPlatosComponent } from './mm-platos.component';

describe('MmPlatosComponent', () => {
  let component: MmPlatosComponent;
  let fixture: ComponentFixture<MmPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
