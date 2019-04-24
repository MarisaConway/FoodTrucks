const Trucks = require('../controllers/trucks');
module.exports = function(app){
    app.get("/trucks", Trucks.getAll);
    app.post("/trucks", Trucks.create);
    app.delete("/trucks/:_id", Trucks.delete);

}