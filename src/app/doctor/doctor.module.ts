import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipe/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe, DoctorRegistradoComponent, RegistrarDoctorComponent, SortPipe, FilterPipe],
  imports: [CommonModule,NgxPaginationModule, FormsModule, DoctorRoutingModule, ReactiveFormsModule],
})
export class DoctorModule { }
