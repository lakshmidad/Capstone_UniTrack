const db = require('../config/db');

// Event Model functions
const createEvent = async (title, description, dateTime, venue, createdBy, maxParticipants) => {
    const result = await db.query(
        'INSERT INTO events (title, description, datetime, venue, createdby, maxparticipants) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [title, description, dateTime, venue, createdBy, maxParticipants]
    );
    return result.rows[0];
};

const getAllEvents = async () => {
    const result = await db.query('SELECT * FROM events ORDER BY datetime ASC');
    return result.rows;
};

module.exports = {
    createEvent,
    getAllEvents
};
