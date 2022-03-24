import { EntityRepository, Repository } from 'typeorm';
import { UserEntities } from './users.entity';

@EntityRepository(UserEntities)
export class UsersRepository extends Repository<UserEntities> {}
