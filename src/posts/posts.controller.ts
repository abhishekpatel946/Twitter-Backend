import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    // TODO: get all posts
    return 'get all posts';
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid: string): string {
    // TODO: get post by postid
    return `post info of postid: ${postid}`;
  }

  @Post('/')
  createNewPost(): string {
    // TODO: create new post
    return 'create new post';
  }

  @Delete('/:postid')
  deletePostById(@Param('postid') postid: string): string {
    // TODO: delete post by postid
    return `delete post of postid: ${postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): string {
    // TODO: like post
    return `like post of postid: ${postid}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postid: string): string {
    // TODO: unlike post
    return `unlike post of postid: ${postid}`;
  }
}
