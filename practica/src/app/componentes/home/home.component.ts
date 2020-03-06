import juegos from 'src/assets/data/juegos.json';
import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaJuegos: any[];
  filtroJuego = '';

  constructor(private json: DataJsonService) {
    this.listaJuegos = json.listaJuegos;
  }

  ngOnInit(): void {
  }

}
