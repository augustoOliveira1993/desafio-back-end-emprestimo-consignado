const LoanTypeRepository = require('../repositories/LoanTypeRepository');
const {BadRequestError, AppError} = require("../errors/AppError");
class LoanTypeService {
    constructor() {
        this.repository = LoanTypeRepository;
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
            message: 'Loan Type atualizado com sucesso'
        }
    }

    async destroy(id) {
        await this.repository.destroy(id)
        return {
            success: true,
            message: 'Loan Type deletado com sucesso'
        }
    }

}

module.exports = new LoanTypeService();
