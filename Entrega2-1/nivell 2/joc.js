import { Jugadors } from "./jugadors.js";

export class Marcador {

    constructor() {
        this.#marcador = []
    }

    MarcadorActual (usernameOne, usernameTwo) {
        let jugador1 = this.#players.filter((usernameOne) => {return usernameOne.username})
        let puntuacio1 = 0
        let jugador2 = this.#players.filter((usernameTwo) => {return usernameTwo.username})
        let puntuacio2 = 0

        const marcadorActual = (jugador1,  puntuacio1, jugador2, puntuacio2) => {
        console.log(`user : ${jugador1} | score : ${puntuacio1}`);
        console.log(`user: ${jugador2} | score : ${puntuacio2}`)
        }
    }
}