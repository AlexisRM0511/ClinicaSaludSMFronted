import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEmergenciaComponent } from './components/detalle-emergencia/detalle-emergencia.component';
import { EditarEmergenciaComponent } from './components/editar-emergencia/editar-emergencia.component';
import { PacienteDetalleComponent } from './components/paciente-detalle/paciente-detalle.component';
import { PacienteEditarComponent } from './components/paciente-editar/paciente-editar.component';
import { PacienteEmergenciaRegistradoComponent } from './components/paciente-emergencia-registrado/paciente-emergencia-registrado.component';
import { PacienteRegistradoComponent } from './components/paciente-registrado/paciente-registrado.component';
import { PanelPacienteComponent } from './components/panel-paciente/panel-paciente.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PanelPacienteComponent,
  },
  {
    path: 'registrado',
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
  {
    path: 'detalle',
    component: PacienteDetalleComponent,
  },
  {
    path: 'editar',
    component: PacienteEditarComponent,
  },
  {
    path: 'detalle-emergencia',
    component: DetalleEmergenciaComponent,
  },
  {
    path: 'editar-emergencia',
    component: EditarEmergenciaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
