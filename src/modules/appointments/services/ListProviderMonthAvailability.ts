import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProvidersMonthAvailability {
  constructor(
    @inject('AppointmentsRepository')
    private appointsmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({ provider_id, year, month }: IRequest): Promise<IResponse> {
    const appointsments = await this.appointsmentsRepository.findAllInMonthFromProvider({
      provider_id,
      year,
      month,
    });

    return appointsments;
  }
}

export default ListProvidersMonthAvailability;
