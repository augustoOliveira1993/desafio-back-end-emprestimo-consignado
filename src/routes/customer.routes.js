const routes = require('express').Router();

const CustomerController = require('../controllers/CustomerController');

routes.get('/', CustomerController.index);
routes.get('/:id', CustomerController.show);
routes.post('/', CustomerController.create);
routes.put('/:id', CustomerController.update);
routes.delete('/:id', CustomerController.destroy);

// analize de emprestimo
routes.post('/loans', CustomerController.analize);

module.exports = routes;
