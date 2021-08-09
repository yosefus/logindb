const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductsSchema = new Schema({
  id: { type: String, unique: true, required: true, index: true },
  name: { type: String, required: true },
  category: String,
  quantity: Number,
  kosher: Boolean,
  company: String,
});

const Product = model('product', ProductsSchema);
module.exports = Product;
