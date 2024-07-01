const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model')

const app = express();

app.use(express.json())



// app.listen(3000, () => {
//   console.log(`server is running on prot 3000`)
// })


app.get('/', (req, res) => {
  res.send("Hello from node api  ")
})


app.post('/api/products', async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product)
  }catch(err){
    res.status(500).json({message: err.message})
  }
});


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


