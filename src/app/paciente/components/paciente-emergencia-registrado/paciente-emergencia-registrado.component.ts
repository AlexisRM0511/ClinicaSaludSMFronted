import { Component, OnInit } from '@angular/core';
import { Emergencia } from '../../modal/emergencia';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-emergencia-registrado',
  templateUrl: './paciente-emergencia-registrado.component.html',
  styleUrls: ['./paciente-emergencia-registrado.component.css'],
})
export class PacienteEmergenciaRegistradoComponent implements OnInit {
  
  pageActual: number;
  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';
  responsive: boolean = true;
  items = 5;
  emergencia$ = this.emergenciaService.emergencia;

  emergenciaFilter='';

  constructor(
    private emergenciaService: PacienteService
  ) {}

  ngOnInit(): void {
    this.emergencia$;
    console.log(this.emergencia$);
    
  }

  elementosSeleccionados(valor) {
    this.items = valor.target.value;
  }
}
