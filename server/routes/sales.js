const router = require('express').Router();
const controller = require('../controllers/sales');

// CRUD
router
    .get('/', controller.getAll)
    .get('/:uuid', controller.getOne)
    .post('/', controller.createOne)
    .put('/:uuid', controller.updateOne)
    .delete('/:uuid', controller.deleteOne);

module.exports = router;
