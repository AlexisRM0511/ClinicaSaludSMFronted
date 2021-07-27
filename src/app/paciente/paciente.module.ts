import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';


@NgModule({
  declarations: [
    RegistrarPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
