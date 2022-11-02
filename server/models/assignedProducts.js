const mongoose = require("mongoose");

const assignedProductsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    collections: {
      type: Array,
      trim: true,
    },
    productIds: {
      type: Array,
      trim: true,
    },
    tags: {
      type: Array,
      trim: true,
    },
    productTypes: {
      type: Array,
      trim: true,
    },
    applyByPrice: {
      type: Boolean,
      trim: true,
      default: false,
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
  },
  { timestamps: { currentTime: () => new Date().getTime() } }
);

const products = mongoose.model("assignedProducts", assignedProductsSchema);

module.exports = products;
