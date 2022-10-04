const Jugadors = require("./jugadors.js")
const Marcador = require("./joc.js");
const data = require("./data.json")

const player = new Jugadors()

let username = data.username
let email = data.email

let newPlayer = player.registerPlayer({username, email});
let playerArray = new Marcador()
playerArray.newPlayer({newPlayer})

/*
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
