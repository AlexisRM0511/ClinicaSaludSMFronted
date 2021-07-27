import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-doctor',
  templateUrl: './registrar-doctor.component.html',
  styleUrls: ['./registrar-doctor.component.css']
})
export class RegistrarDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrarDoctor(){
    Swal.fire({
      icon: 'success',
      title: 'Doctor registrado',
      text: 'Se registro con éxito al doctor',
      confirmButtonText: "OK",
      confirmButtonColor: "#2FAF27"
    })
  }

}
