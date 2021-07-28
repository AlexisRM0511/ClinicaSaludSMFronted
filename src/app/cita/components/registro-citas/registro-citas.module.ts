import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarDoctorComponent } from 'src/app/doctor/components/registrar-doctor/registrar-doctor.component';
import { RegistroCitasRoutingModule } from './registro-citas-routing.module';


@NgModule({
  declarations: [RegistrarDoctorComponent],
  imports: [
    CommonModule,
    RegistroCitasRoutingModule
  ]
})
export class RegistroCitasModule { }
