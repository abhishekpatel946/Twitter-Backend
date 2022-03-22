import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

export class UserEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  name: string;
  avatar: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
