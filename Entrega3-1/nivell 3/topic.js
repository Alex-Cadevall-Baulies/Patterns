class Topic {

    constructor(title, user, content) {

        this.topic = {
            "titol": title,
            "creador": user,
            "descripció": content,
            "subscriptors": [user],
            "comentaris": []
        }

        console.log(`Nou tema: ${this.topic.titol}, creat!`)
    }

    subscribe(user) {
        this.topic.subscriptors.push(user)
        console.log(`${JSON.stringify(user)}, t'has subscrit correctament a ${this.topic.titol}`)

        this.topic.subscriptors.forEach((subscriptors) => { console.log(`Hola ${JSON.stringify(subscriptors)}, ${JSON.stringify(user)} s'ha subscrit`) })
    }

    addMessage(user, message) {

        let newMessage = {
            'username': user,
            'message': message
        }

        this.topic.comentaris.push(newMessage)
        console.log(`Nou comentari registrat per ${JSON.stringify(user)}!`)

        this.topic.subscriptors.forEach((subscriptors) => { console.log(`Hola ${JSON.stringify(subscriptors)}, ${JSON.stringify(user)} ha registrat el seguent comentari: ${message}`) })
    }

    checkTopic() {
        console.log(JSON.stringify(this.topic))
    }
}

module.exports = Topic