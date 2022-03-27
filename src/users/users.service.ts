import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}

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
  public async createNewUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.userRepo.save(user);
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
