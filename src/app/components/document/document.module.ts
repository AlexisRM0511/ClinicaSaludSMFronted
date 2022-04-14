import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocumentComponent } from './components/document/document.component';
import { DocumentDetalleComponent } from './components/document-detalle/document-detalle.component';
import { DocumentRegisterComponent } from './components/document-register/document-register.component';

@NgModule({
  declarations: [
    DocumentComponent,
    DocumentDetalleComponent,
    DocumentRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentModule { }
