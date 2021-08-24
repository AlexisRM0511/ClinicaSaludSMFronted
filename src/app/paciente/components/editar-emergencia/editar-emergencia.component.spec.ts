import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmergenciaComponent } from './editar-emergencia.component';

describe('EditarEmergenciaComponent', () => {
  let component: EditarEmergenciaComponent;
  let fixture: ComponentFixture<EditarEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
