import { Component, OnInit } from '@angular/core';
import { Doctores } from 'src/app/firebase/doctores';
import { DoctoresService } from 'src/app/firebase/doctores.service';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private pacienteSvc: DoctoresService) { }
  pacientes$ = this.pacienteSvc.doctores;

  ngOnInit(): void {
    let paciente: Doctores;
    paciente = {
      codigo: "DOC - " + Math.floor((Math.random() * (999 - 100 + 1)) + 100),
      dni: "" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000),
      name: "Isabel Angelica",
      lastName: "Garcia Molina",
      specialty:"Obstetricia",
      number: "9" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000)
    }
    this.pacienteSvc.onSaveDoctores(paciente, paciente.codigo)
    this.pacientes$.subscribe(val => console.log(val))
  }

  onSave(): void {

  }

}
