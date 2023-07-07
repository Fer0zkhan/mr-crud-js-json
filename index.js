require("dotenv").config();

const {
  getAllUsers,
  getUserByID,
  createNewUser,
  editUser,
  deleteUser,
} = require("./utils");

const url = `${process.env.URL}/users`;

// Get All Users
getAllUsers(url);

// Get User by ID
getUserByID(url, 1);

// Create New User
const newUser = {
  name: "John New",
  email: "johnNew@example.com",
  age: 18,
  dateOfBirth: "12-12-1996",
  address: {
    city: "Karachi",
    state: "KPK",
    zipCode: "123",
  },
};

createNewUser(url, newUser);

// Update a User
const user = {
  name: "John Edit",
  email: "johnEdit@example.com",
  age: 18,
  dateOfBirth: "12-12-1996",
  address: {
    city: "Karachi",
    state: "KPK",
    zipCode: "123",
  },
};

editUser(url, 4, user);

// Delete User
deleteUser(url, 13);
