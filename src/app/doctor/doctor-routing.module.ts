import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorRegistradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
