import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleCitaRoutingModule } from './detalle-cita-routing.module';
import { DetalleCitaComponent } from './detalle-cita.component';


@NgModule({
  declarations: [
    DetalleCitaComponent
  ],
  imports: [
    CommonModule,
    DetalleCitaRoutingModule
  ]
})
export class DetalleCitaModule { }
