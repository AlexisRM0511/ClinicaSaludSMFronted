import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  disables: boolean;
  items = 5;
  emergencia$ = this.emergenciaService.emergencia;
  emergencia: Emergencia[];
  emergenciaFilter = '';
  estadoPaciente: any;
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  emergencias: Emergencia;
  emergenciaForm: FormGroup;
  constructor(
    private emergenciaService: PacienteService,
    private excelService: GenerarExcelService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.emergencia$;
    console.log(this.emergencia$);
    this.listarCitas();
    this.initForm();
    this.disables = true;
  }

  private initForm(): void {
    this.emergenciaForm = this.fb.group({
      codigo: ['', [Validators.required]],
      telefono: [{ value: '', disabled: true }, [Validators.required]],
      nombre: [{ value: '', disabled: true }, [Validators.required]],
      fecha: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      dni: [{ value: '', disabled: true }, [Validators.required]],
      monto: ['', [Validators.required]],
    });
  }

  onSaveEmergencia(): void {
    if (this.emergenciaForm.valid) {
      const paciente = this.emergenciaForm.value;
      const pacienteId = this.emergencias?.codigo || null;
      this.emergenciaService.onSaveEmergencia(paciente, pacienteId)
      this.emergenciaForm.reset();
    }
  }

  onGetEmergencia() {
    this.emergenciaForm.get('nombre').enable();
    this.emergenciaForm.get('dni').enable();
    this.emergenciaForm.get('telefono').enable();
    this.emergenciaService.onGetEmergencia(this.emergenciaForm.get('codigo').value).subscribe(
      x => {
        let nombrePaciente = x.payload.data()['name'] + ' ' + x.payload.data()['lastName']
        this.emergenciaForm.get('nombre').setValue(nombrePaciente);
        this.emergenciaForm.get('dni').setValue(x.payload.data()['dni']);
        this.emergenciaForm.get('telefono').setValue(x.payload.data()['number']);

      }, error => {

      });
    this.disables = false;
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

  onGoToRegistrar(): void {
    this.navigationExtras.state.value = this.emergencia;
    this.router.navigate(['/citas/crear'], this.navigationExtras);
  }

  pacienteCovid(covid: number) {
    if (covid == 1) {
      this.emergenciaForm.get('estado').setValue('con covid');
      this.estadoPaciente = "Paciente con Covid";
    } else {
      this.emergenciaForm.get('estado').setValue('sin covid');
      this.estadoPaciente = "Paciente sin Covid";
    }

  }


  /* Validaciones */
  get nombreNoValido() {
    return (
      this.emergenciaForm.get('nombre').invalid &&
      this.emergenciaForm.get('nombre').touched
    );
  }

  get dniNoValido() {
    return (
      this.emergenciaForm.get('dni').invalid &&
      this.emergenciaForm.get('dni').touched
    );
  }

  get montoNoValido() {
    return (
      this.emergenciaForm.get('monto').invalid &&
      this.emergenciaForm.get('monto').touched
    );
  }

  get telefonoNoValido() {
    return (
      this.emergenciaForm.get('telefono').invalid &&
      this.emergenciaForm.get('telefono').touched
    );
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

  descargarExcel() {
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
