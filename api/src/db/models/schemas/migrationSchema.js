import { Schema } from 'mongoose'

let MigrationSchema = new Schema(
  {
    seedNumber: Number
  }
)

export default MigrationSchema