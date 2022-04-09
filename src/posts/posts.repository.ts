import { EntityRepository, Repository } from 'typeorm';
import { PostsEntity } from './posts.entity';

@EntityRepository(PostsEntity)
export class PostsRepository extends Repository<PostsEntity> {}
