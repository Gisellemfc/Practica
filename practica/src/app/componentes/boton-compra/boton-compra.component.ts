import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';

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

  constructor(private servicioJuego: JuegoService) { }

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
