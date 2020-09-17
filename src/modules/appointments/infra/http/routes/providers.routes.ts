import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import LisProviderDayAvailability from '@modules/appointments/infra/http/controllers/ListProviderDayAvailabilityController';
import LisProviderMonthAvailability from '@modules/appointments/infra/http/controllers/ListProviderMonthAvailabilityController';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', ProvidersController.index);
providersRouter.get('/:provider_id/month-availability', LisProviderDayAvailability.index);
providersRouter.get('/:provider_id/day-availability', LisProviderMonthAvailability.index);

export default providersRouter;
