import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { AtencionGeneralComponent } from './components/atencion-general/atencion-general.component';
import { HomeComponent } from './components/home/home.component';
import { Paciente } from '../firebase/paciente';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AdministrativoComponent,
    AtencionGeneralComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule implements OnInit{
  paciente: Paciente = null;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
}
