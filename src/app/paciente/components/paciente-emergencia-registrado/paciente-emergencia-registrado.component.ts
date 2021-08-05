import { Component, OnInit } from '@angular/core';
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

  constructor(
    private emergenciaService: PacienteService,
    private excelService: GenerarExcelService
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
