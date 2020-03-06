import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  juegoID: any;
  jueguito: any;
  juego: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioJuegos: JuegoService) { }

  ngOnInit(): void {

    this.jueguito = this.rutaActiva.paramMap.subscribe( e => {
        this.juegoID = this.rutaActiva.snapshot.paramMap.get('id');
        this.juego = this.servicioJuegos.getJuego(this.juegoID);
      });
  }

}
