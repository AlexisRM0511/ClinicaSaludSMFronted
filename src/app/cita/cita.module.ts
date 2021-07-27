import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';


@NgModule({
  declarations: [
    RegistroCitasComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule
  ]
})
export class CitaModule { }
