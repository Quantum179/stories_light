//TODO : implement the whole migration system
// https://www.freecodecamp.org/news/how-to-automate-database-migrations-in-mongodb-d6b68efe084e/

import Migration from '../models/schemas/migrationSchema'
import { seed1 } from './seed_1' 

const currentMigration = 1

export const runMigrations = () => {
  // lastMigration = await Migration._getOne({}).sort('-seedNumber').limit(1)

  // while (currentMigration <= lastMigration.seedNumber) {
  //   console.log(`migration ${currentMigration} is running`)
  //   import(`./seed_${currentMigration}.js`)
  //   console.log(`migration's done`)
  // }
}