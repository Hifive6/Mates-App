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
         .create(req.bodoy)
         .then(dbModel => res.json(dbMdoel))
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
    },

    updateMessages: function(req, res){
              db.Room
              .findOneAndUpdate({ _id: req.params.id }, req.body)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          }
          
    


}