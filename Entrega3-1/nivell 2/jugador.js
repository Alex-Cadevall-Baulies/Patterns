class Jugador {
    constructor (username, email) {
        this.player = {
            "userId": this.userID(),
            "username": username,
            "email": email
        };

        console.log("jugador creat: " + JSON.stringify(player))
        return player
    };

    userID() {
        let result = '';
        let i = 0
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result;
    }
}

module.exports = Jugador