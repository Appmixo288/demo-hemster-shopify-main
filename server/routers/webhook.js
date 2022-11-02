const Router = require("koa-router");
const shopAPI = require("../apis/shop");
const { receiveWebhook } = require("@shopify/koa-shopify-webhooks");
const webhook = receiveWebhook({ secret: process.env.SHOPIFY_API_SECRET_KEY });
const send = require("koa-send");
const path = require("path");
var fs = require("fs");
const { collection } = require("../models/shop");
const filePath = path.join(__dirname, "..", "script", "script.js");
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const filePathAcc = path.join(
  __dirname,
  "..",
  "script/widgets",
  "account.html"
);
const filePathBanner = path.join(
  __dirname,
  "..",
  "script/widgets",
  "banner.html"
);
const filePathCollection = path.join(
  __dirname,
  "..",
  "script/widgets",
  "collection.html"
);

const filePathPDP = path.join(
  __dirname,
  "..",
  "script/widgets",
  "newBadge.html"
);
const filePathPDPPopup = path.join(
  __dirname,
  "..",
  "script/widgets",
  "popModal.html"
);


const router = new Router({
  prefix: "/hook",
});

//shopify webhook

router.post("/uninstalled", webhook, shopAPI.uninstalled);

router.post("/shop-update", webhook, shopAPI.shopUpdate);

//GDPR API
router.post("/customers-data-request", (ctx) => {
  return (ctx.status = 200);
});

router.post("/customer-redact", (ctx) => {
  return (ctx.status = 200);
});

router.post("/shop-redact", (ctx) => {
  return (ctx.status = 200);
});

router.get("/store-front/configs", shopAPI.getStorefrontConfigs);

router.get("/store-front/domain", shopAPI.getDomain);

router.get("/check-is-product-assigned", shopAPI.checkIsProductAssigned);

//shopify one time charge
router.get("/sh-app-charge", shopAPI.chargeApproved);

// router.get('/script/store-front', (ctx) => { return ctx.status = 200; });
router.get("/script/store-front", async (ctx, next) => {
  console.log("------addScriptTag------");

  try {
    let data = fs.readFileSync(filePath, { encoding: "utf-8" });
   
    //----------------------------------------------------product page-----------------------------------------------------------

    let PDP_html = fs.readFileSync(filePathPDP, {
      encoding: "utf-8",
    });

    data = data.replace("<%PDP_html%>", PDP_html);



    let PDP_popup_html = fs.readFileSync(filePathPDPPopup, {
      encoding: "utf-8",
    });

    data = data.replace("<%PDP_popup_html%>", PDP_popup_html);
    //----------------------------------------------------Collection page-----------------------------------------------------------

    let collection_html = fs.readFileSync(filePathCollection, {
      encoding: "utf-8",
    });

    data = data.replace("<%collection_html%>", collection_html);

    //----------------------------------------------------account_html-----------------------------------------------------------

    let account_html = fs.readFileSync(filePathAcc, { encoding: "utf-8" });

    data = data.replace("<%account_html%>", account_html);

    //----------------------------------------------------announcement_bar-------------------------------------------------------

    let announcement_bar = fs.readFileSync(filePathBanner, {
      encoding: "utf-8",
    });
    data = data.replace(new RegExp(escapeRegExp("<%announcement_bar%>"), 'g'), announcement_bar);
    // data = data.replace("<%announcement_bar%>", announcement_bar);

    //----------------------------------------------Replace common variables---------------------------------------------------------

    data = data.replace("<%base_url%>", process.env.HOST_NAME);

    data = data.replace(
      "<%image_banner%>",
      `<img src='${process.env.HOST_NAME}/hook/assets/union.png' />`
    );

    //------------------------------------------------------------------------------------------------------------------------------

    ctx.res.writeHead(200, { "Content-Type": "text/javascript" });
    ctx.res.write(data);
    ctx.res.end();

    return;
  } catch (err) {
    ctx.status = 500;
    console.log("ERROR: ", err);
  }
});

//theme Webhook

router.post("/theme-publish", webhook, shopAPI.themePublish);

router.get("/assets/main.png", async (ctx, next) => {
  return await send(ctx, "/main.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

router.get("/assets/front.jpg", async (ctx, next) => {
  return await send(ctx, "/front.jpg", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

router.get("/assets/back.jpg", async (ctx, next) => {
  return await send(ctx, "/back.jpg", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

router.get("/assets/thankyou_option.png", async (ctx, next) => {
  return await send(ctx, "/thankyou_option.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

router.get("/assets/thankyou_page.gif", async (ctx, next) => {
  return await send(ctx, "/thankyou_page.gif", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

//collection image
router.get("/assets/collection1.png", async (ctx, next) => {
  return await send(ctx, "/collection1.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});
router.get("/assets/collection2.png", async (ctx, next) => {
  return await send(ctx, "/collection2.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});
router.get("/assets/collection3.png", async (ctx, next) => {
  return await send(ctx, "/collection3.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});
router.get("/assets/logomark.png", async (ctx, next) => {
  return await send(ctx, "/logomark.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

router.get("/assets/union.png", async (ctx, next) => {
  return await send(ctx, "/union.png", {
    root: path.join(__dirname, "../../", "assets"),
  });
});

module.exports = router.routes();
