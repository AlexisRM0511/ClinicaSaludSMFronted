import { Component, OnInit } from '@angular/core';
import { Doctores } from '../../model/doctor';
import { DoctorService } from '../../services/doctor.service';
import Swal from 'sweetalert2';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-registrado',
  templateUrl: './doctor-registrado.component.html',
  styleUrls: ['./doctor-registrado.component.css'],
})
export class DoctorRegistradoComponent implements OnInit {
  pageActual: number;
  previousLabel = 'Anterior';
  nextLabel = 'Siguiente';
  responsive: boolean = true;
  //filtro de cursos
  doctoresFilter: string = '';
  items = 5;
  doc$ = this.doctoresService.doctor;
  doctores: Doctores[];

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  constructor(
    private doctoresService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarDoctores();
  }
  cambiarPagina() {
    this.pageActual = 1;
  }
  elementosSeleccionados(valor) {
    this.items = valor.target.value;
  }

  listarDoctores() {
    this.doc$.subscribe((val) => (this.doctores = val));
  }

  /*   onGoToRegistrar(): void {
    this.navigationExtras.state.value = this.citas;
    this.router.navigate(['/citas/crear'], this.navigationExtras);
  } */

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['/doctor/editar'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['/doctor/detalle'], this.navigationExtras);
  }

  async onGoToDelete(citaId: string): Promise<void> {
    Swal.fire({
      title: 'Estas seguro de borrar este doctor?',
      text: 'Esta accion no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar doctor!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctoresService.onDeleteDoctores(citaId);
        Swal.fire(
          'Borrado!',
          'El doctor ha sido borrado exitosamente.',
          'success'
        );
      }
    });
  }
}
