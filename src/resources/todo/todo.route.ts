import express from 'express';

import * as controller from './todo.controller';

const router = express.Router();

router.route('/').get(controller.getAll).post(controller.createOne);

router
  .route('/:id')
  .get(controller.getOne)
  .delete(controller.deleteOne)
  .put(controller.updateOne);

export default router;
