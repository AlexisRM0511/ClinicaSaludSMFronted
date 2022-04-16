import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { DocumentRoutingModule } from './document-routing.module';
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
    DocumentRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentModule { }
