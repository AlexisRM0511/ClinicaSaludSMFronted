import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent implements OnInit {
  citas = [
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Programado',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
