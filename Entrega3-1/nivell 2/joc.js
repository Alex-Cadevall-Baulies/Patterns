const Jugadors = require("./jugadors.js")

class Marcador {

    constructor() {
        this.marcador = []
        this.playerBase = []

        Object.freeze(this.marcador);
        Object.freeze(this);
        Marcador.instance = this
    }

    newPlayer({newPlayer}) {
        this.playerBase.push({newPlayer})
        console.log(this.playerBase)
    }
}

module.exports = Marcador