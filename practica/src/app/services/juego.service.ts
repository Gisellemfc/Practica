import { Injectable } from '@angular/core';
import juegos from 'src/assets/data/juegos.json';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor() { }

  getJuego(id) {
    return juegos[id - 1];
  }
}
