const mongoose = require("mongoose");

const fitkitSettingsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    // new

    pdpFontColor: {
      type: String,
      trim: true,
    },
    pdpFontSize: {
      type: Number,
      trim: true,
    },
    pdpIconColor: {
      type: String,
      trim: true,
    },
    pdpIconSize: {
      type: Number,
      trim: true,
    },
    pdpBackgroundColor: {
      type: String,
      trim: true,
    },
    //end

    fontColor: {
      type: String,
      trim: true,
    },
    fontSize: {
      type: Number,
      trim: true,
    },
    checkboxColor: {
      type: String,
      trim: true,
    },
    fontType: {
      type: String,
      trim: true,
    },
    linkColor: {
      type: String,
      trim: true,
    },
    linkSize: {
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

const fitkitSettings = mongoose.model("fitkitSettings", fitkitSettingsSchema);

module.exports = fitkitSettings;
