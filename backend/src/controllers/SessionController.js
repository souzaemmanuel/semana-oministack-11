const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { id } = request.body;

        if (!id) {
            return response.status(400).json({ error: 'ONG não encontrada' });
        }

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'ONG não encontrada' });
        }

        console.log(ong)
        return response.json(ong);
    }
}