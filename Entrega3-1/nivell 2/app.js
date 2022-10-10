const Jugador = require("./jugador.js")
const Marcador = require("./joc.js");
const data = require("./data.json")



const player = new Jugador(data.player1.username, data.player1.email)
const player2 = new Jugador(data.player2.username, data.player2.email)
const player3 = new Jugador(data.player3.username, data.player3.email)

const marcador = new Marcador
marcador.addScore("badminton", player, 10)
marcador.addScore("badminton", player, 20)
marcador.addScore("badminton", player2, 15)
marcador.addScore("escacs", player2, 1)
marcador.addScore("badminton", player3, 5)
marcador.addScore("escacs", player3, 0)

console.log(marcador.scoreboard)

marcador.findWinner()