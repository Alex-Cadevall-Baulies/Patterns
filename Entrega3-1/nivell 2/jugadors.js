export class Jugadors {
    constructor() {
        this.players = []
    };

    getAll() {
        console.log(this.players.join(''))
        return this.players.join('')
    };

    setChanges(index, username, email) {
        this.player[index].username = username;
        this.player[index].email = email
    };
}