import { Schema } from 'mongoose'
// import { hashPass } from '../../../utils'
// import { baseUrl } from '../../../constants'

var options = { 
  discriminatorKey: 'type', 
  timestamps: true,
   toObject: {
    virtuals: true
  }
  ,toJSON: {
    virtuals: true
  }
}

var UserSchema = new Schema (
  {
    name: {type: {first: String, last: String}, required: true},
    username: {type: String, required: true, unique: true},
    roles: [String],
    email: {type : String, required : true, unique: true},
    password: {type : String, required : true},
      //TODO Quantum : hashed password validator
    //TODO: add profile schema with notifications, readings, etcs
    readings: [{type: Schema.Types.ObjectId, ref: 'Reading'}],
    discussions: [{type: Schema.Types.ObjectId, ref: 'Discussion'}]
  },
  options
)

// Virtual fields
//  UserSchema.virtual('url').get(function(){
//   return `${baseUrl}/users/${this._id}` //TODO: add global constant
// })  

//Hooks model
// UserSchema.pre('save', function(next) {
//   hashPass(this.password)
//     .then(hash => {
//       this.password = hash
//       next()
//     })
// })

// --- EXPORT MODULE ---
export default UserSchema