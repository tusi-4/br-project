const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: true }],
  minprice: { type: Number, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
});

module.exports = mongoose.model('Product', productSchema);
