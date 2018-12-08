const db = require("../models");

module.exports = {

    findAllProfiles: function(req, res){
        db.Profile
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findbyID: function(req, res) {
        db.Profile
        .findByID(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
     },

     findById: function(req, res){
        db.Profile
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updateProfile: function (req, res) {
        var newRoom = db.Room.find({ _id: req.params.id }, req.body)
        db.Profile.update(
            { _id: ProfileId },
            { $addToSet: { tenantsOfRooms: newRoom }}
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}
