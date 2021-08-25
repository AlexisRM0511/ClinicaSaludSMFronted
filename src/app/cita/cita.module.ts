import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';

import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { SortPipe } from './pipe/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    CrearCitaComponent,
    RegistroCitasComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    CitaRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [MatDatepickerModule],
})
export class CitaModule {}
