/*
## app.js crida a les classes creades:
- Registra jugadors
- Sap quins jugadors estan jugant
- Guarda punts al marcador
*/
import { Jugadors } from "./jugadors.js";

const registerPlayer =  (username, email) => {
    let player = {
        "userId" : userID = () => {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            return result + this.players.length;
        },
        "username" : username,
        "email" : email
    };

    this.players.push(player)
    console.log(player)
    console.log(this.players.join(''))
    return player
};