import BaseService from "./baseService";

const getShopAndApiKey = () => {
  const shop = window.shop;
  const api_key = process.env.REACT_APP_SHOPIFY_API_KEY;
  return { shop, api_key };
};

export function getTags() {
  const { shop, api_key } = getShopAndApiKey();
  return BaseService.post("/products/tags/list", { shop, api_key });
}

export function getTypes() {
  const { shop, api_key } = getShopAndApiKey();
  return BaseService.post("/products/types/list", { shop, api_key });
}

export function enableApp(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/app/status/update", newData);
}
export function getAppStatus() {
  const { shop, api_key } = getShopAndApiKey();
  return BaseService.post("/app/status", { shop, api_key });
}

export function assignFitkit(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/fitkit/assign-product/upsert", newData);
}

export function getAssignFitkit() {
  const { shop, api_key } = getShopAndApiKey();
  return BaseService.post("/fitkit/assign-product/details", { shop, api_key });
}

export function assignSettingProduct(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/fitkit/upsert", newData);
}

export function getSettingProduct(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/fitkit/details", newData);
}

export function assignSettingThankYou(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/thankyou/upsert", newData);
}

export function getSettingThankYou(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/thankyou/details", newData);
}

export function assignSettingCartPopup(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/popup/upsert", newData);
}

export function getSettingCartPopup(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/popup/details", newData);
}

export function assignSettingCollection(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/collection/upsert", newData);
}

export function getSettingCollection(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/collection/details", newData);
}

export function assignSettingAB(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/ab/upsert", newData);
}

export function getSettingAB(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post("/settings/ab/details", newData);
}

export function getSettingADS(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post(`/settings/ads/details`, newData);
}

export function assignSettingADS(data) {
  const { shop, api_key } = getShopAndApiKey();
  const newData = { ...data, shop, api_key };
  return BaseService.post(`/settings/ads/upsert`, newData);
}

export function getAppCharge() {
  const { shop } = getShopAndApiKey();
  return BaseService.get(`/get-app-charge?shop=${shop}`);
}
