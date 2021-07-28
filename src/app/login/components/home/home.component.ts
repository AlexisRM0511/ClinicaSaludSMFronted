import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private pacienteSvc: PacientesService) { }
  pacientes$ = this.pacienteSvc.paciente;

  ngOnInit(): void {
    // let paciente: Paciente;
    // paciente = {
    //   codigo: "ASG - " + Math.floor((Math.random() * (999 - 100 + 1)) + 100),
    //   dni: "" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000),
    //   name: "Alexis Luis",
    //   lastName: "Rojas Miñan",
    //   date: Math.floor((Math.random() * (30 - 1 + 1)) + 1) + "/" + Math.floor((Math.random() * (12 - 1 + 1)) + 1) + "/" + Math.floor((Math.random() * (2013 - 1970 + 1)) + 1970),
    //   number: "9" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000)
    // }
    // this.pacienteSvc.onSavePacientes(paciente, paciente.codigo)
    // this.pacientes$.subscribe(val => console.log(val))
  }

  onSave(): void {

  }

}
