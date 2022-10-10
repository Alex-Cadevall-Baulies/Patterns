class Topic {

    constructor(title, user, content) {

        this.topic = [{
            "titol": title,
            "creador": user,
            "descripció": content,
            "comentaris": []
        }]

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

}
module.exports = Topic