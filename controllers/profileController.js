const db = require("../models");

module.exports = {

    findProfile: function(req, res){
        db.Profile
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

     createProfile: function (req, res){

        db.Profile
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
     }

     

}