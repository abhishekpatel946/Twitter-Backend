import {
  Body,
  CacheKey,
  CacheTTL,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Mentions, PostsEntity } from './posts.entity';
import { PostsService } from './posts.service';

export class PostCreateRequestBody {
  @ApiProperty() title: string;
  @ApiProperty() images: Array<string>;
  @ApiProperty() hashtags: Array<string>;
  @ApiProperty() mentions: Array<Mentions>;
  @ApiProperty() author: string;
}

export class PostUpdateRequestBody {
  @ApiProperty() title: string;
  @ApiProperty() images: Array<string>;
  @ApiProperty() hashtags: Array<string>;
  @ApiProperty() mentions: Array<Mentions>;
}

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  // @CacheKey('getAllPosts')
  // @CacheTTL(60)
  @Get('/')
  async getAllPosts(): Promise<Array<PostsEntity>> {
    const posts = await this.postService.getAllPosts();

    if (!posts) {
      throw new NotFoundException(`posts not found`);
    }
    return posts;
  }

  // @CacheKey('getPostsByUserId')
  // @CacheTTL(60)
  @Get('/:postid')
  async getPostById(@Param('postid') postid: string): Promise<PostsEntity> {
    const post = await this.postService.getPost(postid);

    if (!post) {
      throw new NotFoundException(`post of postid: ${postid} not found`);
    }
    return post;
  }

  @Post('/')
  async createNewPost(
    @Body() createPostRequest: PostCreateRequestBody,
  ): Promise<PostsEntity> {
    const newPost = await this.postService.createPost(createPostRequest);
    return newPost;
  }

  @Patch('/:postid')
  async updatePost(
    @Param('postid') postid: string,
    @Body() updatePostRequest: PostUpdateRequestBody,
  ): Promise<PostsEntity> {
    const updatePost = this.postService.updatePost(postid, updatePostRequest);
    return updatePost;
  }

  @Delete('/:postid')
  deletePostById(@Param('postid') postid: string): Promise<boolean> {
    const deletePost = this.postService.deletePost(postid);
    return deletePost;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): Promise<boolean> {
    const likePost = this.postService.likePost(postid);
    return likePost;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postid: string): Promise<boolean> {
    const unlikePost = this.postService.unlikePost(postid);
    return unlikePost;
  }
}
