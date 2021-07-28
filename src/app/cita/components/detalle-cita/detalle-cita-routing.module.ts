import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCitaComponent } from './detalle-cita.component';

const routes: Routes = [{ path: '', component: DetalleCitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleCitaRoutingModule { }
