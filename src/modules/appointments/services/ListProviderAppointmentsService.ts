import { injectable, inject } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointsmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    const cache_key = `provider-appointments:${provider_id}:${year}-${month}-${day}`;

    // 💡 Search on the cache
    let appointments = await this.cacheProvider.recover<Appointment[]>(
      cache_key,
    );

    // Case not exists, search on the database
    if (!appointments) {
      appointments = await this.appointsmentsRepository.findAllInDayFromProvider(
        {
          provider_id,
          year,
          month,
          day,
        },
      );

      console.log('Buscou do banco');

      await this.cacheProvider.save(cache_key, appointments);
    }

    return appointments;
  }
}

export default ListProviderAppointmentService;
