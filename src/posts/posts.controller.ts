import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    // TODO: get all posts
    return 'get all posts';
  }

  @Get('/:postid')
  getPostById(@Param() param): string {
    // TODO: get post by postid
    return `post info of postid: ${param.postid}`;
  }

  @Post('/')
  createNewPost(): string {
    // TODO: create new post
    return 'create new post';
  }

  @Delete('/:postid')
  deletePostById(@Param() param): string {
    // TODO: delete post by postid
    return `delete post of postid: ${param.postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param() param): string {
    // TODO: like post
    return `like post of postid: ${param.postid}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param() param): string {
    // TODO: unlike post
    return `unlike post of postid: ${param.postid}`;
  }
}
