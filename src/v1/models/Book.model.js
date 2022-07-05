const mongoose = require('mongoose')

const Book = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    subtitle: { type: String },
    category: { type: String, required: true },
    description: { type: String },
    remarks: { type: Number },
    numberOfAuthors: { type: Number, required: true },
    bookUrl: { type: String, required: true },
    initialization: { type: Boolean, required: true },
    review: { type: Boolean, required: true },
    proofing: { type: Boolean, required: true },
    readyToPublish: { type: Boolean, required: true },
    published: { type: Boolean, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', Book)
