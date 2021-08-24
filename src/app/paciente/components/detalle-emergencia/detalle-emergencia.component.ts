import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Emergencia } from '../../modal/emergencia';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-detalle-emergencia',
  templateUrl: './detalle-emergencia.component.html',
  styleUrls: ['./detalle-emergencia.component.css']
})
export class DetalleEmergenciaComponent implements OnInit {

  emergencia: Emergencia = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private emergenciaService: PacienteService) { 
    const navigation = this.router.getCurrentNavigation();
    this.emergencia = navigation?.extras?.state.value;
  }

  ngOnInit(): void {
  }

  onGoBackToList(): void {
    this.router.navigate(['/paciente/emergencia']);
  }
}
