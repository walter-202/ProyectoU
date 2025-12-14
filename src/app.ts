import { JuegoRangoYPalo } from "./Clases/Juego.js"
import { Carta } from "./Clases/Carta.js"
import { Tablero } from "./Clases/Tablero.js"
import { Mazo } from "./Clases/ListaCircular.js"
import { ListaHistorial } from "./Clases/ListaDoble.js"
import { Jugador } from "./Clases/Jugador"
import { PilaDescarte } from "./Clases/Pila_Descarte.js"

function simularJuego(): void {
    console.log("--- Inicio de la Simulación del Juego Rango y Palo ---");
    const juego = new JuegoRangoYPalo("Alice", "Bob");

    console.log(`\nJugadores: ${juego.jugador1.nombre} vs ${juego.jugador2.nombre}`);

    juego.iniciarJuego();
    console.log("Juego inicializado y mazo barajado.");
    console.log(`Cartas iniciales en el Mazo: ${juego.mazo.cabeza === null ? 0 : 52}`);

    juego.ejecutarJuego();

    console.log("\n--- Juego Terminado ---");

    console.log(`\n### Tablero de ${juego.jugador1.nombre} ###`);
    imprimirTablero(juego.jugador1.tablero);

    console.log(`\n### Tablero de ${juego.jugador2.nombre} ###`);
    imprimirTablero(juego.jugador2.tablero);


    console.log("\n### Historial de Turnos ###");
    juego.historial.mostrar();
  
    function imprimirTablero(tablero: Tablero): void {
    for (let f = 0; f < 3; f++) {
        const fila: string[] = [];
        for (let c = 0; c < 3; c++) {
        const carta = tablero.casillas[f]![c];
        fila.push(carta ? carta.toString().padEnd(3) : '   '); // Usar 3 espacios para nulos
        }
        console.log(`| ${fila.join(' | ')} |`);
    }
    }
}

simularJuego();