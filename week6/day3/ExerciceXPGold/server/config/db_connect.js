import knex from 'knex';
export const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '0000',
        database: 'postgres'
    }
});
