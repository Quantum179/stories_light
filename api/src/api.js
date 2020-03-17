import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import '@babel/polyfill'

import router from './router'
import { initDatabase } from './db'

const api = new Koa()
const port = process.env.PORT || 8080

// Configuration
//app.use(cors())
api.use(bodyParser())

// Database 
if(!module.parent) initDatabase()

// Router
api.use(router.routes())
api.use(router.allowedMethods())

// Run app
if(!module.parent) api.listen(port)
console.log('Server running on port : ' + port)

export default api