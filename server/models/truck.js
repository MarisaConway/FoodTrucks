const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, "Make is required"],
        minlength: [3, "Make must be three characters or longer."]
    },

    model: {
        type: String,
        required: [true, "Model is required"],
        minlength: [3, "Model must be three characters or longer."]
    },

    year: {
        type: Number,
        required: [true, "Year is required"]
    }


}, {timestamps: true});

mongoose.model('Truck', TruckSchema);