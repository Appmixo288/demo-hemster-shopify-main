const mongoose = require("mongoose");

const popupSettingsSchema = mongoose.Schema({
    shop: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    // headingFontColor: {
    //     type: String,
    //     trim: true
    // },
    // headingFontSize: {
    //     type: Number,
    //     trim: true
    // },
    // titleFontColor: {
    //     type: String,
    //     trim: true
    // },
    // titleFontSize: {
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
    isEnable: {
        type: Boolean
    },
    createdAt: {
        type: Number,
        trim: true
    },
    updatedAt: {
        type: Number,
        trim: true
    }
}, { timestamps: { currentTime: () => new Date().getTime() } });

const popupSettings = mongoose.model("popupSettings", popupSettingsSchema);

module.exports = popupSettings;