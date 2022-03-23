import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: get hashtags from database
    return 'This action returns all hashtags';
  }

  @Get('/:tag/posts')
  getPostsByTag(@Param('tag') tag: string): string {
    // TODO: get posts by tag from database
    return `This action returns all posts by tag: ${tag}`;
  }
}
