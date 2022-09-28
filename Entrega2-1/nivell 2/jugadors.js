export class Jugadors {
    constructor() {
        this.#players = []
    }

    newPlayer (username, email) {
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

        this.#players.push(player)
        return player
    }

    getAll() {
        console.log(this.#players)
        return this.#players
    }

    getPlayerByIndex(value) {
        console.log(this.#player[value])
        return this.#player[value]
    };

    getPlayerByUsername(username){
        let searchedPlayer = this.#players.filter(username)

        console.log(searchedPlayer)
        return searchedPlayer
    }

    setChanges(index, username, email) {
        this.#player[index].username = username;
        this.#player[index].email = email
    }
}