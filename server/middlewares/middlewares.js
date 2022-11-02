let error = require("../apis/errors");
const Shop = require("../models/shop");
const jwt = require("jsonwebtoken");

const verifyToken = (payload) => {
    const { exp, nbf, iss, dest, aud } = payload;
    const currentTimeStep = Math.floor(Date.now() / 1000);
    if (
        currentTimeStep > exp ||
        currentTimeStep < nbf ||
        !iss.includes(dest) ||
        aud !== process.env.REACT_APP_SHOPIFY_API_KEY
    )
        return false;
    return true;
};

module.exports = {
    checkUser: async (ctx, next) => {
        // get header
        try {
            var authorization = ctx.request.header.authorization;

            if (!authorization) {
                return (ctx.body = error.errors.UNAUTHORIZED);
            }

            authorization = authorization.replace("Bearer ", "");

            const payLoad = jwt.verify(
                authorization,
                process.env.SHOPIFY_API_SECRET_KEY
            );

            const isVerified = verifyToken(payLoad);

            if (!isVerified) {
                return (ctx.body = error.errors.UNAUTHORIZED);
            }

            const shop = payLoad.dest.replace("https://", "");

            if (!ctx.request.body) ctx.request.body = {};

            console.log(shop, process.env.REACT_APP_SHOPIFY_API_KEY);

            const shopData = await Shop.findOne({ shop }).select([
                "shop",
                "appstatus",
                "accessToken",
            ]);
            console.log("shopData", shopData)
            if (shopData && shopData.appstatus === "installed") {
                ctx.request.body['shopDetails'] = shopData;
                await next();
            } else {
                return (ctx.body = error.errors.UNAUTHORIZED);
            }
        } catch (err) {
            console.log("error", err);
            return (ctx.body = error.errors.SERVER_ERROR);
        }
    },
};
