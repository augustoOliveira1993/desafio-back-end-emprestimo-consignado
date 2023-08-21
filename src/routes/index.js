const routes = require('express').Router();
const customerRoutes = require('./customer.routes');
const loanTypeRoutes = require('././loantype.routes');

routes.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'API rodando!'
    });
});

routes.use('/customers', customerRoutes);
routes.use('/loan-type', loanTypeRoutes);

module.exports = routes
