const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: true }],
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  extras: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
