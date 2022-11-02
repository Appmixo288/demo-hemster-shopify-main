const mongoose = require("mongoose");

const AccountDetailsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    isEnable: {
      type: Boolean,
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

const AccountDetails = mongoose.model("AccountDetails", AccountDetailsSchema);

module.exports = AccountDetails;
