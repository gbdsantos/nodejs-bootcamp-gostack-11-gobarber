import ISendDTO from '../dtos/ISendEmailDTO';

export default interface IMailProvider {
  sendMail(data: ISendDTO): Promise<void>;
}
