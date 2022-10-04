class Jugadors {
    constructor() {
        this.players = []
    };

    registerPlayer({ username, email }) {
        let player = {
            "userId": this.userID(),
            "username": username,
            "email": email
        };

        this.players.push(player)
        console.log("jugador creat: " + JSON.stringify(player))
        return player
    };

    userID() {
        let result = '';
        let i = 0
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        const userId = result + 0 + this.players.length
        return userId;
    }

    getAll() {
        console.log(this.players.join(''))
        return this.players.join('')
    };

    setChanges(index, username, email) {
        this.player[index].username = username;
        this.player[index].email = email
    };
}

module.exports = Jugadors