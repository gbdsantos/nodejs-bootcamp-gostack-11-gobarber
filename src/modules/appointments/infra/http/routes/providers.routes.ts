import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ListProviderDayAvailability from '@modules/appointments/infra/http/controllers/ListProviderDayAvailabilityController';
import ListProviderMonthAvailability from '@modules/appointments/infra/http/controllers/ListProviderMonthAvailabilityController';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', ProvidersController.index);

providersRouter.get('/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    }
  }),
  ListProviderMonthAvailability.index);

providersRouter.get('/:provider_id/day-availability', celebrate({
  [Segments.PARAMS]: {
    provider_id: Joi.string().uuid().required(),
  }
}), ListProviderDayAvailability.index);

export default providersRouter;
