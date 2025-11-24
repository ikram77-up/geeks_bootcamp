import db from "../config/db.js";

export const getAllUsers = () => db("users").select("*");

export const getUserById = (id) => db("users").where({ id }).first();

export const getUserByUsername = (username) => db("users").where({ username }).first();

export const createUser = async (user, hashedPassword) => {
    return db.transaction(async (trx) => {
        const [newUser] = await trx("users")
            .insert({
                email: user.email,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
            })
            .returning("*");

        await trx("hashpwd").insert({
            username: user.username,
            password: hashedPassword,
        });

        return newUser;
    });
};

export const updateUser = (id, data) => db("users").where({ id }).update(data).returning("*");