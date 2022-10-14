const pg = require('pg');

const client = new pg.Client('postgresql://argonaute:argonaute@localhost/argonaute');

client.connect();

module.exports = client;
