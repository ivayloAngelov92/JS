const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/Gaming-Team'  // Да се смени името на базата според заданието.

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log('Database connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
} 