const mongoose = require('mongoose')
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to niru db')
  })
  .catch((err) => console.log(err))