const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
  res.send("Hello from node api  ")
})

mongoose.connect('mongodb+srv://manisaparajuli66:manisaparajuli66@backenddb.dz24xdo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('connected to db')
    app.listen(3000, () => {
      console.log(`server is running on prot 3000`)
    })
  })
  .catch(() => {
    console.log('connection failed')
  })


