import { Jugadors } from "./jugadors.js";

export class Marcador {

    constructor() {
        this.#marcador = []
    }

    newGame (game, username, score) {
        const jugador = this.#players.filter((username) => {return username.username})

        const marcadorResultat = (game, jugador, score) => {
        let missatge = (`joc: ${joc} | user : ${jugador} | score : ${puntuacio}`)
        return missatge
        }

        this.#marcador.push(marcadorResultat(game, jugador, score))

    }

    getMarcador() {
        console.log(this.#marcador.join(''))
        return this.#marcador.join('')
    }
}