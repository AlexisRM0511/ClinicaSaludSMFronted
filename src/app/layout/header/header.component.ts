import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  pacienteLogueado = false;
  doctorLogueado =false;
  logueado=false;

  constructor() {
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("userID")!==null){
      this.pacienteLogueado=true
      this.logueado=true
    }else if(sessionStorage.getItem("adminID")!==null){
      this.doctorLogueado=true
      this.logueado=true
    }
  }

  logOut(){
    sessionStorage.clear()
    this.pacienteLogueado=false
    this.logueado=false
  }
}
