
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

export const db = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,

});
try {
    const connect = await db.connect();
    console.log("Database connected");
    connect.release();
} catch (error) {
    console.error("Database connection failed", error);
}

