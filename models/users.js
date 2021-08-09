const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, trim: true, lowercase: true, required: true, minLength: 3 },
  last_name: { type: String, trim: true, lowercase: true, required: true, minLength: 3 },
  mail: { type: String, unique: true, trim: true, lowercase: true, required: true },
  password: { type: String, trim: true, required: true, select: false, minLength: 8 },
  phone: { type: String, unique: true, trim: true, minLength: 7, maxLength: 12 },
  lastSeen: { type: Date },
  token: { type: String, select: false },
});

const UserModel = model('user', userSchema);

module.exports = UserModel; //export

// status: { type: String, enum: ['on', 'off', 'out'], default: 'on' },
// isMarried: Boolean,
// age: Number,
// creationDate: Date,
// notes: [String],
// addres: { city: String, street: String, streetNum: Number },
