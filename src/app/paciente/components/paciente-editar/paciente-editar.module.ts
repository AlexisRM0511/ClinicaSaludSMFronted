import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteEditarComponent } from './paciente-editar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PacienteEditarComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class PacienteEditarModule { }
