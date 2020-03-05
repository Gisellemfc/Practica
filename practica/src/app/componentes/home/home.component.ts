import juegos from 'src/assets/data/juegos.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaJuegos: any[] = juegos;

  constructor() { }

  ngOnInit(): void {
  }

}
