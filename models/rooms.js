const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require("passport-local-mongoose");

const roomSchema = new Schema({
    nameOfRoom: {
        type: String,
        //require: true,
        // validate: [
        //     function(input){
        //         return input.length >= 10;
        //     }
        // ]
    },
    nameOfAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        //require: true,
        // validate: [
        //     function(input){
        //         return input.length >= 10;
        //     }
        // ]
    },
    messagesForRoom: {
        type: mongoose.Schema.Types.ObjectId,
        //require: true,
        // validate: [
        //     function(input){
        //         return input.length >= 10;
        //     }
        // ]
    },
    tenants: {
        type: Array,
    }
});

const Room = mongoose.model("Room", roomSchema);

//Room.plugin(passportLocalMongoose);

module.exports = Room;