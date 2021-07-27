import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroCitasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaRoutingModule {}
