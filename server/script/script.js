function initJQuery(onJQueryLoad) {
  if (typeof jQuery == "undefined") {
    (function () {
      // Load jquery script if doesn't exist
      var script = document.createElement("SCRIPT");
      script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
      script.type = "text/javascript";
      script.onload = onJQueryLoad;
      document.head.appendChild(script);
    })();
  } else {
    onJQueryLoad();
  }
}

const open = window.XMLHttpRequest.prototype.open;

initJQuery(() => {
  (function ($) {

    function addRemoveFitKit(data, cartData, fromPage) {
      if (!(cartData && cartData.items && Array.isArray(cartData.items) && cartData.items.length > 0)) return;
      let cartProductIds = cartData.items.map(d => {
        return `${d.product_id}`
      })

      $.get(
        `${domain}/hook/check-is-product-assigned?shop=${Shopify.shop}&productIds=${cartProductIds.join(',')}`,
        function (productAssData, status) {
          if (status === "success") {

            if (!(data.isAppEnable)) { return; }
            let assignedProducts = productAssData.assignedProducts
            // add event listener for change of quantity
            var isFitkitIncluded = false;
            var variant_id = "";

            for (const iterator of cartData.items) {
              if (iterator.product_type === "FitKit") {
                isFitkitIncluded = true;
                variant_id = iterator.variant_id;
                break;
              }
            }

            var isfitkit = false;

            if (assignedProducts &&
              Array.isArray(assignedProducts) &&
              assignedProducts.length > 0 &&
              cartData.items &&
              Array.isArray(cartData.items) &&
              cartData.items.length > 0
            ) {

              for (const iterator of cartData.items) {
                for (const assignedPro of assignedProducts) {

                  const assignedProId = assignedPro
                  console.log("---", iterator.product_id, assignedProId);
                  if ((String(iterator.product_id) === assignedProId) && (iterator.product_type !== "FitKit")) {
                    isfitkit = true;
                    if (data.priceSettings &&
                      data.priceSettings.applyByPrice) {
                      const itemPrice = parseFloat(iterator.price / 100).toFixed(2);
                      if (itemPrice > data.priceSettings.byPrice) {
                        isfitkit = true;
                        break;
                      } else {
                        isfitkit = false;
                      }
                    }
                  }

                }

              }

            }

            //if not fitkit in cart and there is applicable products then add fitkit 

            if (!isFitkitIncluded && isfitkit) {

              jQuery.ajax({
                type: "POST",
                url: "/cart/add.js",
                data: {
                  "id": data.fitkitProducts.fitkitProductVariantId.split("ProductVariant/")[1],
                  "quantity": 1

                },
                dataType: "json",
                success: function (addedData) {
                  console.log("added fitkit product!");

                  if (addedData.quantity > 1) {
                    jQuery.ajax({
                      type: "POST",
                      url: "/cart/change.js",
                      data: { 'id': addedData.variant_id, 'quantity': 1 },
                      dataType: "json",

                      success: function (addedData) {
                        console.log("removed dup");

                        window.location.reload();

                      }
                    })
                  } else {
                    window.location.reload()
                  }

                }
              });

            }

            //if fitkit in cart and not any applicable products then remove fitkit 
            else if (isFitkitIncluded && !isfitkit) {

              jQuery.ajax({
                type: "POST",
                url: "/cart/change.js",
                data: { 'id': variant_id, 'quantity': 0 },
                dataType: "json",

                success: function (addedData) {
                  console.log("Removed fitkit product!");

                  // if (fromPage === "cart") {
                  //   $.get("/cart", function (data) {
                  //     const parser = new DOMParser();
                  //     const doc = parser.parseFromString(data, "text/html");
                  //     const formSelector = doc.querySelector("form[action='/cart']");
                  //     $("form[action='/cart']").replaceWith(formSelector);
                  //   });

                  //   return;

                  // } else {
                  return window.location.reload()


                  // }
                }
              });
            }
            else {
              return;
            }
          } else {
            return;
          }
        })
    }

    if (window.Shopify) {
      if ($) {

        // var domain = `https://install.hemster.co`;

        var domain = `<%base_url%>`;

        const meta = window.meta;
        const ShopifyAnalytics = window.ShopifyAnalytics;
        const Shopify = window.Shopify;

        $.get(
          `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,
          function (data, status) {
            if (status === "success") {
              if (data.isAppEnable) {

                // if (Shopify.shop === "mor-collections.myshopify.com" ||
                //   Shopify.shop === 'franne-golde.myshopify.com' ||
                //   Shopify.shop === 'johnnie-oadmin.myshopify.com' ||
                //   Shopify.shop === 'mestiza-3.myshopify.com'
                // ) {

                //------------------------------------NEW----------------------------------------

                (function (open) {
                  XMLHttpRequest.prototype.open = function () {
                    // your special sauce
                    this.addEventListener("load", function () {

                      const myArray = [
                        '/cart.js',
                        `/cart/add.js`,
                        `/cart/update.js`,
                        `/cart/change.js`,
                        `/cart/clear.js`,
                      ]
                      let url = this._url;
                      if (!this._url) return;

                      const i = myArray.findIndex(element => url.includes(element));

                      if (i !== -1) {
                        const cartData = JSON.parse(this.response && String(this.response));

                        if (cartData.items && cartData.items.length > 0) {
                          addRemoveFitKit(data, cartData);
                        }

                      }
                    })
                    open.apply(this, arguments);
                  };
                })(XMLHttpRequest.prototype.open);
                //-------------------------------------------NEW-----------------------------------------------

                //----------------------------------------------------------------------------------------------

                // function openReplacement() {

                //   this.addEventListener("load", function () {

                //     const myArray = [
                //       '/cart.js',
                //       `/cart/add.js`,
                //       `/cart/update.js`,
                //       `/cart/change.js`,
                //       `/cart/clear.js`,
                //     ]
                //     let url = this._url;
                //     console.log("url", url);
                //     if (!this._url) return;

                //     const i = myArray.findIndex(element => url.includes(element));

                //     console.log("i", i);
                //     if (i !== -1) {
                //       const cartData = JSON.parse(this.response && String(this.response));

                //       if (cartData.items && cartData.items.length > 0) {
                //         addRemoveFitKit(data, cartData);
                //       }

                //     }
                //   })

                //   return open.apply(this, arguments);
                // }

                // window.XMLHttpRequest.prototype.open = openReplacement;

                //----------------------------------------------------------------------------------------------

                // } else {

                //   (function (ns, fetch) {
                //     if (typeof fetch !== 'function') return;
                //     ns.fetch = function () {
                //       const response = fetch.apply(this, arguments);
                //       response.then(res => {
                //         const myArray = [
                //           "/cart",
                //           `/cart/add`,
                //           `/cart/update`,
                //           `/cart/change`,
                //           `/cart/clear`,
                //         ]
                //         url = res.url;
                //         console.log("url", url);
                //         const i = myArray.findIndex(element => url.includes(element));
                //         if (i !== -1) {
                //           res.clone().json().then(async (cartData) => {
                //             addRemoveFitKit(data, cartData);

                //           });
                //         }
                //       });

                //       return response;
                //     }

                //   }(window, window.fetch))
                // }
              }
            }
          })



        //product page
        if (
          (meta && meta.page && meta.page.pageType === "product") ||
          (ShopifyAnalytics &&
            ShopifyAnalytics.meta &&
            ShopifyAnalytics.meta.page &&
            ShopifyAnalytics.meta.page.pageType === "product")
        ) {
          $.ajax({
            type: "GET",
            crossOrigin: true,
            url: `${domain}/hook/store-front/configs?shop=${Shopify.shop}&productId=${meta.product.gid}`,

            success: function (data) {
              if (
                data.isAppEnable === true
              ) {

                //check announcement bar
                if (data.abSettings && data.abSettings.isEnable) {
                  let ab_html = `<%announcement_bar%>`;

                  ab_html = ab_html.replace(
                    "<%ab_click%>",
                    `/products/${data.fitkitProducts.fitkitProductHandle}`
                  );

                  $("body").before(ab_html);

                  const page = data.abSettings.selected_page;

                  if (page) {
                    if (Shopify.shop === "mestiza-3.myshopify.com") {

                      $(".he-container").css("position", "absolute !important")
                    }

                    if (page.includes("product_page")) {
                      if (meta.page.pageType === "product") {
                        $(".hemster-banner").css(`display`, "block");
                      }
                    }
                  }
                }

                //END
                if (data.shouldDisplayFitkitProduct === true) {

                  let display_by_price = false;

                  //check the condition for the price

                  //display pdp widgets only if the product price is above of selected price

                  //--------------------------------------------on variant change start-----------------------------------------------------------
                  let priceSettings = data.priceSettings;

                  var firstTimeUrl = document.URL;

                  document.addEventListener("change", function () {

                    var currentPageUrl = document.URL;
                    var url = new URL(currentPageUrl);
                    var isVariantUrl = url.searchParams.get("variant");
                    currentPageUrl = isVariantUrl ? currentPageUrl : isVariantUrl;
                    if (currentPageUrl && firstTimeUrl != currentPageUrl) {
                      firstTimeUrl = currentPageUrl;

                      if (!(priceSettings && priceSettings.applyByPrice)) {
                        display_by_price = true;
                      } else {
                        const selectedVariant = ShopifyAnalytics.meta.product.variants.filter(
                          (variant) => {
                            return (
                              variant.id == ShopifyAnalytics.meta.selectedVariantId
                            );
                          }
                        );
                        const selectedVariantPrice =
                          selectedVariant &&
                          selectedVariant.length > 0 &&
                          selectedVariant[0].price &&
                          parseFloat(selectedVariant[0].price / 100).toFixed(2);

                        if (
                          selectedVariantPrice &&
                          selectedVariantPrice > priceSettings.byPrice
                        ) {
                          display_by_price = true;
                        } else {
                          display_by_price = false;
                        }
                      }
                      $(".hemster-pdp-widget").css(
                        "display",
                        display_by_price ? "block" : "none"
                      );
                    }
                  });

                  //------------------------------------------------------on variant change end-------------------------------------------------

                  if (
                    ShopifyAnalytics &&
                    ShopifyAnalytics.meta &&
                    ShopifyAnalytics.meta.product &&
                    ShopifyAnalytics.meta.product.variants &&
                    Array.isArray(ShopifyAnalytics.meta.product.variants) &&
                    ShopifyAnalytics.meta.product.variants.length > 0 &&
                    ShopifyAnalytics.meta.selectedVariantId
                  ) {
                    //-----------------------------------------------------------------------------------------

                    if (!(priceSettings && priceSettings.applyByPrice)) {
                      display_by_price = true;
                    } else {
                      const selectedVariant = ShopifyAnalytics.meta.product.variants.filter(
                        (variant) => {
                          return (
                            variant.id == ShopifyAnalytics.meta.selectedVariantId
                          );
                        }
                      );
                      debugger
                      const selectedVariantPrice =
                        selectedVariant &&
                        selectedVariant.length > 0 &&
                        selectedVariant[0].price &&
                        parseFloat(selectedVariant[0].price / 100).toFixed(2);

                      if (
                        selectedVariantPrice &&
                        selectedVariantPrice > priceSettings.byPrice
                      ) {
                        display_by_price = true;
                      } else {
                        display_by_price = false;
                      }
                    }

                    //-----------------------------------------------------------------------------------------
                  } else {
                    display_by_price = true;
                  }

                  //display by price
                  let divDesign = null;

                  //franne-golde.myshopify.com           
                  const byId = $("#AddToCart-product-template")

                  const buttons = $.find("button");

                  for (const button of buttons) {
                    const buttonText = button.textContent.trim().toLowerCase();

                    if (buttonText.includes("add to")) {
                      divDesign = button;
                      break;
                    }

                    else if (Shopify.shop === "franne-golde.myshopify.com" && (byId && byId.length > 0)) {
                      divDesign = $("#AddToCart-product-template")
                    }
                  }

                  if (divDesign) {
                    let htmlCode = ``;

                    const {
                      // new
                      pdpFontSize,
                      pdpBackgroundColor,
                      pdpFontColor,
                      pdpIconSize,
                      pdpIconColor
                    } = data.fitkitSettings;

                    var mapObj = {
                      "'#pdpFontSize'": pdpFontSize ? `${pdpFontSize}px` : '18px',
                      "'#pdpBackgroundColor'": pdpBackgroundColor ? pdpBackgroundColor : "#F4F3EF",
                      "'#pdpFontColor'": pdpFontColor ? pdpFontColor : "#3A3A3A",
                      "'#pdpIconSize3'": pdpIconSize ? `${pdpIconSize}px` : "26px",
                      "'#pdpIconSize4'": pdpIconSize ? `${pdpIconSize}px` : "26px",
                      "'#pdpIconColor'": pdpIconColor ? pdpIconColor : "#3A3A3A"
                    };

                    htmlCode = `<%PDP_html%>`

                    const popupHtml = `<%PDP_popup_html%>`;
                    $("body").append(popupHtml);
                    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

                    htmlCode = htmlCode.replace(re, function (matched) {
                      return mapObj[matched];
                    });

                    let finalCode = `<div style="margin:15px 0;" class="hemster-pdp-widget">${htmlCode}</div>
                    `;
                    //  `<script>
                    //                   var script = document.createElement("SCRIPT");
                    //                   script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
                    //                   script.type = "text/javascript";
                    //                   $=jQuery;


                    //                   var FormButtonSelector = ["form[action=\'/cart/add\']", "form[action=\'/cart\']"].join(", ");
                    //                   const buttons = $.find("button");
                    //                   let divDesign=null;

                    //                   for (const button of buttons) {
                    //                     const buttonText = button.textContent.trim().toLowerCase();

                    //                     if (buttonText.includes("add to")) {
                    //                       divDesign = button;
                    //                       break;
                    //                     }
                    //                   }

                    //                  ${Shopify.shop === "mestiza-3.myshopify.com" || Shopify.shop === "johnnie-oadmin.myshopify.com" ?
                    // `$(divDesign).click(function (e) {  ` :
                    // Shopify.shop === "mor-collections.myshopify.com" ?
                    //   `$($(FormButtonSelector)[0]).find(':submit').bind('click', function (e) {` :
                    //   ` $(FormButtonSelector).find(':submit').bind('click', function (e) {`}


                    //                               //add all - remove option of selection

                    //                               var dQty = document.getElementsByName("quantity");
                    //                               if (dQty && dQty.length > 0) {
                    //                                 dQty = Number(document.getElementsByName("quantity")[0].value);
                    //                               } else {
                    //                                 dQty = 1;
                    //                               }  

                    //                               // var data = {
                    //                               //   items :[
                    //                               //     {
                    //                               //       "id": Number($('select[name ="id"]').val()),
                    //                               //       "quantity":dQty,
                    //                               //       "properties": {
                    //                               //           '_isfitkit': true
                    //                               //         }
                    //                               //      }                
                    //                               //     ]
                    //                               // } 

                    //                               var data = {
                    //                                   items :[]
                    //                                 } 

                    //                               //check if fitkit is already added or not

                    //                               $.getJSON("/cart.js", function (cart) {

                    //                                 var isFitkitIncluded = false;
                    //                                 for (const iterator of cart.items) {
                    //                                   if (iterator.product_type === "FitKit") {
                    //                                     isFitkitIncluded = true;
                    //                                   }
                    //                                 }

                    //                                 if(!isFitkitIncluded){

                    //                                   data.items.push(
                    //                                     {
                    //                                       "id": ${data.fitkitProducts.fitkitProductVariantId.split("ProductVariant/")[1]},                                                        
                    //                                       "quantity": 1
                    //                                     },
                    //                                   ) 
                    //                                 }

                    //                                 console.log("data:::",data)
                    //                                 // jQuery.ajax({
                    //                                 //   type: "POST",
                    //                                 //   url: "/cart/add.js",
                    //                                 //   data: data,
                    //                                 //   dataType: "json",
                    //                                 //   success: function (data) {
                    //                                 //       // window.location.href = '/cart'; 
                    //                                 //   }
                    //                                 // });
                    //                  })
                    //            return false;
                    //         });
                    //     </script>`
                    if (display_by_price) {

                      $(divDesign).before(finalCode);
                    }

                  } else {
                    console.log("product page div not found");
                  }
                }
              }
            },
          });
        }

        //cart page
        if (window.location.pathname === "/cart") {
          $.ajax({
            type: "GET",
            crossOrigin: true,
            url: `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,

            success: function (data) {

              ///************************************************************************** */

              if (
                data.isAppEnable === true
              ) {

                //check announcement bar
                if (data.abSettings && data.abSettings.isEnable) {
                  let ab_html = `<%announcement_bar%>`;

                  ab_html = ab_html.replace(
                    "<%ab_click%>",
                    `/products/${data.fitkitProducts.fitkitProductHandle}`
                  );

                  $("body").before(ab_html);

                  const page = data.abSettings.selected_page;

                  if (page) {
                    if (Shopify.shop === "mestiza-3.myshopify.com") {

                      $(".he-container").css("position", "absolute !important")
                    }

                    if (page.includes("cart_page")) {
                      if (window.location.pathname === "/cart") {
                        $(".hemster-banner").css(`display`, "block");
                      }
                    }

                  }
                }

                //END

                //check cart event

                $.getJSON("/cart.js", function (cart) {

                  // addRemoveFitKit(data, cart, "cart");

                  if (data.popupSettings.isEnable === true) {
                    var isFitkitIncluded = false;
                    for (const iterator of cart.items) {
                      if (iterator.product_type === "FitKit") {
                        isFitkitIncluded = true;
                        break;
                      }
                    }

                    var isfitkit = false;
                    // for (const iterator of cart.items) {
                    //   if (
                    //     iterator.properties &&
                    //     iterator.properties._isfitkit == "true"
                    //   ) {
                    //     isfitkit = true;
                    //     break;
                    //   }
                    // }

                    if (data.assignedProducts &&
                      Array.isArray(data.assignedProducts) &&
                      data.assignedProducts.length > 0 &&
                      cart.items && Array.isArray(cart.items) &&
                      cart.items.length > 0) {

                      for (const iterator of cart.items) {
                        for (const assignedPro of data.assignedProducts) {

                          const assignedProId = assignedPro.split("gid://shopify/Product/").pop()
                          if (String(iterator.product_id) === assignedProId) {
                            isfitkit = true;
                            if (data.priceSettings &&
                              data.priceSettings.applyByPrice) {
                              const itemPrice = parseFloat(iterator.price / 100).toFixed(2);
                              if (itemPrice > data.priceSettings.byPrice) {
                                isfitkit = true;
                                break;
                              } else {
                                isfitkit = false;
                              }
                            }

                          }

                        }

                      }

                    }

                    //check if property have assigned fitkit

                    if (!isFitkitIncluded && isfitkit) {
                      console.log("display popup");

                      let popupCode = `<iframe src="https://merchant.hemster.co/faherty/track_pdp_modal.html?url=${window.location.href
                        }" style="display:none; width: 0px; display: none;height: 0px; border: 0; overflow: hidden;" scrolling="no"></iframe>
                                      <div id="hemster-installation-modal" class="is_open modal">
                                              <div class="modal-content">
                                              <form method="post" action="/cart/add">
                                                  <div class="header" style="padding: 23px; padding-bottom: 0; height:53px;">
                                                  <div class="close" onclick="jQuery('#hemster-installation-modal').removeClass('is_open');" style="font-size: 18px;font-weight: 600;color: #1F1E2C;">X</div>
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
                                                      <p style="margin-bottom:32px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: normal;font-size: 16px;line-height: 24px;font-feature-settings: 'pnum' on, 'lnum' on;color: #1F1E2C;">
  
                                                      Tailor your new garments to your perfect fit for free. Simply add a Hemster FitKit to your order and 
                                                      <span style="text-decoration-line: underline;font-weight: bold;cursor:pointer;" 
                                                      onclick="window.open('https://app.hemster.co/appointments/new?v=true&rid=4&flid=1&utm_source=merchant&utm_medium=website&utm_campaign=faherty_checkout_banner', 
                                                      target='_blank')">book an appointment</span> 
                                                      with one of the Hemster’s fit experts.
                                                      </p>
                                                      <input type="hidden" name="id" value="${data.fitkitProducts.fitkitProductVariantId.split("ProductVariant/")[1]}" />
                                                      <input type="hidden" id="quantity" name="quantity" value="1"/>
                                                      
                                                      <div style="display: flex;justify-content: space-between;">
                                                          <input type="submit" value="Add to cart" class="btn" style="background: #212E47; width:48%;color:#fff;padding: 10px !important;
                                                           ${Shopify.shop === "mestiza-3.myshopify.com" && "font-size:16px;"}"  />
                                                          <input type="button" onclick="window.open('/products/${data.fitkitProducts.fitkitProductHandle}','_blank')" value="Learn more" 
                                                          class="btn" style="${Shopify.shop === "mestiza-3.myshopify.com" && "font-size:16px;"} background: #212E47;padding: 10px !important; width:48%;color:#fff;border: none;cursor:pointer;letter-spacing: 2px;" />
                                                      </div>
                                                      
                                                      <div style="text-align:center;padding-top:14px;" onclick="jQuery('#hemster-installation-modal').removeClass('is_open');" >
                                                              <span style="font-size: 16px;line-height: 24px;text-decoration-line: underline;font-feature-settings: 'pnum' on, 'lnum' on;color: #838386;cursor:pointer;">No, I don’t want free tailoring</span>
                                                      </div>
                                                      </div>
                                                  </div>
                                              </form>
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
                                          </style>
                                      `;
                      let divDesign = $("body");
                      divDesign.append(popupCode);
                    }
                  }
                })
              }
            }
          }
          )
        };

        //thank you page
        if (
          (Shopify.Checkout && Shopify.Checkout.isOrderStatusPage === true) ||
          (Shopify.Checkout && Shopify.Checkout.page === "thank_you") ||
          (meta && meta.page && meta.page.path === "/checkout/thank_you") ||
          (ShopifyAnalytics &&
            ShopifyAnalytics.meta &&
            ShopifyAnalytics.meta.page &&
            ShopifyAnalytics.meta.page.path === "/checkout/thank_you")
        ) {

          $.get(
            `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,
            function (data, status) {
              if (status === "success") {

                if (data.isAppEnable === true) {

                  console.log("display thank you banner");

                  let boughtFitkit = false;
                  if (Shopify.checkout.line_items.length > 0) {
                    for (const iterator of Shopify.checkout.line_items) {
                      if (
                        iterator.variant_id ==
                        data.fitkitProducts.fitkitProductVariantId.split(
                          "ProductVariant/"
                        )[1]
                      ) {
                        boughtFitkit = true;
                      }
                    }
                  }

                  if (boughtFitkit) {
                    if (
                      data.thankyouSettings &&
                      data.thankyouSettings.displayType === "option1"
                    ) {

                      let img = `${domain}/hook/assets/thankyou_page.gif`;
                      let redirectString =
                        data.thankyouSettings && data.thankyouSettings.redirectURL
                          ? data.thankyouSettings.redirectURL
                          : "https://www.hemster.co/";

                      Shopify.Checkout.OrderStatus.addContentBox(`
                        <iframe src="https://merchant.hemster.co/faherty/checkout_banner_b.html?url=${window.location.href}&option=1" style="display:none; width: 0px; height: 0px; border: 0; overflow: hidden;" scrolling="no"></iframe>
                        <div style="width: 100%;height: 216px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;" 
                        onclick="window.open('${redirectString}' ,'_blank')">
                            <div>
                                <div
                                    style="position:relative;top: 20px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;text-align: center;">

                                    <img src=${img} style="height: 60px;/* margin-right: 3px; */">
                                    <div>
                                        <div
                                            style="font-family: Canela;font-style: normal;font-weight: normal;font-size: 30px;line-height: 30px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;">
                                            Claim your free tailoring</div>
                                        <div
                                            style="font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;">
                                            Find your perfect fit today with Hemster.</div>
                                    </div>
                                    <input type="submit" value="GET STARTED" class="btn"
                                        style="padding: 10px !important;background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;margin: 0 5px;max-width: fit-content;">
                                </div>
                            </div>
                        </div>`);

                    } else {

                      let img = `${domain}/hook/assets/thankyou_page.gif`;
                      let redirectString =
                        data.thankyouSettings && data.thankyouSettings.redirectURL
                          ? data.thankyouSettings.redirectURL
                          : "https://www.hemster.co/";

                      Shopify.Checkout.OrderStatus.addContentBox(`
                                      <iframe src="https://merchant.hemster.co/faherty/checkout_banner_b.html?url=${window.location.href}&option=2" style="display:none; width: 0px; height: 0px; border: 0; overflow: hidden;" scrolling="no"></iframe>
                                      <style>
                                      .ty-main{
                                          width: 100%;height: 104px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;
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
                                      .btn{
                                          padding: 10px !important;
                                      }
                                      @media only screen and (max-width: 768px) {
                                          .ty-main {
                                              height: 221px;
                                              text-align:center;  
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
                                          .ty-text{
                                              display: block;
                                          }
                                          .ty-text-sub{
                                              display: block;
                                          }
                                        }
                                      </style>
                                      <div class="ty-main"
                                      onclick="window.open('${redirectString}','_blank')">
                                      <div>
                                          <div
                                              class="ty-inner">
                                              <img class="ty-image" src=${img} >
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
                                  </div>`);
                    }
                  } else {
                    var isfitkit = false;
                    // for (const iterator of Shopify.checkout.line_items) {
                    //   if (
                    //     iterator.properties &&
                    //     iterator.properties._isfitkit == "true"
                    //   ) {
                    //     isfitkit = true;
                    //     break;
                    //   }
                    // }

                    if (data.assignedProducts &&
                      Array.isArray(data.assignedProducts)
                      && data.assignedProducts.length > 0 &&
                      Shopify.checkout.line_items &&
                      Array.isArray(Shopify.checkout.line_items) &&
                      Shopify.checkout.line_items.length > 0) {

                      for (const iterator of Shopify.checkout.line_items) {
                        for (const assignedPro of data.assignedProducts) {

                          const assignedProId = assignedPro.split("gid://shopify/Product/").pop()

                          if (String(iterator.product_id) === assignedProId) {
                            isfitkit = true;
                            if (data.priceSettings &&
                              data.priceSettings.applyByPrice) {
                              const itemPrice = parseFloat(iterator.price / 100).toFixed(2);

                              if (itemPrice > data.priceSettings.byPrice) {
                                isfitkit = true;
                                break;
                              } else {
                                isfitkit = false;
                              }
                            }
                          }

                        }

                      }

                    }


                    if (isfitkit) {
                      let img = `${domain}/hook/assets/thankyou_page.gif`;
                      let redirectString =
                        data.thankyouSettings && data.thankyouSettings.redirectURL
                          ? data.thankyouSettings.redirectURL
                          : "https://www.hemster.co/";

                      Shopify.Checkout.OrderStatus.addContentBox(`
                                  <iframe src="https://merchant.hemster.co/faherty/checkout_banner_no_fitkit.html?url=${window.location.href}" style="display:none; width: 0px; height: 0px; border: 0; overflow: hidden;" scrolling="no"></iframe>
                                  <style>
                                  .ty-main{
                                      width: 100%;height: 104px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;
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
                                  .btn{
                                      padding: 10px !important;
                                  }
                                  @media only screen and (max-width: 768px) {
                                      .ty-main {
                                         
                                          height: 221px;
                                          text-align:center;  
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
                                      .ty-text{
                                          display: block;
                                      }
                                      .ty-text-sub{
                                          display: block;
                                      }
                                    }
                                  </style>
                                  <div class="ty-main"
                                  onclick="window.open('${redirectString}', '_blank')">
                                  <div>
                                      <div
                                          class="ty-inner">
                                          <img class="ty-image" src=${img} >
                                          <div class="ty-image-inner">
                                              <div class="ty-text">
                                                  Don’t Miss Out On Free Tailoring
                                              </div>
                                              <div class="ty-text-sub">
                                                  Book your free fitting with Hemster today.</div>
                                          </div>
                                          <input type="submit" value="GET STARTED" class="btn ty-button">
                                      </div>
                                  </div>
                              </div>`);
                    }
                  }
                }
              }
            }
          );
        }

        //collection page-----------------------------------------------------

        if (meta && meta.page && meta.page.pageType === "collection") {
          $.get(
            `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,
            function (data, status) {
              if (status === "success") {
                if (data.isAppEnable === true) {
                  if (
                    data.collectionSettings &&
                    data.collectionSettings.isEnable
                  ) {
                    let collection_html = `<%collection_html%>`;
                    let coll_type =
                      data.collectionSettings.displayType === "option1"
                        ? "collection1"
                        : data.collectionSettings.displayType === "option2"
                          ? "collection2"
                          : "collection3";
                    collection_html = collection_html.replace(
                      "<%collection_type%>",
                      domain + "/hook/assets/" + coll_type
                    );
                    collection_html = collection_html.replace(
                      "<%logo_mark%>",
                      domain + "/hook/assets/logomark.png"
                    );

                    collection_html = collection_html.replace(
                      "<%collection_click%>",
                      `/products/${data.fitkitProducts.fitkitProductHandle}`
                    );

                    let coll_html_element;
                    if ($(".grid--uniform").length > 0) {
                      coll_html_element = $(".grid--uniform");
                    } else if ($(".grid-collage").length > 0) {
                      coll_html_element = $(".grid-collage");
                    }
                    else if ($(".grid-uniform").length > 0) {
                      coll_html_element = $("..grid-uniform");
                    }
                    else if ($(".collections__products").length > 0) {
                      coll_html_element = $(".collections__products");
                    }
                    else if ($(".card-list").length > 0) {
                      coll_html_element = $(".card-list");
                    }
                    else if ($(".collection-description").length > 0) {
                      coll_html_element = $(".collection-description");
                    }
                    else if ($(".products-grid").length > 0) {
                      coll_html_element = $(".products-grid");
                    } else if ($("#content") && $("#content").length > 0) {
                      coll_html_element = $("#content");
                    }
                    if (coll_html_element) {
                      $(coll_html_element).before(collection_html);

                    } else {
                      console.log("collection div not found")
                    }
                  }
                }
              }
            }
          );
        }
        //account page---------------------------------------------------------------------

        const account_page_url = window.location.href.split("/");
        if (
          account_page_url[account_page_url.length - 2] === "orders" &&
          account_page_url[account_page_url.length - 3] === "account"
        ) {
          $.get(
            `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,
            function (data, status) {
              if (status === "success") {
                if (data.isAppEnable === true) {
                  if (data.aDSettings && data.aDSettings.isEnable) {
                    const account_html = `<%account_html%>`;
                    let account_html_element;
                    if ($(".order-table").length > 0) {
                      account_html_element = $(".order-table");
                    } else if ($(".responsive-table").length > 0) {
                      account_html_element = $(".responsive-table");
                    }
                    if (account_html_element) {
                      $(account_html_element).before(account_html);
                    }
                  }
                }
              }
            }
          );
        }

        //announcement bar---------------------------------------------------------------------

        if (
          meta.page.pageType === "home" ||
          meta.page.pageType === "collection" ||
          meta.page.pageType === "collections" ||
          (ShopifyAnalytics.meta.page &&
            ShopifyAnalytics.meta.page.path ===
            "/checkout/contact_information")
        ) {

          //check in which page announcement is assigned, display it accordingly

          $.get(
            `${domain}/hook/store-front/configs?shop=${Shopify.shop}`,
            function (data, status) {
              if (status === "success") {
                if (data.isAppEnable === true) {
                  if (data.abSettings && data.abSettings.isEnable) {
                    let ab_html = `<%announcement_bar%>`;

                    ab_html = ab_html.replace(
                      "<%ab_click%>",
                      `/products/${data.fitkitProducts.fitkitProductHandle}`
                    );

                    $("body").before(ab_html);

                    const page = data.abSettings.selected_page;

                    if (page) {
                      if (Shopify.shop === "mestiza-3.myshopify.com") {

                        $(".he-container").css("position", "absolute !important")
                      }
                      if (page.includes("home_page")) {
                        if (meta.page.pageType === "home") {
                          $(".hemster-banner").css(`display`, "block");
                        }
                      }
                      if (page.includes("collection_page")) {
                        if (meta.page.pageType === "collection") {
                          $(".hemster-banner").css(`display`, "block");
                        }
                      }
                      if (page.includes("collection_list")) {
                        if (meta.page.pageType === "collections") {
                          $(".hemster-banner").css(`display`, "block");
                        }
                      }
                      if (page.includes("checkout_page")) {
                        if (
                          ShopifyAnalytics.meta.page &&
                          ShopifyAnalytics.meta.page.path ===
                          "/checkout/contact_information"
                        ) {
                          $(".hemster-banner").css(`display`, "block");
                        }
                      }
                    }
                  }
                }
              }
            }
          );
        }
        //-------------------------------------------------------------------------
      } else {
        console.log("Jquery is not imported");
      }
    } else {
      console.log("shop not found");
    }

  })(jQuery);

});
