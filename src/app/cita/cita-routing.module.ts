import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroCitasComponent,
  },
  {
    path: 'crear',
    component: CrearCitaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaRoutingModule {}
