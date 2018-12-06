import axios from "axios";

export default {
  // Gets user profile
  getProfile: function() {
    return axios.get("/api/profile" + id);
  },

  //Gets room with a specific id
  getRoom: function() {
      return axios.get("/api/room" + id);
  },
  // Get all rooms....so user can join a room...
  getRooms: function() {
      return axios.get("/api/room");
  },

  //Saves a room to the database
  saveRoom: function(rooms) {
    return axios.post("/api/room", rooms )
  },
  
  // Saves a profile to the database
  saveProfile: function(userProfiles) {
    return axios.post("/api/profile", userProfiles);
  }
};