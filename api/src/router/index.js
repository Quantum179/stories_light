import Router from 'koa-router'

import storyRouter from './story'
import { addRouters } from '../utils/router'

const router = new Router({prefix: '/api/v1'})

addRouters(router, [
  storyRouter
])

export default router