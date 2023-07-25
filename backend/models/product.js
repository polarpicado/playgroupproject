const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

productSchema.methods.removeProduct = function() {
  return this.remove();
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
