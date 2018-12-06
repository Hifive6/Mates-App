import axios from "axios";

export default {
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
};