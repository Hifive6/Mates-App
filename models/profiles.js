const mongoose = require("mongoose");
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

profileSchema = new Schema ({
    user: { 
            type: String, 
            required: true,
            validate: [
                function(input){
                    return input.length >= 10;
                }
            ]
    },
    password: { 
                type: String, 
                required: true,
                validate: [
                    function(input){
                        return input.length >= 10;
                    }
                ]
            },
    firstName: {
            type: String,
            required: true,
            validate: [
                function(input){
                    return input.length >= 10;
                }
            ],
    },
    lastName: {
            type: String,
            required: true,
            validate: [
                function(input){
                    return input.length >= 10;
                }
            ],
    },
    emergencyContact:{
            type: String,
            required: true,
            validate: [
                function(input){
                    return input.length >= 10;
                }
            ],
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
        validate: [
                function(input){
                    return input.length >= 10;
                }
            ],
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    tenantsOfRooms: {
                type: Array
    },
    adminsOfRooms: {
                type: Array
            },
});

const Profile = mongoose.model("Profile", profileSchema);

Profile.plugin(passportLocalMongoose)

module.exports = Profile;