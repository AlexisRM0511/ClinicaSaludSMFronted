import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [DoctorRegistradoComponent, RegistrarDoctorComponent, SortPipe],
  imports: [CommonModule, DoctorRoutingModule, ReactiveFormsModule],
})
export class DoctorModule {}
