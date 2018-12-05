const db = require("../models");

module.exports = {

    findOne: function(req, res){

        db.Room.aggregate({$unwind: tenants}, {$match: {$in: [userID]}});
    }
}