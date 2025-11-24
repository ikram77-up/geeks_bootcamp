import knex from "knex";
import config from "./knex.js";

const environment = process.env.NODE_ENV || "developpement";
const db = knex(config[environment]);

export default db;