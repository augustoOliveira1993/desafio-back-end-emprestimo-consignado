const routes = require('express').Router();

const LoanTypeController = require('../controllers/LoanTypeController');

routes.get('/', LoanTypeController.index);
routes.get('/:id', LoanTypeController.show);
routes.post('/', LoanTypeController.create);
routes.put('/:id', LoanTypeController.update);
routes.delete('/:id', LoanTypeController.destroy);

module.exports = routes;
