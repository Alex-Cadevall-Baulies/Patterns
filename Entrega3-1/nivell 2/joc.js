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

        let puntuacio = 0

        let checkWinners = this.scoreboard.forEach((first, second) => {
            if (first.joc === second.joc && second.puntuacio > first.puntuacio || []) {
                return second
            }

            else { return first}
        })
        /*let checkWinners = this.scoreboard.reduce((first, second) => {
            if (first === null || second.puntuacio > first.puntuacio && second.joc === first.joc) {return second}
            else {return first}
        })*/

        console.log("Guanyadors: " + JSON.stringify(checkWinners))
    }
}

/* let max = 0;
characters.forEach(character => {
  if (character.id > max) {
    max = character.id;
  }
});
assert(max === 444);*/

/* const data  = []

const groupBy = (arr) => arr.reduce((acc, ele)=>( (acc[ele.name.split(' ')[0]] = acc[ele.name.split(' ')[0]] || []).push(ele), acc),{})
 
const max  =  (arr) => Math.max(...arr.map(res=>res.value))
const min  =  (arr) => Math.min(...arr.map(res=>res.value))


const result  = Object.entries(groupBy(data)).map(([key, val])=> ({name:key, min:min(val), max: max(val)}))

console.log(result);*/

module.exports = Marcador