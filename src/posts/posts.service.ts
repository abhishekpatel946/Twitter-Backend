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
   * @description create post
   */
  async createPost(post: Partial<PostsEntity>): Promise<PostsEntity> {
    return this.postsRepository.save(post);
  }

  /**
   * @description update post by id
   * @param id
   */
  async updatePost(
    id: string,
    newPostDetails: Partial<PostsEntity>,
  ): Promise<PostsEntity> {
    const existingPost = await this.postsRepository.findOne({ where: { id } });

    if (!existingPost) return null;

    await this.postsRepository.update(existingPost.id, newPostDetails);
  }

  /**
   * @description delete post by id
   */
  async deletePost(id: string): Promise<boolean> {
    const deleteResult = await this.postsRepository.delete({ id });
    return deleteResult.affected === 1;
  }

  /**
   * @description like post by id
   * @param id
   */
  async likePost(id: string): Promise<boolean> {
    const post = await this.postsRepository.findOne(id);
    if (!post) {
      return false;
    }
    post.likeCount += 1;
    await this.postsRepository.save(post);
    return true;
  }

  /**
   * @description unlike post by id
   * @param id
   */
  async unlikePost(id: string): Promise<boolean> {
    const post = await this.postsRepository.findOne(id);
    if (!post) {
      return false;
    }
    post.likeCount -= 1;
    await this.postsRepository.save(post);
    return true;
  }
}
