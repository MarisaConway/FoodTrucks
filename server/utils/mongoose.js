const mongoose = require("mongoose");

module.exports = function(db_name) {
    mongoose.connect(`mongodb://localhost/${db_name}`); //db_name here could be anything...it has to be DB_NAME when I pass it in.
    require('../models/truck');
}
