import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';


@NgModule({
  declarations: [
    DoctorRegistradoComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
