import { Component, OnInit } from '@angular/core';
import { PacientesService } from './firebase/pacientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pacientes$ = this.pacienteSvc.paciente;
  constructor(private pacienteSvc:PacientesService) { }
  ngOnInit(): void {
    
    this.pacientes$.subscribe(val => console.log(val))
  }
  title = 'ClinicaSaludSM';
   
}
