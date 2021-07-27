import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEmergenciaRegistradoComponent } from './paciente-emergencia-registrado.component';

describe('PacienteEmergenciaRegistradoComponent', () => {
  let component: PacienteEmergenciaRegistradoComponent;
  let fixture: ComponentFixture<PacienteEmergenciaRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteEmergenciaRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEmergenciaRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
