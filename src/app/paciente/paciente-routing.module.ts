import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteEmergenciaRegistradoComponent } from './components/paciente-emergencia-registrado/paciente-emergencia-registrado.component';
import { PacienteRegistradoComponent } from './components/paciente-registrado/paciente-registrado.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteRegistradoComponent,
  },
  {
    path: 'registrar',
    component: RegistrarPacienteComponent,
  },
  {
    path: 'emergencia',
    component: PacienteEmergenciaRegistradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
