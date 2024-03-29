const CustomerService = require('../services/CustomerService');

class CustomerController {
    constructor() {
        this.service = CustomerService;

        this.create = this.create.bind(this);
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
        this.analize = this.analize.bind(this);
    }

    async create(req, res) {
        const results = await this.service.create(req.body);
        return res.status(200).json(results);
    }

    async index(req, res) {
        const results = await this.service.index();
        return res.status(200).json(results);
    }

    async show(req, res) {
        const {id} = req.params;
        const results = await this.service.show(id);
        return res.status(200).json(results);
    }

    async update(req, res) {
        const {id} = req.params;
        const results = await this.service.update(id, req.body);
        return res.status(200).json(results);
    }

    async destroy(req, res) {
        const {id} = req.params;
        const results = await this.service.destroy(id);
        return res.status(200).json(results);
    }

    async analize(req, res) {
        const results = await this.service.analize(req.body);
        return res.status(200).json(results);
    }
}

module.exports = new CustomerController();
