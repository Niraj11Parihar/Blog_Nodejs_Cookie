const mongoose = require('mongoose');

require('dotenv').config();
const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('DB connected');
})
db.on('disconnected',()=>{
    console.log('DB disconnected');
})
db.on('error',(error)=>{
    console.log('DB connection error:'+error);
})

module.exports = db;