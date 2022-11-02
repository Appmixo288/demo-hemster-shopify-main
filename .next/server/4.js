exports.ids = [4];
exports.modules = {

/***/ "+U72":
/***/ (function(module) {

module.exports = JSON.parse("{\"Polaris\":{\"Actions\":{\"moreActions\":\"More actions\"},\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"STATUS_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"attention\":\"Attention\",\"new\":\"New\"},\"progressAndStatus\":\"{statusLabel} {progressLabel}\"},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\",\"connectedDisclosureAccessibilityLabel\":\"Related actions\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"newWindowAccessibilityHint\":\"(opens a new window)\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"start\":\"Start of range\",\"end\":\"End of range\",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"days\":{\"monday\":\"Monday\",\"tuesday\":\"Tuesday\",\"wednesday\":\"Wednesday\",\"thursday\":\"Thursday\",\"friday\":\"Friday\",\"saturday\":\"Saturday\",\"sunday\":\"Sunday\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"FileUpload\":{\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"label\":\"Upload file\"}},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"navigationLabel\":\"Navigation\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"ActionMenu\":{\"RollupActions\":{\"rollupButton\":\"Actions\"}},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\"},\"IndexProvider\":{\"defaultItemSingular\":\"Item\",\"defaultItemPlural\":\"Items\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} are selected.\",\"selected\":\"{selectedItemsCount} selected\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\"},\"IndexTable\":{\"emptySearchTitle\":\"No {resourceNamePlural} found\",\"emptySearchDescription\":\"Try changing the filters or search term\",\"onboardingBadgeText\":\"New\",\"resourceLoadingAccessibilityLabel\":\"Loading {resourceNamePlural}…\",\"selectAllLabel\":\"Select all {resourceNamePlural}\",\"selected\":\"{selectedItemsCount} selected\",\"undo\":\"Undo\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural}\",\"selectItem\":\"Select {resourceName}\",\"selectButtonText\":\"Select\"},\"Loading\":{\"label\":\"Page loading bar\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\",\"allFilteredItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in this filter are selected.\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"selectAllFilteredItems\":\"Select all {itemsLength}+ {resourceNamePlural} in this filter\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"ariaLiveSingular\":\"{itemsLength} item\",\"ariaLivePlural\":\"{itemsLength} items\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\",\"warningMessage\":\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\"},\"FilterCreator\":{\"filterButtonLabel\":\"Filter\",\"selectFilterKeyPlaceholder\":\"Select a filter…\",\"addFilterButtonLabel\":\"Add filter\",\"showAllWhere\":\"Show all {resourceNamePlural} where:\"},\"FilterControl\":{\"textFieldLabel\":\"Search {resourceNamePlural}\"},\"FilterValueSelector\":{\"selectFilterValuePlaceholder\":\"Select a filter…\"},\"DateSelector\":{\"dateFilterLabel\":\"Select a value\",\"dateValueLabel\":\"Date\",\"dateValueError\":\"Match YYYY-MM-DD format\",\"dateValuePlaceholder\":\"YYYY-MM-DD\",\"SelectOptions\":{\"PastWeek\":\"in the last week\",\"PastMonth\":\"in the last month\",\"PastQuarter\":\"in the last 3 months\",\"PastYear\":\"in the last year\",\"ComingWeek\":\"next week\",\"ComingMonth\":\"next month\",\"ComingQuarter\":\"in the next 3 months\",\"ComingYear\":\"in the next year\",\"OnOrBefore\":\"on or before\",\"OnOrAfter\":\"on or after\"},\"FilterLabelForValue\":{\"past_week\":\"in the last week\",\"past_month\":\"in the last month\",\"past_quarter\":\"in the last 3 months\",\"past_year\":\"in the last year\",\"coming_week\":\"next week\",\"coming_month\":\"next month\",\"coming_quarter\":\"in the next 3 months\",\"coming_year\":\"in the next year\",\"on_or_before\":\"before {date}\",\"on_or_after\":\"after {date}\"}}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Tabs\":{\"toggleTabsLabel\":\"More tabs\"},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TooltipOverlay\":{\"accessibilityLabel\":\"Tooltip: {label}\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}},\"MediaCard\":{\"popoverButton\":\"Actions\"},\"VideoThumbnail\":{\"playButtonA11yLabel\":{\"default\":\"Play video\",\"defaultWithDuration\":\"Play video of length {duration}\",\"duration\":{\"hours\":{\"other\":{\"only\":\"{hourCount} hours\",\"andMinutes\":\"{hourCount} hours and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hours and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hours and {secondCount} seconds\",\"andSecond\":\"{hourCount} hours and {secondCount} second\"},\"one\":{\"only\":\"{hourCount} hour\",\"andMinutes\":\"{hourCount} hour and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hour and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hour and {secondCount} seconds\",\"andSecond\":\"{hourCount} hour and {secondCount} second\"}},\"minutes\":{\"other\":{\"only\":\"{minuteCount} minutes\",\"andSeconds\":\"{minuteCount} minutes and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minutes and {secondCount} second\"},\"one\":{\"only\":\"{minuteCount} minute\",\"andSeconds\":\"{minuteCount} minute and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minute and {secondCount} second\"}},\"seconds\":{\"other\":\"{secondCount} seconds\",\"one\":\"{secondCount} second\"}}}}}}");

/***/ }),

/***/ "EUEk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAGE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pageInfoAction; });
// import * as authService from "../../services/authService";
const PAGE_INFO = "PAGE_INFO";
const FAILED = "FAILED";
const pageInfoAction = name => {
  return dispatch => {
    dispatch({
      type: PAGE_INFO,
      data: name
    });
  };
};

/***/ }),

/***/ "l7Dk":
/***/ (function(module, exports) {



/***/ }),

/***/ "uDpD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@shopify/polaris"
var polaris_ = __webpack_require__("nj/N");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@shopify/app-bridge-utils"
var app_bridge_utils_ = __webpack_require__("4gC+");

// EXTERNAL MODULE: external "@shopify/app-bridge"
var app_bridge_ = __webpack_require__("dDoP");
var app_bridge_default = /*#__PURE__*/__webpack_require__.n(app_bridge_);

// CONCATENATED MODULE: ./client/services/baseService.js



var host = null;

if (false) {}

var baseUrl = "https://" + host + "/api/";
var tempURL = "http://localhost:8081/api/";
var url = host && host.includes("localhost") ? tempURL : baseUrl;
const BaseService = external_axios_default.a.create({
  baseURL: url
}); // intercept all requests on this axios instance

if (true) {
  BaseService.interceptors.request.use(function (config) {
    const app = app_bridge_default()({
      apiKey: "0b7cd98a43a34d91631c6642efde3f4e",
      host: window.host
    });
    return Object(app_bridge_utils_["getSessionToken"])(app) // requires an App Bridge instance
    .then(token => {
      // append your request headers with an authenticated token
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
  });
} // export your axios instance to use within your app


/* harmony default export */ var baseService = (BaseService);
// CONCATENATED MODULE: ./client/services/authService.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getShopAndApiKey = () => {
  const shop = window.shop;
  const api_key = process.env.REACT_APP_SHOPIFY_API_KEY;
  return {
    shop,
    api_key
  };
};

function getTags() {
  const {
    shop,
    api_key
  } = getShopAndApiKey();
  return baseService.post("/products/tags/list", {
    shop,
    api_key
  });
}
function getTypes() {
  const {
    shop,
    api_key
  } = getShopAndApiKey();
  return baseService.post("/products/types/list", {
    shop,
    api_key
  });
}
function enableApp(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/app/status/update", newData);
}
function authService_getAppStatus() {
  const {
    shop,
    api_key
  } = getShopAndApiKey();
  return baseService.post("/app/status", {
    shop,
    api_key
  });
}
function assignFitkit(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/fitkit/assign-product/upsert", newData);
}
function getAssignFitkit() {
  const {
    shop,
    api_key
  } = getShopAndApiKey();
  return baseService.post("/fitkit/assign-product/details", {
    shop,
    api_key
  });
}
function assignSettingProduct(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/fitkit/upsert", newData);
}
function getSettingProduct(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/fitkit/details", newData);
}
function assignSettingThankYou(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/thankyou/upsert", newData);
}
function getSettingThankYou(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/thankyou/details", newData);
}
function assignSettingCartPopup(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/popup/upsert", newData);
}
function getSettingCartPopup(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/popup/details", newData);
}
function assignSettingCollection(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/collection/upsert", newData);
}
function getSettingCollection(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/collection/details", newData);
}
function assignSettingAB(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/ab/upsert", newData);
}
function getSettingAB(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post("/settings/ab/details", newData);
}
function getSettingADS(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post(`/settings/ads/details`, newData);
}
function assignSettingADS(data) {
  const {
    shop,
    api_key
  } = getShopAndApiKey();

  const newData = _objectSpread(_objectSpread({}, data), {}, {
    shop,
    api_key
  });

  return baseService.post(`/settings/ads/upsert`, newData);
}
function getAppCharge() {
  const {
    shop
  } = getShopAndApiKey();
  return baseService.get(`/get-app-charge?shop=${shop}`);
}
// EXTERNAL MODULE: ./node_modules/@shopify/polaris/locales/en.json
var en = __webpack_require__("+U72");

// CONCATENATED MODULE: ./client/Component/Products/FitkitProduct.js




function FitkitProduct(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Page"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Card"], {
      sectioned: true,
      children: "Display list of product assigned with FitKit."
    })
  });
}

/* harmony default export */ var Products_FitkitProduct = (FitkitProduct);
// EXTERNAL MODULE: external "@shopify/app-bridge-react"
var app_bridge_react_ = __webpack_require__("ZQgG");

// CONCATENATED MODULE: ./client/Component/Products/AddProducts.js




function AddProducts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AddProducts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddProducts_ownKeys(Object(source), true).forEach(function (key) { AddProducts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddProducts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function AddProducts(props) {
  function remove1ele(copySelection, index) {
    // let copySelection = selectedTag;
    const result = copySelection.slice(0, index).concat(copySelection.slice(index + 1));
    return result;
  } //by price


  const {
    0: priceValue,
    1: setPriceValue
  } = Object(external_react_["useState"])("");
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(false);
  const handleChangebyPrice = Object(external_react_["useCallback"])(newChecked => setChecked(newChecked), []);
  const handleTextFieldChange = Object(external_react_["useCallback"])(value => setPriceValue(value), []); //loading state

  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isLoadingType,
    1: setIsLoadingType
  } = Object(external_react_["useState"])(false); //toast

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  });
  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null; //list of tags and type

  const {
    0: tags,
    1: setTags
  } = Object(external_react_["useState"])([]);
  const {
    0: types,
    1: setTypes
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setIsLoading(true);
    setIsLoadingType(true);
    getTags().then(response => {
      setIsLoading(false);

      if (response.data && response.data.data && response.data.data.edges && Array.isArray(response.data.data.edges) && response.data.data.edges.length > 0) {
        const mapped_tags = response.data.data.edges.map(edges => {
          return {
            label: edges.node,
            value: edges.node
          };
        });
        setTags(mapped_tags);
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get tags error !",
        isErr: true
      });
      console.log("Error: ", err);
    });
    getTypes().then(response => {
      setIsLoadingType(false);

      if (response.data && response.data.data && response.data.data.edges && Array.isArray(response.data.data.edges) && response.data.data.edges.length > 0) {
        const mapped_types = response.data.data.edges.map(edges => {
          return {
            label: edges.node,
            value: edges.node
          };
        });
        setTypes(mapped_types);
      }
    }).catch(err => {
      setIsLoadingType(false);
      setActive({
        isOpen: true,
        msg: "Get types error !",
        isErr: true
      });
      console.log("Error: ", err);
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    getInitialProducts();
  }, []);

  function getInitialProducts() {
    setIsLoading(true);
    getAssignFitkit().then(response => {
      setIsLoading(false);

      if (response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            collections,
            productIds,
            tags,
            productTypes,
            byPrice,
            applyByPrice
          } = response.data.data;
          collections && Array.isArray(collections) && setSelectedColl(collections);
          productIds && Array.isArray(productIds) && setSelectedProduct(productIds);
          tags && Array.isArray(tags) && setSelectedTag(tags);
          productTypes && Array.isArray(productTypes) && setSelectedType(productTypes);
          applyByPrice && byPrice && setPriceValue(String(byPrice));
          setChecked(applyByPrice ? true : false);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get product details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get product details error !",
        isErr: true
      });
      console.log("Error: ", err);
    });
  } //tag


  const {
    0: popoverActiveTag,
    1: setPopoverActiveTag
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedTag,
    1: setSelectedTag
  } = Object(external_react_["useState"])([]);
  const togglePopoverActiveTag = Object(external_react_["useCallback"])(() => setPopoverActiveTag(popoverActiveTag => !popoverActiveTag), []);

  const activatorTag = /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
    onClick: togglePopoverActiveTag,
    disclosure: true,
    children: "Product Tags"
  });

  function removeSelectedTag(index) {
    let updatedRes = remove1ele(selectedTag, index);
    setSelectedTag(updatedRes);
  }

  const displaySelectedTags = selectedTag && Array.isArray(selectedTag) && selectedTag.length > 0 && selectedTag.map((selectedTag, i) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "custom-tag",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Tag"], {
        onRemove: () => removeSelectedTag(i),
        children: selectedTag
      })
    }, i);
  }); //type

  const {
    0: popoverActiveType,
    1: setPopoverActiveType
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedType,
    1: setSelectedType
  } = Object(external_react_["useState"])([]);
  const togglePopoverActiveType = Object(external_react_["useCallback"])(() => setPopoverActiveType(popoverActiveType => !popoverActiveType), []);

  const activatorType = /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
    onClick: togglePopoverActiveType,
    disclosure: true,
    children: "Product Types"
  });

  function removeSelectedType(index) {
    let updatedRes = remove1ele(selectedType, index);
    setSelectedType(updatedRes);
  }

  const displaySelectedTypes = selectedType && Array.isArray(selectedType) && selectedType.length > 0 && selectedType.map((selectedType, i) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "custom-tag",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Tag"], {
        onRemove: () => removeSelectedType(i),
        children: selectedType
      })
    }, i);
  }); //product

  const {
    0: isOpenProduct,
    1: setIsOpenProduct
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedProduct,
    1: setSelectedProduct
  } = Object(external_react_["useState"])([]);

  function handleSelectedProduct(selected) {
    const selctedColl = selected.selection && Array.isArray(selected.selection) && selected.selection.length > 0 ? selected.selection.map(selection => {
      return selection.id;
    }) : [];
    setActive({
      isOpen: true,
      msg: "Click on save to update products.",
      isErr: false
    });
    setSelectedProduct(selctedColl); // setSelectedProduct(selected);

    setIsOpenProduct(false);
  }

  function removeSelectedProduct(index) {
    if (index > -1) {
      let updatedRes = remove1ele(selectedProduct.selection, index);
      setSelectedProduct(AddProducts_objectSpread(AddProducts_objectSpread({}, selectedProduct), {}, {
        selection: updatedRes
      }));
    }
  }

  const selectProductProducts = selectedProduct && selectedProduct.selection && Array.isArray(selectedProduct.selection) && selectedProduct.selection.length > 0 && selectedProduct.selection.map((selection, i) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "custom-tag",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Tag"], {
        onRemove: () => removeSelectedProduct(i),
        children: selection.title
      })
    }, i);
  }); //collection

  const {
    0: isOpenColl,
    1: setIsOpenColl
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedColl,
    1: setSelectedColl
  } = Object(external_react_["useState"])([]);

  function handleSelectedColl(selected) {
    const selctedColl = selected.selection && Array.isArray(selected.selection) && selected.selection.length > 0 ? selected.selection.map(selection => {
      return selection.id;
    }) : [];
    setActive({
      isOpen: true,
      msg: "click on save to update collection.",
      isErr: false
    });
    setSelectedColl(selctedColl); // setSelectedColl(selected);

    setIsOpenColl(false);
  }

  function removeSelectedColl(index) {
    if (index > -1) {
      let updatedRes = remove1ele(selectedColl.selection, index);
      setSelectedColl(AddProducts_objectSpread(AddProducts_objectSpread({}, selectedColl), {}, {
        selection: updatedRes
      }));
    }
  }

  const selectProductColl = selectedColl && selectedColl.selection && Array.isArray(selectedColl.selection) && selectedColl.selection.length > 0 && selectedColl.selection.map((selection, i) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "custom-tag",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Tag"], {
        onRemove: () => removeSelectedColl(i),
        children: selection.title
      })
    }, i);
  }); //handleAssignFitKit

  function handleAssignFitKit() {
    setIsLoading(true);
    const data = {
      collections: selectedColl && selectedColl,
      productIds: selectedProduct && selectedProduct,
      tags: selectedTag && selectedTag,
      productTypes: selectedType && selectedType,
      applyByPrice: checked,
      byPrice: priceValue
    };
    assignFitkit(data).then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getInitialProducts();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      setIsLoading(false);
      console.log("Error", err);
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "Polaris-Header-Title heading-mar",
      children: "Add FitKit"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Layout"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
        oneHalf: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
          sectioned: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            variation: "strong",
            children: "Select product to add FitKit"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
            onClick: () => setIsOpenProduct(true),
            children: "Choose Product"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), isOpenProduct && /*#__PURE__*/Object(jsx_runtime_["jsx"])(app_bridge_react_["ResourcePicker"], {
            resourceType: "Product",
            open: true,
            onSelection: val => {
              handleSelectedProduct(val);
            },
            showVariants: false,
            allowMultiple: true,
            onCancel: () => setIsOpenProduct(false),
            initialSelectionIds: selectedProduct && Array.isArray(selectedProduct) && selectedProduct.length > 0 ? selectedProduct.map(sp => {
              return {
                id: sp
              };
            }) : []
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
        oneHalf: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
          sectioned: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            variation: "strong",
            children: "Select collection to add FitKit"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
            onClick: () => setIsOpenColl(true),
            children: "Choose Collection"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), isOpenColl && /*#__PURE__*/Object(jsx_runtime_["jsx"])(app_bridge_react_["ResourcePicker"], {
            resourceType: "Collection",
            open: true,
            onSelection: val => {
              handleSelectedColl(val);
            },
            showVariants: false,
            allowMultiple: true,
            onCancel: () => setIsOpenColl(false),
            initialSelectionIds: selectedColl && Array.isArray(selectedColl) && selectedColl.length > 0 ? selectedColl.map(sp => {
              return {
                id: sp
              };
            }) : []
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
          sectioned: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            variation: "strong",
            children: "Assign FitKit product tag wise"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"], {
            active: popoverActiveTag,
            activator: activatorTag,
            onClose: togglePopoverActiveTag,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["OptionList"], {
              title: "Manage Fitkit product tag wise",
              onChange: setSelectedTag,
              options: tags,
              selected: selectedTag,
              allowMultiple: true
            })
          }), displaySelectedTags && displaySelectedTags]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
          sectioned: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            variation: "strong",
            children: "Assign FitKit product type wise"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"], {
            active: popoverActiveType,
            activator: activatorType,
            onClose: togglePopoverActiveType,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["OptionList"], {
              title: "Manage Fitkit product type wise",
              onChange: setSelectedType,
              options: types,
              selected: selectedType,
              allowMultiple: true
            })
          }), displaySelectedTypes && displaySelectedTypes]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
          sectioned: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            variation: "strong",
            children: "Apply widget by price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Checkbox"], {
            label: "Filter by price?",
            checked: checked,
            onChange: handleChangebyPrice,
            helpText: "Show the selected options if the price above (X)."
          }), " ", checked && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
            type: "number",
            value: priceValue,
            onChange: handleTextFieldChange
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Layout"].Section, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "action-btns",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
            primaryAction: {
              disabled: isLoading || isLoadingType,
              content: "Save",
              onAction: handleAssignFitKit
            },
            secondaryActions: [{
              content: "Cancel",
              destructive: true,
              onAction: getInitialProducts
            }]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Frame"], {
          children: [(isLoading || isLoadingType) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
        })]
      })]
    })]
  });
}

/* harmony default export */ var Products_AddProducts = (AddProducts);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./client/redux/action/index.js
var action = __webpack_require__("EUEk");

// EXTERNAL MODULE: external "@shopify/polaris-icons"
var polaris_icons_ = __webpack_require__("GbwQ");

// CONCATENATED MODULE: ./client/Component/Products/ProductIndex.js












function UpsellIndex(props) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    getAppStatus();
  }, []);
  const page_info = Object(external_react_redux_["useSelector"])(state => state.allReducer.page_info);

  function handlePage(page) {
    dispatch(action["c" /* pageInfoAction */](page));
  }

  function getAppStatus() {
    authService_getAppStatus().then(response => {
      if (response && response.data && response.data.data && response.data.data.shopStatus) {
        let {
          isAppEnable
        } = response.data.data.shopStatus;
        isAppEnable ? setActive(true) : setActive(false);
      } else {
        setActive(false);
      }
    }).catch(err => {
      console.log("ERROR: ", err);
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Page"], {
    children: [active === false && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Banner"], {
        title: "Current app status is disabled.",
        status: "critical",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "To enable it go to app settings, Click on Enable button."
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Products_AddProducts, {})
    })]
  });
}

/* harmony default export */ var ProductIndex = (UpsellIndex);
// CONCATENATED MODULE: ./client/Component/Settings/Product.js







function Product(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isEdit,
    1: setIsEdit
  } = Object(external_react_["useState"])(false); //toast

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  });
  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null;
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])("option1");
  const handleChangeType = Object(external_react_["useCallback"])((_checked, newValue) => setType(newValue), []);
  const {
    0: fontSize,
    1: setFontSize
  } = Object(external_react_["useState"])("16");
  const {
    0: iconSize,
    1: setIconSize
  } = Object(external_react_["useState"])("26");
  const {
    0: popoverActiveIconColor,
    1: setPopoverActiveIconColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveBackgroundColor,
    1: popoverActiveSetBackgroundColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveFontColor,
    1: setPopoverActiveFontColor
  } = Object(external_react_["useState"])(false);
  const togglePopoverActiveIconColor = Object(external_react_["useCallback"])(() => setPopoverActiveIconColor(popoverActiveIconColor => !popoverActiveIconColor), []);
  const toggleBackgroundColor = Object(external_react_["useCallback"])(() => popoverActiveSetBackgroundColor(popoverActiveBackgroundColor => !popoverActiveBackgroundColor), []);
  const togglePopoverActiveFontColor = Object(external_react_["useCallback"])(() => setPopoverActiveFontColor(popoverActiveFontColor => !popoverActiveFontColor), []);
  const {
    0: IconColor,
    1: setIconColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: BackgroundColor,
    1: setBackgroundColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: FontColor,
    1: setFontColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const rgbaColorFontColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(FontColor));
  const rgbaColorIconColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(IconColor));
  const rgbaColorBackgroundColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(BackgroundColor));
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])("");
  const handleSelectChange = Object(external_react_["useCallback"])(value => setSelected(value), []);
  const options = [{
    label: 'Times, "Times New Roman", serif',
    value: 'Times, "Times New Roman", serif'
  }, {
    label: "Helvetica, Arial, sans-serif",
    value: "Helvetica, Arial, sans-serif"
  }, {
    label: "serif",
    value: "serif"
  }, {
    label: "sans-serif",
    value: "sans-serif"
  }, {
    label: "monospace",
    value: "monospace"
  }, {
    label: "cursive",
    value: "cursive"
  }, {
    label: "fantasy",
    value: "fantasy"
  }, {
    label: "Montserrat, sans-serif",
    value: "Montserrat, sans-serif"
  }];

  const handleIconColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setIconColorHexColor(hexColor);
    setIconColor(value);
  };

  const handleBackgroundColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setBackgroundColorHexColor(hexColor);
    setBackgroundColor(value);
  };

  const handleFontColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setFontColorHexColor(hexColor);
    setFontColor(value);
  };

  const {
    0: IconColorHexColor,
    1: setIconColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(IconColor));
  const {
    0: BackgroundColorHexColor,
    1: setBackgroundColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(BackgroundColor));
  const {
    0: FontColorHexColor,
    1: setFontColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(FontColor));

  const handleIconColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setIconColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setIconColor(hsba);
      }
    }
  };

  const handleBackgroundColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setBackgroundColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setBackgroundColor(hsba);
      }
    }
  };

  const handleFontColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setFontColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setFontColor(hsba);
      }
    }
  };

  const hexToRgb = hex => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : {
      red: 0,
      green: 0,
      blue: 0
    };
  };

  const activatorIconColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Icon Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveIconColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorIconColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: IconColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorBackgroundColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Background Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: toggleBackgroundColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorBackgroundColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: BackgroundColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorFontColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveFontColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorFontColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: FontColorHexColor
            })]
          })
        })
      })
    })]
  });

  Object(external_react_["useEffect"])(() => {
    getProductSettings();
  }, []);

  function getProductSettings() {
    setIsLoading(true);
    getSettingProduct().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            pdpFontSize,
            pdpBackgroundColor,
            pdpFontColor,
            pdpIconSize,
            pdpIconColor
          } = response.data.data;
          setFontSize(pdpFontSize ? pdpFontSize.toString() : "18");
          setIconSize(pdpIconSize ? pdpIconSize.toString() : '26');
          handleIconColorHexColorChange(pdpIconColor ? pdpIconColor : "#3A3A3A");
          handleFontColorHexColorChange(pdpFontColor ? pdpFontColor : "#3A3A3A");
          handleBackgroundColorHexColorChange(pdpBackgroundColor ? pdpBackgroundColor : '#F4F3EF'); // const {
          //   IconColor,
          //   fontSize,
          //   FontColor,
          //   fontType,
          //   BackgroundColor,
          //   iconSize,
          // } = response.data.data;
          // // const { displayType } = response.data.data;
          // // displayType && setType(displayType);
          // IconColor && handleIconColorHexColorChange(IconColor);
          // FontColor && handleFontColorHexColorChange(FontColor);
          // fontSize && setFontSize(fontSize.toString());
          // fontType && setSelected(fontType);
          // iconSize && setIconSize(iconSize.toString());
          // BackgroundColor && handleBackgroundColorHexColorChange(BackgroundColor);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleProductSettingSave() {
    setIsLoading(true);
    const data = {
      // displayType: type,
      // IconColor: IconColorHexColor,
      // fontSize: parseInt(fontSize),
      // FontColor: FontColorHexColor,
      // fontType: selected,
      // BackgroundColor: BackgroundColorHexColor,
      // iconSize: parseInt(iconSize),
      //new
      pdpFontSize: fontSize ? parseInt(fontSize) : 18,
      pdpBackgroundColor: BackgroundColorHexColor ? BackgroundColorHexColor : '#F4F3EF',
      pdpFontColor: FontColorHexColor ? FontColorHexColor : "#3A3A3A",
      pdpIconSize: iconSize ? parseInt(iconSize) : 26,
      pdpIconColor: IconColorHexColor ? IconColorHexColor : '#3A3A3A'
    };
    assignSettingProduct(data).then(response => {
      setIsLoading(false);
      console.log("response assign pro set", response);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getProductSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  const previewHTML = `<style>
  .badge-content {
      display: flex;
  }

  span.badge-content-image {
      margin-right: 0.2%;
  }

  .badge-content-text {
      margin: auto 0;
      font-size: ${fontSize}px !important;
      /*18px */
      min-width: fit-content;
      letter-spacing: 0.6px;
      padding: 0 5px;
      color: ${FontColorHexColor} !important
          /*#3A3A3A*/
  }

  .badge-content-svg {
      height: ${iconSize}px !important;
      margin: auto;
  }

  .container-badge {
      cursor: pointer;
      letter-spacing: 0.5px;
      padding: 8px;
      background: ${BackgroundColorHexColor} !important;
      /* #F4F3EF*/
      width: fit-content;
      border-radius: 6px;
      font-family: serif;
      margin : 15px 0;
  }

  .badge-icon {
      fill: ${IconColorHexColor}
          /* #3A3A3A*/
  }

  /* $icon-size : 21 */

  /* popup */
  /** * Overlay * -- only show for tablet and up */
  @media only screen and (min-width: 40em) {
      .h-modal-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          visibility: hidden;
          backface-visibility: hidden;
          transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      }

      .h-modal-overlay.h-active {
          opacity: 1;
          visibility: visible;
      }
  }
  .h-modal-overlay {
      height: 100vh;
      z-index: 999;
  }
  /** * h-Modal */
  .h-modal {
      width: 800px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      background-color: #fff;
      max-width: 75rem;
      min-height: 20rem;
      padding: 3rem 1rem;
      border-radius: 10px;
      opacity: 0;
      overflow-y: auto;
      visibility: hidden;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      backface-visibility: hidden;
      transform: scale(1.2);
      transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .h-modal .close-h-modal {
      position: absolute;
      cursor: pointer;
      top: 5px;
      right: 15px;
      opacity: 0;
      backface-visibility: hidden;
      transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      transition-delay: 0.3s;
  }

  .h-modal .close-h-modal svg {
      width: 1.70em;
      height: 1.70em;
      opacity: 0.3;
  }

  .h-modal .h-modal-content {
      opacity: 0;
      backface-visibility: hidden;
      transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      transition-delay: 0.3s;
  }

  .h-modal.h-active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
  }

  .h-modal.h-active .h-modal-content {
      opacity: 1;
  }

  .h-modal.h-active .close-h-modal {
      transform: translateY(10px);
      opacity: 1;
  }

  /** * Mobile styling */
  @media only screen and (max-width: 39.9375em) {
      .h-modal-overlay{
          height: 100vh;
      }
      .h-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          border-radius: 0;
          transform: scale(1.1);
          padding: 0 !important;
      }

      .close-h-modal {
          right: 20px !important;
      }
  }

  
  .h-grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      padding: 10px;
  }

  .h-grid-item {
      padding: 20px;
      text-align: center;
  }

  .h-modal-content {
      padding: 10px 10px;
  }

  .h-modal-close-button {
      background: #1F1E2C;
      border-radius: 4px;
      color: #fff;
      padding: inherit;
      width: 250px;
      text-align: center;
      margin: 15px auto;
      letter-spacing: 0.2rem;
      cursor: pointer;
  }

  .h-modal-number {
      font-family: Canela;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      font-feature-settings: 'pnum'on, 'lnum'on;
      color: #C1ACA4;
  }

  .h-modal-title-container {
      line-height: 22px;
      text-align: center;
      font-feature-settings: 'pnum'on, 'lnum'on;
      color: #525258;
      width: 62%;
      margin: 0 auto;
  }

  .popup-title-text {
      font-family: Sweet Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin: 15px 0;
  }
</style>

<div class="container-badge" onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.add("h-active"); 
document.getElementsByClassName("h-modal")[0].classList.add("h-active");'>
  <div class="badge-content">
      <svg 
      className="badge-content-image" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="badge-content-svg">
          <path fill-rule="evenodd" clip-rule="evenodd" class="badge-icon"
              d="M20.125 10.3918C20.125 15.7005 15.8641 19.9175 10.5 19.9175C5.13593 19.9175 0.875 15.7005 0.875 10.3918C0.875 5.08299 5.13593 0.86598 10.5 0.86598C15.8641 0.86598 20.125 5.08299 20.125 10.3918ZM21 10.3918C21 16.131 16.299 20.7835 10.5 20.7835C4.70101 20.7835 0 16.131 0 10.3918C0 4.65255 4.70101 0 10.5 0C16.299 0 21 4.65255 21 10.3918ZM4.66672 6.92789C4.66672 5.5728 5.63085 4.61861 7.00006 4.61861C8.36926 4.61861 9.33339 5.5728 9.33339 6.92789C9.33339 8.13528 8.59816 8.99448 7.43756 9.19906V11.5846C8.59816 11.7891 9.33339 12.6483 9.33339 13.8557C9.33339 15.2108 8.36926 16.165 7.00006 16.165C5.63085 16.165 4.66672 15.2108 4.66672 13.8557C4.66672 12.6483 5.40196 11.7891 6.56256 11.5846V9.19906C5.40196 8.99448 4.66672 8.13528 4.66672 6.92789ZM11.6667 6.92789C11.6667 5.5728 12.6308 4.61861 14.0001 4.61861C15.3693 4.61861 16.3334 5.5728 16.3334 6.92789C16.3334 8.13528 15.5982 8.99448 14.4376 9.19906V11.5846C15.5982 11.7891 16.3334 12.6483 16.3334 13.8557C16.3334 15.2108 15.3693 16.165 14.0001 16.165C12.6308 16.165 11.6667 15.2108 11.6667 13.8557C11.6667 12.6483 12.402 11.7891 13.5626 11.5846V9.19906C12.402 8.99448 11.6667 8.13528 11.6667 6.92789ZM7.00006 5.34026C6.1141 5.34026 5.39589 6.05106 5.39589 6.92789C5.39589 7.65453 5.88926 8.26736 6.56256 8.45579V7.33624C6.56256 6.87158 6.93924 6.4949 7.4039 6.4949C7.42249 6.4949 7.43756 6.50996 7.43756 6.52855V8.45579C8.11085 8.26736 8.60422 7.65453 8.60422 6.92789C8.60422 6.05106 7.88601 5.34026 7.00006 5.34026ZM14.0001 5.34026C13.1141 5.34026 12.3959 6.05106 12.3959 6.92789C12.3959 7.65453 12.8893 8.26736 13.5626 8.45579V6.52855C13.5626 6.50996 13.5776 6.4949 13.5962 6.4949C14.0609 6.4949 14.4376 6.87158 14.4376 7.33624V8.45579C15.1108 8.26736 15.6042 7.65453 15.6042 6.92789C15.6042 6.05106 14.886 5.34026 14.0001 5.34026ZM6.56256 12.3278C5.88926 12.5162 5.39589 13.1291 5.39589 13.8557C5.39589 14.7325 6.1141 15.4434 7.00006 15.4434C7.88601 15.4434 8.60422 14.7325 8.60422 13.8557C8.60422 13.1291 8.11085 12.5162 7.43756 12.3278V14.2551C7.43756 14.2736 7.42249 14.2887 7.4039 14.2887C6.93924 14.2887 6.56256 13.912 6.56256 13.4474V12.3278ZM13.5626 12.3278C12.8893 12.5162 12.3959 13.1291 12.3959 13.8557C12.3959 14.7325 13.1141 15.4434 14.0001 15.4434C14.886 15.4434 15.6042 14.7325 15.6042 13.8557C15.6042 13.1291 15.1108 12.5162 14.4376 12.3278V13.4474C14.4376 13.912 14.0609 14.2887 13.5962 14.2887C13.5776 14.2887 13.5626 14.2736 13.5626 14.2551V12.3278Z" />
      </svg>
      <div class="badge-content-text">Tailoring included from Hemster</div>
  </div>
</div>

<!-- h-modal -->
<div class="h-modal-overlay">
  <div class="h-modal">

      <a class="close-h-modal">
          <svg viewBox="0 0 20 20" 
          onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.remove("h-active"); document.getElementsByClassName("h-modal")[0].classList.remove("h-active");'>
              <path fill="#000000"
                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z">
              </path>
          </svg>
      </a><!-- close h-modal -->

      <div class="h-modal-content">
          <div class="h-modal-title-container">We’ve partnered with Hemster to provide free tailoring on select
              garments to ensure you get the
              perfect fit.</div>
          <div class="h-grid-container">
              <div class="h-grid-item">
                  <div class="h-modal-number">01</div>
                  <div class="popup-title-text">Get your FitKit with your Garments</div>
                  <div>Using Hemster’s self fit system, you can find your fit without leaving the house.</div>
              </div>
              <div class="h-grid-item">
                  <div class="h-modal-number">02</div>
                  <div class="popup-title-text">Book a Virtual Fitting</div>
                  <div>It’s free, easy and online. Our fitters will answer any questions and get you the perfect
                      fit.</div>
              </div>
              <div class="h-grid-item">
                  <div class="h-modal-number">03</div>
                  <div class="popup-title-text">Get them
                      Tailored</div>
                  <div>Free shipping and 24 hour turnaround time included. Our expert tailors will make them fit
                      perfectly.</div>
              </div>

          </div>
          <div class="h-modal-close-button"   onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.remove("h-active"); document.getElementsByClassName("h-modal")[0].classList.remove("h-active");'>CLOSE</div>
      </div><!-- content -->

  </div><!-- h-modal -->
</div><!-- overlay -->`;

  const settingOption1 = /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Card"], {
    sectioned: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Form"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"].Group, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
              label: "Font Size",
              onChange: val => {
                setFontSize(val);
              },
              value: fontSize,
              type: "number",
              min: 0,
              suffix: "px"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Popover"], {
            active: popoverActiveFontColor,
            activator: activatorFontColor,
            onClose: togglePopoverActiveFontColor,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["ColorPicker"], {
                onChange: handleFontColorChange,
                color: FontColor
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
                value: FontColorHexColor,
                label: "",
                type: "text",
                id: "FontColorHexColor",
                onChange: handleFontColorHexColorChange
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"].Group, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
              label: "Icon Size",
              onChange: val => {
                setIconSize(val);
              },
              value: iconSize,
              type: "number",
              min: 0,
              suffix: "px"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Popover"], {
            active: popoverActiveIconColor,
            activator: activatorIconColor,
            onClose: togglePopoverActiveIconColor,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["ColorPicker"], {
                onChange: handleIconColorChange,
                color: IconColor
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
                value: IconColorHexColor,
                label: "",
                type: "text",
                id: "IconColorHexColor",
                onChange: handleIconColorHexColorChange
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Popover"], {
            active: popoverActiveBackgroundColor,
            activator: activatorBackgroundColor,
            onClose: toggleBackgroundColor,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["ColorPicker"], {
                onChange: handleBackgroundColorChange,
                color: BackgroundColor
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"].Section, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
                value: BackgroundColorHexColor,
                label: "",
                type: "text",
                id: "BackgroundColorHexColor",
                onChange: handleBackgroundColorHexColorChange
              })
            })]
          })
        })]
      })
    })
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), !isEdit ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "edit-style-btn",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
            onClick: () => setIsEdit(true),
            outline: true,
            children: "Edit Style"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Page"], {
          fullWidth: true,
          title: "Edit style",
          breadcrumbs: [{
            content: "settings",
            onAction: () => setIsEdit(false)
          }],
          children: settingOption1
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Page"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Card"], {
            sectioned: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "Preview:"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              dangerouslySetInnerHTML: {
                __html: previewHTML
              }
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: "Save",
            // disabled: isLoading,
            onAction: handleProductSettingSave
          },
          secondaryActions: [{
            content: "Cancel",
            destructive: true,
            onAction: getProductSettings
          }]
        })
      })]
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
  });
}

/* harmony default export */ var Settings_Product = (Product);
// CONCATENATED MODULE: ./client/Component/Settings/Thankyou.js







function ThankYou(props) {
  //add background color-----------------------------------------
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); //toast 

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  });
  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null;
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])('option1');
  const handleChangeType = Object(external_react_["useCallback"])((_checked, newValue) => setType(newValue), []);
  const {
    0: redirectURL,
    1: setRedirectURL
  } = Object(external_react_["useState"])("");
  const {
    0: HeadingfontSize,
    1: setHeadingFontSize
  } = Object(external_react_["useState"])("15");
  const {
    0: ContentfontSize,
    1: setContentFontSize
  } = Object(external_react_["useState"])("15");
  const {
    0: popoverActiveHeadingFontColor,
    1: setPopoverActiveHeadingFontColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveButtonBGColor,
    1: setPopoverActiveButtonBGColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveButtonFontColor,
    1: setPopoverActiveButtonFontColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveContentColor,
    1: setPopoverActiveContentColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveBGColor,
    1: setPopoverActiveBGColor
  } = Object(external_react_["useState"])(false);
  const togglePopoverActiveHeadingFontColor = Object(external_react_["useCallback"])(() => setPopoverActiveHeadingFontColor(popoverActiveHeadingFontColor => !popoverActiveHeadingFontColor), []);
  const togglePopoverActiveButtonBGColor = Object(external_react_["useCallback"])(() => setPopoverActiveButtonBGColor(popoverActiveButtonBGColor => !popoverActiveButtonBGColor), []);
  const togglePopoverActiveButtonFontColor = Object(external_react_["useCallback"])(() => setPopoverActiveButtonFontColor(popoverActiveButtonFontColor => !popoverActiveButtonFontColor), []);
  const togglePopoverActiveContentColor = Object(external_react_["useCallback"])(() => setPopoverActiveContentColor(popoverActiveContentColor => !popoverActiveContentColor), []);
  const togglePopoverActiveBGColor = Object(external_react_["useCallback"])(() => setPopoverActiveBGColor(popoverActiveBGColor => !popoverActiveBGColor), []);
  const {
    0: HeadingFontColor,
    1: setHeadingFontColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ContentColor,
    1: setContentColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ButtonBGColor,
    1: setButtonBGColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ButtonFontColor,
    1: setButtonFontColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: BGColor,
    1: setBGColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const rgbaColorButtonFontColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ButtonFontColor));
  const rgbaColorButtonBGColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ButtonBGColor));
  const rgbaColorFontColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(HeadingFontColor));
  const rgbaColorContentColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ContentColor));
  const rgbaColorBGColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(BGColor));

  const handleHeadingFontColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setHeadingFontColorHexColor(hexColor);
    setHeadingFontColor(value);
  };

  const handleButtonBGColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setButtonBGColorHexColor(hexColor);
    setButtonBGColor(value);
  };

  const handleButtonFontColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setButtonFontColorHexColor(hexColor);
    setButtonFontColor(value);
  };

  const handleContentColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setContentColorHexColor(hexColor);
    setContentColor(value);
  };

  const handleBGColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setBGColorHexColor(hexColor);
    setBGColor(value);
  };

  const {
    0: HeadingFontColorHexColor,
    1: setHeadingFontColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(HeadingFontColor));
  const {
    0: ButtonBGColorHexColor,
    1: setButtonBGColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ButtonBGColor));
  const {
    0: ButtonFontColorHexColor,
    1: setButtonFontColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ButtonFontColor));
  const {
    0: ContentColorHexColor,
    1: setContentColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ContentColor));
  const {
    0: BGColorHexColor,
    1: setBGColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(BGColor));

  const handleHeadingFontColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setHeadingFontColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setHeadingFontColor(hsba);
      }
    }
  };

  const handleContentColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setContentColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setContentColor(hsba);
      }
    }
  };

  const handleButtonBGColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setButtonBGColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setButtonBGColor(hsba);
      }
    }
  };

  const handleButtonFontColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setButtonFontColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setButtonFontColor(hsba);
      }
    }
  };

  const handleBGColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setBGColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setBGColor(hsba);
      }
    }
  };

  const hexToRgb = hex => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : {
      red: 0,
      green: 0,
      blue: 0
    };
  };

  const activatorHeadingFontColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Heading Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveHeadingFontColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorFontColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: HeadingFontColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorContentColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Content Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveContentColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorContentColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ContentColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorButtonFontColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Button Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveButtonFontColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorButtonFontColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ButtonFontColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorButtonBGColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Button background Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveButtonBGColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorButtonBGColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ButtonBGColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorBGColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Background Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveBGColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorBGColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: BGColorHexColor
            })]
          })
        })
      })
    })]
  });

  Object(external_react_["useEffect"])(() => {
    getProductSettings();
  }, []);

  function getProductSettings() {
    setIsLoading(true);
    getSettingThankYou().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          // const { displayType, headingFontColor, headingFontSize, contentFontColor, contentFontSize, buttonFontColor, buttonBackgroundColor, backgroundColor } = response.data.data;
          const {
            displayType,
            redirectURL
          } = response.data.data;
          displayType && setType(displayType);
          redirectURL && setRedirectURL(redirectURL); // headingFontColor && handleHeadingFontColorHexColorChange(headingFontColor);
          // headingFontSize && setHeadingFontSize((headingFontSize).toString());
          // contentFontColor && handleContentColorHexColorChange(contentFontColor);
          // contentFontSize && setContentFontSize((contentFontSize).toString());
          // buttonFontColor && handleButtonFontColorHexColorChange(buttonFontColor);
          // buttonBackgroundColor && handleButtonBGColorHexColorChange(buttonBackgroundColor);
          // backgroundColor && handleBGColorHexColorChange(backgroundColor);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleProductSettingSave() {
    setIsLoading(true);
    const data = {
      displayType: type,
      redirectURL // "headingFontColor": HeadingFontColorHexColor,
      // "headingFontSize": parseInt(HeadingfontSize),
      // "contentFontColor": ContentColorHexColor,
      // "contentFontSize": parseInt(ContentfontSize),
      // "buttonFontColor": ButtonFontColorHexColor,
      // "buttonBackgroundColor": ButtonBGColorHexColor,
      // "backgroundColor": BGColorHexColor

    };
    assignSettingThankYou(data).then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getProductSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  ; // const previewOption1 = `<img src="https://merchant.hemster.co/faherty/checkout_banner.png"/>`;
  // const previewOption2 = `<img src="https://merchant.hemster.co/faherty/checkout_banner_b.png"/>`

  const previewOption1 = `<div style="width: 60%;height: 216px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;">
        <div>
            <div
                style="position:relative;top: 20px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;text-align: center;">

                <img src="${window.location.origin}/hook/assets/thankyou_page.gif" style="height: 60px;/* margin-right: 3px; */">
                <div>
                    <div
                        style="font-family: Canela;font-style: normal;font-weight: normal;font-size: 30px;line-height: 30px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;">
                        Claim your free tailoring</div>
                    <div
                        style="font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;">
                        Find your perfect fit today with Hemster.</div>
                </div>
                <input type="submit" value="GET STARTED" class="btn"
                    style="background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;margin: 5px;max-width: fit-content;">
            </div>
        </div>
    </div>`;
  const previewOption2 = `<style>
        .ty-main{
            width: 60%;height: 104px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;
        }
        .ty-inner{
            position:relative;left: 9px;display: flex;top: 22px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;
        }
        .ty-image{
            height: 60px;margin-right: 3px;
        }
        .ty-image-inner{
            position: absolute;left: 70px;top: 0px;
        }
        .ty-text{
            font-family: Canela;font-style: normal;font-weight: normal;font-size: 22.5px;line-height: 32px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;
        }
        .ty-text-sub{
        font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;
        }
        .ty-button{
            background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;position: absolute;right: 24px;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;
        }
        @media only screen and (max-width: 768px) {
            .ty-main {
                height: 221px;
                text-align:center;  
            }
            .ty-text{
                display: block;
            }
            .ty-text-sub{
                display: block;
            }
            .ty-inner {
                display: block;
                position: relative;
                left: unset;
            }
            .ty-image-inner{
                position: unset;
                width: fit-content;
                margin: auto;
            }
            .ty-button {
                position: unset;
                margin-top: 10px;
                padding: 2px 13px;
                max-width: fit-content;
            }
        }
        </style>
        <div class="ty-main">
        <div>
            <div
                class="ty-inner">
                <img class="ty-image" src="${window.location.origin}/hook/assets/thankyou_page.gif" >
                <div class="ty-image-inner">
                    <div class="ty-text">
                        Don’t forget!
                    </div>
                    <div class="ty-text-sub">
                        Book your free fitting with Hemster today.</div>
                </div>
                <input type="submit" value="GET STARTED" class="btn ty-button">
            </div>
        </div>
    </div>`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "ty-url",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextField"], {
                value: redirectURL,
                label: "Redirect URL:",
                type: "text",
                id: "url",
                onChange: val => setRedirectURL(val)
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "type-radio",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "Type:"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["RadioButton"], {
                label: "Option 1",
                checked: type === 'option1',
                id: "option1",
                name: "type",
                onChange: handleChangeType
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["RadioButton"], {
                label: "Option 2",
                id: "option2",
                name: "type",
                checked: type === 'option2',
                onChange: handleChangeType
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            children: "Preview:"
          }), type === "option1" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: previewOption1
            }
          }), type === "option2" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: previewOption2
            }
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: 'Save',
            onAction: handleProductSettingSave
          },
          secondaryActions: [{
            content: 'Cancel',
            destructive: true,
            onAction: getProductSettings
          }]
        })
      })]
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
  });
}

/* harmony default export */ var Thankyou = (ThankYou);
// CONCATENATED MODULE: ./client/Component/Settings/CartPopup.js







function CartPopup(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); //Button enable/disable-------------------------------------

  const {
    0: isFirstButtonActive,
    1: setIsFirstButtonActive
  } = Object(external_react_["useState"])(false);
  const handleFirstButtonClick = Object(external_react_["useCallback"])(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);
  const handleSecondButtonClick = Object(external_react_["useCallback"])(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]); //toast 

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  });
  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: HeadingfontSize,
    1: setHeadingFontSize
  } = Object(external_react_["useState"])("15");
  const {
    0: ContentfontSize,
    1: setContentFontSize
  } = Object(external_react_["useState"])("15");
  const {
    0: TitlefontSize,
    1: setTitleFontSize
  } = Object(external_react_["useState"])("15");
  const {
    0: popoverActiveHeadingFontColor,
    1: setPopoverActiveHeadingFontColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveButtonBGColor,
    1: setPopoverActiveButtonBGColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveButtonFontColor,
    1: setPopoverActiveButtonFontColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveContentColor,
    1: setPopoverActiveContentColor
  } = Object(external_react_["useState"])(false);
  const {
    0: popoverActiveTitleColor,
    1: setPopoverActiveTitleColor
  } = Object(external_react_["useState"])(false);
  const togglePopoverActiveHeadingFontColor = Object(external_react_["useCallback"])(() => setPopoverActiveHeadingFontColor(popoverActiveHeadingFontColor => !popoverActiveHeadingFontColor), []);
  const togglePopoverActiveButtonBGColor = Object(external_react_["useCallback"])(() => setPopoverActiveButtonBGColor(popoverActiveButtonBGColor => !popoverActiveButtonBGColor), []);
  const togglePopoverActiveButtonFontColor = Object(external_react_["useCallback"])(() => setPopoverActiveButtonFontColor(popoverActiveButtonFontColor => !popoverActiveButtonFontColor), []);
  const togglePopoverActiveContentColor = Object(external_react_["useCallback"])(() => setPopoverActiveContentColor(popoverActiveContentColor => !popoverActiveContentColor), []);
  const togglePopoverActiveTitleColor = Object(external_react_["useCallback"])(() => setPopoverActiveTitleColor(popoverActiveTitleColor => !popoverActiveTitleColor), []);
  const {
    0: HeadingFontColor,
    1: setHeadingFontColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ContentColor,
    1: setContentColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: TitleColor,
    1: setTitleColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ButtonBGColor,
    1: setButtonBGColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const {
    0: ButtonFontColor,
    1: setButtonFontColor
  } = Object(external_react_["useState"])({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0
  });
  const rgbaColorButtonFontColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ButtonFontColor));
  const rgbaColorButtonBGColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ButtonBGColor));
  const rgbaColorFontColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(HeadingFontColor));
  const rgbaColorContentColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(ContentColor));
  const rgbaColorTitleColor = Object(polaris_["rgbString"])(Object(polaris_["hsbToRgb"])(TitleColor));

  const handleHeadingFontColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setHeadingFontColorHexColor(hexColor);
    setHeadingFontColor(value);
  };

  const handleButtonBGColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setButtonBGColorHexColor(hexColor);
    setButtonBGColor(value);
  };

  const handleButtonFontColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setButtonFontColorHexColor(hexColor);
    setButtonFontColor(value);
  };

  const handleContentColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setContentColorHexColor(hexColor);
    setContentColor(value);
  };

  const handleTitleColorChange = value => {
    let hexColor = Object(polaris_["hsbToHex"])(value);
    setTitleColorHexColor(hexColor);
    setTitleColor(value);
  };

  const {
    0: HeadingFontColorHexColor,
    1: setHeadingFontColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(HeadingFontColor));
  const {
    0: ButtonBGColorHexColor,
    1: setButtonBGColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ButtonBGColor));
  const {
    0: ButtonFontColorHexColor,
    1: setButtonFontColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ButtonFontColor));
  const {
    0: ContentColorHexColor,
    1: setContentColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(ContentColor));
  const {
    0: TitleColorHexColor,
    1: setTitleColorHexColor
  } = Object(external_react_["useState"])(Object(polaris_["hsbToHex"])(TitleColor));

  const handleHeadingFontColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setHeadingFontColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setHeadingFontColor(hsba);
      }
    }
  };

  const handleContentColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setContentColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setContentColor(hsba);
      }
    }
  };

  const handleTitleColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setTitleColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setTitleColor(hsba);
      }
    }
  };

  const handleButtonBGColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setButtonBGColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setButtonBGColor(hsba);
      }
    }
  };

  const handleButtonFontColorHexColorChange = value => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setButtonFontColorHexColor(value);

      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = Object(polaris_["rgbToHsb"])(rgbValue);
        setButtonFontColor(hsba);
      }
    }
  };

  const hexToRgb = hex => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : {
      red: 0,
      green: 0,
      blue: 0
    };
  };

  const activatorHeadingFontColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Heading Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveHeadingFontColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorFontColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: HeadingFontColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorContentColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Content Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveContentColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorContentColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ContentColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorTitleColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Title Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveTitleColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorTitleColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: TitleColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorButtonFontColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Button Font Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveButtonFontColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorButtonFontColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ButtonFontColorHexColor
            })]
          })
        })
      })
    })]
  });

  const activatorButtonBGColor = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      children: "Button background Color"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "3px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
        onClick: togglePopoverActiveButtonBGColor,
        disclosure: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
            spacing: "tight",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                height: "2rem",
                width: "2rem",
                borderRadius: "0.3rem",
                background: rgbaColorButtonBGColor
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: ButtonBGColorHexColor
            })]
          })
        })
      })
    })]
  });

  Object(external_react_["useEffect"])(() => {
    getProductSettings();
  }, []);

  function getProductSettings() {
    setIsLoading(true);
    getSettingCartPopup().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            isEnable
          } = response.data.data; // const { headingFontColor, headingFontSize, titleFontColor, titleFontSize, contentFontColor, contentFontSize, buttonFontColor, buttonBackgroundColor, isEnable } = response.data.data;
          // headingFontColor && handleHeadingFontColorHexColorChange(headingFontColor);
          // headingFontSize && setHeadingFontSize((headingFontSize).toString());
          // titleFontColor && handleTitleColorHexColorChange(titleFontColor);
          // titleFontSize && setTitleFontSize((titleFontSize).toString());
          // contentFontColor && handleContentColorHexColorChange(contentFontColor);
          // contentFontSize && setContentFontSize((contentFontSize).toString());
          // buttonFontColor && handleButtonFontColorHexColorChange(buttonFontColor);
          // buttonBackgroundColor && handleButtonBGColorHexColorChange(buttonBackgroundColor);

          isEnable ? setIsFirstButtonActive(true) : setIsFirstButtonActive(false);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleProductSettingSave() {
    setIsLoading(true);
    const data = {
      // "headingFontColor": HeadingFontColorHexColor,
      // "headingFontSize": parseInt(HeadingfontSize),
      // "titleFontColor": TitleColorHexColor,
      // "titleFontSize": parseInt(TitlefontSize),
      // "contentFontColor": ContentColorHexColor,
      // "contentFontSize": ContentfontSize,
      // "buttonFontColor": ButtonFontColorHexColor,
      // "buttonBackgroundColor": ButtonBGColorHexColor,
      "isEnable": isFirstButtonActive
    };
    assignSettingCartPopup(data).then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getProductSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  ;
  let cartpopUp = `
    <div id="hemster-installation-modal" class="modal">
    <div class="modal-content">
        <div class="header" style="padding: 23px; padding-bottom: 0; height:53px;">
        <span class="close" onclick="document.getElementById('hemster-installation-modal').classList.remove('is_open')">
            <div style="font-size: 18px;font-weight: 600;color: #1F1E2C;">X</div>
        </span>
        </div>
        <div style="color: #1F1E2C; text-align: center; font-family: Montserrat, sans-serif; font-style: normal; font-weight: normal;font-size: 40px;line-height: 48px;font-feature-settings: 'pnum' on, 'lnum' on;">
                Get free tailoring!
        </div>
        <div class="grid" style="padding-top: 44px; margin-left: 0;display:flex">
            <div class="grid__item image" style="width:343px;margin: 0 48px 48px 48px;background: url(https://merchant.hemster.co/faherty/hemster_installation_image.jpg);height: 380px;padding-left: 0;background-size: cover;"></div>
              <div class="grid__item details" style="width:356px; padding: 30px 48px 80px 0;">
              <h2 style="color: #1F1E2C; text-align: start; font-size: 18px;font-weight: bold; font-family: Montserrat, sans-serif;font-style: normal;line-height: 24px;letter-spacing: 0.2em;text-transform: uppercase;font-feature-settings: 'pnum' on, 'lnum' on;"> 
                  Hemster FitKit
                  <br>
                 <span style="color: #B4B4B6; font-style: normal;font-weight: bold;font-size: 14px;line-height: 20px;">Free</span>
                 </h2>
              <p style="margin-top: 15px;margin-bottom:32px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: normal;font-size: 16px;line-height: 24px;font-feature-settings: 'pnum' on, 'lnum' on;color: #1F1E2C;">
                  Tailor your new garments to your perfect fit for free. Simply add a Hemster FitKit to your order and <span style="text-decoration-line: underline;font-weight: bold;cursor:pointer;">book an appointment</span> with one of the Hemster’s fit experts.
                  </p>
              <input type="hidden" name="id" value="31652105355333" />
              <input type="hidden" id="quantity" name="quantity" value="1"/>
                
              <div style="display: flex;justify-content: space-between;">
                    <input type="submit" value="Add to cart" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px; font-size: 15px;" />
                    <input type="submit" value="Learn more" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px;font-size: 15px;" />
              </div>

              <div style="text-align:center;padding-top:18px;" onclick="document.getElementById('hemster-installation-modal').classList.remove('is_open')">
                    <span style="font-size: 16px;line-height: 24px;text-decoration-line: underline;font-feature-settings: 'pnum' on, 'lnum' on;color: #838386;cursor:pointer;">No, I don’t want free tailoring</span>
              </div>
            </div>
        </div>
      
  </div>

</div>

<style>
/* The Modal (background) */
#hemster-installation-modal.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 99999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  opacity: 1;
}

#hemster-installation-modal.modal.is_open {
  display: block;
}

/* Modal Content/Box */
#hemster-installation-modal > .modal-content {
  background-color: #FFFFFF;
  margin: 5% auto; /* 15% from the top and centered */
  border-radius: 8px;
  width: 800px; /* Could be more or less, depending on screen size */
}

/* The Close Button */
#hemster-installation-modal .close {
  color: #B4B4B6;
  float: right;
  font-size: 12px;
}

#hemster-installation-modal .close:hover,
#hemster-installation-modal .close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 480px) {
  #hemster-installation-modal .grid__item.image {
    height: 250px !important;
  }
  .grid{
      display:block !important;
  }
}
@media only screen and (max-width: 830px) {
  #hemster-installation-modal > .modal-content {
    width: 80% !important; 
  }
  
  #hemster-installation-modal .grid__item.image {
    width: calc(100% - 96px) !important;
  }
  
  #hemster-installation-modal .grid__item.details {
    padding: 0px 48px 48px 48px !important; 
    width: 100% !important; 
  }

  .grid{
    display:block !important;
  }
}
</style>`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "popup-settings",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "Cart PopUp status"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["ButtonGroup"], {
                segmented: true,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: isFirstButtonActive,
                  onClick: handleFirstButtonClick,
                  children: "Enable"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: !isFirstButtonActive,
                  onClick: handleSecondButtonClick,
                  children: "Disable"
                })]
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                cursor: "pointer",
                textDecoration: "underline"
              },
              onClick: () => {
                document.getElementById("hemster-installation-modal").classList.add("is_open");
              },
              children: "Click here for Preview"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: cartpopUp
            }
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: 'Save',
            onAction: handleProductSettingSave
          },
          secondaryActions: [{
            content: 'Cancel',
            destructive: true,
            onAction: getProductSettings
          }]
        })
      })]
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
  });
}

/* harmony default export */ var Settings_CartPopup = (CartPopup); // import React from 'react';
// function CartPopup(props) {
//     return (
//         <div>
//             CartPopup settings.....
//         </div>
//     );
// }
// export default CartPopup;
// CONCATENATED MODULE: ./client/Component/Settings/Collection.js






function Collection() {
  //state and handlers
  //Button enable/disable-------------------------------------
  const {
    0: isFirstButtonActive,
    1: setIsFirstButtonActive
  } = Object(external_react_["useState"])(false);
  const handleFirstButtonClick = Object(external_react_["useCallback"])(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);
  const handleSecondButtonClick = Object(external_react_["useCallback"])(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); //toast

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  });
  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null;
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])("option1");
  const handleChangeType = Object(external_react_["useCallback"])((_checked, newValue) => setType(newValue), []);
  Object(external_react_["useEffect"])(() => {
    getCollectionSettings();
  }, []);

  function getCollectionSettings() {
    setIsLoading(true);
    getSettingCollection().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            displayType,
            isEnable
          } = response.data.data;
          displayType && setType(displayType);
          isEnable ? setIsFirstButtonActive(true) : setIsFirstButtonActive(false);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleCollectionSettingSave() {
    setIsLoading(true);
    const data = {
      displayType: type,
      isEnable: isFirstButtonActive
    };
    assignSettingCollection(data).then(response => {
      setIsLoading(false);
      console.log("response assign pro set", response);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getCollectionSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  const previewOption1 = `<head>
  <style>
      @import url('http://fonts.cdnfonts.com/css/sillii-willinn');

      .grid__item-details {
        background: #F4EEED;
        font-family: serif;
        font-size: 16px;
        width: 278px;
        padding: 10px 18px;
        max-height: 116px;
      }

      .grid {
          display: flex;
          cursor: pointer;
      }

      p.grid-mine-text {
        font-family: Sillii Willinn;
        font-size: 41px;
        transform: rotate(-5deg);
        margin: 0px 0 !important;
        padding: 0 !important;
      }

      .g-text {
        display: flex;
        line-height: 48px;
      }

      .grid-mine-line {
          width: 80px;
          height: 0px;
          margin-top: 35px;
          margin-left: -82px;
          border: 1.16419px solid #1F1E2C;
      }

      .grid-text-2-container {
          font-family: system-ui;
      }

      .grid-size {
          color: #000;
      }

      .grid-size-text {
          color: #77777a;
      }

      .logomark-custom {
          height: fit-content;
          margin: auto 0;
      }

      .grid-text-2 {
          display: flex;
          justify-content: space-between;
      }
  </style>
</head>
<div class="grid">
  <div>
      <img src=${type === "option1" ? `${window.location.origin}/hook/assets/collection1.png` : type == "option2" ? `${window.location.origin}/hook/assets/collection2.png` : `${window.location.origin}/hook/assets/collection3.png`} />
  </div>
  <div class="grid__item-details">
      <div class="g-text">
          <span style="font-size: 40px; margin-right: 15px;">Make it </span>
          <p class="grid-mine-text">Mine</p>
          <p class="grid-mine-line"></p>
      </div>
      <div class="grid-text-2">
          <div class="grid-text-2-container">
              <div class="grid-size">In between sizes?</div>
              <div class="grid-size-text">Get it tailored with Hemster.</div>
          </div>
          <img class="logomark-custom" src='${window.location.origin}/hook/assets/logomark.png' />
      </div>
  </div>
</div>`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [" ", isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "popup-settings",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
          children: "Collection page status"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["ButtonGroup"], {
            segmented: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
              pressed: isFirstButtonActive,
              onClick: handleFirstButtonClick,
              children: "Enable"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
              pressed: !isFirstButtonActive,
              onClick: handleSecondButtonClick,
              children: "Disable"
            })]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "type-radio",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "Type:"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Stack"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["RadioButton"], {
                label: "Option 1",
                checked: type === "option1",
                id: "option1",
                name: "type",
                onChange: handleChangeType
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["RadioButton"], {
                label: "Option 2",
                id: "option2",
                name: "type",
                checked: type === "option2",
                onChange: handleChangeType
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["RadioButton"], {
                label: "Option 3",
                checked: type === "option3",
                id: "option3",
                name: "type",
                onChange: handleChangeType
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
            children: "Preview:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: previewOption1
            }
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: "Save",
            // disabled: isLoading,
            onAction: handleCollectionSettingSave
          },
          secondaryActions: [{
            content: "Cancel",
            destructive: true,
            onAction: getCollectionSettings
          }]
        })
      })]
    }), toastMarkup]
  });
}
// CONCATENATED MODULE: ./client/Component/Settings/Announcement.js







function Announcement(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); //Button enable/disable-------------------------------------

  const {
    0: isFirstButtonActive,
    1: setIsFirstButtonActive
  } = Object(external_react_["useState"])(false);
  const handleFirstButtonClick = Object(external_react_["useCallback"])(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);
  const handleSecondButtonClick = Object(external_react_["useCallback"])(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]); //toast

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  }); ////////////////////page selection/////////////////

  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])([]);
  const {
    0: popoverActive,
    1: setPopoverActive
  } = Object(external_react_["useState"])(false);
  console.log(selected);
  const togglePopoverActive = Object(external_react_["useCallback"])(() => setPopoverActive(popoverActive => !popoverActive), []);

  const activator = /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
    onClick: togglePopoverActive,
    disclosure: true,
    children: "Select Page"
  }); //////////////////////////////////////////////////


  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null; // const [selected, setSelected] = useState("");
  // const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [{
    label: "Home page",
    value: "home_page"
  }, {
    label: "Product page",
    value: "product_page"
  }, {
    label: "Collection page",
    value: "collection_page"
  }, {
    label: "Collection list",
    value: "collection_list"
  }, {
    label: "Cart",
    value: "cart_page"
  }, {
    label: "Checkout",
    value: "checkout_page"
  }];
  Object(external_react_["useEffect"])(() => {
    getABSettings();
  }, []);

  function getABSettings() {
    setIsLoading(true);
    getSettingAB().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            isEnable,
            selected_page
          } = response.data.data;
          selected_page && setSelected(selected_page);
          isEnable ? setIsFirstButtonActive(true) : setIsFirstButtonActive(false);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleABSettingSave() {
    setIsLoading(true);
    const data = {
      isEnable: isFirstButtonActive,
      selected_page: selected
    };
    assignSettingAB(data).then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getABSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  let cartpopUp = `<style>
    .he-container {
        width: 100%;
        background: #212E47;
        color: #fff;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    .he-text-container {
        display: flex;
        margin: 0 auto;
        padding-top: 2px;
    }
    .he-text {
        margin-right: 7px;
        font-size: 14px;
        letter-spacing: 3px;
        font-family: system-ui;
        line-height: 20px;
        text-transform: uppercase;
    }
    .he-lm-button {
        background: #F4EEED;
        border-radius: 6px;
        color: #000;
        padding: 3px 10px;
        cursor: pointer;
        margin-right: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        font-family: system-ui;
        vertical-align: top;
        font-size: 14px;
    }

    </style>
    
    <div class="he-container">
        <div class="he-text-container">
            <div class="he-text">Get Free tailoring through our partnership with</div>
            <span><img src="${window.location.origin}/hook/assets/union.png" /></span>
        </div>
        <div class="he-lm-button">LEARN MORE</div>
    </div>`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "popup-settings",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "Announcement bar status"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["ButtonGroup"], {
                segmented: true,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: isFirstButtonActive,
                  onClick: handleFirstButtonClick,
                  children: "Enable"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: !isFirstButtonActive,
                  onClick: handleSecondButtonClick,
                  children: "Disable"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Popover"], {
                active: popoverActive,
                activator: activator,
                onClose: togglePopoverActive,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["OptionList"], {
                  onChange: setSelected,
                  options: options,
                  selected: selected,
                  allowMultiple: true
                })
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: "Preview:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: cartpopUp
            }
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: "Save",
            onAction: handleABSettingSave
          },
          secondaryActions: [{
            content: "Cancel",
            destructive: true,
            onAction: getABSettings
          }]
        })
      })]
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
  });
}

/* harmony default export */ var Settings_Announcement = (Announcement);
// CONCATENATED MODULE: ./client/Component/Settings/AccountDetails.js







function AccountDetails(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); //Button enable/disable-------------------------------------

  const {
    0: isFirstButtonActive,
    1: setIsFirstButtonActive
  } = Object(external_react_["useState"])(false);
  const handleFirstButtonClick = Object(external_react_["useCallback"])(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);
  const handleSecondButtonClick = Object(external_react_["useCallback"])(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]); //toast

  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])({
    isOpen: false,
    msg: "",
    isErr: false
  }); //////////////////////////////////////////////////

  const toastMarkup = active.isOpen ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Toast"], {
    content: active.msg,
    onDismiss: () => setActive({
      isOpen: false,
      msg: "",
      isErr: false
    }),
    error: active.isErr ? true : false
  }) : null;
  Object(external_react_["useEffect"])(() => {
    getADSettings();
  }, []);

  function getADSettings() {
    setIsLoading(true);
    getSettingADS().then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        if (response.data.data) {
          const {
            isEnable
          } = response.data.data;
          isEnable ? setIsFirstButtonActive(true) : setIsFirstButtonActive(false);
        }
      } else {
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Get Setting details error !",
        isErr: true
      });
      console.log("ERROR: ", err);
    });
  }

  function handleABSettingSave() {
    setIsLoading(true);
    const data = {
      isEnable: isFirstButtonActive
    };
    assignSettingADS(data).then(response => {
      setIsLoading(false);

      if (response && response.data && response.data.status === "success") {
        setActive({
          isOpen: true,
          msg: "Successfully saved.",
          isErr: false
        });
        getADSettings();
      } else {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true
        });
      }
    }).catch(err => {
      setIsLoading(false);
      setActive({
        isOpen: true,
        msg: "Something went wrong! Please try again.",
        isErr: true
      });
      console.log("ERROR", err);
    });
  }

  let account_details = `<style>
  .container-acc {
      text-align: left;
      width: fit-content;
      background: #F4EEED;
      border-radius: 4px;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      padding: 22px 20px;
      margin: 10px 0px;
      cursor: pointer;
  }

  .acc-text-1 {
      font-weight: 600;
      color: #1F1E2C;
  }

  .acc-text-image {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
  }

  .acc-text-2 {
      position: relative;
      top: 9px;
      color: #C1ACA4;
      text-decoration: underline;
      cursor: pointer;
  }

  .acc-iamge-2 {
      position: relative;
      top: 6px;
  }
</style>

<div class="container-acc" >
  <div class="acc-text-1">
      Fit issue? Get free virtual tailoring
  </div>
  <div class="acc-text-image">
      <span class="acc-text-2">Book fitting</span>
      <img src="https://merchant.hemster.co/faherty/hemsterlogo.png" class="acc-iamge-2">
  </div>
</div>`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "setting-spinner",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
        accessibilityLabel: "Spinner example",
        size: "large"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "popup-settings",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
              children: "PDP Account Details"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["FormLayout"].Group, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["ButtonGroup"], {
                segmented: true,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: isFirstButtonActive,
                  onClick: handleFirstButtonClick,
                  children: "Enable"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Button"], {
                  pressed: !isFirstButtonActive,
                  onClick: handleSecondButtonClick,
                  children: "Disable"
                })]
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["FormLayout"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: "Preview:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: account_details
            }
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "action-btns",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["PageActions"], {
          primaryAction: {
            content: "Save",
            onAction: handleABSettingSave
          },
          secondaryActions: [{
            content: "Cancel",
            destructive: true,
            onAction: getADSettings
          }]
        })
      })]
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Loading"], {}), toastMarkup]
  });
}

/* harmony default export */ var Settings_AccountDetails = (AccountDetails);
// CONCATENATED MODULE: ./client/Component/Settings.js












function Settings(props) {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(true);
  const {
    0: isLoadingApp,
    1: setIsLoadingApp
  } = Object(external_react_["useState"])(false);
  const contentStatus = active ? "Disable" : "Enable";
  const textStatus = active ? "enabled" : "disabled";

  function handleToggle() {
    setIsLoadingApp(true);
    var data = {
      isAppEnable: !active
    };
    enableApp(data).then(response => {
      if (response.data.status === "success") {
        setActive(!active);
        getAppStatus();
      }

      setIsLoadingApp(false);
    }).catch(error => {
      setIsLoadingApp(false);
      console.log("Error", error);
    });
  }

  Object(external_react_["useEffect"])(() => {
    getAppStatus();
  }, []);
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(0);
  const tabs = [{
    id: "productPage",
    content: "Product page"
  }, {
    id: "thankyou",
    content: "Thank you page"
  }, {
    id: "cartPopUp",
    content: "Cart page Pop-up"
  }, {
    id: "collection",
    content: "Collection page"
  }, {
    id: "account_details",
    content: "PDP account details"
  }, {
    id: "announcementBar",
    content: "Announcement bar"
  }];

  function getAppStatus() {
    setIsLoadingApp(true);
    authService_getAppStatus().then(response => {
      setIsLoadingApp(false);

      if (response && response.data && response.data.data && response.data.data.shopStatus) {
        let {
          isAppEnable
        } = response.data.data.shopStatus;
        isAppEnable ? setActive(true) : setActive(false);
      } else {
        setActive(false);
      }
    }).catch(err => {
      setIsLoadingApp(false);
      console.log("ERROR: ", err);
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Page"], {
    title: "Settings",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["SettingToggle"], {
      action: {
        content: contentStatus,
        onAction: handleToggle
      },
      enabled: active,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "enable-setting",
        children: ["This app is", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["TextStyle"], {
          variation: "strong",
          children: isLoadingApp ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {
            size: "small",
            color: "teal"
          }) : textStatus + "."
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Card"], {
      sectioned: true,
      title: "Display Settings",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Tabs"], {
        tabs: tabs,
        selected: selected,
        onSelect: setSelected,
        children: [selected === 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Settings_Product, {}), selected === 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Thankyou, {}), selected === 2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Settings_CartPopup, {}), selected === 3 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Collection, {}), selected === 4 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Settings_AccountDetails, {}), selected === 5 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Settings_Announcement, {})]
      })
    })]
  });
}

/* harmony default export */ var Component_Settings = (Settings);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("xeH2");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./client/Component/Support.js






function Support(props) {
  Object(external_react_["useEffect"])(() => {
    external_jquery_default()(document).ready(function () {
      external_jquery_default()(".faq_question").click(function () {
        if (external_jquery_default()(this).parent().is(".open")) {
          external_jquery_default()(this).closest(".faq").find(".faq_answer_container").slideUp();
          external_jquery_default()(this).closest(".faq").removeClass("open");
        } else {
          external_jquery_default()(".faq_answer_container").slideUp();
          external_jquery_default()(".faq").removeClass("open");
          external_jquery_default()(this).closest(".faq").find(".faq_answer_container").slideDown();
          external_jquery_default()(this).closest(".faq").addClass("open");
        }
      });
    });
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Page"], {
      title: "Support",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "faq_container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Layout"].Section, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Card"], {
              sectioned: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "faq",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Heading"], {
                    children: "Quick Answers"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "faq_answer",
                    style: {
                      marginTop: "10px"
                    },
                    children: ["For support and app related queries, feel free to email us", " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Link"], {
                      external: true,
                      onClick: () => window.open('mailto:matt@hemster.co', "_blank"),
                      children: [" ", "here"]
                    })]
                  })]
                })
              })
            })
          })
        })
      })
    })
  });
}

/* harmony default export */ var Component_Support = (Support);
// EXTERNAL MODULE: ./node_modules/@shopify/polaris/dist/styles.css
var styles = __webpack_require__("l7Dk");

// CONCATENATED MODULE: ./client/Component/MainPage.js













function MainPage() {
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(0);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: isErr,
    1: setIsErr
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (window.location.hostname !== "localhost") {
      getAppCharge().then(res => {
        if (res.data && res.data.confirmationUrl) {
          window.top.location.href = res.data.confirmationUrl;
        } else if (res.data.app_charge) {
          setIsLoading(false);
        }
      }).catch(err => {
        setIsLoading(false);
        setIsErr(true);
        console.log("ERROR: ", err);
      });
    } else {
      setIsLoading(false);
    }
  }, []);
  const tabs = [{
    id: 'products',
    content: 'Products'
  }, {
    id: 'settings',
    content: 'Settings'
  }, {
    id: 'support',
    content: 'Support'
  }];
  console.log("isErr", isErr);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["AppProvider"], {
    i18n: en,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Frame"], {
      children: isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "spinner",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(polaris_["Spinner"], {})
      }) : !isErr ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(polaris_["Tabs"], {
          tabs: tabs,
          selected: selected,
          onSelect: setSelected,
          children: [selected === 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductIndex, {}), selected === 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component_Settings, {}), selected === 2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component_Support, {})]
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "spinner",
        children: "Something went wrong with billing! please try again."
      })
    })
  });
}

/* harmony default export */ var Component_MainPage = __webpack_exports__["default"] = (MainPage);

/***/ })

};;