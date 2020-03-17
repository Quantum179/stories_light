import api from '../src/api'
import chai from 'chai'
import Story from '../src/db/models/schemas/storySchema'
import mongoose from 'mongoose'
import { loadModels } from '../src/db/models'
import queryPlugin from '../src/db/models/schemas/plugins/queryPlugin'
// import { defaultMongooseFields } from '../constants'

const mongoDB = 'mongodb://localhost/stories'
const port = process.env.PORT || 8080
const expect = chai.expect
let db

mongoose.Promise = global.Promise
db = mongoose.connection
mongoose.plugin(queryPlugin)
  loadModels()
  var payload = { 
    name: 'integration test' 
  }


return mongoose.connect(mongoDB).then(function () { 

  describe('# GET /stories', () => { 
    it('should get all stories', async (done) => { 
      let stories = await Story._getMany({})
      expect(stories).to.be.an('array')
    })
  })
})
  

