import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-doctor',
  templateUrl: './panel-doctor.component.html',
  styleUrls: ['./panel-doctor.component.css'],
})
export class PanelDoctorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    sessionStorage.clear();

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
