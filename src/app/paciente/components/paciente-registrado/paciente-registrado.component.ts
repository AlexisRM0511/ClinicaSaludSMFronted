import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';
import { GenerarExcelService } from 'src/app/services/generar-excel.service';
import Swal from 'sweetalert2';

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

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    private pacienteService: PacientesService,
    private excelService: GenerarExcelService
  ) {}

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
  }

  onGoToRegistrarPaciente():void{
    this.navigationExtras.state.value = this.pacientes;
    this.router.navigate(['/paciente/registrar'], this.navigationExtras)
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    console.log(this.navigationExtras.state.value);
    this.router.navigate(['/paciente/detalle'], this.navigationExtras);
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['/paciente/editar'], this.navigationExtras);
  }

  async onGoToDelete(pacienteId: string): Promise<void> {
    try {
      await this.pacienteService.onDeletePacientes(pacienteId);
      alert('Borrado: Paciente ID:' + pacienteId);
    } catch (error) {
      console.log(error);
    }
  }


  descargarExcel() {
    this.excelService.exportAsExcelFile(this.pacientes, 'Pacientes');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Descargando...',
    });
  }
}
