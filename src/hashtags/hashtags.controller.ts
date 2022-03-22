import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: get hashtags from database
    return 'This action returns all hashtags';
  }

  @Get('/:tag/posts')
  getPostsByTag(@Param() param): string {
    // TODO: get posts by tag from database
    return `This action returns all posts by tag: ${param.tag}`;
  }
}
