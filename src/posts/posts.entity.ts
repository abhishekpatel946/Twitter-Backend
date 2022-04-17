import { MooBaseEntity } from 'src/commons/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { UserEntity } from 'src/users/users.entity';

@Entity('posts')
export class PostsEntity extends MooBaseEntity {
  @Column({ length: 255, nullable: true })
  title: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  auther: UserEntity;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json', { default: [] })
  hashtags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mentions>;

  @OneToOne(() => PostsEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPosts: PostsEntity[];

  @OneToOne(() => PostsEntity)
  @JoinColumn({ name: 'reply_to' })
  replyTo: PostsEntity[];
}

export class Mentions {
  id: string;
  name: string;
}
