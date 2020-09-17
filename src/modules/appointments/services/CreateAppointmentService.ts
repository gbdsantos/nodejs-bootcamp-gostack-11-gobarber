import { getHours, isBefore, startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

/**
 * Repositório do TypeORM
 * [x] Recebimento das informações
 * [x] Tratativa de erros/excessões
 * [x] Acesso ao repositório
 */

interface IRequest {
  provider_id: string;
  user_id: string;
  date: Date;
}

@injectable()
class CreateAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({ date, provider_id, user_id }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    /** 💡 The user cannot schedule an appointment that has passed **/
    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError("You can't create an appointment on a past date.")
    }

    /** 💡 The user cannot schedule appointment with himself **/
    if (user_id === provider_id) {
      throw new AppError("You can't create an appointment with yourself.")
    }

    /** 💡 Appointments must be available between 8 am and 6 pm (First at 8 am, last at 5 pm) **/
    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 17) {
      throw new AppError("You can only create appointments between 8am and 5pm.");
    }

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentsService;
