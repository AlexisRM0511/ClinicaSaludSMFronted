import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/firebase/paciente';
import { PacientesService } from 'src/app/firebase/pacientes.service';
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
  paciente$: Observable<Paciente>;
  parientes: String[];
  esAdministrativo: boolean;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(
    private router: Router,
    private citasService: CitaService,
    private excelService: GenerarExcelService,
    private pacienteService: PacientesService
  ) {}

  ngOnInit(): void {
    //console.log(this.citas$);
    this.esAdministrativo = false;
    console.log(sessionStorage.getItem('adminID'));

    if (sessionStorage.getItem('adminID') != null) {
      this.esAdministrativo = true;
    }
    this.informacionPaciente();
  }

  listarCitas() {
    this.citas$.subscribe((val) => {
      this.citas = val;
      this.citas = this.citas.filter((c) => {
        for (let i = 0; i < this.parientes?.length; i++) {
          if (
            c?.codigo == this.parientes[i] ||
            c?.codigo == sessionStorage.getItem('userID')
          ) {
            return true;
          }
        }
        return false;
      });
      console.log(this.citas);
    });
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
    // try {
    //   await this.citasService.onDeleteCita(citaId);
    //   alert('Deleted: Cita ID:' + citaId);
    // } catch (error) {
    //   console.log(error);
    // }
    
    Swal.fire({
      title: 'Estas seguro de borrar este paciente?',
      text: "Esta accion no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar registro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.citasService.onDeleteCita(citaId);
        Swal.fire(
          'Borrado!',
          'El registro del paciente ha sido borrado exitosamente.',
          'success'
        )
      }
    })
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

  async informacionPaciente() {
    this.paciente$ = await this.pacienteService.getOnePaciente(
      sessionStorage.getItem('userID')
    );

    await this.paciente$.subscribe(async (x) => {
      if (x !== undefined) {
        this.parientes = x?.parientes;
        if (!this.esAdministrativo) {
          this.listarCitas();
        }
      }
    });
  }
}
