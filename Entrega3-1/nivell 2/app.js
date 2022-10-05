const Jugador = require("./jugador.js")
const Marcador = require("./joc.js");
const data = require("./data.json")



const player = new Jugador(data.player1.username, data.player1.email)
const player2 = new Jugador(data.player2.username, data.player2.email)



/*
let playerArray = new Marcador
playerArray.add(newPlayer)
console.log(playerArray);

const newScore = (game, username, score) => {
    const jugador = this.playerBase.filter((username) => { return username.username })

    const marcadorResultat = (game, jugador, score) => {
        let missatge = (`joc: ${joc} | user : ${jugador} | score : ${puntuacio}`)
        console.log(`puntuació registrada`)
        return missatge
    }

    this.marcador.push(marcadorResultat(game, jugador, score))
    console.log(missatge)
}

const findPlayer = (username) => {
    let checkedPlayer = this.playerBase.find((player) => {
        player.username === username

        if (player.username !== username) { console.log(`Jugador ${username} no trobat. Pendent de registrar`) 
        return null}
    })
    
    console.log(checkedPlayer)
}

const checkPlayerList = () => {
    console.log(this.playerBase.join(''))
    return this.playerBase.join('')
}

const checkScoreBoard = () => {
        console.log(this.marcador.join(''))
        return this.marcador.join('')
    }*/
