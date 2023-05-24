import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureAdmin from '../middlewares/ensureAdmin';
import CreatePlaceController from '../controllers/place/create/CreatePlace.controller';
import GetPlacesController from '../controllers/place/get/GetPlaces.controller';
import DeletePlaceController from '../controllers/place/delete/DeletePlace.controller';
import UpdatePlaceController from '../controllers/place/update/UpdatePlace.controller';

const placeRouter = Router();

const createPlaceController = new CreatePlaceController();
const getPlacesController = new GetPlacesController();
const deletePlaceController = new DeletePlaceController();
const updatePlaceController = new UpdatePlaceController();

placeRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createPlaceController.handle
);
placeRouter.get('/', ensureAuthenticated, getPlacesController.handle);
placeRouter.delete(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  deletePlaceController.handle
);
placeRouter.put(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  updatePlaceController.handle
);

export { placeRouter };
