const mongoose = require('mongoose');
const Truck = mongoose.model("Truck");

class Trucks {
    getAll(req, res){
        Truck.find({}, (err, trucks) => {
            if(err){
                console.log(err);
            }
            res.json({status: "ok", trucks: trucks}); // can just do trucks but one is the variable name the key and then the other is the value which is coming from the arguments.
        });
    }
    delete(req, res){
        Truck.findByIdAndDelete({_id: req.params._id}, err => {
            if(err){
                console.log(err);
            }
            res.json({status: "ok"});

        } ) //The computer knows this is mongoose!
    }

    create(req, res){
        let truck = new Truck(req.body);
        truck.save( err => {
            if(err){
                res.json({status: "not ok", errors: errors});
            } else {
                res.json({status:"ok"});
            }

        })
    }
}

module.exports = new Trucks();