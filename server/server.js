import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import { verifyRequest } from "@shopify/koa-shopify-auth";
import { Shopify } from "@shopify/shopify-api";
import Koa from "koa";
import next from "next";
import Router from "koa-router";
dotenv.config();
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const installRouter = require("./routers/install");
const apiRouters = require("./routers/routes");
const hookRouters = require("./routers/webhook");

const connectDB = require("./db/connect");
const scopes = [
  "read_products",
  "write_products",
  "read_themes",
  "write_themes",
];

const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

Shopify.Context.initialize({
  API_KEY: process.env.REACT_APP_SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_KEY,
  SCOPES: scopes,
  HOST_NAME: process.env.HOST_NAME.replace(/https:\/\//, ""),
  API_VERSION: process.env.SHOPIFY_API_VERSION,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
global.ACTIVE_SHOPIFY_SHOPS = {};
global.shopHost = {};

app.prepare().then(async () => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];
  server.use(cors());
  server.use(bodyParser());
  server.use(hookRouters);
  server.use(installRouter);

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };

  router.get("/", async (ctx) => {
    const shop = ctx.query.shop;
    console.log("/", global.ACTIVE_SHOPIFY_SHOPS[shop]);
    // This shop hasn't been seen yet, go through OAuth to create a session
    if (global.ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      console.log("in else");
      await handleRequest(ctx);
    }
  });

  server.use(apiRouters);

  router.get("(/_next/static/.*)", handleRequest); // Static content is clear
  router.get("/_next/webpack-hmr", handleRequest); // Webpack content is clear
  router.get("(.*)", verifyRequest(), handleRequest); // Everything else must have sessions

  server.use(router.allowedMethods());
  server.use(router.routes());

  connectDB()
    .then(() => {
      server.listen(port, () => {
        console.log(`> Ready on port :${port}`);
      });
    })
    .catch((err) => {
      console.log("Err the DB connection ", err);
    });
});
