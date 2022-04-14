import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logueado = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('userID') !== null) {
      this.logueado = true;
    } else if (sessionStorage.getItem('adminID') !== null) {
      this.logueado = true;
    }
  }

}
