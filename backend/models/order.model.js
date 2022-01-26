const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartSummary: [
    {
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      price: { type: Number, required: true },
      extras: { type: String },
    },
  ],
  client: {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
  },
});

module.exports = mongoose.model('Order', orderSchema);
