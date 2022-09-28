import { Jugadors } from "./jugadors.js";

export class Marcador {

    constructor() {
        this.marcador = []
        this.playerBase = this.players

        Object.freeze(this.marcador);
        Object.freeze(this);
        Marcador.instance = this
    }
}