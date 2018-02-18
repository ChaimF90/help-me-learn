import knex from 'knex';
export default knex({
    client: 'mysql',
    connection: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    debug: !true
});