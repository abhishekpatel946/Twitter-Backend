import {
  Body,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PostsEntity } from 'src/posts/posts.entity';
import { HashtagsService } from './hashtags.service';

@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  constructor(private hashtagService: HashtagsService) {}

  // @CacheKey('getHashtags')
  // @CacheTTL(60)
  @Get('/')
  async getHashtags(): Promise<any> {
    const hashtags = await this.hashtagService.getAllHashtags();
    return hashtags;
  }

  // @CacheKey('getHashtagByName')
  // @CacheTTL(60)
  @Get('/:tag/posts')
  getPostsByhashTag(@Param('tag') tag: string): Promise<PostsEntity[]> {
    const posts = this.hashtagService.getPostsByTag(tag);
    return posts;
  }
}
