interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'gbsantos.it@gmail.com',
      name: 'Guilherme da GoBarber'
    }
  }
} as IMailConfig;
