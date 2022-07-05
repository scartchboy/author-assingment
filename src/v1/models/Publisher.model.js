const mongoose = require('mongoose')

const Publisher = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    organization: { type: String, required: true, unique: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Publishers', Publisher)
