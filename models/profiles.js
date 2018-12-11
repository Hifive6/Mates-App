const mongoose = require("mongoose");
const Schema = mongoose.Schema
//const passportLocalMongoose = require("passport-local-mongoose")

const profileSchema = new Schema ({
    
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: { 
                type: String, 
                unique: true,
                required: true,
                validate: [
                    function(input){
                        return input.length >= 6;
                    }
                ]
            },
    firstName: {
            type: String,
            required: true,
            unique: true,
            // // validate: [
            // //     function(input){
            // //         return input.length >= 10;
            // //     }
            // ],
    },
    lastName: {
            type: String,
            unique: true,
            // required: true,
            // validate: [
            //     function(input){
            //         return input.length >= 10;
            //     }
            // ],
    },
    emergencyContact:{
            type: String,
            unique: true,
            // required: true,
            // validate: [
            //     function(input){
            //         return input.length >= 10;
            //     }
            // ],
    },
    relationToTenants:{
            type: String,
            unique: true,
            // require: true,
            // validate: [
            //     function(input){
            //         return input.length >= 10;
            //     }
            // ],
    },
    phoneNumber: {
        type: String,
        unique: true,
        // required: true,
        // validate: [
        //         function(input){
        //             return input.length >= 10;
        //         }
        //     ],
    },
    tenantsOfRooms: {
                type: Array,
                unique: true
    },
    adminsOfRooms: {
                type: Array,
                unique: true
            },
    defaultRoom: {
                type: String,
                unique: true
                //required: true,
    }
});

const Profile = mongoose.model("Profile", profileSchema);

//Profile.plugin(passportLocalMongoose)

module.exports = Profile;