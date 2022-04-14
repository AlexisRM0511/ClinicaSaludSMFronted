import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetalleComponent } from './components/course-detalle/course-detalle.component';
import { CourseRegisterComponent } from './components/course-register/course-register.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: 'detalle',
    component: CourseDetalleComponent
  },
  {
    path: 'register',
    component: CourseRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
