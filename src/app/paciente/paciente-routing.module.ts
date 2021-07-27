import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  {
    path: 'registrar',
    component: RegistrarPacienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
