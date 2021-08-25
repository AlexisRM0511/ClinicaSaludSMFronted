import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css'],
})
export class PanelControlComponent implements OnInit {
  categorias = [
    {
      ruta: '/citas',
      nombre: 'Citas',
      icon: 'fas fa-calendar-plus h1',
      color: 'btn-outline-primary',
    },
    {
      ruta: '/paciente/registrado',
      nombre: 'Pacientes',
      icon: 'fas fa-users h1',
      color: 'btn-outline-warning',
    },
    {
      ruta: '/doctor/registrados',
      nombre: 'Doctores',
      icon: 'fas fa-user-md h1',
      color: 'btn-outline-info',
    },
    {
      ruta: '/paciente/emergencia',
      nombre: 'Emergencia',
      icon: 'fas fa-ambulance h1',
      color: 'btn-outline-danger',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    sessionStorage.clear();

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
