import { Carta } from "./Carta";
import { NodoCarta } from "./NodoCarta";

export class PilaDescarte {
  Top: NodoCarta | null = null;

  insertarFin(carta: Carta): void {
    const nuevo = new NodoCarta(carta);
    if (this.Top === null) {
      this.Top = nuevo;
    } 
    else {
      let actual = this.Top;
      while(actual.siguiente !== null){
        actual = actual.siguiente;
      }
      actual.siguiente = nuevo;
    }
  }

  estaVacia(): boolean {
    return this.Top === null;
  }

  obtenerTodas(): Carta[] {
    const resultado: Carta[] = [];
    let actual = this.Top;
    while (actual !== null){
      resultado.push(actual.carta);
      actual = actual.siguiente;
    }
    return resultado;
  }
  
  vaciarYDevolver(): Carta[]{
    const cartas = this.obtenerTodas();
    this.Top = null;
    return cartas;
  }

  limpiar(): void {
    this.Top = null;
  }

  imprimir(): void {
    let actual = this.Top;
    while (actual !== null) {
      console.log(actual.carta.toString());
      actual = actual.siguiente;
    }
  }
}
