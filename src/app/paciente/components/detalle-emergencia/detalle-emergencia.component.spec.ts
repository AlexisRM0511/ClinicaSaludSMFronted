import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmergenciaComponent } from './detalle-emergencia.component';

describe('DetalleEmergenciaComponent', () => {
  let component: DetalleEmergenciaComponent;
  let fixture: ComponentFixture<DetalleEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
