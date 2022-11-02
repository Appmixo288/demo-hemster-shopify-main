const mongoose = require("mongoose");

const fitkitProductSchema = mongoose.Schema({
  shop: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  fitkitProductId: {
    type: String,
    trim: true,
  },
  fitkitProductHandle: {
    type: String,
    trim: true,
  },
  fitkitProductVariantId: {
    type: String,
    trim: true,
  },
  applyByPrice: {
    type: Boolean,
    trim: true,
  },
  byPrice: {
    type: Number,
    trim: true,
  },
  createdAt: {
    type: Number,
    trim: true,
  },
  updatedAt: {
    type: Number,
    trim: true,
  },
});

const fitkitProduct = mongoose.model("fitkitProduct", fitkitProductSchema);

module.exports = fitkitProduct;
