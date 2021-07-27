import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-registrado',
  templateUrl: './doctor-registrado.component.html',
  styleUrls: ['./doctor-registrado.component.css'],
})
export class DoctorRegistradoComponent implements OnInit {
  doctores = [
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      especialidad: 'Cardiologia',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
