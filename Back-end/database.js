const pg = require('pg');
require('dotenv').config();

const client = new pg.Client(process.env.PG_URL);

client.connect();

module.exports = client;
