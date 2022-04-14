import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from './paciente/model/paciente';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PacienteDetalleModule } from './paciente/components/paciente-detalle/paciente-detalle.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    PacienteDetalleModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [AngularFirestore, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  paciente: Paciente = null;
}
