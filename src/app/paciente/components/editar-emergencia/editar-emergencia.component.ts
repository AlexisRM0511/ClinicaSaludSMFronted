import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Emergencia } from '../../modal/emergencia';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-editar-emergencia',
  templateUrl: './editar-emergencia.component.html',
  styleUrls: ['./editar-emergencia.component.css']
})
export class EditarEmergenciaComponent implements OnInit {

  emergencia: Emergencia;
  emergenciaForm: FormGroup;

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private fb: FormBuilder, private emergenciaService: PacienteService) { 
    const navigation = this.router.getCurrentNavigation();
    this.emergencia = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();
    if (typeof this.emergencia === 'undefined'){
      this.router.navigate(['/paciente/emergencia']);
    }else{
      this.emergenciaForm.patchValue(this.emergencia);
    }
  }

  private initForm(): void{
    this.emergenciaForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      monto: ['', [Validators.required]],
    });  
  }

  isValidField(field: string):string{
    const validatedField = this.emergenciaForm.get(field);
    return ( !validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  onSave(): void{
    if (this.emergenciaForm.valid){
      const emergencia = this.emergenciaForm.value;
      const emergenciaId = this.emergencia?.id || null;
      this.emergenciaService.onSaveEmergencia(emergencia,emergenciaId)
      this.emergenciaForm.reset();
    }
  }

  onGoBackToList():void{
    this.router.navigate(['/paciente/emergencia']);
  }
}
