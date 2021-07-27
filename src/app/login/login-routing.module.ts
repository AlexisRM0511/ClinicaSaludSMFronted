import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { AtencionGeneralComponent } from './components/atencion-general/atencion-general.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/atencion-general',
    component: AtencionGeneralComponent,
  },
  {
    path: 'login/administrativo',
    component: AdministrativoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
