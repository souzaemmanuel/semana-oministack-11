const knex = require('knex');
//Arquivo de variáveis de ambiente
const configuration = require('../../knexfile');
const connection = knex(configuration.development);

module.exports = connection;
