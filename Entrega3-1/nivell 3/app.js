const Topic = require("./topic.js");
const User = require("./user.js");
const data = require("./data.json")

const userOne = new User('Renata')
const userTwo = new User('Eustaquio')
const userThree = new User('Loretta')

const topicOne = new Topic(data.topic1.title, userOne, data.topic1.content)
const topicTwo = new Topic(data.topic2.title, userThree, data.topic2.content)

topicOne.subscribe(userTwo)
topicOne.addMessage(userTwo, 'Totalment en desacord, clarament no has llegir prou ornitologia')
topicOne.checkTopic()
topicTwo.checkTopic()