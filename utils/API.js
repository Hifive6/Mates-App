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
    }
}