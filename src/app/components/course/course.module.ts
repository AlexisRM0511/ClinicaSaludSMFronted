import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './components/course/course.component';
import { CourseRegisterComponent } from './components/course-register/course-register.component';
import { CourseDetalleComponent } from './components/course-detalle/course-detalle.component';


@NgModule({
  declarations: [
    CourseComponent,
    CourseDetalleComponent,
    CourseRegisterComponent
  ],
  imports: [
    CourseRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
