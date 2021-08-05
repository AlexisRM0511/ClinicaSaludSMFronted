import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { PacienteRegistradoComponent } from './components/paciente-registrado/paciente-registrado.component';
import { PacienteEmergenciaRegistradoComponent } from './components/paciente-emergencia-registrado/paciente-emergencia-registrado.component';
import { PanelPacienteComponent } from './components/panel-paciente/panel-paciente.component';

import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrarPacienteComponent,
    PacienteRegistradoComponent,
    PacienteEmergenciaRegistradoComponent,
    PanelPacienteComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    PacienteRoutingModule,
  ],
})
export class PacienteModule { }
