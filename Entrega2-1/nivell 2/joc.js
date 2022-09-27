import { Jugadors } from "./jugadors.js";

export class Marcador {

    MarcadorActual () {
        jugador1 = this.#player.username
        puntuacio1 = 0
        jugador2 = this.#player.username
        puntuacio2 = 0
        marcadorActual = (jugador1,  puntuacio1, jugador2, puntuacio2) => {
        console.log(`user : ${jugador1} | score : ${puntuacio1}`);
        console.log(`user: ${jugador2} | score : ${puntuacio2}`)
        }
    }

}

