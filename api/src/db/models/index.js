import mongoose from 'mongoose'

import PostSchema from './schemas/postSchema'
import StorySchema from './schemas/storySchema'
import ChronicleSchema from './schemas/chronicleSchema'
import UserSchema from './schemas/userSchema'
import ChapterSchema from './schemas/chapterSchema'
import ParagraphSchema from './schemas/paragraphSchema'
import CommentSchema from './schemas/commentSchema'
import ReadingSchema from './schemas/readingSchema'
import DefinitionSchema from './schemas/definitionSchema'
import SerieSchema from './schemas/serieSchema'
import MigrationSchema from './schemas/migrationSchema'

export let Post, Story, Chronicle,
    Serie,
    User,
    Definition,
    Chapter, 
    Paragraph,
    Comment,
    Reading,
    Migration


export const loadModels = () => {
  Post = mongoose.model('Post', PostSchema)
  Story = Post.discriminator('Story', StorySchema)
  Chronicle = Post.discriminator('Chronicle', ChronicleSchema)
  Serie = mongoose.model('Serie', SerieSchema)
  User = mongoose.model('User', UserSchema)
  Definition = mongoose.model('Definition', DefinitionSchema)
  Chapter = mongoose.model('Chapter', ChapterSchema)
  Paragraph = mongoose.model('Paragraph', ParagraphSchema)
  Comment = mongoose.model('Comment', CommentSchema)
  Reading = mongoose.model('Reading', ReadingSchema)
  Migration = mongoose.model('Migration', MigrationSchema)
}