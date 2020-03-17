import Router from 'koa-router'
import { getStories } from './handlers'

const router = new Router({prefix: '/stories'})

router.get('/', getStories)

export default router