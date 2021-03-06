import {
  Body,
  CacheKey,
  CacheTTL,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty() username: string;
  @ApiProperty() password: string;
  @ApiPropertyOptional() name: string;
  @ApiPropertyOptional() avatar: string;
  @ApiPropertyOptional() bio: string;
}

export class UserUpdateRequestBody {
  @ApiPropertyOptional() name: string;
  @ApiPropertyOptional() avatar: string;
  @ApiPropertyOptional() bio: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @CacheKey('getUserByUsername')
  // @CacheTTL(60)
  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUsersByUsername(username);

    if (!user) {
      throw new NotFoundException(`user with username: ${username} not found`);
    }
    return user;
  }

  // @CacheKey('getUserByUserid')
  // @CacheTTL(60)
  @Get('/:userid')
  async getUserByUseriId(@Param('userid') userid: string): Promise<any> {
    const user = await this.userService.getUsersByUserId(userid);

    if (!user) {
      throw new NotFoundException(`user with userid: ${userid} not found`);
    }
    return user;
  }

  @Post('/')
  async createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.createNewUser(
      createUserRequest,
      createUserRequest.password,
    );
    return user;
  }

  @Patch('/:userid')
  async updateUserDetails(
    @Param('userid') userid: string,
    @Body() updatedUserRequest: UserUpdateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.updateUser(userid, updatedUserRequest);
    return user;
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

  @CacheKey('getFollowingOfUser')
  @CacheTTL(60)
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
