import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Doctores } from '../../model/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-detalle-doctor',
  templateUrl: './detalle-doctor.component.html',
  styleUrls: ['./detalle-doctor.component.css']
})
export class DetalleDoctorComponent implements OnInit {

  doctor: Doctores = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private dcotorService: DoctorService) {
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras?.state.value;
   }

  ngOnInit(): void {
    if (typeof this.doctor === 'undefined'){
      this.router.navigate(['/doctor/registrados']);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['/doctor/registrados']);
  }

}
