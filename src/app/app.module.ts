import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { Paciente } from './firebase/paciente';
import { environment } from 'src/environments/environment';
import { ListaCitasProgramadasComponent } from './cita/components/lista-citas-programadas/lista-citas-programadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaCitasProgramadasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  paciente: Paciente = null;
 }
