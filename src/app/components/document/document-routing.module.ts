import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentDetalleComponent } from './components/document-detalle/document-detalle.component';
import { DocumentRegisterComponent } from './components/document-register/document-register.component';
import { DocumentComponent } from './components/document/document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent
  },
  {
    path: 'detalle',
    component: DocumentDetalleComponent
  },
  {
    path: 'register',
    component: DocumentRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
