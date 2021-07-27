import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';


@NgModule({
  declarations: [
    CrearCitaComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule
  ]
})
export class CitaModule { }
