import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from 'src/posts/posts.entity';
import { PostsRepository } from 'src/posts/posts.repository';
import { HashtagsController } from './hashtags.controller';
import { HashtagsService } from './hashtags.service';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([PostsEntity, PostsRepository]),
  ],
  controllers: [HashtagsController],
  providers: [
    HashtagsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class HashtagsModule {}
