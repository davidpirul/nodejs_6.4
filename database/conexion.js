const { Pool } = require('pg');

const config = {
    host: 'postgresql-davidpirul.alwaysdata.net',
    user: 'davidpirul',
    password: 'Davidpirul1993!',
    database: 'davidpirul_likeme',
    port: 5432,
    allowExitOnIdle: true
};

const client = new Pool(config);

module.exports = client;