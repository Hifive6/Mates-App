import axios from "axios";

export default {
  // Gets all books
  getProfile: function() {
    return axios.get("/api/profile");
  },
  // Gets the book with the given id
//   getUser: function(id) {
//     return axios.get("/api/user/" + id);
//   },
  // Deletes the book with the given id
//   deleteUser: function(id) {
//     return axios.delete("/api/users/" + id);
//   },
  // Saves a book to the database
  saveProfile: function(userProfiles) {
    return axios.post("/api/profiles", userProfiles);
  }
};