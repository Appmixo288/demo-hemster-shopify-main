const Shop = require("../models/shop");
const responses = require("../apis/errors").errors;
const Axios = require("axios");
const FitkitProduct = require("../models/fitkitProduct");
const AssignedProducts = require("../models/assignedProducts");
const FitkitSettings = require("../models/fitkitSettings");
const PopupSettings = require("../models/popupSettings");
const ThankyouSettings = require("../models/thankyouSettings");
const CollectionSettings = require("../models/collectionSettings");
const AnnouncementBarSettings = require("../models/announcementBar");
const AccountDetailsSettings = require("../models/accountDetails");

const Shopify = require("shopify-api-node");

const callGraphQl = async (shop, token, query) => {
  const options = {
    url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    responseType: "json",
    data: query,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Axios(options);
      resolve(response.data);
    } catch (error) {
      console.log("error in graphql >>");
      reject(error.response);
      console.log(error.response);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
};

/**
 * This controller returns the themes of the given store
 * @param {String} shop shop url
 * @param {String} accessToken access token of the store
 */
const getThemeList = async (shop, accessToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiVersion = process.env.SHOPIFY_API_VERSION;
      // get url
      const url = `https://${shop}/admin/api/${apiVersion}/themes.json`;
      // headers
      const headers = {
        "X-Shopify-Access-Token": accessToken,
      };
      // get request
      const themes = (
        await Axios({
          method: "GET",
          url,
          headers,
        })
      ).data.themes;
      return resolve(themes);
    } catch (error) {
      return reject(error);
    }
  });
};

const addScript = (shop, accessToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      // get theme id

      const themeRes = await getThemeList(shop, accessToken);

      console.log("themeRes", themeRes);

      var themeid = "";

      //them-id, theme-name of main
      for (const iterator of themeRes) {
        if (iterator.role == "main") {
          themeid = iterator.id;
        }
      }
      const shopify = new Shopify({
        shopName: shop,
        accessToken,
      });

      console.log("themeid", themeid);
      // check if script is already there or not
      var assetFile = (
        await shopify.asset.get(themeid, {
          "asset[key]": "layout/theme.liquid",
        })
      ).value;

      var newContent = assetFile;

      // if script is already there do nothing

      if (
        !assetFile.includes(
          `src="${process.env.HOST_NAME}/hook/script/store-front`
        )
      ) {
        const content = `<!-- hemster -->
      <script id="hemster" src="${process.env.HOST_NAME}/hook/script/store-front?shop=${shop}"></script>`;

        // add in the script
        const splits = assetFile.split("</body>");
        newContent =
          splits[0] + "\n" + content + "\n</body>" + splits.slice(1).join("");

        console.log("newContent", newContent);

        // change the content of that theme with the new one
        var changedCode = await shopify.asset.update(themeid, {
          key: "layout/theme.liquid",
          value: newContent,
        });

        console.log("theme customization updated", changedCode);
      }

      console.log("assetFile", newContent);

      return resolve();

      // else add cdn in the theme
    } catch (error) {
      console.log("Err", error);
      return reject(error);
    }
  });
};

// const createScriptTag = async (shop, token, url) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const options = {
//         url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/script_tags.json`,
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Shopify-Access-Token": token,
//         },
//         responseType: "json",
//         data: {
//           script_tag: {
//             event: "onload",
//             src: url,
//             display_scope: "order_status",
//           },
//         },
//       };

//       const response = await Axios(options);
//       resolve(response.data);
//     } catch (error) {
//       console.log("error in create script tag >>");
//       reject(error.response);
//       console.log(error.response);
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     }
//   });
// };

// const deleteScriptTag = async (shop, token, id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const options = {
//         url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/script_tags/${id}.json`,
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Shopify-Access-Token": token,
//         },
//         responseType: "json",
//       };

//       const response = await Axios(options);
//       resolve(response.data);
//     } catch (error) {
//       console.log("error in delete script tag >>");
//       reject(error.response);
//       console.log(error.response);
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     }
//   });
// };

const isAssignedProductExist = async (
  assignedProducts,
  productId,
  collections,
  productType,
  productTags
) => {
  return new Promise((resolve, reject) => {
    try {
      // console.log("check by id");
      var result = false;
      result = assignedProducts.productIds.includes(productId);

      if (result) {
        resolve(result);
      } else {
        // console.log("check by collection");
        for (const iterator of collections) {
          result = assignedProducts.collections.includes(iterator);
          if (result) {
            resolve(result);
          }
        }

        if (!result) {
          // console.log("check by product type");
          result = assignedProducts.productTypes.includes(productType);
          if (result) {
            resolve(result);
          } else {
            // console.log("check by product tags");
            for (const iterator of productTags) {
              result = assignedProducts.tags.includes(iterator);
              if (result) {
                resolve(result);
              }
            }

            resolve(result);
          }
        }
      }
    } catch (e) {
      console.log("error at 42 >> ", e);
      reject(e);
    }
  });
};

module.exports = {
  uninstalled: async (ctx, next) => {
    var { request } = ctx;

    console.log("uninstalled", request.header["x-shopify-shop-domain"]);

    var shopDomain = request.header["x-shopify-shop-domain"];

    delete global.ACTIVE_SHOPIFY_SHOPS[shopDomain];
    try {
      if (shopDomain != "" && shopDomain != undefined) {
        await Shop.findOneAndUpdate(
          { shop: shopDomain },
          {
            appstatus: "uninstalled",
            isAppEnable: false,
            charge_id: null,
          },
          { new: true }
        );
        return (ctx.status = 200);
      } else {
        return (ctx.status = 200);
      }
    } catch (e) {
      return (ctx.status = 200);
    }
  },

  shopUpdate: async (ctx, next) => {
    console.log("In shopUpdate webhhok---");

    var {
      phone,
      country_code,
      country_name,
      email,
      customer_email,
      money_format,
      currency,
      timezone,
      domain,
      zip,
      city,
      shop_owner,
    } = ctx.request.body;

    var shopDomain = domain;

    console.log("shopUpdate", shopDomain);

    try {
      if (shopDomain != "" && shopDomain != undefined) {
        const shopifyData = {
          phone,
          country_code,
          country_name,
          email,
          customer_email,
          money_format,
          currency,
          timezone,
          zip,
          city,
          shop_owner,
        };

        await Shop.findOneAndUpdate({ shop: shopDomain }, shopifyData, {
          new: true,
        });

        return (ctx.status = 200);
      } else {
        return (ctx.status = 200);
      }
    } catch (e) {
      return (ctx.status = 200);
    }
  },

  getProductTagsList: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        const query = JSON.stringify({
          query: `{
                        shop {
                          name
                          productTags(first: 250) {
                            edges {
                              node
                              cursor
                            }
                            pageInfo {
                              hasNextPage
                              hasPreviousPage
                            }
                          }
                        }
                      }
                      `,
        });

        const products = await callGraphQl(
          shopDetails.shop,
          shopDetails.accessToken,
          query
        );
        var result = responses.OK;
        result.data = products.data.shop.productTags;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 113 >> ", e);
      var result = responses.SERVER_ERROR;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getProductTypesList: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        const query = JSON.stringify({
          query: `{
                        shop {
                          name
                          productTypes(first: 250) {
                            edges {
                              node
                              cursor
                            }
                            pageInfo {
                              hasNextPage
                              hasPreviousPage
                            }
                          }
                        }
                      }
                      `,
        });

        const productTypes = await callGraphQl(
          shopDetails.shop,
          shopDetails.accessToken,
          query
        );
        var result = responses.OK;
        result.data = productTypes.data.shop.productTypes;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 113 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  createDefaultFitKitProduct: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var isFitKitProductExist = await FitkitProduct.findOne({
          shop: shopDetails.shop,
        }).select();
        if (!isFitKitProductExist) {
          const query = JSON.stringify({
            query: `  
                    mutation {
                        productCreate(input: {title: "Complimentary Tailoring via Hemster", productType: "FitKit", vendor: "Hemster", tags: ["abc"]}) {
                          product {
                            id
                          }
                        }
                      }
                      `,
          });

          const product = await callGraphQl(
            shopDetails.shop,
            shopDetails.accessToken,
            query
          );

          var obj = {
            shop: shopDetails.shop,
            fitkitProductId: product.data.productCreate.product.id,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          };

          await FitkitProduct.findOneAndUpdate(
            { shop: shopDetails.shop },
            obj,
            {
              new: true,
              upsert: true,
            }
          );
        }
        return (ctx.body = responses.OK);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 113 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getFitKitProductDetails: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var isFitKitProductExist = await FitkitProduct.findOne({
          shop: shopDetails.shop,
        }).select();
        if (isFitKitProductExist) {
          const query = JSON.stringify({
            query: `  
                        {
                            product(id: "${isFitKitProductExist.fitkitProductId}") {                              
                              collections(first: 5) {
                                edges {
                                  node {
                                    handle
                                  }
                                }
                              }
                              createdAt
                              defaultCursor
                              description
                              descriptionHtml
                              featuredImage {
                                id
                              }
                              feedback {
                                details {
                                  messages {
                                    message
                                  }
                                }
                              }
                              giftCardTemplateSuffix
                              handle
                              hasOnlyDefaultVariant
                              hasOutOfStockVariants
                              id
                              images(first: 5) {
                                edges {
                                  node {
                                    id
                                  }
                                }
                              }
                              isGiftCard
                              legacyResourceId
                              metafields(first: 5) {
                                edges {
                                  node {
                                    description
                                  }
                                }
                              }
                              onlineStorePreviewUrl
                              onlineStoreUrl
                              options {
                                name
                              }
                              priceRange {
                                maxVariantPrice {
                                  amount
                                }
                                minVariantPrice {
                                  amount
                                }
                              }
                              productType
                              publishedAt 
                              seo {
                                title
                              }
                              storefrontId
                              tags
                              templateSuffix
                              title
                              totalInventory
                              totalVariants
                              tracksInventory                              
                              updatedAt
                              variants(first: 5) {
                                edges {
                                  node {
                                    displayName
                                  }
                                }
                              }
                              vendor
                            }
                          }
                          `,
          });

          const product = await callGraphQl(
            shopDetails.shop,
            shopDetails.accessToken,
            query
          );
          var result = responses.OK;
          result.data = product.data.product;
          return (ctx.body = result);
        } else {
          ctx.body = responses.NOT_FOUND;
        }
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 113 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  updateAppStatus: async (ctx, next) => {
    try {
      var { shopDetails, isAppEnable } = ctx.request.body;
      console.log("Shop", shopDetails);
      if (
        shopDetails.shop &&
        shopDetails.accessToken &&
        isAppEnable !== undefined
      ) {
        if (isAppEnable === true) {
          try {
            await addScript(shopDetails.shop, shopDetails.accessToken);
          } catch (err) {
            console.log("Error: ", err);
          }

          await Shop.findOneAndUpdate(
            { shop: shopDetails.shop, accessToken: shopDetails.accessToken },
            { isAppEnable: isAppEnable }
          );
        } else if (isAppEnable === false) {
          await Shop.findOneAndUpdate(
            { shop: shopDetails.shop, accessToken: shopDetails.accessToken },
            { isAppEnable: isAppEnable }
          );
        }
        return (ctx.body = responses.OK);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  checkIsProductAssigned: async (ctx, next) => {

    var { shop, productIds } = ctx.request.query;
    if (productIds) {
      productIds = productIds.split(",")
    }
    var shopDetails = await Shop.findOne({ shop: shop });
    let assignedProductsArray = [];
    var assignedProducts = await AssignedProducts.findOne({ shop: shop });
    let productDetails = null;
    if (productIds && Array.isArray(productIds) && productIds.length) {
      for (let productId of productIds) {
        productId = `gid://shopify/Product/${productId}`
        let shouldDisplayFitkitProduct = false;

        if (productId) {
          const query = JSON.stringify({
            query: `{
              product(id: "${productId}") {
                id
                tags
                productType
                collections(first: 250) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }  
            `,
          });

          productDetails = await callGraphQl(
            shopDetails.shop,
            shopDetails.accessToken,
            query
          );
        }


        if (productDetails !== null) {
          var collections = [];
          var collectionsList = productDetails.data.product.collections.edges;

          if (collectionsList.length > 0) {
            for (const iterator of collectionsList) {
              collections.push(iterator.node.id);
            }
          }
          productDetails = productDetails.data.product;

          if (productId && assignedProducts && assignedProducts.productIds) {
            shouldDisplayFitkitProduct = await isAssignedProductExist(
              assignedProducts,
              productId,
              collections,
              productDetails.productType,
              productDetails.tags
            );
            if (shouldDisplayFitkitProduct) {
              assignedProductsArray.push(`${productId}`.split("gid://shopify/Product/").pop())
            }
          }
        }

      }
    }

    return ctx.body = { assignedProducts: assignedProductsArray }
  },

  assignFitkitProduct: async (ctx, next) => {
    try {
      var {
        shopDetails,
        collections,
        productIds,
        tags,
        productTypes,
        applyByPrice,
        byPrice,
      } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var obj = {
          shop: shopDetails.shop,
          collections,
          productIds,
          tags,
          productTypes,
          applyByPrice,
          byPrice: Number(byPrice),
        };

        if (collections) {
          obj.collections = collections;
        }

        if (productIds) {
          obj.productIds = productIds;
        }

        if (tags) {
          obj.tags = tags;
        }

        if (productTypes) {
          obj.productTypes = productTypes;
        }

        var res = await AssignedProducts.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        var result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getAssignedProductDetails: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var firkitProduct = await AssignedProducts.findOne({
          shop: shopDetails.shop,
        });

        var result = responses.OK;
        result.data = firkitProduct;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  fitkitSettings: async (ctx, next) => {
    try {
      var {
        shopDetails,
        // displayType,
        fontColor,
        fontSize,
        checkboxColor,
        fontType,
        linkColor,
        linkSize,
        //new

        pdpFontSize,
        pdpBackgroundColor,
        pdpFontColor,
        pdpIconSize,
        pdpIconColor
      } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var obj = {
          shop: shopDetails.shop,
          // displayType,
          fontColor,
          fontSize,
          checkboxColor,
          fontType,
          linkColor,
          linkSize,
          //new
          pdpFontSize,
          pdpBackgroundColor,
          pdpFontColor,
          pdpIconSize,
          pdpIconColor
        };

        var res = await FitkitSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        var result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getFitkitSettings: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var firkitSettings = await FitkitSettings.findOne({
          shop: shopDetails.shop,
        });

        var result = responses.OK;
        result.data = firkitSettings;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  popupSettings: async (ctx, next) => {
    try {
      var {
        shopDetails,
        // headingFontColor,
        // headingFontSize,
        // titleFontColor,
        // titleFontSize,
        // contentFontColor,
        // contentFontSize,
        // buttonFontColor,
        // buttonBackgroundColor,
        isEnable,
      } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var obj = {
          shop: shopDetails.shop,
          // headingFontColor,
          // headingFontSize,
          // titleFontColor,
          // titleFontSize,
          // contentFontColor,
          // contentFontSize,
          // buttonFontColor,
          // buttonBackgroundColor,
          isEnable,
        };

        var res = await PopupSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        var result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getPopupSettings: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var popupSettings = await PopupSettings.findOne({
          shop: shopDetails.shop,
        });

        var result = responses.OK;
        result.data = popupSettings;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  thankyouSettings: async (ctx, next) => {
    try {
      var {
        shopDetails,
        displayType,
        redirectURL,
        // headingFontColor,
        // headingFontSize,
        // contentFontColor,
        // contentFontSize,
        // buttonFontColor,
        // buttonBackgroundColor,
        // backgroundColor
      } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var obj = {
          shop: shopDetails.shop,
          displayType,
          redirectURL,
          // headingFontColor,
          // headingFontSize,
          // contentFontColor,
          // contentFontSize,
          // buttonFontColor,
          // buttonBackgroundColor,
          // backgroundColor
        };

        var res = await ThankyouSettings.findOneAndUpdate(
          { shop: shopDetails.shop },
          obj,
          {
            new: true,
            upsert: true,
          }
        );

        var result = responses.OK;
        result.data = res;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 523 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getThankyouSettings: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var thankyouSettings = await ThankyouSettings.findOne({
          shop: shopDetails.shop,
        });

        var result = responses.OK;
        result.data = thankyouSettings;
        return (ctx.body = result);
      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getStorefrontConfigs: async (ctx, next) => {
    try {
      var { shop, productId } = ctx.request.query;

      if (shop) {
        var shopDetails = await Shop.findOne({ shop: shop });
        var fitkitProducts = await FitkitProduct.findOne({ shop: shop });
        var assignedProducts = await AssignedProducts.findOne({ shop: shop });
        var fitkitSettings = await FitkitSettings.findOne({ shop: shop });
        var popupSettings = await PopupSettings.findOne({ shop: shop });
        var collectionSettings = await CollectionSettings.findOne({
          shop: shop,
        });
        var thankyouSettings = await ThankyouSettings.findOne({ shop: shop });
        var accountDetailsSettings = await AccountDetailsSettings.findOne({
          shop: shop,
        });
        var announcementBarSettings = await AnnouncementBarSettings.findOne({
          shop: shop,
        });
        var productDetails = null;

        var result = responses.OK;
        result.isAppEnable = shopDetails ? shopDetails.isAppEnable : false;
        console.log("assignedProducts--", assignedProducts);

        if (result.isAppEnable) {
          if (productId) {
            const query = JSON.stringify({
              query: `{
                product(id: "${productId}") {
                  id
                  tags
                  productType
                  collections(first: 250) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }  
              `,
            });

            productDetails = await callGraphQl(
              shopDetails.shop,
              shopDetails.accessToken,
              query
            );
          }
          result.shouldDisplayFitkitProduct = false;

          if (productDetails !== null) {
            var collections = [];
            var collectionsList = productDetails.data.product.collections.edges;

            if (collectionsList.length > 0) {
              for (const iterator of collectionsList) {
                collections.push(iterator.node.id);
              }
            }
            productDetails = productDetails.data.product;

            if (productId && assignedProducts && assignedProducts.productIds) {
              result.shouldDisplayFitkitProduct = await isAssignedProductExist(
                assignedProducts,
                productId,
                collections,
                productDetails.productType,
                productDetails.tags
              );
            }
          }

          result.fitkitSettings = fitkitSettings;
          result.fitkitProducts = fitkitProducts;
          result.popupSettings = popupSettings;
          result.thankyouSettings = thankyouSettings;
          result.abSettings = announcementBarSettings;
          result.aDSettings = accountDetailsSettings;
          result.collectionSettings = collectionSettings;
          result.priceSettings = {
            byPrice: assignedProducts && assignedProducts.byPrice,
            applyByPrice: assignedProducts && assignedProducts.applyByPrice,
          };
          result.assignedProducts = assignedProducts.productIds

        } else {
          result.fitkitSettings = {};
          result.fitkitProducts = {};
          result.popupSettings = {};
          result.thankyouSettings = {};
          result.abSettings = {};
          result.aDSettings = {};
          result.collectionSettings = {};
          result.priceSettings = {};
          result.assignedProducts = []
        }

        return (ctx.body = result);

      } else {
        var result = responses.MANDATORY_FIELDS;
        ctx.status = 400;
        ctx.body = result;
        return ctx;
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getAppStatus: async (ctx, next) => {
    try {
      var { shopDetails } = ctx.request.body;

      if (shopDetails.shop && shopDetails.accessToken) {
        var shopStatus = await Shop.findOne({ shop: shopDetails.shop }).select(
          "isAppEnable"
        );
        var result = responses.OK;
        result.data = { shopStatus: shopStatus };
        return (ctx.body = result);
      }
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  getDomain: async (ctx, next) => {
    try {
      var result = responses.OK;
      result.data = process.env.HOST_NAME;
      return (ctx.body = result);
    } catch (e) {
      console.log("error at 415 >> ", e);
      var result = responses.SERVER_ERROR;
      result.data = e;
      ctx.status = 500;
      ctx.body = result;
      return ctx;
    }
  },

  themePublish: async (ctx, next) => {
    console.log("---- Theme publish ----");

    try {
      var shopDomain = ctx.request.header["x-shopify-shop-domain"];

      const shopData = await Shop.findOne({
        shop: shopDomain,
        isAppEnable: true,
      }).select(["accessToken"]);

      if (shopData) {
        await addScript(shopDomain, shopData.accessToken);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
    return (ctx.status = 200);
  },

  test: async (ctx, next) => {
    try {
      //query to get products
      // `{
      //     products(first: 50) {
      //       edges {
      //         node {
      //           id
      //           tags
      //         }
      //         cursor
      //       }
      //       pageInfo {
      //         hasNextPage
      //         hasPreviousPage
      //       }
      //     }
      //   }
      //   `

      //query to get product tags
      // `{
      //     shop {
      //       name
      //       productTags(first: 250) {
      //         edges {
      //           node
      //           cursor
      //         }
      //         pageInfo {
      //           hasNextPage
      //           hasPreviousPage
      //         }
      //       }
      //     }
      //   }
      //   `

      //get product types
      // `{
      //     shop {
      //       name
      //       productTypes(first: 250) {
      //         edges {
      //           node
      //           cursor
      //         }
      //         pageInfo {
      //           hasNextPage
      //           hasPreviousPage
      //         }
      //       }
      //     }
      //   }
      //   `

      //create product
      // `
      //     mutation {
      //         productCreate(input: {title: "Sweet new product", productType: "FitKit", vendor: "Hemster", tags: ["abc"]}) {
      //           product {
      //             id
      //           }
      //         }
      //       }
      //       `

      const query = JSON.stringify({
        query: `  
                mutation {
                    productCreate(input: {title: "Sweet new product", productType: "FitKit", vendor: "Hemster", tags: ["abc"]}) {
                      product {
                        id
                      }
                    }
                  }
                  `,
      });

      const product = await callGraphQl(
        "appmixo-hemster.myshopify.com",
        "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",
        query
      );
      var result = responses.OK;
      result.data = product.data;
      return (ctx.body = result);
    } catch (e) {
      return (ctx.body = responses.SERVER_ERROR);
    }
  },

  chargeApproved: async (ctx, next) => {
    console.log("----chargeApproved-----", ctx.request.query);
    const { charge_id, shop } = ctx.request.query;
    await Shop.findOneAndUpdate({ shop }, { charge_id });
    ctx.redirect(`/?shop=${shop}&host=${global.shopHost[shop]}`);
  },

  appCharge: async (ctx, next) => {
    const { shop } = ctx.request.query;

    const shopData = await Shop.findOne({ shop }).select([
      "charge_id",
      "shop",
      "accessToken",
    ]);

    if (shopData.charge_id) {
      return (ctx.body = { app_charge: true });
    } else {
      const query = JSON.stringify({
        query: `mutation appPurchaseOneTimeCreate($returnUrl: URL = "${process.env.HOST_NAME}/hook/sh-app-charge?shop=${shop}") {
            appPurchaseOneTimeCreate(name: "App one time charge", price: {currencyCode: USD, amount: "${process.env.APP_CHARGE}"}, returnUrl: $returnUrl, test: ${process.env.TEST}) {
              confirmationUrl,
              appPurchaseOneTime {
                id
              }
            }
          }
          `,
      });

      const oneTimeCharge = await callGraphQl(
        shop,
        shopData.accessToken,
        query
      );
      console.log("oneTimeCharge", oneTimeCharge.data.appPurchaseOneTimeCreate);

      if (
        oneTimeCharge &&
        oneTimeCharge.data &&
        oneTimeCharge.data.appPurchaseOneTimeCreate &&
        oneTimeCharge.data.appPurchaseOneTimeCreate.confirmationUrl
      ) {
        console.log(
          "in---------------------",
          oneTimeCharge.data.appPurchaseOneTimeCreate.confirmationUrl
        );
        return (ctx.body = {
          confirmationUrl:
            oneTimeCharge.data.appPurchaseOneTimeCreate.confirmationUrl,
        });
      } else {
        return (ctx.status = 400);
      }
    }
  },

  callGraphQl,
};
