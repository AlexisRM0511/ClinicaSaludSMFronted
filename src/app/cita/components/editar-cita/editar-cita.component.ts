import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitaProgramada } from '../../model/cita-programada';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {

  citaProgramada: CitaProgramada;
  citaProgramadaForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private citaService: CitaService) { 
    const navigation = this.router.getCurrentNavigation();
    this.citaProgramada = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.citaProgramada === 'undefined'){
      this.router.navigate(['/citas/crear']);
    }else{
      this.citaProgramadaForm.patchValue(this.citaProgramada);
    }
  }

  onSave(): void{
    console.log('Saved', this.citaProgramadaForm.value);
    if (this.citaProgramadaForm.valid){
      const citaProgramada = this.citaProgramadaForm.value;
      const citaProgramadaId = this.citaProgramada?.id || null;
      this.citaService.onSaveCitaProgramada(citaProgramada, citaProgramadaId)
      this.citaProgramadaForm.reset();
    }
  }

  onGoBackToList():void{
    this.router.navigate(['/citas/registro-citas']);
  }

  isValidField(field: string):string{
    const validatedField = this.citaProgramadaForm.get(field);
    return ( !validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }


  private initForm(): void{
    this.citaProgramadaForm = this.fb.group({
      DNI: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      codigo_doctor: ['', [Validators.required]],
    });  
  }

}
