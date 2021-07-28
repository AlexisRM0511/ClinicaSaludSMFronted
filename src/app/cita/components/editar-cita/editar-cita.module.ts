import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCitaComponent } from './editar-cita.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditarCitaComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class EditarCitaModule { }
