const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        require: true,
        minLength: [3, "Tour name must be at least 3 character!"],
        maxLength: [100, "Tour name is too large"]
    },
    photo: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true,
        minLength: [10, "Description must be at least 3 character!"],
        maxLength: [150, "Description is too large!"]
    },
    price: {
        type: Number,
        require: true,
        min: [0, "Price can't be negative!"]
    },
    time: {
        type: Number,
        require: true,
        min: [0, "Time can't be negative!"]
    },
    timeType: {
        type: String,
        require: true,
        enum: {
            values: ["day", "week", "month", "year"],
            message: "Time type must be day/week/month/year"
        }
    },
    viewCount: {
        type: Number,
        default: 0,
        min: [0, "View count can't be negative"]
    }
}, {
    timestamps: true
})


const Tour = mongoose.model("Tour", tourSchema);


module.exports = Tour;