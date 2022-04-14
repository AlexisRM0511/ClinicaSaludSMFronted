import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDoctorComponent } from './detalle-doctor.component';

describe('DetalleDoctorComponent', () => {
  let component: DetalleDoctorComponent;
  let fixture: ComponentFixture<DetalleDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
