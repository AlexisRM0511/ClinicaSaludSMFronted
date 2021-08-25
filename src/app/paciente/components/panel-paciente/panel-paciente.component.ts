import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-paciente',
  templateUrl: './panel-paciente.component.html',
  styleUrls: ['./panel-paciente.component.css'],
})
export class PanelPacienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    sessionStorage.clear();

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
