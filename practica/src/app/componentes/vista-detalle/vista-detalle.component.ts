import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  juegoID: any;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.juegoID = {
      id: this.rutaActiva.snapshot.params.id
    };

  }

}
