import { User, Story, Serie } from '../models'
import paragraphes from './mocks/paragraphes'

export const seed1 = () => {
  let user = new User({
    "name": {"first": "Quantum", "last": "Universe"},
    "username": "Quantum",
    "roles": ["Admin"],
    "email": "testmail@gmail.com",
    "password": "testpass"
  })
  
  user.save(function (err, user) {
    if(err) return
    console.log(user._id)

    let story1 = new Story({
      "title": "La singularité magique",
      "author": user._id,
      "keywords": ["Quête"],
      "preface": {
        "text": `Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.
        Il devra mener une quête, accompagné d'autres Elms choisis`
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphes
      }]
    })
  
    let story2 = new Story({
      "title": "La singularité magique",
      "author": user._id,
      "keywords": ["Quête"],
      "preface": {
        "text": `Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.
        Il devra mener une quête, accompagné d'autres Elms choisis`
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphes
      }]
    })


    story1.save((err, story) => {
      console.log('story 1')
    })

    story2.save((err, story) => {
      console.log('story 1')
    })
    
  })
}