const mongoose = require("mongoose");
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

profileSchema = new Schema ({
    user: { type: String, required: true},
    password: { type: String, required: true},
    tenantsofrms: {type: []},
    adminofrms: {type: []},

});

const Profile = mongoose.model("Profile", profileSchema);

Profile.plugin(passportLocalMongoose)

module.exports = Profile;