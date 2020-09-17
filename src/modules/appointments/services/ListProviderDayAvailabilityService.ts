import { injectable, inject } from 'tsyringe';
import { getHours, isAfter } from 'date-fns';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointsmentsRepository: IAppointmentsRepository,
  ) { }


  /** 💡DOCS: BUSINESS RULES (BR)
  * ✔️ The user cannot schedule at an already busy time;
  * ✔️ The user cannot schedule an appointment that has passed;
  * [] The user cannot schedule services with himself.
  * **/
  public async execute({ provider_id, year, month, day }: IRequest): Promise<IResponse> {
    const appointments = await this.appointsmentsRepository.findAllInDayFromProvider({
      provider_id,
      year,
      month,
      day,
    });

    const hourStart = 8;

    const eachHourArray = Array.from({ length: 10 }, (_, index) => index + hourStart,);

    const currentDate = new Date(Date.now());

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(appointment =>
        getHours(appointment.date) === hour,

      );

      const compareDate = new Date(year, month - 1, day, hour);

      return {
        hour,
        available: !hasAppointmentInHour && isAfter(compareDate, currentDate),
      }
    });

    return availability;
  }
}

export default ListProviderDayAvailabilityService;
