import { injectable, inject } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

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
  ) { }

  public async execute({ provider_id, day, month, year }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointsmentsRepository.findAllInDayFromProvider({
      provider_id,
      year,
      month,
      day,
    });

    return appointments;
  }
}

export default ListProviderAppointmentService;
