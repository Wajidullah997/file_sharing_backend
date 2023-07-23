const mongoose = require('mongoose');
require('dotenv').config();
function connectDB(){
    // database connection
    mongoose.connect(process.env.MONG_CONNECTION_URL, {
      
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected.')
    });
    connection.on('error', (err) => {
        console.error('Connection failed:', err.message);
      });
};
module.exports = connectDB;


