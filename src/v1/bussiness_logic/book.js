const Book = require('../models/Book.model')

module.exports.uploadBook = async (req, res, next) => {
  const {
    title,
    subtitle,
    description,
    remarks,
    numberOfAuthors,
    bookUrl,
    author,
    category,
  } = req.body

  const authorId = req.decoded.id
  try {
    const newBook = Book({
      title: title,
      subtitle: subtitle,
      description: description,
      remarks: remarks,
      numberOfAuthors: numberOfAuthors,
      bookUrl: bookUrl,
      author: author,
      authorId: authorId,
      initialization: true,
      review: false,
      proofing: false,
      readyToPublish: false,
      published: false,
      category: category,
    })

    const bookUploaded = await newBook.save()
    const book = bookUploaded._doc
    res.status(200).send({ book })
  } catch (error) {
    res.send({ message: error.message })
  }
}

module.exports.getAuthorBooks = async (req, res, next) => {
  const authorId = req.decoded.id
  const books = await Book.find({ authorId: authorId }).lean()
  if (!books) {
    res.send({
      message: 'No Books  Available',
    })
  }
  res.status(200).send(books)
}
module.exports.getAllBooks = async (req, res, next) => {
  const books = await Book.find().lean()
  if (!books) {
    res.send({
      message: 'No Books  Available',
    })
  }
  res.status(200).send(books)
}
