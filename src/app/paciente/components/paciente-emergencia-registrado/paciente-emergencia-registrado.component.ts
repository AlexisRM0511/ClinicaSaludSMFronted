import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-emergencia-registrado',
  templateUrl: './paciente-emergencia-registrado.component.html',
  styleUrls: ['./paciente-emergencia-registrado.component.css'],
})
export class PacienteEmergenciaRegistradoComponent implements OnInit {
  pacientes = [
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      dni: '71912481',
      fecha: '12-02-21',
      estado: 'Covid',
      monto: '$ 1000.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
