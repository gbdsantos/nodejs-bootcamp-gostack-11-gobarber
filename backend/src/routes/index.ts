import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: '🚀 Server has started on port 3333!' });
});

export default routes;
