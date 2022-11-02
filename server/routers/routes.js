const Router = require("koa-router");
const shopApiController = require("../apis/shop");
const settingApiController = require("../apis/settings");
const middleWare = require("../middlewares/middlewares");
const router = new Router({
  prefix: "/api",
});

router.post(
  "/products/tags/list",
  middleWare.checkUser,
  shopApiController.getProductTagsList
);

router.post(
  "/products/types/list",
  middleWare.checkUser,
  shopApiController.getProductTypesList
);

router.post(
  "/fitkit/product/create",
  middleWare.checkUser,
  shopApiController.createDefaultFitKitProduct
);

router.post(
  "/fitkit/product/details",
  middleWare.checkUser,
  shopApiController.getFitKitProductDetails
);

router.post(
  "/app/status/update",
  middleWare.checkUser,
  shopApiController.updateAppStatus
);

router.post(
  "/app/status",
  middleWare.checkUser,
  shopApiController.getAppStatus
);

router.get("/get-app-charge", shopApiController.appCharge);

router.post(
  "/fitkit/assign-product/upsert",
  middleWare.checkUser,
  shopApiController.assignFitkitProduct
);

router.post(
  "/fitkit/assign-product/details",
  middleWare.checkUser,
  shopApiController.getAssignedProductDetails
);

//pdp page seetings

router.post(
  "/settings/fitkit/upsert",
  middleWare.checkUser,
  shopApiController.fitkitSettings
);

router.post(
  "/settings/fitkit/details",
  middleWare.checkUser,
  shopApiController.getFitkitSettings
);

//cart popup settings

router.post(
  "/settings/popup/upsert",
  middleWare.checkUser,
  shopApiController.popupSettings
);

router.post(
  "/settings/popup/details",
  middleWare.checkUser,
  shopApiController.getPopupSettings
);

//thankyou page settings

router.post(
  "/settings/thankyou/upsert",
  middleWare.checkUser,
  shopApiController.thankyouSettings
);

router.post(
  "/settings/thankyou/details",
  middleWare.checkUser,
  shopApiController.getThankyouSettings
);

//collection settings

router.post(
  "/settings/collection/upsert",
  middleWare.checkUser,
  settingApiController.collectionSettings
);

router.post(
  "/settings/collection/details",
  middleWare.checkUser,
  settingApiController.getcollectionSettings
);

//announcementbar settings

router.post(
  "/settings/ab/upsert",
  middleWare.checkUser,
  settingApiController.ABSettings
);

router.post(
  "/settings/ab/details",
  middleWare.checkUser,
  settingApiController.getABSettings
);

//account details page settings

router.post(
  "/settings/ads/upsert",
  middleWare.checkUser,
  settingApiController.ADSSettings
);

router.post(
  "/settings/ads/details",
  middleWare.checkUser,
  settingApiController.getADSSettings
);

//test api

router.get("/test", shopApiController.test);

module.exports = router.routes();
