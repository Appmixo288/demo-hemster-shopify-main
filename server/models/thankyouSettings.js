const mongoose = require("mongoose");

const thankyouSettingsSchema = mongoose.Schema(
  {
    shop: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      trim: true,
      default: "https://www.hemster.co",
    },
    displayType: {
      type: String,
      trim: true,
      enum: ["option1", "option2", "option3", "option4"],
    },
    // headingFontColor: {
    //     type: String,
    //     trim: true
    // },
    // headingFontSize: {
    //     type: Number,
    //     trim: true
    // },
    // contentFontColor: {
    //     type: String,
    //     trim: true
    // },
    // contentFontSize: {
    //     type: Number,
    //     trim: true
    // },
    // buttonFontColor: {
    //     type: String,
    //     trim: true
    // },
    // buttonBackgroundColor: {
    //     type: String,
    //     trim: true
    // },
    // backgroundColor: {
    //     type: String,
    //     trim: true
    // },
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

const thankyouSettings = mongoose.model(
  "thankyouSettings",
  thankyouSettingsSchema
);

module.exports = thankyouSettings;
