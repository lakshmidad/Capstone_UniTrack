const db = require('../config/db');

// User Model functions
const createUser = async (name, email, hashedPassword, role) => {
    const result = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, email, hashedPassword, role]
    );
    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

module.exports = {
    createUser,
    findUserByEmail
};
