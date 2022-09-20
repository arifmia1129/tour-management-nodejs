const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DBConnect = () => {
    mongoose.connect(process.env.DATABASE_URI).then(() => {
        console.log("DB connect successfully");
    })
}

module.exports = DBConnect;