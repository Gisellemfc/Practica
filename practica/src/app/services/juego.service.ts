import { Injectable } from '@angular/core';
import juegos from 'src/assets/data/juegos.json';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  juego: any;

  constructor() { }

  getJuego(id) {
    this.juego = juegos[id - 1];
    return juegos[id - 1];
  }
}
