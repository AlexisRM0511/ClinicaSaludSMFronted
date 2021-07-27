import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CrearCita(){
    Swal.fire({
      icon: 'success',
      title: 'Cita generada',
      text: 'La cita de a generado con éxito',
      confirmButtonText: "OK",
      confirmButtonColor: "#2FAF27"
    })
  }
}
