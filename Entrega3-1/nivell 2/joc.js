const Jugadors = require("./jugador.js")

class Marcador {

    constructor() {
        this.scoreboard = []

        Object.freeze(this);
        Marcador.instance = this

    }

    addScore(game, player, score) {
        let marcador = {
            "joc": game,
            "jugador": player.username,
            "puntuacio": score
        }

        this.modifyScore(marcador)
    }

    modifyScore(marcador) {

        if (this.scoreboard.length === 0) {
            this.scoreboard.push(marcador)
        }

        else {
            this.scoreboard.find((data) => {
                if (data.joc === marcador.joc && data.jugador === marcador.jugador) {
                    data.puntuacio = data.puntuacio + marcador.puntuacio;
                }

                else {
                    this.scoreboard.push(marcador)
                    return marcador
                }
            })
        }
    }

    findWinner() {
        let winner = []

        
    }
}



module.exports = Marcador