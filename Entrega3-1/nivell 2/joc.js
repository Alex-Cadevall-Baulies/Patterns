const Jugadors = require("./jugador.js")

class Marcador {

    constructor(game, player, score) {

        let marcador = {
            "joc": game,
            "jugador": player.username,
            "puntuacio": score
        }

        this.scoreboard = []
        modifyScore(marcador)

        console.log(this.scoreboard)

        Object.freeze(this);
        Marcador.instance = this
    }

    modifyScore(marcador) {
        this.scoreboard.find((data) => {
            if (data.joc === marcador.joc && data.username === marcador.username) {
                data.score = data.score + marcador.score
            }
            else {
                this.scoreboard.push(marcador)
            }
        }
        )
    }
}

module.exports = Marcador