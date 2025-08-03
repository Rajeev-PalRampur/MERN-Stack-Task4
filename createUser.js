const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/task4db');

const UserSchema = new mongoose.Schema({ email: String, password: String });
const User = mongoose.model('User', UserSchema);

async function createUser() {
const hashedPassword = await bcrypt.hash("password123", 10);
await User.create({ email: "test@example.com", password: hashedPassword });
  console.log("User created successfully!");
  mongoose.disconnect();
}

createUser();
