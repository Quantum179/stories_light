import { Schema } from 'mongoose'

var SerieSchema = new Schema(
  {
    title: String,
    preface: String
  }
)

export default SerieSchema