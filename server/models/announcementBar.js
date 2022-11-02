const mongoose = require("mongoose");

const ABSettingsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    selected_page: {
      type: Array,
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

const ABSettings = mongoose.model("ABSettings", ABSettingsSchema);

module.exports = ABSettings;
