import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css'],
})
export class PanelControlComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    sessionStorage.clear();

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
