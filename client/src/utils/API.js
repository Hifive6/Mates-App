import axios from "axios";
const baseUrl = "http://localhost:3002";

export default {
  // Gets user profile...
  getProfile: function(id) {
    return axios.get("/api/profiles/profile" + id);
  },

  //Gets room with a specific id...
  getRoom: function(id) {
      return axios.get("/api/rooms/room" + id);
  },
  // Get all rooms....so user can join a room...
  getRooms: function() {
      return axios.get("/api/rooms/room");
  },

  //Saves a room to the database
  saveRoom: function(rooms) {
    return axios.post("/api/rooms/room", rooms )
  },
  
  // Saves a profile to the database
  saveProfile: function(userProfiles) {
    return axios.post(`${baseUrl}/api/profiles/profile`, userProfiles);
  },

  saveMessages: function(roomId, messages) {
    return axios.post(`${baseUrl}/api/rooms/${roomId}`, messages)
  },
  
  getMessage: function() {
    return axios.get(`${baseUrl}/api/rooms/room`)
  }
};