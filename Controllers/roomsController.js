const db = require("../models");

module.exports = {

    findAll: function(req, res){
        db.Room
        .find(req.query)
        .sort({ _id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    findRoom: function(req, res){
        db.Room
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

     createRoom: function (req, res){
         db.Room
         .create(req.body)
         .then(dbModel => res.json(dbMdoel))
         .catch(err => res.status(422).json(err));
     },

    updateRoom: function (req, res) {
        var newTenant = db.Profile.find({ _id: req.params.id }, req.body)
        db.Room.update(
            { _id: roomId },
            { $addToSet: { Tenants: newTenant }}
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}