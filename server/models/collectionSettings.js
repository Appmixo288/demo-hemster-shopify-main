const mongoose = require("mongoose");

const collectionSettingsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    displayType: {
      type: String,
      trim: true,
      enum: ["option1", "option2", "option3", "option4"],
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

const collectionSettings = mongoose.model(
  "CollectionSettings",
  collectionSettingsSchema
);

module.exports = collectionSettings;
