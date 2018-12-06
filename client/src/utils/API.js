import axios from "axios";

export default {
    getProfiles: function(){
        return axios.get("/api/profiles")
    },

    getProfile: function(id) {
        return axios.get("/api/profiles" + id);
    },
    getRoom: function(){
        return axios.get("/api/rooms")
    },
    getRoom: function(id) {
        return axios.get("/api/rooms" + id);
    },
    saveProfile: function(profileData) {
        return axios.post("/api/profiles", profileData)
    },
    saveRoom: function(roomData){
        return axios.post("/api/rooms", roomData)
    }

};