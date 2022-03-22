import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    // TODO: get user by username
    return `user info of username: ${param.username}`;
  }

  @Get('/:userid')
  getUserByUseriId(@Param() param): string {
    // TODO: get user by userid
    return `user info of userid: ${param.userid}`;
  }

  @Post('/')
  createNewUser(): string {
    //  TODO: create new users
    return 'create new user';
  }

  @Patch('/:userid')
  updateUser(@Param() param): string {
    // TODO: update user
    return `update user: ${param.userid}`;
  }

  @Put('/:userid/follow')
  followUser(@Param() param): string {
    // TODO: follow user
    return `your followed user: ${param.userid}`;
  }

  @Delete('/:userid/follow')
  unfollowUser(@Param() param): string {
    // TODO: unfollow user
    return `your unfollowed user: ${param.userid}`;
  }

  @Get('/:userid/followers')
  getFollowingOfUser(@Param() param): string {
    // TODO: get followers
    return `your followers: ${param.userid}`;
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(@Param() param): string {
    // TODO: get followees
    return `your followees: ${param.userid}`;
  }
}
