import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  async open() {
    /* const { value: codigo } = await Swal.fire({
      title: 'Código del asegurado',
      input: 'text',
      inputLabel: 'Ingrese el código del asegurado',
      inputPlaceholder: 'Ingrese el código del asegurado',
      showCancelButton: true,
      confirmButtonColor: '#158cba',
      confirmButtonText: 'Crear cita',
      cancelButtonColor: '#FF1D10',
      cancelButtonText: 'Cancelar',
    });

    if (codigo) {
      Swal.fire(`Codigo ingresado: ${codigo}`);
    } */
    let especialidad = 'Dermatologia';
    let doctor = 'Doctor';
    let fecha = '13/01/21';
    let hora = '12:20';

    Swal.fire({
      title: 'VERIFICACIÓN',
      showCancelButton: true,
      confirmButtonColor: '#28B62C',
      confirmButtonText: `Crear cita`,
      cancelButtonColor: '#FF1D10',
      html:
        'Esta seguro de crear la cita con: </br></br>' +
        `<p><b>Especialidad:</b> ${especialidad}</p>` +
        `<p><b>Doctor(a):</b> ${doctor}</p>` +
        `<p><b>Fecha:</b> ${fecha}</p>` +
        `<p><b>Hora:</b> ${hora}</p>`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      }
    });
  }
}
