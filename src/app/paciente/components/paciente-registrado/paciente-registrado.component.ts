import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';

@Component({
  selector: 'app-paciente-registrado',
  templateUrl: './paciente-registrado.component.html',
  styleUrls: ['./paciente-registrado.component.css'],
})
export class PacienteRegistradoComponent implements OnInit {
  pageActual: number;
  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';
  responsive: boolean = true;
  //filtro de cursos
  pacientesFilter: string = '';
  items = 5;
  pac = this.pacienteService.paciente;
  pacientes: Paciente[];
  constructor(private pacienteService: PacientesService) {}

  ngOnInit(): void {
    this.listarPacientes();
  }
  cambiarPagina() {
    this.pageActual = 1;
  }
  elementosSeleccionados(valor) {
    this.items = valor.target.value;
  }

  listarPacientes() {
    this.pac.subscribe((val) => (this.pacientes = val));
    console.log('doasvnoisdnav', this.pacientes);
  }
}
