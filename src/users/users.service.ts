import { UserEntities } from './users.entity';
import { UsersRepository } from './users.repository';

export class UsersService {
  constructor(private userRepo: UsersRepository) {}

  /**
   * @description find a user by username
   * @param username
   * @returns
   */
  public async getUsersByUsername(username: string): Promise<UserEntities> {
    return await this.userRepo.findOne({ where: { username } });
  }

  /**
   * @description find a user by userid
   * @param userId
   * @returns
   */
  public async getUsersByUserId(userId: string): Promise<UserEntities> {
    return await this.userRepo.findOne({ where: { id: userId } });
  }

  /**
   * @description create a new user with given details
   * @param user
   * @returns
   */
  public async createNewUser(
    user: Partial<UserEntities>,
  ): Promise<UserEntities> {
    return await this.userRepo.save(user);
  }
}
