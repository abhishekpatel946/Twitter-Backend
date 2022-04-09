import { Injectable } from '@nestjs/common';
import { PostsEntity } from './posts.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  /**
   * @description find all posts
   */
  async getAllPosts(): Promise<Array<PostsEntity>> {
    return this.postsRepository.find();
  }

  /**
   * @description find post by id
   */
  async getPost(id: string): Promise<PostsEntity> {
    return this.postsRepository.findOne(id);
  }

  /**
   * @description delete post by id
   */
  async deletePost(id: string): Promise<boolean> {
    const deleteResult = await this.postsRepository.delete({ id });
    return deleteResult.affected === 1;
  }

  /**
   * @description create post
   */
  async createPost(post: PostsEntity): Promise<PostsEntity> {
    return this.postsRepository.save(post);
  }
}
