const Shop = require("../models/shop");
const responses = require("../apis/errors").errors;
const Axios = require("axios");
const CollectionSettings = require("../models/collectionSettings");
const FitkitProduct = require("../models/fitkitProduct");
const ABSettings = require("../models/announcementBar");
const ADSettings = require("../models/accountDetails");

module.exports = {
  collectionSettings: async (ctx, next) => {
    try {
      let { shopDetails, displayType, isEnable } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        let obj = {
          shop: shopDetails.shop,
          displayType,
          isEnable,
        };

        let res = await CollectionSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        let result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getcollectionSettings: async (ctx, next) => {
    // ctx.status = 504;
    // ctx.body = { type: "test" };

    try {
      let { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        let collectionSettings = await CollectionSettings.findOne({
          shop: shopDetails.shop,
        });
        console.log(collectionSettings);
        let result = responses.OK;
        result.data = collectionSettings;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
    // return;
  },

  ABSettings: async (ctx, next) => {
    try {
      let { shopDetails, isEnable, selected_page } = ctx.request.body;
      console.log(shopDetails, isEnable);
      if (shopDetails.shop && shopDetails.accessToken) {
        let obj = {
          shop: shopDetails.shop,
          isEnable,
          selected_page,
        };

        let res = await ABSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        let result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getABSettings: async (ctx, next) => {
    try {
      let { shopDetails } = ctx.request.body;
      console.log(shopDetails.shop, shopDetails.accessToken);
      if (shopDetails.shop && shopDetails.accessToken) {
        let annocementData = await ABSettings.findOne({
          shop: shopDetails.shop,
        });
        console.log(annocementData);
        let result = responses.OK;
        result.data = annocementData;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  ADSSettings: async (ctx, next) => {
    try {
      let { shopDetails, isEnable } = ctx.request.body;
      console.log(shopDetails, isEnable);
      if (shopDetails.shop && shopDetails.accessToken) {
        let obj = {
          shop: shopDetails.shop,
          isEnable,
        };

        let res = await ADSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        let result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getADSSettings: async (ctx, next) => {
    try {
      let { shopDetails } = ctx.request.body;
      console.log(shopDetails.shop, shopDetails.accessToken);
      if (shopDetails.shop && shopDetails.accessToken) {
        let account_details = await ADSettings.findOne({
          shop: shopDetails.shop,
        });
        console.log(account_details);
        let result = responses.OK;
        result.data = account_details;
        return (ctx.body = result);
      } else {
        let result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      let result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },
};
