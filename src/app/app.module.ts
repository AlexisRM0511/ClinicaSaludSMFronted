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
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from './paciente/model/paciente';
import { environment } from 'src/environments/environment';
import { DetalleCitaModule } from './cita/components/detalle-cita/detalle-cita.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { EditarCitaModule } from './cita/components/editar-cita/editar-cita.module';
import { PacienteDetalleModule } from './paciente/components/paciente-detalle/paciente-detalle.module';
import { PacienteEditarModule } from './paciente/components/paciente-editar/paciente-editar.module';
import { HomeComponent } from './layout/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    DetalleCitaModule,
    NgxPaginationModule,
    EditarCitaModule,
    PacienteDetalleModule,
    PacienteEditarModule,
    BrowserAnimationsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  paciente: Paciente = null;
}
