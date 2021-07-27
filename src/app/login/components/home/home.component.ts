import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/firebase/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private pacienteSvc:PacientesService) { }


  ngOnInit(): void {
    const paciente={
      codigo:"OLAS",
    name:"OLAS2",
    lastName:"OLAS",
    dni:"OLAS",
    date:"OLAS",
    number:"OLAS"
    }
    this.pacienteSvc.onSavePacientes(paciente,paciente.codigo);
  }

  onSave():void{
    
  }

}
