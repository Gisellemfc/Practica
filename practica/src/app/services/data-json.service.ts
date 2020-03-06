import juegos from 'src/assets/data/juegos.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  listaJuegos: any[] = juegos;

  constructor() { }
}
