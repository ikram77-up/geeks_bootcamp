import "dotenv/config";
const config = {
    developpement: {
        client: 'pg',
        connection: {
            host: process.env.PGHOST,
            port: process.env.PGPORT,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE
        },
        migrations: {
            directory: './database/migrations'
        },
        pool: {
            min: 2,
            max: 10
        }
    }
}
export default config;
