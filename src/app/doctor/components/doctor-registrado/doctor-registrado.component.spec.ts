import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegistradoComponent } from './doctor-registrado.component';

describe('DoctorRegistradoComponent', () => {
  let component: DoctorRegistradoComponent;
  let fixture: ComponentFixture<DoctorRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
