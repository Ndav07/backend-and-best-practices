import { Router } from 'express';

import { usersRouter } from './users.route';
import { placeRouter } from './place.route';

const router = Router();

router.use('/user', usersRouter);
router.use('/place', placeRouter);

export { router };
