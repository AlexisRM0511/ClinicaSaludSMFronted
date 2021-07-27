import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-registrado',
  templateUrl: './paciente-registrado.component.html',
  styleUrls: ['./paciente-registrado.component.css'],
})
export class PacienteRegistradoComponent implements OnInit {
  pacientes = [
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      telefono: '987654321',
      fecha_registro: 'Febrero 15, 2019',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
