import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GenerarExcelService } from 'src/app/services/generar-excel.service';
import Swal from 'sweetalert2';
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
  emergencia: Emergencia[];
  emergenciaFilter='';

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  constructor(
    private emergenciaService: PacienteService,
    private excelService: GenerarExcelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emergencia$;
    console.log(this.emergencia$);
    this.listarCitas();
  }

  listarCitas() {
    this.emergencia$.subscribe((val) => {
      this.emergencia = val;
    });
  }

  elementosSeleccionados(valor) {
    this.items = valor.target.value;
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['/paciente/editar-emergencia'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    console.log(this.navigationExtras.state.value);
    this.router.navigate(['/paciente/detalle-emergencia'], this.navigationExtras);
  }

  async onGoToDelete(citaId: string): Promise<void> {

    Swal.fire({
      title: 'Estas seguro de borrar al paciente en emergencia?',
      text: 'Esta accion no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar paciente en emergencia!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.emergenciaService.onDeleteEmergencia(citaId);
        Swal.fire(
          'Borrado!',
          'El paciente en emergencia a sido borrado exitosamente.',
          'success'
        );
      }
    });
  }

  descargarExcel(){
    this.excelService.exportAsExcelFile(this.emergencia, 'Emergencia');
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
