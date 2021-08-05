import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GenerarExcelService } from 'src/app/services/generar-excel.service';
import Swal from 'sweetalert2';
import { Cita } from '../../model/cita';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent implements OnInit {
  citas$ = this.citasService.cita;
  pageActual: number;
  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';
  responsive: boolean = true;
  items = 5;
  citaFilter = '';
  citas: Cita[];

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    private citasService: CitaService,
    private excelService: GenerarExcelService
  ) {}

  ngOnInit(): void {
    // this.citas$.subscribe((val) => (this.citas = val));
    // console.log(this.citas$);
    // Create a query against the collection
    // const queryRef = doctor.where('state', '==', 'CA');
  }

  onGoToRegistrar():void{
    this.navigationExtras.state.value = this.citas;
    this.router.navigate(['/citas/crear'], this.navigationExtras)
  }


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
      await this.citasService.onDeleteCita(citaId);
      alert('Deleted: Cita ID:' + citaId);
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

  descargarExcel() {
    this.excelService.exportAsExcelFile(this.citas, 'Citas');
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
