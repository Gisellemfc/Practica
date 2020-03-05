import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {nombre: 'Cartelera', url: 'home'},
    {nombre: 'Próximos Estrenos', url: 'proximos-estrenos'},
    {nombre: 'Admin', url: 'admin'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
