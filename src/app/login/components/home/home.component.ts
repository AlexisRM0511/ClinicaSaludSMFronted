import { Component, OnInit } from '@angular/core';
import { Doctores } from 'src/app/doctor/model/doctor';
import { DoctorService } from 'src/app/doctor/services/doctor.service';
import { Paciente } from 'src/app/paciente/model/paciente';
import { PacienteService } from 'src/app/paciente/services/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private pacienteSvc: DoctorService) { }
  // pacientes$ = this.pacienteSvc.doctor;
  ngOnInit(): void {
    // let paciente: Doctores;
    // paciente = {
    //   codigo: "DOC - " + Math.floor((Math.random() * (999 - 100 + 1)) + 100),
    //   dni: "" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000),
    //   name: "Brayan Richard",
    //   lastName: "Oroncuy Fernandez",
    //   specialty: "Traumatologia",
    //   number: "9" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000)
    // }
    // this.pacienteSvc.onSaveDoctores(paciente, paciente.codigo)
    // this.pacientes$.subscribe(val => console.log(val))
  }
  


}
