import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  adminLogueado = false;
  logueado = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userID') !== null) {
      this.logueado = true;
    }
    if (sessionStorage.getItem('type') === '1') {
      this.adminLogueado = true;
    }
  }

  logOut() {
    sessionStorage.clear();
    this.adminLogueado = false;
    this.logueado = false;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
