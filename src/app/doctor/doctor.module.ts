import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';

@NgModule({
  declarations: [DoctorRegistradoComponent, RegistrarDoctorComponent],
  imports: [CommonModule, DoctorRoutingModule],
})
export class DoctorModule {}
