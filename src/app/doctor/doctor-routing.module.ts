import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';

const routes: Routes = [
  {
    path: 'registrar',
    component: RegistrarDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
