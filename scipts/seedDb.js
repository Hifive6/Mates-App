const mongoose = require('mongoose');
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/MatesApp1DB",
    {
        useMongoClient: true
    }
);

const profileSeed = [
    {
        email: "Hiho@how.com",
        password: "jones57",
        firstName: "Joe",
        lastName: "Smith",
        emergencyContact: "Mary Smith",
        relationToTenant: "Wife",
        phoneNumber: 9098987765,
    },
    {
        email: "TreeTopper@how.com",
        password: "Somethingelse34",
        firstName: "GeorgeOf",
        lastName: "TheJungle",
        emergencyContact: "Mary Ann",
        relationToTenant: "Wife",
        phoneNumber: 3245679080,
    },
    {
        email: "Myroom89@mates.com",
        password: "Thisisgreat90",
        firstName: "Jasmin",
        lastName: "West",
        emergencyContact: "Jose West",
        relationToTenant: "Brother",
        phoneNumber: 9155650238,
    }
];

db.Profile
    .then(() => db.Profile.collection.insertMany(profileSeed))
    .then(data => {
        console.log(data.insertedIds.length + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });