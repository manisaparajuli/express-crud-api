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

app.get('/api/products', async(req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

app.get('/api/product/:id', async(req, res) => {
  try{
    const {id}  = req.params ;
    const product = await Product.findById(id);
    res.status(200).json(product)
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

//update a product
app.put('/api/product/:id', async(req, res) => {

  try{
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body);
    if(!product) throw new Error(`Cannot find any product related to ${id} `)
    
    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct);
  }
  catch(err)
  {
    res.status(500).json({message: err.message})
  }

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


