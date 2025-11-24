import { db } from '../config/db_connect.js';
const Todo = {
    findAll: () => db('todos').select('*'),
    findByPk: (id) => db('todos').where({ id }).first(),
    create: (data) => db('todos').insert(data).returning('*'),
    update: (id, data) => db('todos').where({ id }).update(data).returning('*'),
    destroy: (id) => db('todos').where({ id }).del()
};

export default Todo;

