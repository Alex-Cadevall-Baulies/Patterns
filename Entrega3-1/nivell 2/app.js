import { Jugadors } from "./jugadors.js";
import { Marcador } from "./joc.js";

const registerPlayer = (username, email) => {
    let player = {
        "userId": userID = () => {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            return result + this.players.length;
        },
        "username": username,
        "email": email
    };

    this.players.push(player)
    console.log(`jugador creat: ${player}`)
    return player
};

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
    }
