import juegos from 'src/assets/data/juegos.json';
import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-proximos-estrenos',
  templateUrl: './proximos-estrenos.component.html',
  styleUrls: ['./proximos-estrenos.component.css']
})
export class ProximosEstrenosComponent implements OnInit {

  listaJuegos: any[] = juegos;
  proximas: any[];
  hoy: Date = new Date();

  constructor(private servicioJuego: JuegoService) { }

  ngOnInit(): void {
    this.proximas = this.listaJuegos.filter(juego =>
      new Date(juego.fecha) >= this.hoy);
    console.log(this.proximas);

  }

}
