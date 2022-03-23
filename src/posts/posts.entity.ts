import { MooBaseEntity } from 'src/commons/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { UserEntities } from 'src/users/users.entity';

@Entity('posts')
export class PostsEntity extends MooBaseEntity {
  @Column({ length: 255, nullable: true })
  title: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @ManyToOne(() => UserEntities)
  @JoinColumn({ name: 'author_id' })
  auther: UserEntities;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json', { default: [] })
  hastags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mentions>;

  @OneToOne(() => PostsEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPosts: PostsEntity[];

  @OneToOne(() => PostsEntity)
  @JoinColumn({ name: 'reply_to' })
  replyTo: PostsEntity[];
}

class Mentions {
  id: string;
  name: string;
}
