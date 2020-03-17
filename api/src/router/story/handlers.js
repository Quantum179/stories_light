import { Story } from "../../db/models"

export const getStories = async (ctx, next) => {
  console.log('test')
  ctx.body = await Story._getMany()
  next()
}