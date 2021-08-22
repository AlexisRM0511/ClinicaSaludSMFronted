import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/admin/model/admin';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Doctores } from 'src/app/doctor/model/doctor';
import { DoctorService } from 'src/app/doctor/services/doctor.service';
import { Paciente } from 'src/app/paciente/model/paciente';
import { PacienteService } from 'src/app/paciente/services/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private adminSvc: AdminService) { }
  admin$ = this.adminSvc.admin;
  // pacientes$ = this.pacienteSvc.doctor;
  ngOnInit(): void {
    let admin: Admin;
    /* admin = {
      //codigo: "DOC - " + Math.floor((Math.random() * (999 - 100 + 1)) + 100),
      codigo:"ADMIN - 005",
      dni: "" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000),
      name: "Brandon Isaac",
      lastName: "Mejia Tarazona",
      date: Math.floor((Math.random() * (30 - 1 + 1)) + 1) + "/" + Math.floor((Math.random() * (12 - 1 + 1)) + 1) + "/" + Math.floor((Math.random() * (2013 - 1970 + 1)) + 1970),
      number: "9" + Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000)
    }
    this.adminSvc.onSaveAdmin(admin, admin.codigo)
    this.admin$.subscribe(val => console.log(val)) */
  }
  


}
