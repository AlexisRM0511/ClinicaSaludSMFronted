import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';

import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';

@NgModule({
  declarations: [CrearCitaComponent, RegistroCitasComponent],
  imports: [CommonModule, CitaRoutingModule],
})
export class CitaModule {}
