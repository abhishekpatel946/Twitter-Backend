import { Injectable } from '@nestjs/common';
import { PostsEntity } from 'src/posts/posts.entity';
import { PostsRepository } from 'src/posts/posts.repository';

export class HashtagsEntity {
  name: string;
  count: number;
}

@Injectable()
export class HashtagsService {
  constructor(private postRepo: PostsRepository) {}

  /**
   * @description get all hashtags
   * @returns
   */
  async getAllHashtags(): Promise<any> {
    const posts = await this.postRepo.find();
    const hashtags = posts.reduce((acc, post) => {
      post.hashtags.forEach((hashtag) => {
        if (!acc[hashtag]) {
          acc[hashtag] = 1;
        } else {
          acc[hashtag] += 1;
        }
      });
      return acc;
    }, {});
    return hashtags;
  }

  /**
   * @description get posts by hashtag
   * @param tag
   */
  async getPostsByTag(tag: string): Promise<PostsEntity[]> {
    const posts = await this.postRepo.find();
    const postsByTag = posts.filter((post) => {
      return post.hashtags.includes(tag);
    });
    return postsByTag;
  }
}
