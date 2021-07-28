import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';

import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { SortPipe } from './pipe/sort.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearCitaComponent, RegistroCitasComponent, SortPipe],
  imports: [CommonModule, CitaRoutingModule, ReactiveFormsModule],
})
export class CitaModule {}
