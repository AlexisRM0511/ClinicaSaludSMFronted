import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent implements OnInit {
  // citas$ = this.citasService.cita;
  pageActual: number;
  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';
  responsive: boolean = true;
  items = 5;
  citaFilter = '';
  citas = [
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
    {
      codigo: '12314312',
      nombre: 'Nombre Apellido Apellido',
      fecha: '12-02-21',
      hora: '12:30',
      codigo_doctor: '5432902',
      estado: 'Citado',
    },
  ];

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(private router: Router, private citasService: CitaService) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['/citas/editar-cita'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    console.log(this.navigationExtras.state.value);
    this.router.navigate(['/citas/detalle-cita'], this.navigationExtras);
  }

  async onGoToDelete(citaId: string): Promise<void> {
    try {
      await this.citasService.onDeleteCitaProgramada(citaId);
      alert('Deleted');
    } catch (error) {
      console.log(error);
    }
  }

  cambiarPagina() {
    this.pageActual = 1;
  }
  elementosSeleccionados(valor) {
    this.items = valor.target.value;
  }
}
