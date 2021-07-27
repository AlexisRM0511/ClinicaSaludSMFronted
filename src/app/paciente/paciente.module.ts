import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { PacienteRegistradoComponent } from './components/paciente-registrado/paciente-registrado.component';
import { PacienteEmergenciaRegistradoComponent } from './components/paciente-emergencia-registrado/paciente-emergencia-registrado.component';


@NgModule({
  declarations: [
    RegistrarPacienteComponent,
    PacienteRegistradoComponent,
    PacienteEmergenciaRegistradoComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
