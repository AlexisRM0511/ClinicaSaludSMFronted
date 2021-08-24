import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  categorias = [
    {
      nombre: 'Pediatria',
      img: 'https://1.bp.blogspot.com/-IlUELATkPGU/X6cNgdfC4BI/AAAAAAAAZcI/xjKBeQYFGrsrLM-8YKO3a6BfmDdJRZawQCLcBGAsYHQ/s1024/0000000000000000000000000000000000000.png',
    },
    {
      nombre: 'Cardiologia',
      img: 'https://www.clinicainternacional.com.pe/blog/wp-content/uploads/2018/05/clinica-internacional-cardiologia-corazon-saludable.jpg',
    },
    {
      nombre: 'Odontologia',
      img: 'https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/08/consentimiento-informado-odontologia-1024x682.jpg',
    },
    {
      nombre: 'Neurologia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhdPzv8rLI_UiFt5VJfrGBWmTEPMAJ9Z39w&usqp=CAU',
    },
  ];
  ngOnInit(): void {}
}
