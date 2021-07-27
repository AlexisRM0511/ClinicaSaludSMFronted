import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  especialidad$= this.citasService.especialidad;
  medico$= this.citasService.medico;
  horario$= this.citasService.horario;

  constructor(
    private citasService:CitaService
  ) { }

  ngOnInit(): void {
    this.listarEspecialidad();
    this.listarMedico();
    this.listarHorario();
  }

  listarEspecialidad(){
    this.especialidad$.subscribe(val => console.log(val))
  }

  listarMedico(){
    this.medico$.subscribe(val => console.log(val))
  }

  listarHorario(){
    this.horario$.subscribe(val => console.log(val))
  }

  crearCita(){
    Swal.fire({
      icon: 'success',
      title: 'Cita generada',
      text: 'La cita de a generado con éxito',
      confirmButtonText: "OK",
      confirmButtonColor: "#2FAF27"
    })
  }

}
