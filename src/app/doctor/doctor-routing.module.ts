import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
