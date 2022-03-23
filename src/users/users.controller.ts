import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    // TODO: get user by username
    return `user info of username: ${username}`;
  }

  @Get('/:userid')
  getUserByUseriId(@Param('userid') userid: string): string {
    // TODO: get user by userid
    return `user info of userid: ${userid}`;
  }

  @Post('/')
  createNewUser(): string {
    //  TODO: create new users
    return 'create new user';
  }

  @Patch('/:userid')
  updateUser(@Param('userid') userid: string): string {
    // TODO: update user
    return `update user: ${userid}`;
  }

  @Put('/:userid/follow')
  followUser(@Param('userid') userid: string): string {
    // TODO: follow user
    return `your followed user: ${userid}`;
  }

  @Delete('/:userid/follow')
  unfollowUser(@Param('userid') userid: string): string {
    // TODO: unfollow user
    return `your unfollowed user: ${userid}`;
  }

  @Get('/:userid/followers')
  getFollowingOfUser(@Param('userid') userid: string): string {
    // TODO: get followers
    return `your followers: ${userid}`;
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(@Param('userid') userid: string): string {
    // TODO: get followees
    return `your followees: ${userid}`;
  }
}
