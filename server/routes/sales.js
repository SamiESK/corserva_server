const controller = require('../controllers/sales');
const router = require('express').Router();

//CRUD
router
  .get('/', controller.getAll)
  .get('/:uuid', controller.getOne)
  .post('/', controller.createOne)
  .put('/:uuid', controller.updateOne)
  .delete('/:uuid', controller.deleteOne);

module.exports = router;
