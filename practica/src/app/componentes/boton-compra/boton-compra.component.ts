import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boton-compra',
  templateUrl: './boton-compra.component.html',
  styleUrls: ['./boton-compra.component.css']
})
export class BotonCompraComponent implements OnInit {

  estrenada: boolean;
  stock: number;
  fecha: Date;
  hoy: Date = new Date();
  jueguito: any;
  juegoID: any;
  juego: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioJuego: JuegoService) {

    this.jueguito = this.rutaActiva.paramMap.subscribe( e => {
      this.juegoID = this.rutaActiva.snapshot.paramMap.get('id');
      this.juego = this.servicioJuego.getJuego(this.juegoID);
    });
   }

  ngOnInit(): void {
    this.fecha = new Date(this.servicioJuego.juego.fecha);
    this.stock = this.servicioJuego.juego.stock;
    this.setEstado();
  }

  setEstado() {
    if (this.fecha >= this.hoy) {
      this.estrenada = false;
    } else {
      this.estrenada = true;
    }
  }

}
