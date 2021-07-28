import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { DetalleCitaComponent } from './components/detalle-cita/detalle-cita.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';
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
  {
    path: 'detalle-cita',
    component: DetalleCitaComponent,
  },
  {
    path: 'registro-citas',
    component: RegistroCitasComponent,
  },
  {
    path: 'editar-cita',
    component: EditarCitaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaRoutingModule {}
