const koaAuth = require("@shopify/koa-shopify-auth");
const { registerWebhook } = require("@shopify/koa-shopify-webhooks");
const Shop = require("../models/shop");
const error = require("../apis/errors");
const axios = require("axios");
const FitkitProduct = require("../models/fitkitProduct");
const FitkitSettings = require("../models/fitkitSettings");
const PopupSettings = require("../models/popupSettings");
const ThankyouSettings = require("../models/thankyouSettings");
const collectionSettings = require("../models/collectionSettings");
const ABSettings = require("../models/announcementBar");
const ADSSettings = require("../models/accountDetails");

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
      const response = await axios(options);
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

const createDefaultFitKitProduct = async (shopDetails) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (shopDetails.shop && shopDetails.accessToken) {
        let isFitKitProductExist = await FitkitProduct.findOne({
          shop: shopDetails.shop,
        }).select();
        if (!isFitKitProductExist) {
          //never change productType value from the query here it is used to show to popup in the cart page
          const query = JSON.stringify({
            query: `  
                        mutation {
                            productCreate(input: 
                                {
                                    title: "Complimentary Tailoring via Hemster", 
                                    productType: "FitKit",
                                    vendor: "Hemster", 
                                    tags: ["Fitkit Product, Hemster"],
                                    published: true,
                                    images:[
                                        {
                                          src: "${process.env.HOST_NAME}/hook/assets/main.png"
                                        },
                                        {
                                          src: "${process.env.HOST_NAME}/hook/assets/front.jpg"
                                        },
                                        {
                                          src: "${process.env.HOST_NAME}/hook/assets/back.jpg"
                                        }        
                                    ],
                                    descriptionHtml: "
                                        <div>We have teamed up with the experts at Hemster to hem your favorite garments!<br/><br/>

                                        HOW HEMSTER WORKS<br/><br/>

                                        <b>1. Receive a fit kit</b><br/>
                                        Add a FitKit to your cart at a checkout when purchasing your garments<br/><br/>

                                        <b>2. Take our Fit Quiz & get paired with your fitter</b><br/>
                                        During your Virtual Fitting a Hemster Expert will guide you through your fitting. <br/><br/>

                                        <b>3. Ship your order</b><br/>
                                        Print your shipping label and send your garments of to Hemster<br/><br/>

                                        <b>4. Enjoy your garments, now perfectly fitted to you.</b><br/>
                                        Hemster will tailor your order and your new perfect fit Pattern will be saved in your Hemster Fit Profile for your future purchases<br/>
                                        </div>
                                    "
                                }) {
                              product {
                                id,
                                handle
                                variants(first:1){
                                    edges{
                                      node{
                                        id
                                      }
                                    }
                                }
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

          let obj = {
            shop: shopDetails.shop,
            fitkitProductId: product.data.productCreate.product.id,
            fitkitProductHandle: product.data.productCreate.product.handle,
            fitkitProductVariantId:
              product.data.productCreate.product.variants.edges[0].node.id,
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
        resolve();
      }
    } catch (e) {
      console.log("error creating default fitkit product >> ", e);
      reject(e);
    }
  });
};

module.exports = koaAuth.default({
  accessMode: "offline",

  async afterAuth(ctx) {
    const { HOST_NAME } = process.env;

    const { shop, accessToken, scope } = ctx.state.shopify;
    global.ACTIVE_SHOPIFY_SHOPS[shop] = scope;
    global.shopHost[shop] = ctx.request.query.host;

    console.log("global.scopes", global.scopes);

    const scopes = [
      "read_products",
      "write_products",
      "read_themes",
      "write_themes",
    ];

    const registration = await registerWebhook({
      address: `${HOST_NAME}/hook/uninstalled`,
      topic: "APP_UNINSTALLED",
      accessToken,
      shop,
      apiVersion: process.env.SHOPIFY_API_VERSION,
    });

    if (registration.success) {
      console.log("Successfully registered webhook!");
    } else {
      console.log("Failed to register webhook", registration.result);
    }

    const shop_update = await registerWebhook({
      address: `${HOST_NAME}/hook/shop-update`,
      topic: "SHOP_UPDATE",
      accessToken,
      shop,
      apiVersion: process.env.SHOPIFY_API_VERSION,
    });

    if (shop_update.success) {
      console.log("Successfully registered webhook : shop_update!");
    } else {
      console.log("Failed to register webhook", shop_update.result);
    }

    const theme_publish = await registerWebhook({
      address: `${HOST_NAME}/hook/theme-publish`,
      topic: "THEMES_PUBLISH",
      accessToken,
      shop,
      apiVersion: process.env.SHOPIFY_API_VERSION,
    });

    if (theme_publish.success) {
      console.log("Successfully registered webhook : theme_publish!");
    } else {
      console.log(
        "Failed to register webhook. theme_publish",
        theme_publish.result
      );
    }

    if (accessToken != "" && accessToken != undefined) {
      try {
        const accessShopUrl = `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/shop.json`;

        // set header
        const request_headers = {
          "X-Shopify-Access-Token": accessToken,
        };

        const resShop = await axios({
          url: accessShopUrl,
          method: "GET",
          responseType: "json",
          headers: request_headers,
        });

        const responseShop = resShop && resShop.data && resShop.data.shop;

        if (!responseShop) return (ctx.body = error.errors.SERVER_ERROR);

        const shopifyData = {
          shop: shop,
          accessToken,
          phone: responseShop.phone,
          country_code: responseShop.country_code,
          country_name: responseShop.country_name,
          accessScope: scopes,
          timestamp: new Date().getTime(),
          domain: responseShop.domain,
          primary_locale: responseShop.primary_locale,
          email: responseShop.email,
          customer_email: responseShop.customer_email,
          money_format: responseShop.money_format,
          currency: responseShop.currency,
          timezone: responseShop.iana_timezone,
          appstatus: "installed",
          address1: responseShop.address1,
          address2: responseShop.address2,
          zip: responseShop.zip,
          city: responseShop.city,
          shop_owner: responseShop.shop_owner,
          latitude: responseShop.latitude,
          longitude: responseShop.longitude,
        };

        const shopData = await Shop.findOne({ shop }).select([
          "accessToken",
          "charge_id",
        ]);

        if (shopData) {
          if (shopData.accessToken !== accessToken) {
            await Shop.updateOne({ shop }, { $set: shopifyData });
          }
          //create default fitkit product
          await createDefaultFitKitProduct({
            shop: shop,
            accessToken: accessToken,
          });
        } else {
          console.log("new data is going to add");
          shopifyData.isAppEnable = false;
          const SHOP = new Shop(shopifyData);
          await SHOP.save();

          //create default fitkit product
          await createDefaultFitKitProduct({
            shop: shop,
            accessToken: accessToken,
          });

          console.log("--fitkit settings--");
          await FitkitSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              // displayType: "option1",
              fontType: "Montserrat, sans-serif",
              fontSize: 16,
              fontColor: "#1F1E2C",
              checkboxColor: "#E5E5E5",
              linkColor: "#C1ACA4",
              linkSize: 16,
              //new
              pdpFontSize: 18,
              pdpBackgroundColor: '#F4F3EF',
              pdpFontColor: "#3A3A3A",
              pdpIconSize: 26,
              pdpIconColor: '#3A3A3A'
            },
            {
              new: true,
              upsert: true,
            }
          );

          await PopupSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              isEnable: false,
            },
            {
              new: true,
              upsert: true,
            }
          );

          await ThankyouSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              displayType: "option1",
            },
            {
              new: true,
              upsert: true,
            }
          );

          await collectionSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              isEnable: false,
              displayType: "option1",
            },
            {
              new: true,
              upsert: true,
            }
          );

          await ABSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              isEnable: false,
            },
            {
              new: true,
              upsert: true,
            }
          );

          await ADSSettings.findOneAndUpdate(
            { shop: shopifyData.shop },
            {
              shop: shopifyData.shop,
              isEnable: false,
            },
            {
              new: true,
              upsert: true,
            }
          );
        }

        if (!(shopData && shopData.charge_id)) {
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

          const oneTimeCharge = await callGraphQl(shop, accessToken, query);
          console.log(
            "oneTimeCharge",
            oneTimeCharge.data.appPurchaseOneTimeCreate
          );

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

            return ctx.redirect(
              `${oneTimeCharge.data.appPurchaseOneTimeCreate.confirmationUrl}`
            );
          }
        }
        ctx.redirect(`/?shop=${shop}&host=${global.shopHost[shop]}`);
      } catch (e) {
        console.log("error:", e);
        let result = error.errors.SERVER_ERROR;
        result.data = e;
        ctx.body = result;
      }
    } else {
      ctx.body = { error: "AccessToken not found !" };
    }
  },
});
