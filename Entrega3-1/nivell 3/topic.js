class Topic {

    constructor(title, user, content) {

        this.topic = [{
            "titol": title,
            "creador": user,
            "descripció": content,
            "subscripcions": [],
            "comentaris": []
        }]

        console.log(`${this.topic.titol}, creat!`)

    }

    addMessage(user, message){

        let newMessage = {
            'username': user,
            'message': message
        }
        
        this.topic.comentaris.push(newMessage)
        console.log(`Missatge registrat ${user}!`)
    }

    checkTopic(){
        console.log(this.topic)
    }

    subscribe(user){
        this.topic.subscriptions.push(user)

        console.log(`${user}, t'has subscrit correctament a ${this.topic.titol}`)
    }

}
module.exports = Topic