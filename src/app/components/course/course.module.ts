import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseRegisterComponent } from './components/course-register/course-register.component';
import { CourseDetalleComponent } from './components/course-detalle/course-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseComponent,
    CourseDetalleComponent,
    CourseRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
