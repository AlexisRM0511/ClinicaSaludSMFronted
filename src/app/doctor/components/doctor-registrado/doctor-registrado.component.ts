import { Component, OnInit } from '@angular/core';
import { Doctores } from 'src/app/firebase/doctores';
import { DoctoresService } from 'src/app/firebase/doctores.service';
import { GenerarExcelService } from 'src/app/services/generar-excel.service';
import Swal from 'sweetalert2';

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
  doc$ = this.doctoresService.doctores;
  doctores: Doctores[]
  constructor(
    private doctoresService: DoctoresService,
    private excelService: GenerarExcelService
  ) { }

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

  descargarExcel() {
    this.excelService.exportAsExcelFile(this.doctores, 'Doctores');
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
