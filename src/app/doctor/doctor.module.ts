import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';


@NgModule({
  declarations: [
    RegistrarDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
