import axios from "axios";

export default {
<<<<<<< HEAD
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

=======
  // Gets user profile...
  getProfile: function() {
    return axios.get("/api/profile" + id);
  },

  //Gets room with a specific id...
  getRoom: function() {
      return axios.get("/api/rooms" + id);
  },
  // Get all rooms....so user can join a room...
  getRooms: function() {
      return axios.get("/api/rooms");
  },

  //Saves a room to the database
  saveRoom: function(rooms) {
    return axios.post("/api/rooms", rooms )
  },
  
  // Saves a profile to the database
  saveProfile: function(userProfiles) {
    return axios.post("/api/profile", userProfiles);
  }
>>>>>>> 67e2540a4bfc1668391406219b403c1298261491
};