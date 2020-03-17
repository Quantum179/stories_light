import mongoose from 'mongoose'
import ChapterSchema from './chapterSchema'

const Schema = mongoose.Schema

const options = { 
  discriminatorKey: 'type', 
  timestamps: true,
  id: true
} // TODO Quantum : delete role field in result queries

let StorySchema = new Schema (
  {
    serie: { type: Schema.Types.ObjectId, ref: 'Serie'},
    serieNumber: Number,
    chapters: [{type: ChapterSchema, required: true}]
  },
  options
)

export default StorySchema