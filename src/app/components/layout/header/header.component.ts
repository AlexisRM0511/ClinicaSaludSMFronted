import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (sessionStorage.getItem('userID')) {
      this.logueado = true;
    }
    if (sessionStorage.getItem('type') === '0') {
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
