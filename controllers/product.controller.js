const Product = require('../models/product.model')

const getProducts = async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product)
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getProduct = async (req, res) =>{
  try{
    const {id}  = req.params ;
    const product = await Product.findById(id);
    res.status(200).json(product)
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const updateProduct = async(req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id);
    if(!product) throw new Error("Product is not available");
    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const createProduct = async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (err){
    res.status(500).json({message: err.message})
  }
}

const deleteProduct = async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) throw new Error("product not available")
    res.status(200).json("Product deleted successfully")
  } catch (error) {
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct
}