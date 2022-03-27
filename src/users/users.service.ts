import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepo: UsersRepository,
    private authService: AuthService,
  ) {}

  /**
   * @description find a user by username
   * @param username
   * @returns
   */
  public async getUsersByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { username } });
  }

  /**
   * @description find a user by userid
   * @param userId
   * @returns
   */
  public async getUsersByUserId(userId: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { id: userId } });
  }

  /**
   * @description create a new user with given details
   * @param user
   * @returns
   */
  public async createNewUser(
    user: Partial<UserEntity>,
    password: string,
  ): Promise<UserEntity> {
    const newUser = await this.userRepo.save(user);

    await this.authService.createPasswordForNewUser(newUser.id, password);

    return newUser;
  }

  /**
   * @description update a user with given details
   * @param userId
   * @param user
   * @returns
   */
  public async updateUser(
    userid: string,
    newUserDetails: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOne({
      where: { id: userid },
    });
    if (!existingUser) return null;
    await this.userRepo.update(existingUser.id, newUserDetails);
  }
}
