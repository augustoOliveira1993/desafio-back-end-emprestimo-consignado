const CustomerRepository = require('../repositories/CustomerRepository');
const LoanTypeRepository = require('../repositories/LoanTypeRepository');
const {BadRequestError, AppError} = require("../errors/AppError");
class CustomerService {
    constructor() {
        this.repository = CustomerRepository;
        this.leanTypeRepository = LoanTypeRepository;
    }

    async create(data) {
        return await this.repository.create(data)
    }

    async index() {
        return await this.repository.index()
    }

    async show(id) {
        return await this.repository.show(id)
    }

    async update(id, data) {
        await this.repository.update(id, data)
        return {
            success: true,
            message: 'Cliente atualizado com sucesso'
        }
    }

    async destroy(id) {
        await this.repository.destroy(id)
        return {
            success: true,
            message: 'Cliente deletado com sucesso'
        }
    }

    async analize(data) {
        let customerExist = await this.repository.findByDocument(data.document)

        if (!customerExist) {
            customerExist = await this.repository.create(data)
        }

        if (customerExist) {
            await this.repository.update(customerExist.id, data)
            customerExist = await this.show(customerExist.id)
        }

        const loans = []

        if ((data.income <= 300000) || (data.income > 300000 && data.income <= 500000 && data.age < 30 && data.location === 'SP')) {
            loans.push(await this.leanTypeRepository.findByType('PERSONAL'))
        }

        if (data.income >= 500000) {
            loans.push(await this.leanTypeRepository.findByType('CONSIGNMENT'))
        }

        if ((data.income <= 300000) || (data.income > 300000 && data.income <= 500000 && data.age < 30 && data.location === 'SP')) {
            loans.push(await this.leanTypeRepository.findByType('GUARANTEED'))
        }
        return {
            customer: customerExist.name,
            loans
        }
    }
}

module.exports = new CustomerService();
