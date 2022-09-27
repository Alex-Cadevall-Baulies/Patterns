export class Jugadors {
    constructor() {
        this.#player = {
            username : "username",
            email : "email",
            userID : () => {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (i = 0; i < 6; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength))
                }
                return result;
            }
        };
    }

    getAll() {
        return this.#player
    }

    get(value) {
        return this.#player[value]
    };

    setChanges(username, email) {
        this.#player.username = username;
        this.#player.email = email
    }
}