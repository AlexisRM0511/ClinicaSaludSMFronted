import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleDoctorComponent } from './components/detalle-doctor/detalle-doctor.component';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
import { EditarDoctorComponent } from './components/editar-doctor/editar-doctor.component';
import { PanelDoctorComponent } from './components/panel-doctor/panel-doctor.component';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: PanelDoctorComponent,
  },
  {
    path: 'registrados',
    component: DoctorRegistradoComponent,
  },
  {
    path: 'registrar',
    component: RegistrarDoctorComponent,
  },
  {
    path: 'editar',
    component: EditarDoctorComponent,
  },
  {
    path: 'detalle',
    component: DetalleDoctorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
