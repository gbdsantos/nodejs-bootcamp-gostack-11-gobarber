import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      await this.cacheProvider.save(`providers-list:${user_id}`, classToClass(users));
    }

    return users;
  }
}

export default ListProvidersService;
