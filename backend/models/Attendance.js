const db = require('../config/db');

// Attendance Model functions
const markAttendance = async (eventID, studentID, status) => {
    const result = await db.query(
        'INSERT INTO attendance (eventid, studentid, attendancestatus) VALUES ($1, $2, $3) RETURNING *',
        [eventID, studentID, status]
    );
    return result.rows[0];
};

const getAttendanceByEvent = async (eventID) => {
    const result = await db.query(
        'SELECT * FROM attendance WHERE eventid = $1',
        [eventID]
    );
    return result.rows;
};

module.exports = {
    markAttendance,
    getAttendanceByEvent
};
