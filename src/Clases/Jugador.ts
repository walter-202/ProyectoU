import { Mazo } from "./ListaCircular.js";
import { Carta } from "./Carta.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { Tablero } from "./Tablero.js";

export class Jugador{
    public Nombre: string;
    public pilaDescarte: PilaDescarte;
    public Tablero: Tablero;
    constructor(nombre: string){
        this.Nombre = nombre;
        this.pilaDescarte = new PilaDescarte();
        this.Tablero = new Tablero();
    }

     jugarTurno(mazo: Mazo, oponente: Jugador): void {
        var cartaRobada = mazo.robarCarta();
        if (cartaRobada === null) return;
        var f = 0;
        var colocada = false;
        while (f < 3 && !colocada) {
            var c = 0;
            while (c < 3 && !colocada) {
                if (this.Tablero.casillas[f]![c] === null) {
                    this.Tablero.colocarCarta(cartaRobada, f, c);
                    colocada = true;
                }
                c = c + 1;
            }
            f = f + 1;
            if (!colocada) {
                this.Tablero.eliminarCartasPorRango(cartaRobada.getRango(), this.pilaDescarte);
            }
        }
    }

    iniciarJuego(mazo: Mazo): void {
        mazo.crearMazoInicial();
        mazo.barajar();
    }

    calcularPuntuacion(): number {
    return this.Tablero.calcularPuntuacion();
  }
}