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

        constructor.prototype = {
            subscribe: function (user) {
                this.topic.subscriptors.push(user)
                console.log(`${user}, t'has subscrit correctament a ${this.topic.titol}`)
        
                this.topic.subscriptors.forEach((subscriptors) => {console.log(`Hola ${subscriptors}, ${user} s'ha subscrit`)})
            }
    
        }

    }

    addMessage(user, message){

        let newMessage = {
            'username': user,
            'message': message
        }
        
        this.topic.comentaris.push(newMessage)
        console.log(`Nou registrat per ${user}!`)

        this.topic.subscriptors.forEach((subscriptors) => {console.log(`Hola ${subscriptors}, ${user} ha registrat el seguent comentari: ${message}`)})
    }

    checkTopic(){
        console.log(this.topic)
    }
}

module.exports = Topic