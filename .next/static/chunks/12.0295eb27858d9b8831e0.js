(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    "06DR": function (e, t, n) {
      "use strict";
      function a() {
        return i() ? window.location : void 0;
      }
      function i() {
        return "undefined" !== typeof window;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getWindow = t.getLocation = t.redirect = t.shouldRedirect = void 0),
        (t.shouldRedirect = function (e) {
          return e === window;
        }),
        (t.redirect = function (e) {
          var t = a();
          t && t.assign(e);
        }),
        (t.getLocation = a),
        (t.getWindow = function () {
          return i() ? window : void 0;
        });
    },
    "0cWN": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n("ye8r"),
        i = (function () {
          function e() {
            this.map = {};
          }
          return (
            (e.prototype.set = function (e, t) {
              this.map.hasOwnProperty(e) || (this.map[e] = []);
              var n = { handler: t, remove: function () {} },
                i = a.addAndRemoveFromCollection(this.map[e], n);
              return (n = { handler: t, remove: i }), i;
            }),
            (e.prototype.get = function (e) {
              var t = this.map[e];
              return t
                ? t.map(function (e) {
                    return e.handler;
                  })
                : void 0;
            }),
            (e.prototype.run = function (e, t, n) {
              for (var a = [], i = 3; i < arguments.length; i++)
                a[i - 3] = arguments[i];
              var r = 0,
                o = this.get(e) || [];
              function s() {
                for (var e = [], a = 0; a < arguments.length; a++)
                  e[a] = arguments[a];
                var i = o[r++];
                return i ? i(s).apply(n, e) : t.apply(n, e);
              }
              return s.apply(n, a);
            }),
            e
          );
        })();
      t.default = i;
    },
    "229i": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LifecycleHook = t.MessageType = t.PermissionType = t.isV1Config = void 0),
        (t.isV1Config = function (e) {
          return void 0 !== e.shopOrigin;
        }),
        (function (e) {
          (e.Dispatch = "Dispatch"), (e.Subscribe = "Subscribe");
        })(t.PermissionType || (t.PermissionType = {})),
        (function (e) {
          (e.GetState = "getState"),
            (e.Dispatch = "dispatch"),
            (e.Subscribe = "subscribe"),
            (e.Unsubscribe = "unsubscribe");
        })(t.MessageType || (t.MessageType = {})),
        (function (e) {
          (e.UpdateAction = "UpdateAction"),
            (e.DispatchAction = "DispatchAction");
        })(t.LifecycleHook || (t.LifecycleHook = {}));
    },
    "2SVd": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    "3KYY": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function e(t, n) {
          if (null == n) return n;
          if (
            "undefined" === typeof t ||
            !Object.getPrototypeOf(t).isPrototypeOf(n) ||
            ("Object" !== n.constructor.name && "Array" !== n.constructor.name)
          )
            return n;
          var a = {};
          return (
            Object.keys(n).forEach(function (i) {
              t.hasOwnProperty(i)
                ? "object" !== typeof t[i] || Array.isArray(t[i])
                  ? (a[i] = n[i])
                  : (a[i] = e(t[i], n[i]))
                : (a[i] = n[i]);
            }),
            Object.keys(t).forEach(function (e) {
              n.hasOwnProperty(e) || (a[e] = t[e]);
            }),
            Object.setPrototypeOf(a, Object.getPrototypeOf(t)),
            a
          );
        });
    },
    "5oMp": function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    "8Qed": function (e, t, n) {
      "use strict";
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, a) {
                void 0 === a && (a = n),
                  Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, a) {
                void 0 === a && (a = n), (e[a] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n || t.hasOwnProperty(n) || a(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("bnTu");
      i(n("229i"), t), i(n("bnTu"), t), (t.default = r.createClientApp);
    },
    "9rSQ": function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      function i() {
        this.handlers = [];
      }
      (i.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (i.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (i.prototype.forEach = function (e) {
          a.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = i);
    },
    BjCG: function (e) {
      e.exports = JSON.parse(
        '{"_from":"@shopify/app-bridge","_id":"@shopify/app-bridge@2.0.2","_inBundle":false,"_integrity":"sha512-b8UwI2nJTIibPA+/jCQ0raTfX92kEHRdKbvGQZJtbKTd2CqN8qGwHb/YPigcJWzo3LsOUnIs2gi33X12/2h7jg==","_location":"/@shopify/app-bridge","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@shopify/app-bridge","name":"@shopify/app-bridge","escapedName":"@shopify%2fapp-bridge","scope":"@shopify","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/@shopify/app-bridge/-/app-bridge-2.0.2.tgz","_shasum":"f74eabcdcd8ba9df868a3f784c7361f1b5819707","_spec":"@shopify/app-bridge","_where":"C:\\\\Users\\\\Reena\\\\Desktop\\\\client\\\\hemster-shopify","author":{"name":"Shopify Inc."},"bugs":{"url":"https://github.com/Shopify/app-bridge/issues"},"bundleDependencies":false,"dependencies":{"base64url":"^3.0.1"},"deprecated":false,"description":"[![Build Status](https://travis-ci.com/Shopify/app-bridge.svg?token=RBRyvqQyN525bnfz7J8p&branch=master)](https://travis-ci.com/Shopify/app-bridge) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fapp-bridge.svg)](https://badge.fury.io/js/%40shopify%2Fapp-bridge.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/app-bridge.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/app-bridge.svg)","devDependencies":{"@types/node":"^10.12.5","shx":"^0.3.3"},"files":["/actions/","/client/","/umd/","/util/","/validate/","/development.d.ts","/development.js","/index.d.ts","/index.js","/MessageTransport.d.ts","/MessageTransport.js","/production.d.ts","/production.js"],"gitHead":"dbe08eaa7489b1f0f81e03cd641724e33f3a01c3","homepage":"https://shopify.dev/tools/app-bridge","jsdelivr":"umd/index.js","license":"MIT","main":"index.js","name":"@shopify/app-bridge","private":false,"publishConfig":{"access":"public","@shopify:registry":"https://registry.npmjs.org"},"repository":{"type":"git","url":"git+ssh://git@github.com/Shopify/app-bridge.git"},"scripts":{"build":"yarn build:tsc && yarn build:npm && yarn build:umd","build:npm":"shx cp -r ./npm/index.js ./index.js","build:tsc":"NODE_ENV=production tsc","build:umd":"NODE_ENV=production webpack -p","check":"tsc","clean":"cat package.json | node -pe \\"JSON.parse(require(\'fs\').readFileSync(\'/dev/stdin\').toString()).files.map(f => \'./\'+f).join(\' \')\\" | xargs rm -rf","pack":"yarn pack","size":"size-limit"},"sideEffects":false,"size-limit":[{"limit":"17 KB","path":"production.js"}],"types":"index.d.ts","unpkg":"umd/index.js","version":"2.0.2"}'
      );
    },
    CgaS: function (e, t, n) {
      "use strict";
      var a = n("xTJ+"),
        i = n("MLWZ"),
        r = n("9rSQ"),
        o = n("UnBK"),
        s = n("SntB");
      function c(e) {
        (this.defaults = e),
          (this.interceptors = { request: new r(), response: new r() });
      }
      (c.prototype.request = function (e) {
        "string" === typeof e
          ? ((e = arguments[1] || {}).url = arguments[0])
          : (e = e || {}),
          (e = s(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = "get");
        var t = [o, void 0],
          n = Promise.resolve(e);
        for (
          this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected);
          }),
            this.interceptors.response.forEach(function (e) {
              t.push(e.fulfilled, e.rejected);
            });
          t.length;

        )
          n = n.then(t.shift(), t.shift());
        return n;
      }),
        (c.prototype.getUri = function (e) {
          return (
            (e = s(this.defaults, e)),
            i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        a.forEach(["delete", "get", "head", "options"], function (e) {
          c.prototype[e] = function (t, n) {
            return this.request(
              s(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
        a.forEach(["post", "put", "patch"], function (e) {
          c.prototype[e] = function (t, n, a) {
            return this.request(s(a || {}, { method: e, url: t, data: n }));
          };
        }),
        (e.exports = c);
    },
    DfZB: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    FWwE: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleAppPrint = void 0);
      var a = n("06DR");
      function i() {
        a.getWindow() && window.print();
      }
      function r() {
        var e = (function () {
          var e = a.getWindow();
          if (e && e.document && e.document.body) {
            var t = window.document.createElement("input");
            return (
              (t.style.display = "none"), window.document.body.appendChild(t), t
            );
          }
        })();
        e && (e.select(), i(), e.remove());
      }
      t.handleAppPrint = function () {
        navigator.userAgent.indexOf("iOS") >= 0 ? r() : i();
      };
    },
    HSsa: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
            n[a] = arguments[a];
          return e.apply(t, n);
        };
      };
    },
    JEQr: function (e, t, n) {
      "use strict";
      (function (t) {
        var a = n("xTJ+"),
          i = n("yK9s"),
          r = { "Content-Type": "application/x-www-form-urlencoded" };
        function o(e, t) {
          !a.isUndefined(e) &&
            a.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var s = {
          adapter: (function () {
            var e;
            return (
              ("undefined" !== typeof XMLHttpRequest ||
                ("undefined" !== typeof t &&
                  "[object process]" === Object.prototype.toString.call(t))) &&
                (e = n("tQ2B")),
              e
            );
          })(),
          transformRequest: [
            function (e, t) {
              return (
                i(t, "Accept"),
                i(t, "Content-Type"),
                a.isFormData(e) ||
                a.isArrayBuffer(e) ||
                a.isBuffer(e) ||
                a.isStream(e) ||
                a.isFile(e) ||
                a.isBlob(e)
                  ? e
                  : a.isArrayBufferView(e)
                  ? e.buffer
                  : a.isURLSearchParams(e)
                  ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : a.isObject(e)
                  ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" === typeof e)
                try {
                  e = JSON.parse(e);
                } catch (t) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        a.forEach(["delete", "get", "head"], function (e) {
          s.headers[e] = {};
        }),
          a.forEach(["post", "put", "patch"], function (e) {
            s.headers[e] = a.merge(r);
          }),
          (e.exports = s);
      }.call(this, n("8oxB")));
    },
    Kasc: function (e, t, n) {
      e.exports = n("f0sb");
    },
    LAkC: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serverAppBridge = void 0);
      var a = n("iqGl"),
        i = function () {};
      t.serverAppBridge = {
        dispatch: function () {
          return {};
        },
        error: function () {
          return i;
        },
        featuresAvailable: function () {
          return Promise.reject(
            a.fromAction(
              "Feature detection is only available on the client side.",
              a.AppActionType.WINDOW_UNDEFINED
            )
          );
        },
        getState: function () {
          return Promise.reject(
            a.fromAction(
              "State is only available on the client side.",
              a.AppActionType.WINDOW_UNDEFINED
            )
          );
        },
        localOrigin: "",
        subscribe: function () {
          return i;
        },
      };
    },
    LYNF: function (e, t, n) {
      "use strict";
      var a = n("OH9c");
      e.exports = function (e, t, n, i, r) {
        var o = new Error(e);
        return a(o, t, n, i, r);
      };
    },
    Lmem: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    MLWZ: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      function i(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t);
        else if (a.isURLSearchParams(t)) r = t.toString();
        else {
          var o = [];
          a.forEach(t, function (e, t) {
            null !== e &&
              "undefined" !== typeof e &&
              (a.isArray(e) ? (t += "[]") : (e = [e]),
              a.forEach(e, function (e) {
                a.isDate(e)
                  ? (e = e.toISOString())
                  : a.isObject(e) && (e = JSON.stringify(e)),
                  o.push(i(t) + "=" + i(e));
              }));
          }),
            (r = o.join("&"));
        }
        if (r) {
          var s = e.indexOf("#");
          -1 !== s && (e = e.slice(0, s)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      };
    },
    OH9c: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n, a, i) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = a),
          (e.response = i),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    OTTw: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      e.exports = a.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function i(e) {
              var a = e;
              return (
                t && (n.setAttribute("href", a), (a = n.href)),
                n.setAttribute("href", a),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = i(window.location.href)),
              function (t) {
                var n = a.isString(t) ? i(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    "Rn+g": function (e, t, n) {
      "use strict";
      var a = n("LYNF");
      e.exports = function (e, t, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status)
          ? t(
              a(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n
              )
            )
          : e(n);
      };
    },
    SntB: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      e.exports = function (e, t) {
        t = t || {};
        var n = {},
          i = ["url", "method", "data"],
          r = ["headers", "auth", "proxy", "params"],
          o = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ],
          s = ["validateStatus"];
        function c(e, t) {
          return a.isPlainObject(e) && a.isPlainObject(t)
            ? a.merge(e, t)
            : a.isPlainObject(t)
            ? a.merge({}, t)
            : a.isArray(t)
            ? t.slice()
            : t;
        }
        function l(i) {
          a.isUndefined(t[i])
            ? a.isUndefined(e[i]) || (n[i] = c(void 0, e[i]))
            : (n[i] = c(e[i], t[i]));
        }
        a.forEach(i, function (e) {
          a.isUndefined(t[e]) || (n[e] = c(void 0, t[e]));
        }),
          a.forEach(r, l),
          a.forEach(o, function (i) {
            a.isUndefined(t[i])
              ? a.isUndefined(e[i]) || (n[i] = c(void 0, e[i]))
              : (n[i] = c(void 0, t[i]));
          }),
          a.forEach(s, function (a) {
            a in t
              ? (n[a] = c(e[a], t[a]))
              : a in e && (n[a] = c(void 0, e[a]));
          });
        var u = i.concat(r).concat(o).concat(s),
          d = Object.keys(e)
            .concat(Object.keys(t))
            .filter(function (e) {
              return -1 === u.indexOf(e);
            });
        return a.forEach(d, l), n;
      };
    },
    UnBK: function (e, t, n) {
      "use strict";
      var a = n("xTJ+"),
        i = n("xAGQ"),
        r = n("Lmem"),
        o = n("JEQr");
      function s(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      e.exports = function (e) {
        return (
          s(e),
          (e.headers = e.headers || {}),
          (e.data = i(e.data, e.headers, e.transformRequest)),
          (e.headers = a.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          a.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            }
          ),
          (e.adapter || o.adapter)(e).then(
            function (t) {
              return (
                s(e), (t.data = i(t.data, t.headers, e.transformResponse)), t
              );
            },
            function (t) {
              return (
                r(t) ||
                  (s(e),
                  t &&
                    t.response &&
                    (t.response.data = i(
                      t.response.data,
                      t.response.headers,
                      e.transformResponse
                    ))),
                Promise.reject(t)
              );
            }
          )
        );
      };
    },
    XwJu: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return "object" === typeof e && !0 === e.isAxiosError;
      };
    },
    "ZK/a": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.app = t.Action = void 0);
      var a,
        i = n("nGhM"),
        r = n("vfSc");
      !(function (e) {
        e.APP = "APP::PRINT::APP";
      })((a = t.Action || (t.Action = {}))),
        (t.app = function () {
          return i.actionWrapper({ group: r.Group.Print, type: a.APP });
        });
    },
    "Zhk/": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SEPARATOR = t.PREFIX = void 0),
        (t.PREFIX = "APP"),
        (t.SEPARATOR = "::");
    },
    bnTu: function (e, t, n) {
      "use strict";
      var a =
          (this && this.__assign) ||
          function () {
            return (a =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createApp = t.createAppWrapper = t.createClientApp = t.WINDOW_UNDEFINED_MESSAGE = void 0);
      var r = n("nGhM"),
        o = n("ZK/a"),
        s = n("iqGl"),
        c = n("xlsT"),
        l = n("LAkC"),
        u = n("ud+W"),
        d = n("cBuz"),
        p = n("FWwE"),
        h = n("06DR"),
        f = n("229i"),
        b = i(n("0cWN"));
      function m(e, n, a) {
        if ((void 0 === a && (a = []), !e))
          throw s.fromAction(
            t.WINDOW_UNDEFINED_MESSAGE,
            s.AppActionType.WINDOW_UNDEFINED
          );
        var i = h.getLocation(),
          r = n || (i && i.origin);
        if (!r)
          throw s.fromAction(
            "local origin cannot be blank",
            s.AppActionType.MISSING_LOCAL_ORIGIN
          );
        var o = c.fromWindow(e, r);
        return t.createClientApp(o, a);
      }
      function g(e) {
        var t = h.getWindow();
        return t ? m(t.top)(e) : l.serverAppBridge;
      }
      (t.WINDOW_UNDEFINED_MESSAGE =
        "window is not defined. Running an app outside a browser is not supported"),
        (t.createClientApp = function (e, t) {
          void 0 === t && (t = []);
          var n = [],
            i = c.createTransportListener();
          return (
            e.subscribe(function (e) {
              var t = e.data,
                a = t.type,
                o = t.payload;
              switch (a) {
                case "getState":
                  n.splice(0).forEach(function (e) {
                    return e(o);
                  });
                  break;
                case "dispatch":
                  if ((i.handleMessage(o), i.handleActionDispatch(o))) return;
                  var c = r.findMatchInEnum(s.Action, o.type);
                  c && s.throwError(c, o);
              }
            }),
            function (c) {
              if (!c.host)
                throw s.fromAction(
                  "host must be provided",
                  s.AppActionType.INVALID_CONFIG
                );
              if (!c.apiKey)
                throw s.fromAction(
                  "apiKey must be provided",
                  s.AppActionType.INVALID_CONFIG
                );
              var l;
              try {
                l = (function (e) {
                  var t;
                  return a(a({}, e), {
                    host: atob(
                      null === (t = e.host) || void 0 === t
                        ? void 0
                        : t.replace(/_/g, "/").replace(/-/g, "+")
                    ),
                  });
                })(c);
              } catch (E) {
                throw s.fromAction(
                  "not a valid host, please use the value provided by Shopify",
                  s.AppActionType.INVALID_CONFIG
                );
              }
              var m = (function (e, t) {
                  return function (n, a) {
                    e.dispatch({ payload: a, source: t, type: n });
                  };
                })(e, l),
                g = i.createSubscribeHandler(m);
              function v(e) {
                return m(f.MessageType.Dispatch, e), e;
              }
              m(f.MessageType.Unsubscribe),
                (function (e, t) {
                  var n = t.apiKey,
                    a = t.host,
                    i = t.forceRedirect,
                    r = void 0 === i ? !u.isDevelopmentClient : i,
                    o = h.getLocation();
                  if (
                    !u.isFrameless &&
                    o &&
                    n &&
                    a &&
                    r &&
                    h.shouldRedirect(e)
                  ) {
                    var s =
                      "https://" +
                      a +
                      "/apps/" +
                      n +
                      o.pathname +
                      (o.search || "");
                    h.redirect(s);
                  }
                })(e.hostFrame, l);
              for (
                var j = new b.default(),
                  O = {
                    localOrigin: e.localOrigin,
                    hooks: j,
                    dispatch: function (e) {
                      return O.hooks
                        ? O.hooks.run(f.LifecycleHook.DispatchAction, v, O, e)
                        : v(e);
                    },
                    featuresAvailable: function (e) {
                      return O.getState("features").then(function (t) {
                        return (
                          e &&
                            Object.keys(t).forEach(function (n) {
                              e.includes(n) || delete t[n];
                            }),
                          t
                        );
                      });
                    },
                    getState: function (e) {
                      return new Promise(function (e) {
                        n.push(e), m(f.MessageType.GetState);
                      }).then(function (t) {
                        return e
                          ? e.split(".").reduce(function (e, n) {
                              if ("object" === typeof t && !Array.isArray(t))
                                return (e = t[n]), (t = e), e;
                            }, void 0)
                          : t;
                      });
                    },
                    subscribe: g,
                    error: function (e, t) {
                      var n = [];
                      return (
                        r.forEachInEnum(s.Action, function (a) {
                          n.push(g(a, e, t));
                        }),
                        function () {
                          n.forEach(function (e) {
                            return e();
                          });
                        }
                      );
                    },
                  },
                  y = 0,
                  x = t;
                y < x.length;
                y++
              ) {
                (0, x[y])(j, O);
              }
              return (
                (function (e) {
                  e.subscribe(o.Action.APP, p.handleAppPrint),
                    e.dispatch(d.initialize());
                })(O),
                O
              );
            }
          );
        }),
        (t.createAppWrapper = m),
        (t.createApp = g),
        (t.default = g);
    },
    cBuz: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initialize = t.Action = void 0);
      var a,
        i = n("vfSc"),
        r = n("nGhM");
      !(function (e) {
        e.INITIALIZE = "APP::CLIENT::INITIALIZE";
      })((a = t.Action || (t.Action = {}))),
        (t.initialize = function () {
          return r.actionWrapper({ group: i.Group.Client, type: a.INITIALIZE });
        });
    },
    dBzg: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAppMessage = t.isPermitted = t.getPermissionKey = t.isFromApp = t.isAppBridgeAction = void 0);
      var a = n("229i"),
        i = n("Zhk/"),
        r = n("nGhM");
      function o(e) {
        return e.replace(
          new RegExp("^" + i.PREFIX + i.SEPARATOR + "\\w+" + i.SEPARATOR),
          ""
        );
      }
      (t.isAppBridgeAction = function (e) {
        return (
          e instanceof Object &&
          e.hasOwnProperty("type") &&
          e.type.toString().startsWith(i.PREFIX)
        );
      }),
        (t.isFromApp = function (e) {
          return (
            "object" === typeof e &&
            "object" === typeof e.source &&
            "string" === typeof e.source.apiKey
          );
        }),
        (t.getPermissionKey = o),
        (t.isPermitted = function (e, t, n) {
          var a = t.group,
            i = t.type;
          if (!a || !e.hasOwnProperty(a)) return !1;
          var r = e[a];
          if (!r) return !1;
          var s = o(i);
          return !!r[s] && !0 === r[s][n];
        }),
        (t.isAppMessage = function (e) {
          if ("object" !== typeof e || !e.data || "object" !== typeof e.data)
            return !1;
          var t = e.data;
          return (
            t.hasOwnProperty("type") &&
            void 0 !== r.findMatchInEnum(a.MessageType, t.type)
          );
        });
    },
    endd: function (e, t, n) {
      "use strict";
      function a(e) {
        this.message = e;
      }
      (a.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (a.prototype.__CANCEL__ = !0),
        (e.exports = a);
    },
    eqyj: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      e.exports = a.isStandardBrowserEnv()
        ? {
            write: function (e, t, n, i, r, o) {
              var s = [];
              s.push(e + "=" + encodeURIComponent(t)),
                a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                a.isString(i) && s.push("path=" + i),
                a.isString(r) && s.push("domain=" + r),
                !0 === o && s.push("secure"),
                (document.cookie = s.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    f0sb: function (e, t, n) {
      "use strict";
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, a) {
                void 0 === a && (a = n),
                  Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, a) {
                void 0 === a && (a = n), (e[a] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n || t.hasOwnProperty(n) || a(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("8Qed");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return r.createApp;
        },
      }),
        i(n("xlsT"), t),
        i(n("8Qed"), t);
    },
    fwuP: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "r", function () {
          return c;
        }),
          n.d(t, "s", function () {
            return l;
          }),
          n.d(t, "h", function () {
            return u;
          }),
          n.d(t, "j", function () {
            return d;
          }),
          n.d(t, "a", function () {
            return p;
          }),
          n.d(t, "k", function () {
            return h;
          }),
          n.d(t, "f", function () {
            return f;
          }),
          n.d(t, "p", function () {
            return b;
          }),
          n.d(t, "g", function () {
            return m;
          }),
          n.d(t, "q", function () {
            return g;
          }),
          n.d(t, "d", function () {
            return v;
          }),
          n.d(t, "n", function () {
            return j;
          }),
          n.d(t, "e", function () {
            return O;
          }),
          n.d(t, "o", function () {
            return y;
          }),
          n.d(t, "b", function () {
            return x;
          }),
          n.d(t, "l", function () {
            return E;
          }),
          n.d(t, "m", function () {
            return P;
          }),
          n.d(t, "c", function () {
            return C;
          }),
          n.d(t, "i", function () {
            return S;
          });
        var a = n("rePB"),
          i = n("slnn");
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var s = function () {
          return {
            shop: window.shop,
            api_key: e.env.REACT_APP_SHOPIFY_API_KEY,
          };
        };
        function c() {
          var e = s(),
            t = e.shop,
            n = e.api_key;
          return i.a.post("/products/tags/list", { shop: t, api_key: n });
        }
        function l() {
          var e = s(),
            t = e.shop,
            n = e.api_key;
          return i.a.post("/products/types/list", { shop: t, api_key: n });
        }
        function u(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/app/status/update", r);
        }
        function d() {
          var e = s(),
            t = e.shop,
            n = e.api_key;
          return i.a.post("/app/status", { shop: t, api_key: n });
        }
        function p(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/fitkit/assign-product/upsert", r);
        }
        function h() {
          var e = s(),
            t = e.shop,
            n = e.api_key;
          return i.a.post("/fitkit/assign-product/details", {
            shop: t,
            api_key: n,
          });
        }
        function f(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/fitkit/upsert", r);
        }
        function b(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/fitkit/details", r);
        }
        function m(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/thankyou/upsert", r);
        }
        function g(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/thankyou/details", r);
        }
        function v(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/popup/upsert", r);
        }
        function j(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/popup/details", r);
        }
        function O(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/collection/upsert", r);
        }
        function y(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/collection/details", r);
        }
        function x(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/ab/upsert", r);
        }
        function E(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/ab/details", r);
        }
        function P(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/ads/details", r);
        }
        function C(e) {
          var t = s(),
            n = t.shop,
            a = t.api_key,
            r = o(o({}, e), {}, { shop: n, api_key: a });
          return i.a.post("/settings/ads/upsert", r);
        }
        function S() {
          var e = s().shop;
          return i.a.get("/get-app-charge?shop=".concat(e));
        }
      }.call(this, n("8oxB")));
    },
    g7np: function (e, t, n) {
      "use strict";
      var a = n("2SVd"),
        i = n("5oMp");
      e.exports = function (e, t) {
        return e && !a(t) ? i(e, t) : t;
      };
    },
    iqGl: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.throwError = t.fromAction = t.AppBridgeError = t.invalidOriginAction = t.isErrorEventName = t.permissionAction = t.networkAction = t.persistenceAction = t.unsupportedOperationAction = t.unexpectedAction = t.invalidAction = t.invalidActionType = t.invalidPayload = t.Message = t.AppActionType = t.Action = void 0);
      var a,
        i = n("nGhM"),
        r = n("vfSc");
      function o(e, t, n) {
        var a = t.payload;
        return i.actionWrapper({
          type: e,
          group: r.Group.Error,
          payload: {
            action: t,
            message: n,
            type: e,
            id: a && a.id ? a.id : void 0,
          },
        });
      }
      !(function (e) {
        (e.INVALID_ACTION = "APP::ERROR::INVALID_ACTION"),
          (e.INVALID_ACTION_TYPE = "APP::ERROR::INVALID_ACTION_TYPE"),
          (e.INVALID_PAYLOAD = "APP::ERROR::INVALID_PAYLOAD"),
          (e.INVALID_OPTIONS = "APP::ERROR::INVALID_OPTIONS"),
          (e.UNEXPECTED_ACTION = "APP::ERROR::UNEXPECTED_ACTION"),
          (e.PERSISTENCE = "APP::ERROR::PERSISTENCE"),
          (e.UNSUPPORTED_OPERATION = "APP::ERROR::UNSUPPORTED_OPERATION"),
          (e.NETWORK = "APP::ERROR::NETWORK"),
          (e.PERMISSION = "APP::ERROR::PERMISSION"),
          (e.FAILED_AUTHENTICATION = "APP::ERROR::FAILED_AUTHENTICATION"),
          (e.INVALID_ORIGIN = "APP::ERROR::INVALID_ORIGIN");
      })((a = t.Action || (t.Action = {}))),
        (function (e) {
          (e.INVALID_CONFIG = "APP::ERROR::INVALID_CONFIG"),
            (e.MISSING_CONFIG = "APP::APP_ERROR::MISSING_CONFIG"),
            (e.MISSING_APP_BRIDGE_MIDDLEWARE =
              "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE"),
            (e.WINDOW_UNDEFINED = "APP::APP_ERROR::WINDOW_UNDEFINED"),
            (e.MISSING_LOCAL_ORIGIN = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN"),
            (e.MISSING_HOST_PROVIDER = "APP::APP_ERROR::MISSING_HOST_PROVIDER"),
            (e.MISSING_ROUTER_CONTEXT =
              "APP::APP_ERROR::MISSING_ROUTER_CONTEXT"),
            (e.MISSING_HISTORY_BLOCK = "APP::APP_ERROR::MISSING_HISTORY_BLOCK");
        })(t.AppActionType || (t.AppActionType = {})),
        (function (e) {
          (e.MISSING_PAYLOAD = "Missing payload"),
            (e.INVALID_PAYLOAD_ID = "Id in payload is missing or invalid");
        })(t.Message || (t.Message = {})),
        (t.invalidPayload = function (e, t) {
          return o(
            a.INVALID_PAYLOAD,
            e,
            t ||
              "The action's payload is missing required properties or has invalid properties"
          );
        }),
        (t.invalidActionType = function (e, t) {
          return i.actionWrapper({
            group: r.Group.Error,
            payload: {
              action: e,
              message: t || "The action type is invalid or unsupported",
              type: a.INVALID_ACTION_TYPE,
            },
            type: a.INVALID_ACTION_TYPE,
          });
        }),
        (t.invalidAction = function (e, t) {
          return i.actionWrapper({
            group: r.Group.Error,
            payload: {
              action: e,
              message:
                t ||
                "The action's has missing/invalid values for `group`, `type` or `version`",
              type: a.INVALID_ACTION,
            },
            type: a.INVALID_ACTION,
          });
        }),
        (t.unexpectedAction = function (e, t) {
          return i.actionWrapper({
            group: r.Group.Error,
            payload: {
              action: e,
              message: t || "Action cannot be called at this time",
              type: a.UNEXPECTED_ACTION,
            },
            type: a.UNEXPECTED_ACTION,
          });
        }),
        (t.unsupportedOperationAction = function (e, t) {
          return o(
            a.UNSUPPORTED_OPERATION,
            e,
            t || "The action type is unsupported"
          );
        }),
        (t.persistenceAction = function (e, t) {
          return o(
            a.PERSISTENCE,
            e,
            t || "Action cannot be persisted on server"
          );
        }),
        (t.networkAction = function (e, t) {
          return o(a.NETWORK, e, t || "Network error");
        }),
        (t.permissionAction = function (e, t) {
          return o(a.PERMISSION, e, t || "Action is not permitted");
        }),
        (t.isErrorEventName = function (e) {
          return "string" === typeof i.findMatchInEnum(a, e);
        }),
        (t.invalidOriginAction = function (e) {
          return i.actionWrapper({
            group: r.Group.Error,
            payload: { message: e, type: a.INVALID_ORIGIN },
            type: a.INVALID_ORIGIN,
          });
        });
      var s = function (e) {
        (this.name = "AppBridgeError"),
          (this.message = e),
          "function" === typeof Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error(this.message).stack);
      };
      function c(e, t, n) {
        var a = new s(e ? t + ": " + e : t);
        return (a.action = n), (a.type = t), a;
      }
      (t.AppBridgeError = s),
        (s.prototype = Object.create(Error.prototype)),
        (t.fromAction = c),
        (t.throwError = function () {
          var e,
            t,
            n = arguments[0];
          throw (
            ("string" === typeof arguments[1]
              ? (e = arguments[1])
              : ((t = arguments[1]), (e = arguments[2] || "")),
            c(e, n, t))
          );
        });
    },
    "jfS+": function (e, t, n) {
      "use strict";
      var a = n("endd");
      function i(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new a(e)), t(n.reason));
        });
      }
      (i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (i.source = function () {
          var e;
          return {
            token: new i(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = i);
    },
    nGhM: function (e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length;
            var a = Array(e),
              i = 0;
            for (t = 0; t < n; t++)
              for (var r = arguments[t], o = 0, s = r.length; o < s; o++, i++)
                a[i] = r[o];
            return a;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NonSnakeCaseGroup = t.findMatchInEnum = t.forEachInEnum = t.getMergedProps = t.updateActionFromPayload = t.ActionSetWithChildren = t.ActionSet = t.isValidOptionalString = t.isValidOptionalNumber = t.getEventNameSpace = t.getVersion = t.actionWrapper = void 0);
      var s = n("229i"),
        c = n("ye8r"),
        l = n("iqGl"),
        u = n("Zhk/"),
        d = o(n("3KYY")),
        p = n("vfSc"),
        h = o(n("uF9B")),
        f = n("BjCG");
      function b() {
        return f.version;
      }
      function m(e, n, a) {
        if (n.startsWith("" + u.PREFIX + u.SEPARATOR)) return n;
        var i = (function (e) {
          if (t.NonSnakeCaseGroup.includes(e)) return e.toUpperCase();
          return ((n = e),
          n.replace(/([A-Z])/g, function (e, t, n) {
            return (0 !== n ? "_" : "") + e[0].toLowerCase();
          })).toUpperCase();
          var n;
        })(e);
        if (a) {
          var r = a.subgroups,
            o = a.type;
          r &&
            r.length > 0 &&
            ((i += i.length > 0 ? u.SEPARATOR : ""),
            r.forEach(function (e, t) {
              i += "" + e.toUpperCase() + (t < r.length - 1 ? u.SEPARATOR : "");
            })),
            o !== e &&
              o &&
              (i += "" + (i.length > 0 ? u.SEPARATOR : "") + o.toUpperCase());
        }
        return (
          i && (i += "" + (i.length > 0 ? u.SEPARATOR : "") + n.toUpperCase()),
          "" + u.PREFIX + u.SEPARATOR + i
        );
      }
      (t.actionWrapper = function (e) {
        return i(i({}, e), {
          version: b(),
          clientInterface: { name: f.name, version: b() },
        });
      }),
        (t.getVersion = b),
        (t.getEventNameSpace = m),
        (t.isValidOptionalNumber = function (e) {
          return null === e || void 0 === e || "number" === typeof e;
        }),
        (t.isValidOptionalString = function (e) {
          return null === e || void 0 === e || "string" === typeof e;
        });
      var g = (function () {
        function e(e, t, n, a) {
          var i = this;
          (this.app = e),
            (this.type = t),
            (this.group = n),
            (this.subgroups = []),
            (this.subscriptions = []),
            e ||
              l.throwError(l.Action.INVALID_ACTION, "Missing required `app`"),
            (this.id = a || h.default()),
            (this.defaultGroup = n);
          var o = this.set;
          this.set = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return i.app.hooks
              ? (e = i.app.hooks).run.apply(
                  e,
                  r([s.LifecycleHook.UpdateAction, o, i], t)
                )
              : o.apply(i, t);
          };
        }
        return (
          (e.prototype.set = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          }),
          Object.defineProperty(e.prototype, "component", {
            get: function () {
              return {
                id: this.id,
                subgroups: this.subgroups,
                type: this.type,
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.updateSubscription = function (e, t, n) {
            var a,
              i = e.eventType,
              r = e.callback,
              o = e.component;
            return (
              (a = this.subscriptions.findIndex(function (t) {
                return t === e;
              })) >= 0
                ? this.subscriptions[a].unsubscribe()
                : (a = void 0),
              (this.group = t),
              (this.subgroups = n),
              Object.assign(o, { subgroups: this.subgroups }),
              this.subscribe(i, r, o, a)
            );
          }),
          (e.prototype.error = function (e) {
            var t = this,
              n = [];
            return (
              y(l.Action, function (a) {
                n.push(t.subscriptions.length), t.subscribe(a, e);
              }),
              function () {
                n.map(function (e) {
                  return t.subscriptions[e];
                }).forEach(function (e) {
                  c.removeFromCollection(t.subscriptions, e, function (e) {
                    e.unsubscribe();
                  });
                });
              }
            );
          }),
          (e.prototype.subscribe = function (e, t, n, a) {
            var r,
              o = this,
              s = n || this.component,
              c = e.toUpperCase(),
              u = "number" === typeof a ? t : t.bind(this);
            r = l.isErrorEventName(e)
              ? m(p.Group.Error, e, i(i({}, s), { type: "" }))
              : m(this.group, e, s);
            var d = this.app.subscribe(r, u, n ? n.id : this.id),
              h = {
                eventType: c,
                unsubscribe: d,
                callback: u,
                component: s,
                updateSubscribe: function (e, t) {
                  return o.updateSubscription.call(o, h, e, t);
                },
              };
            return (
              "number" === typeof a && a >= 0 && a < this.subscriptions.length
                ? (this.subscriptions[a] = h)
                : this.subscriptions.push(h),
              d
            );
          }),
          (e.prototype.unsubscribe = function (e) {
            return (
              void 0 === e && (e = !1),
              j(this.subscriptions, this.defaultGroup, e),
              this
            );
          }),
          e
        );
      })();
      t.ActionSet = g;
      var v = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.children = []), t;
        }
        return (
          a(t, e),
          (t.prototype.unsubscribe = function (e, n) {
            return (
              void 0 === e && (e = !0),
              void 0 === n && (n = !1),
              j(this.subscriptions, this.defaultGroup, n),
              this.children.forEach(function (n) {
                t.prototype.isPrototypeOf(n)
                  ? n.unsubscribe(e, !e)
                  : n.unsubscribe(!e);
              }),
              this
            );
          }),
          (t.prototype.getChild = function (e) {
            var t = this.children.findIndex(function (t) {
              return t.id === e;
            });
            return t >= 0 ? this.children[t] : void 0;
          }),
          (t.prototype.getChildIndex = function (e) {
            return this.children.findIndex(function (t) {
              return t.id === e;
            });
          }),
          (t.prototype.getChildSubscriptions = function (e, t) {
            return this.subscriptions.filter(function (n) {
              return n.component.id === e && (!t || t === n.eventType);
            });
          }),
          (t.prototype.addChild = function (e, n, a) {
            var i = this,
              r = e.subscriptions;
            return (
              this.getChild(e.id) || this.children.push(e),
              !r ||
                (n === e.group && a === e.subgroups) ||
                (r.forEach(function (e) {
                  (0, e.updateSubscribe)(n, a);
                }),
                Object.assign(e, { group: n, subgroups: a }),
                t.prototype.isPrototypeOf(e) &&
                  e.children.forEach(function (e) {
                    return i.addChild(e, n, a);
                  })),
              this
            );
          }),
          (t.prototype.removeChild = function (e) {
            var t = this;
            return (
              c.removeFromCollection(
                this.children,
                this.getChild(e),
                function () {
                  t.subscriptions
                    .filter(function (t) {
                      return t.component.id === e;
                    })
                    .forEach(function (e) {
                      c.removeFromCollection(t.subscriptions, e, function (e) {
                        e.unsubscribe();
                      });
                    });
                }
              ),
              this
            );
          }),
          (t.prototype.subscribeToChild = function (e, t, n) {
            var a = this,
              i = n.bind(this);
            if (t instanceof Array)
              return (
                t.forEach(function (t) {
                  return a.subscribeToChild(e, t, n);
                }),
                this
              );
            if ("string" !== typeof t) return this;
            var r = t.toUpperCase(),
              o = this.getChildSubscriptions(e.id, r);
            if (o.length > 0)
              o.forEach(function (t) {
                return t.updateSubscribe(a.group, e.subgroups);
              });
            else {
              var s = { id: e.id, subgroups: e.subgroups, type: e.type };
              this.subscribe(r, i, s);
            }
            return this;
          }),
          (t.prototype.getUpdatedChildActions = function (e, t) {
            if (0 !== e.length) {
              for (
                var n = e.filter(function (e, t, n) {
                    return t === n.indexOf(e);
                  }),
                  a = n.map(function (e) {
                    return e.id;
                  }),
                  i = t.filter(function (e) {
                    return a.indexOf(e.id) < 0;
                  });
                i.length > 0;

              ) {
                if (!(r = i.pop())) break;
                this.removeChild(r.id);
              }
              return n;
            }
            for (; t.length > 0; ) {
              var r;
              if (!(r = t.pop())) break;
              this.removeChild(r.id);
            }
          }),
          t
        );
      })(g);
      function j(e, t, n) {
        void 0 === n && (n = !1),
          e.forEach(function (e) {
            n ? (0, e.updateSubscribe)(t, []) : (0, e.unsubscribe)();
          }),
          n || (e.length = 0);
      }
      function O(e, t) {
        var n = d.default(e, t);
        return n || Object.assign(e, t);
      }
      function y(e, t) {
        Object.keys(e).forEach(function (n) {
          t(e[n]);
        });
      }
      (t.ActionSetWithChildren = v),
        (t.updateActionFromPayload = function (e, t) {
          return e.id === t.id && (Object.assign(e, O(e, t)), !0);
        }),
        (t.getMergedProps = O),
        (t.forEachInEnum = y),
        (t.findMatchInEnum = function (e, t) {
          var n = Object.keys(e).find(function (n) {
            return t === e[n];
          });
          return n ? e[n] : void 0;
        }),
        (t.NonSnakeCaseGroup = [
          p.Group.AuthCode,
          p.Group.Button,
          p.Group.ButtonGroup,
          p.Group.Cart,
          p.Group.Error,
          p.Group.Features,
          p.Group.Fullscreen,
          p.Group.Link,
          p.Group.Loading,
          p.Group.Menu,
          p.Group.Modal,
          p.Group.Navigation,
          p.Group.Pos,
          p.Group.Print,
          p.Group.ResourcePicker,
          p.Group.Scanner,
          p.Group.SessionToken,
          p.Group.Share,
          p.Group.TitleBar,
          p.Group.Toast,
        ]);
    },
    slnn: function (e, t, n) {
      "use strict";
      var a = n("vDqi"),
        i = n.n(a),
        r = n("Bmuu"),
        o = n("Kasc"),
        s = n.n(o),
        c = null,
        l = "https://" + (c = window.location.hostname) + "/api/",
        u = c && c.includes("localhost") ? "http://localhost:8081/api/" : l,
        d = i.a.create({ baseURL: u });
      d.interceptors.request.use(function (e) {
        var t = s()({
          apiKey: "0b7cd98a43a34d91631c6642efde3f4e",
          host: window.host,
        });
        return Object(r.getSessionToken)(t).then(function (t) {
          return (e.headers.Authorization = "Bearer ".concat(t)), e;
        });
      }),
        (t.a = d);
    },
    tQ2B: function (e, t, n) {
      "use strict";
      var a = n("xTJ+"),
        i = n("Rn+g"),
        r = n("eqyj"),
        o = n("MLWZ"),
        s = n("g7np"),
        c = n("w0Vi"),
        l = n("OTTw"),
        u = n("LYNF");
      e.exports = function (e) {
        return new Promise(function (t, n) {
          var d = e.data,
            p = e.headers;
          a.isFormData(d) && delete p["Content-Type"];
          var h = new XMLHttpRequest();
          if (e.auth) {
            var f = e.auth.username || "",
              b = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            p.Authorization = "Basic " + btoa(f + ":" + b);
          }
          var m = s(e.baseURL, e.url);
          if (
            (h.open(
              e.method.toUpperCase(),
              o(m, e.params, e.paramsSerializer),
              !0
            ),
            (h.timeout = e.timeout),
            (h.onreadystatechange = function () {
              if (
                h &&
                4 === h.readyState &&
                (0 !== h.status ||
                  (h.responseURL && 0 === h.responseURL.indexOf("file:")))
              ) {
                var a =
                    "getAllResponseHeaders" in h
                      ? c(h.getAllResponseHeaders())
                      : null,
                  r = {
                    data:
                      e.responseType && "text" !== e.responseType
                        ? h.response
                        : h.responseText,
                    status: h.status,
                    statusText: h.statusText,
                    headers: a,
                    config: e,
                    request: h,
                  };
                i(t, n, r), (h = null);
              }
            }),
            (h.onabort = function () {
              h && (n(u("Request aborted", e, "ECONNABORTED", h)), (h = null));
            }),
            (h.onerror = function () {
              n(u("Network Error", e, null, h)), (h = null);
            }),
            (h.ontimeout = function () {
              var t = "timeout of " + e.timeout + "ms exceeded";
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(u(t, e, "ECONNABORTED", h)),
                (h = null);
            }),
            a.isStandardBrowserEnv())
          ) {
            var g =
              (e.withCredentials || l(m)) && e.xsrfCookieName
                ? r.read(e.xsrfCookieName)
                : void 0;
            g && (p[e.xsrfHeaderName] = g);
          }
          if (
            ("setRequestHeader" in h &&
              a.forEach(p, function (e, t) {
                "undefined" === typeof d && "content-type" === t.toLowerCase()
                  ? delete p[t]
                  : h.setRequestHeader(t, e);
              }),
            a.isUndefined(e.withCredentials) ||
              (h.withCredentials = !!e.withCredentials),
            e.responseType)
          )
            try {
              h.responseType = e.responseType;
            } catch (v) {
              if ("json" !== e.responseType) throw v;
            }
          "function" === typeof e.onDownloadProgress &&
            h.addEventListener("progress", e.onDownloadProgress),
            "function" === typeof e.onUploadProgress &&
              h.upload &&
              h.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                h && (h.abort(), n(e), (h = null));
              }),
            d || (d = null),
            h.send(d);
        });
      };
    },
    uDpD: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("nKUr"),
        i = n("q1tI"),
        r = n.n(i),
        o = n("MHnU"),
        s = n("vIx0"),
        c = n("+wwQ"),
        l = n("H7Uj"),
        u = n("5r1S"),
        d = r.a.createElement("path", {
          d:
            "M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z",
        }),
        p = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            d
          );
        },
        h = n("4MfM"),
        f = n("ft7t");
      function b(e, t, n, a, i) {
        const r = a.reduce((e, t) => e + t, 0),
          o = e.map((e, t) => t),
          s = [],
          c = [];
        if (i > r) s.push(...o);
        else {
          s.push(t);
          let e = a[t];
          o.forEach((r) => {
            if (r !== t) {
              const t = a[r];
              if (e + t >= i - n) return void c.push(r);
              s.push(r), (e += t);
            }
          });
        }
        return { visibleTabs: s, hiddenTabs: c };
      }
      var m = {
          Tabs: "Polaris-Tabs",
          Wrapper: "Polaris-Tabs__Wrapper",
          fitted: "Polaris-Tabs--fitted",
          TabContainer: "Polaris-Tabs__TabContainer",
          Title: "Polaris-Tabs__Title",
          fillSpace: "Polaris-Tabs--fillSpace",
          Tab: "Polaris-Tabs__Tab",
          "Tab-selected": "Polaris-Tabs__Tab--selected",
          titleWithIcon: "Polaris-Tabs--titleWithIcon",
          Panel: "Polaris-Tabs__Panel",
          "Panel-hidden": "Polaris-Tabs__Panel--hidden",
          List: "Polaris-Tabs__List",
          Item: "Polaris-Tabs__Item",
          DisclosureTab: "Polaris-Tabs__DisclosureTab",
          "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
          DisclosureActivator: "Polaris-Tabs__DisclosureActivator",
          TabMeasurer: "Polaris-Tabs__TabMeasurer",
        },
        g = n("Vcon"),
        v = n("zMJ4"),
        j = n("Iw9L");
      class O extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.context = void 0),
            (this.focusedNode = null),
            (this.setFocusedNode = (e) => {
              this.focusedNode = e;
            });
        }
        componentDidMount() {
          const { focusedNode: e } = this,
            { focused: t } = this.props;
          e && e instanceof HTMLElement && t && e.focus();
        }
        componentDidUpdate() {
          const { focusedNode: e } = this,
            { focused: t } = this.props;
          e && e instanceof HTMLElement && t && e.focus();
        }
        render() {
          const {
              id: e,
              panelID: t,
              children: n,
              url: a,
              accessibilityLabel: i,
              onClick: o = y,
            } = this.props,
            s = Object(l.a)(m.Item),
            c = {
              id: e,
              ref: this.setFocusedNode,
              onClick: o,
              className: s,
              "aria-controls": t,
              "aria-selected": !1,
              "aria-label": i,
            },
            u = a
              ? r.a.createElement(j.a, Object.assign({}, c, { url: a }), n)
              : r.a.createElement(
                  "button",
                  Object.assign({}, c, { type: "button" }),
                  n
                );
          return r.a.createElement("li", null, u);
        }
      }
      function y() {}
      function x({
        focusIndex: e,
        disclosureTabs: t,
        onClick: n = E,
        onKeyPress: a = E,
      }) {
        const i = t.map((t, a) => {
          let { id: i, content: o } = t,
            s = Object(g.b)(t, ["id", "content"]);
          return r.a.createElement(
            O,
            Object.assign({}, s, {
              key: i,
              id: i,
              focused: a === e,
              onClick: n.bind(null, i),
            }),
            o
          );
        });
        return r.a.createElement(
          "ul",
          { className: m.List, onKeyDown: P, onKeyUp: a },
          i
        );
      }
      function E() {}
      function P(e) {
        const { key: t } = e;
        ("ArrowLeft" !== t && "ArrowRight" !== t) ||
          (e.preventDefault(), e.stopPropagation());
      }
      function C({ hidden: e, id: t, tabID: n, children: a }) {
        const i = Object(l.a)(m.Panel, e && m["Panel-hidden"]);
        return r.a.createElement(
          "div",
          {
            className: i,
            id: t,
            role: "tabpanel",
            "aria-labelledby": n,
            tabIndex: -1,
          },
          a
        );
      }
      O.contextType = v.a;
      var S = n("kgcW");
      function _({
        id: e,
        focused: t,
        siblingTabHasFocus: n,
        children: a,
        onClick: o,
        selected: s,
        url: c,
        panelID: u,
        measuring: d,
        accessibilityLabel: p,
      }) {
        const h = Object(i.useRef)(s),
          f = Object(i.useRef)(!1),
          b = Object(i.useRef)(null);
        Object(i.useEffect)(() => {
          if (d) return;
          (t || (document.activeElement && document.activeElement.id === e)) &&
            s &&
            null != u &&
            !f.current &&
            (A(u), (f.current = !0)),
            s && !h.current && null != u
              ? A(u)
              : t && null != b.current && Object(S.e)(b.current),
            (h.current = s);
        }, [t, e, d, u, s]);
        const g = o && o.bind(null, e),
          v = Object(l.a)(m.Tab, s && m["Tab-selected"]);
        let O;
        O = !s || n || d ? (t && !d ? 0 : -1) : 0;
        const y = Object(l.a)(m.TabContainer, s && m.Underline),
          x = c
            ? r.a.createElement(
                j.a,
                {
                  id: e,
                  url: c,
                  role: "tab",
                  tabIndex: O,
                  onClick: g,
                  className: v,
                  "aria-selected": s,
                  "aria-controls": u,
                  "aria-label": p,
                  onMouseUp: S.i,
                },
                r.a.createElement("span", { className: m.Title }, a)
              )
            : r.a.createElement(
                "button",
                {
                  id: e,
                  role: "tab",
                  type: "button",
                  tabIndex: O,
                  className: v,
                  onClick: g,
                  "aria-selected": s,
                  "aria-controls": u,
                  "aria-label": p,
                  onMouseUp: S.i,
                },
                r.a.createElement("span", { className: m.Title }, a)
              );
        return r.a.createElement(
          "li",
          { className: y, ref: b, role: "presentation" },
          x
        );
      }
      function A(e) {
        const t = document.getElementById(e);
        t && t.focus({ preventScroll: !0 });
      }
      var k = n("Jql3"),
        T = n("gOwe");
      const w = Object(i.memo)(function ({
        selected: e,
        tabs: t,
        activator: n,
        tabToFocus: a,
        siblingTabHasFocus: o,
        handleMeasurement: s,
      }) {
        const c = Object(i.useRef)(null),
          u = Object(i.useRef)(null),
          d = Object(i.useCallback)(() => {
            u.current && cancelAnimationFrame(u.current),
              (u.current = requestAnimationFrame(() => {
                if (!c.current) return;
                const e = c.current.offsetWidth,
                  t = c.current.children,
                  n = Array.from(t).map((e) =>
                    Math.ceil(e.getBoundingClientRect().width)
                  ),
                  a = n.pop() || 0;
                s({
                  containerWidth: e,
                  disclosureWidth: a,
                  hiddenTabWidths: n,
                });
              }));
          }, [s]);
        Object(i.useEffect)(() => {
          d();
        }, [d, t]),
          (function (e) {
            const t = Object(T.a)(),
              n = Object(i.useRef)(!1);
            if (t && !n.current) (n.current = !0), e();
          })(() => {
            0;
          });
        const p = t.map((t, n) =>
            r.a.createElement(
              _,
              {
                measuring: !0,
                key: `${n}${t.id}Hidden`,
                id: `${t.id}Measurer`,
                siblingTabHasFocus: o,
                focused: n === a,
                selected: n === e,
                onClick: N,
                url: t.url,
              },
              t.content
            )
          ),
          h = Object(l.a)(m.Tabs, m.TabMeasurer);
        return r.a.createElement(
          "div",
          { className: h, ref: c },
          r.a.createElement(k.a, { event: "resize", handler: d }),
          p,
          n
        );
      });
      function N() {}
      var I = r.a.createElement(h.a, { source: u.a, color: "subdued" }),
        R = r.a.createElement(h.a, { source: p, color: "subdued" });
      class L extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = {
              disclosureWidth: 0,
              containerWidth: 1 / 0,
              tabWidths: [],
              visibleTabs: [],
              hiddenTabs: [],
              showDisclosure: !1,
              tabToFocus: -1,
            }),
            (this.handleKeyPress = (e) => {
              const {
                  tabToFocus: t,
                  visibleTabs: n,
                  hiddenTabs: a,
                  showDisclosure: i,
                } = this.state,
                r = e.key,
                o = i ? n.concat(a) : [...n];
              let s = o.indexOf(t);
              "ArrowRight" === r && ((s += 1), s === o.length && (s = 0)),
                "ArrowLeft" === r &&
                  (-1 === s || 0 === s ? (s = o.length - 1) : (s -= 1)),
                this.setState({ tabToFocus: o[s] });
            }),
            (this.renderTabMarkup = (e, t) => {
              const { selected: n, children: a } = this.props,
                { tabToFocus: i } = this.state,
                o = e.panelID || `${e.id}-panel`;
              return r.a.createElement(
                _,
                {
                  key: `${t}-${e.id}`,
                  id: e.id,
                  siblingTabHasFocus: i > -1,
                  focused: t === i,
                  selected: t === n,
                  onClick: this.handleTabClick,
                  panelID: a ? o : void 0,
                  accessibilityLabel: e.accessibilityLabel,
                  url: e.url,
                },
                e.content
              );
            }),
            (this.handleFocus = (e) => {
              const { selected: t, tabs: n } = this.props,
                a = e.target;
              if (a.classList.contains(m.Tab) || a.classList.contains(m.Item)) {
                let e = -1;
                return (
                  n.every((t, n) => t.id !== a.id || ((e = n), !1)),
                  void this.setState({ tabToFocus: e })
                );
              }
              if (a.classList.contains(m.DisclosureActivator)) return;
              if (!e.relatedTarget)
                return void this.setState({ tabToFocus: t });
              const i = e.relatedTarget;
              i instanceof HTMLElement &&
                !i.classList.contains(m.Tab) &&
                !i.classList.contains(m.Item) &&
                !i.classList.contains(m.DisclosureActivator) &&
                this.setState({ tabToFocus: t });
            }),
            (this.handleBlur = (e) => {
              if (null == e.relatedTarget)
                return void this.setState({ tabToFocus: -1 });
              const t = e.relatedTarget;
              t instanceof HTMLElement &&
                !t.classList.contains(m.Tab) &&
                !t.classList.contains(m.Item) &&
                this.setState({ tabToFocus: -1 });
            }),
            (this.handleDisclosureActivatorClick = () => {
              this.setState(({ showDisclosure: e }) => ({
                showDisclosure: !e,
              }));
            }),
            (this.handleClose = () => {
              this.setState({ showDisclosure: !1 });
            }),
            (this.handleMeasurement = (e) => {
              const { tabs: t, selected: n } = this.props,
                { tabToFocus: a } = this.state,
                {
                  hiddenTabWidths: i,
                  containerWidth: r,
                  disclosureWidth: o,
                } = e,
                { visibleTabs: s, hiddenTabs: c } = b(t, n, o, i, r);
              this.setState({
                tabToFocus: -1 === a ? -1 : n,
                visibleTabs: s,
                hiddenTabs: c,
                disclosureWidth: o,
                containerWidth: r,
                tabWidths: i,
              });
            }),
            (this.handleTabClick = (e) => {
              const { tabs: t, onSelect: n = M } = this.props,
                a = t.find((t) => t.id === e);
              if (null == a) return;
              n(t.indexOf(a));
            });
        }
        static getDerivedStateFromProps(e, t) {
          const { disclosureWidth: n, tabWidths: a, containerWidth: i } = t,
            { visibleTabs: r, hiddenTabs: o } = b(e.tabs, e.selected, n, a, i);
          return { visibleTabs: r, hiddenTabs: o, selected: e.selected };
        }
        render() {
          const {
              tabs: e,
              selected: t,
              fitted: n,
              children: a,
              i18n: i,
              disclosureText: o,
            } = this.props,
            {
              tabToFocus: s,
              visibleTabs: c,
              hiddenTabs: u,
              showDisclosure: d,
            } = this.state,
            p = u.map((t) => e[t]),
            h = a
              ? e.map((n, i) =>
                  t === i
                    ? r.a.createElement(
                        C,
                        {
                          id: e[i].panelID || `${e[i].id}-panel`,
                          tabID: e[i].id,
                          key: e[i].id,
                        },
                        a
                      )
                    : r.a.createElement(C, {
                        id: e[i].panelID || `${e[i].id}-panel`,
                        tabID: e[i].id,
                        key: e[i].id,
                        hidden: !0,
                      })
                )
              : null,
            b = c
              .sort((e, t) => e - t)
              .map((t) => this.renderTabMarkup(e[t], t)),
            g = c.length < e.length,
            v = Boolean(o),
            j = Object(l.a)(m.Tabs, n && m.fitted, g && m.fillSpace),
            O = Object(l.a)(m.DisclosureTab, g && m["DisclosureTab-visible"]),
            y = Object(l.a)(m.DisclosureActivator, v && m.Tab),
            E = Object(l.a)(m.Title, v && m.titleWithIcon),
            P = v ? r.a.createElement(r.a.Fragment, null, o, I) : R,
            S = r.a.createElement(
              "button",
              {
                type: "button",
                className: y,
                onClick: this.handleDisclosureActivatorClick,
                "aria-label": i.translate("Polaris.Tabs.toggleTabsLabel"),
              },
              r.a.createElement("span", { className: E }, P)
            ),
            _ = o
              ? r.a.createElement("div", { className: m.TabContainer }, S)
              : S;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: m.Wrapper },
              r.a.createElement(w, {
                tabToFocus: s,
                activator: _,
                selected: t,
                tabs: e,
                siblingTabHasFocus: s > -1,
                handleMeasurement: this.handleMeasurement,
              }),
              r.a.createElement(
                "ul",
                {
                  role: "tablist",
                  className: j,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onKeyDown: D,
                  onKeyUp: this.handleKeyPress,
                },
                b,
                r.a.createElement(
                  "li",
                  { className: O, role: "presentation" },
                  r.a.createElement(
                    f.a,
                    {
                      preferredPosition: "below",
                      activator: _,
                      active: g && d,
                      onClose: this.handleClose,
                      autofocusTarget: "first-node",
                    },
                    r.a.createElement(x, {
                      focusIndex: u.indexOf(s),
                      disclosureTabs: p,
                      onClick: this.handleTabClick,
                      onKeyPress: this.handleKeyPress,
                    })
                  )
                )
              )
            ),
            h
          );
        }
      }
      function M() {}
      function D(e) {
        const { key: t } = e;
        ("ArrowLeft" !== t && "ArrowRight" !== t) ||
          (e.preventDefault(), e.stopPropagation());
      }
      function F(e) {
        const t = Object(c.a)();
        return r.a.createElement(L, Object.assign({}, e, { i18n: t }));
      }
      var B = n("fwuP"),
        H = n("+U72"),
        W = n("OQyH"),
        G = n("yXfM"),
        U = n("GQTq"),
        z = n("c+WN"),
        V = n("sEfC"),
        $ = n.n(V),
        q = n("C/ee"),
        K = n("4zRk"),
        J = { SecondaryAction: "Polaris-ActionMenu-SecondaryAction" };
      function Y(e) {
        let { children: t, onAction: n, getOffsetWidth: a } = e,
          o = Object(g.b)(e, ["children", "onAction", "getOffsetWidth"]);
        const s = Object(i.useRef)(null);
        return (
          Object(i.useEffect)(() => {
            var e;
            a &&
              s.current &&
              a(null == (e = s.current) ? void 0 : e.offsetWidth);
          }, [a]),
          r.a.createElement(
            "span",
            { className: J.SecondaryAction, ref: s },
            r.a.createElement(K.a, Object.assign({ onClick: n }, o), t)
          )
        );
      }
      var X = n("/60K"),
        Q = { Details: "Polaris-ActionMenu-MenuGroup__Details" };
      function Z({
        accessibilityLabel: e,
        active: t,
        actions: n,
        details: a,
        title: o,
        icon: s,
        onClose: c,
        onOpen: l,
        getOffsetWidth: u,
      }) {
        const d = Object(i.useCallback)(() => {
            c(o);
          }, [c, o]),
          p = Object(i.useCallback)(() => {
            l(o);
          }, [l, o]),
          h = Object(i.useCallback)(
            (e) => {
              u && u(e);
            },
            [u]
          ),
          b = r.a.createElement(
            Y,
            {
              disclosure: !0,
              icon: s,
              accessibilityLabel: e,
              onClick: p,
              getOffsetWidth: h,
            },
            o
          );
        return r.a.createElement(
          f.a,
          {
            active: Boolean(t),
            activator: b,
            preferredAlignment: "left",
            onClose: d,
            hideOnPrint: !0,
          },
          r.a.createElement(X.a, { items: n, onActionAnyItem: d }),
          a && r.a.createElement("div", { className: Q.Details }, a)
        );
      }
      var ee = { ActionsLayout: "Polaris-ActionMenu-Actions__ActionsLayout" };
      function te({ actions: e = [], groups: t = [] }) {
        const n = Object(c.a)(),
          a = Object(i.useRef)(null),
          o = Object(i.useRef)(0),
          s = Object(i.useRef)(0),
          l = Object(i.useRef)(0),
          u = Object(i.useRef)(0),
          d = Object(i.useRef)([]),
          [p, h] = Object(i.useState)(void 0),
          [f, b] = Object(i.useState)({ showable: [], rolledUp: [] }),
          m = {
            title: n.translate("Polaris.Actions.moreActions"),
            actions: [],
          },
          v = [...t].pop(),
          j = [...d.current].pop() || 0,
          O = Object(i.useCallback)((e) => {
            d.current = [...d.current, e];
          }, []),
          y = Object(i.useCallback)((e) => h(p ? void 0 : e), [p]),
          x = Object(i.useCallback)(() => h(void 0), []),
          E = Object(i.useCallback)(() => {
            let n = [...e, ...t];
            t.length > 0 && (n = [...n].slice(0, n.length - 1));
            const a = n.slice(0, f.showable.length),
              i = n.slice(f.showable.length, n.length);
            b({ showable: a, rolledUp: i });
          }, [e, t, f.showable.length]),
          P = Object(i.useCallback)(() => {
            if (0 === d.current.length || 0 === s.current) return;
            const n = [...e, ...t];
            if (1 === n.length) return void b({ showable: n, rolledUp: [] });
            let a = s.current,
              i = [],
              r = [];
            n.forEach((e, t) => {
              if (d.current[t] + o.current + 8 + j <= a)
                (a -= d.current[t] + 16), (i = [...i, e]);
              else {
                if (((a = 0), e === v)) return;
                r = [...r, e];
              }
            }),
              b({ showable: i, rolledUp: r }),
              (u.current += 1),
              (l.current = n.length);
          }, [e, t, v, j]),
          C = Object(i.useMemo)(
            () =>
              $()(
                () => {
                  a.current &&
                    ((s.current = a.current.offsetWidth), (u.current = 0), P());
                },
                50,
                { leading: !1, trailing: !0 }
              ),
            [P]
          );
        Object(i.useEffect)(() => {
          a.current &&
            ((s.current = a.current.offsetWidth),
            u.current >= 2 && [...e, ...t].length === l.current ? E() : P());
        }, [e, t, P, E]);
        const S = e.map((e) => {
            if (f.showable.length > 0 || f.rolledUp.includes(e)) return null;
            const { content: t, onAction: n } = e,
              a = Object(g.b)(e, ["content", "onAction"]);
            return r.a.createElement(
              Y,
              Object.assign({ key: t, onClick: n }, a, { getOffsetWidth: O }),
              t
            );
          }),
          _ =
            f.showable.length > 0
              ? f.showable.map(
                  (e) =>
                    e.content &&
                    r.a.createElement(
                      Y,
                      Object.assign({ key: e.content }, e, {
                        getOffsetWidth: O,
                      }),
                      e.content
                    )
                )
              : null,
          A = [...t, m]
            .filter((e) =>
              0 === t.length
                ? e
                : e === v ||
                  !f.rolledUp.some((t) => ne(t) && t.title === e.title)
            )
            .map((e) => {
              const { title: n, actions: a } = e,
                i = Object(g.b)(e, ["title", "actions"]),
                o = e === m,
                s = e === v,
                c = f.rolledUp.reduce(
                  (e, t) => (e.push(...(ne(t) ? t.actions : [t])), e),
                  []
                );
              return o || s
                ? !o && s
                  ? r.a.createElement(
                      Z,
                      Object.assign(
                        {
                          key: n,
                          title: n,
                          active: n === p,
                          actions: [...c, ...a],
                        },
                        i,
                        { onOpen: y, onClose: x, getOffsetWidth: O }
                      )
                    )
                  : o && 0 === t.length && c.length
                  ? r.a.createElement(
                      Z,
                      Object.assign(
                        { key: n, title: n, active: n === p, actions: c },
                        i,
                        { onOpen: y, onClose: x, getOffsetWidth: O }
                      )
                    )
                  : void 0
                : r.a.createElement(
                    Z,
                    Object.assign(
                      { key: n, title: n, active: n === p, actions: a },
                      i,
                      { onOpen: y, onClose: x, getOffsetWidth: O }
                    )
                  );
            }),
          T = r.a.createElement(q.a, { spacing: "extraTight" }, _, S, A);
        return r.a.createElement(
          "div",
          { className: ee.ActionsLayout, ref: a },
          T,
          r.a.createElement(k.a, { event: "resize", handler: C })
        );
      }
      function ne(e) {
        return "title" in e;
      }
      var ae = n("6Zs7"),
        ie = {
          RollupActivator: "Polaris-ActionMenu-RollupActions__RollupActivator",
        };
      function re({ items: e = [], sections: t = [] }) {
        const n = Object(c.a)(),
          { value: a, toggle: i } = Object(ae.a)(!1);
        if (0 === e.length && 0 === t.length) return null;
        const o = r.a.createElement(
          "div",
          { className: ie.RollupActivator },
          r.a.createElement(K.a, {
            outline: !0,
            icon: p,
            accessibilityLabel: n.translate(
              "Polaris.ActionMenu.RollupActions.rollupButton"
            ),
            onClick: i,
          })
        );
        return r.a.createElement(
          f.a,
          {
            active: a,
            activator: o,
            preferredAlignment: "right",
            onClose: i,
            hideOnPrint: !0,
          },
          r.a.createElement(X.a, { items: e, sections: t, onActionAnyItem: i })
        );
      }
      var oe = {
        ActionMenu: "Polaris-ActionMenu",
        rollup: "Polaris-ActionMenu--rollup",
      };
      function se({ actions: e = [], groups: t = [], rollup: n }) {
        if (0 === e.length && 0 === t.length) return null;
        const a = Object(l.a)(oe.ActionMenu, n && oe.rollup),
          i = t.map((e) =>
            (function ({ title: e, actions: t }) {
              return { title: e, items: t };
            })(e)
          );
        return r.a.createElement(
          "div",
          { className: a },
          n
            ? r.a.createElement(re, { items: e, sections: i })
            : r.a.createElement(te, { actions: e, groups: t })
        );
      }
      var ce = r.a.createElement("path", {
          d:
            "M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z",
        }),
        le = n("deeq"),
        ue = {
          Breadcrumb: "Polaris-Breadcrumbs__Breadcrumb",
          ContentWrapper: "Polaris-Breadcrumbs__ContentWrapper",
          Icon: "Polaris-Breadcrumbs__Icon",
          Content: "Polaris-Breadcrumbs__Content",
        },
        de = r.a.createElement(h.a, {
          source: function (e) {
            return r.a.createElement(
              "svg",
              Object.assign({ viewBox: "0 0 20 20" }, e),
              ce
            );
          },
        });
      function pe({ breadcrumbs: e }) {
        const t = e[e.length - 1];
        if (null == t) return null;
        const { content: n } = t,
          a = r.a.createElement(
            "span",
            { className: ue.ContentWrapper },
            r.a.createElement("span", { className: ue.Icon }, de),
            r.a.createElement(le.a, null, n)
          ),
          i =
            "url" in t
              ? r.a.createElement(
                  j.a,
                  {
                    key: n,
                    url: t.url,
                    className: ue.Breadcrumb,
                    onMouseUp: S.i,
                    "aria-label": t.accessibilityLabel,
                  },
                  a
                )
              : r.a.createElement(
                  "button",
                  {
                    key: n,
                    className: ue.Breadcrumb,
                    onClick: t.onAction,
                    onMouseUp: S.i,
                    type: "button",
                    "aria-label": t.accessibilityLabel,
                  },
                  a
                );
        return r.a.createElement("nav", { role: "navigation" }, i);
      }
      var he,
        fe = r.a.createElement("path", {
          d:
            "M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z",
        }),
        be = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            fe
          );
        },
        me = r.a.createElement("path", {
          d:
            "M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z",
        }),
        ge = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            me
          );
        },
        ve = n("5t0e");
      !(function (e) {
        (e.Input = "INPUT"),
          (e.Textarea = "TEXTAREA"),
          (e.Select = "SELECT"),
          (e.ContentEditable = "contenteditable");
      })(he || (he = {}));
      var je = n("wpwu"),
        Oe = n("cRKo"),
        ye = n("Ycb1"),
        xe = n("EjI8"),
        Ee = n("Nrkc"),
        Pe = {
          TooltipOverlay: "Polaris-Tooltip-TooltipOverlay",
          measuring: "Polaris-Tooltip-TooltipOverlay--measuring",
          positionedAbove: "Polaris-Tooltip-TooltipOverlay--positionedAbove",
          Content: "Polaris-Tooltip-TooltipOverlay__Content",
        };
      function Ce({
        active: e,
        activator: t,
        preferredPosition: n = "below",
        preventInteraction: a,
        id: i,
        children: o,
        accessibilityLabel: s,
      }) {
        const u = Object(c.a)();
        return e
          ? r.a.createElement(Ee.a, {
              active: e,
              activator: t,
              preferredPosition: n,
              preventInteraction: a,
              render: function (e) {
                const { measuring: t, desiredHeight: n, positioning: a } = e,
                  c = Object(l.a)(
                    Pe.TooltipOverlay,
                    t && Pe.measuring,
                    "above" === a && Pe.positionedAbove
                  ),
                  d = t ? void 0 : { minHeight: n };
                return r.a.createElement(
                  "div",
                  Object.assign({ className: c }, xe.b.props),
                  r.a.createElement(
                    "div",
                    {
                      id: i,
                      role: "tooltip",
                      className: Pe.Content,
                      style: d,
                      "aria-label": s
                        ? u.translate(
                            "Polaris.TooltipOverlay.accessibilityLabel",
                            { label: s }
                          )
                        : void 0,
                    },
                    o
                  )
                );
              },
            })
          : null;
      }
      function Se({
        children: e,
        content: t,
        dismissOnMouseOut: n,
        active: a,
        preferredPosition: o = "below",
        activatorWrapper: s = "span",
        accessibilityLabel: c,
      }) {
        const l = s,
          { value: u, setTrue: d, setFalse: p } = Object(ae.a)(Boolean(a)),
          [h, f] = Object(i.useState)(null),
          b = Object(Oe.a)("TooltipContent"),
          m = Object(i.useRef)(null),
          g = Object(i.useRef)(!1);
        Object(i.useEffect)(() => {
          const e = (m.current ? Object(S.a)(m.current) : null) || m.current;
          e &&
            ((e.tabIndex = 0),
            e.setAttribute("aria-describedby", b),
            e.setAttribute("data-polaris-tooltip-activator", "true"));
        }, [b, e]);
        const v = Object(i.useCallback)(
            (e) => {
              e.keyCode === je.a.Escape && p();
            },
            [p]
          ),
          j = h
            ? r.a.createElement(
                ye.a,
                { idPrefix: "tooltip" },
                r.a.createElement(
                  Ce,
                  {
                    id: b,
                    preferredPosition: o,
                    activator: h,
                    active: u,
                    accessibilityLabel: c,
                    onClose: _e,
                    preventInteraction: n,
                  },
                  t
                )
              )
            : null;
        return r.a.createElement(
          l,
          {
            onFocus: d,
            onBlur: p,
            onMouseLeave: function () {
              (g.current = !1), p();
            },
            onMouseOver: function () {
              !g.current && ((g.current = !0), d());
            },
            onClick: Ae,
            ref: function (e) {
              const t = m;
              if (null == e) return (t.current = null), void f(null);
              e.firstElementChild instanceof HTMLElement &&
                f(e.firstElementChild),
                (t.current = e);
            },
            onKeyUp: v,
          },
          e,
          j
        );
      }
      function _e() {}
      function Ae(e) {
        e.stopPropagation();
      }
      function ke({
        hasNext: e,
        hasPrevious: t,
        nextURL: n,
        previousURL: a,
        onNext: o,
        onPrevious: s,
        nextTooltip: l,
        previousTooltip: u,
        nextKeys: d,
        previousKeys: p,
        accessibilityLabel: h,
        accessibilityLabels: f,
        label: b,
      }) {
        const m = Object(c.a)(),
          g = Object(i.createRef)(),
          v = h || m.translate("Polaris.Pagination.pagination"),
          j =
            (null == f ? void 0 : f.previous) ||
            m.translate("Polaris.Pagination.previous"),
          O =
            (null == f ? void 0 : f.next) ||
            m.translate("Polaris.Pagination.next"),
          y = r.a.createElement(K.a, {
            outline: !0,
            icon: be,
            accessibilityLabel: j,
            url: a,
            onClick: s,
            disabled: !t,
            id: "previousURL",
          }),
          x =
            u && t
              ? r.a.createElement(
                  Se,
                  { activatorWrapper: "span", content: u },
                  y
                )
              : y,
          E = r.a.createElement(K.a, {
            outline: !0,
            icon: ge,
            accessibilityLabel: O,
            url: n,
            onClick: o,
            disabled: !e,
            id: "nextURL",
          }),
          P =
            l && e
              ? r.a.createElement(
                  Se,
                  { activatorWrapper: "span", content: l },
                  E
                )
              : E,
          C = s || Ne,
          S =
            p &&
            (a || s) &&
            t &&
            p.map((e) =>
              r.a.createElement(ve.a, {
                key: e,
                keyCode: e,
                handler: we(a ? Te("previousURL", g) : C),
              })
            ),
          _ = o || Ne,
          A =
            d &&
            (n || o) &&
            e &&
            d.map((e) =>
              r.a.createElement(ve.a, {
                key: e,
                keyCode: e,
                handler: we(n ? Te("nextURL", g) : _),
              })
            ),
          k =
            e && t
              ? r.a.createElement(U.a, null, b)
              : r.a.createElement(U.a, { variation: "subdued" }, b),
          T = b ? r.a.createElement("div", { "aria-live": "polite" }, k) : null;
        return r.a.createElement(
          "nav",
          { "aria-label": v, ref: g },
          S,
          A,
          r.a.createElement(q.a, { segmented: !b }, x, T, P)
        );
      }
      function Te(e, t) {
        return () => {
          if (null == t.current) return;
          const n = t.current.querySelector(`#${e}`);
          n && n.click();
        };
      }
      function we(e) {
        return () => {
          (function () {
            if (null == document || null == document.activeElement) return !1;
            const { tagName: e } = document.activeElement;
            return (
              e === he.Input ||
              e === he.Textarea ||
              e === he.Select ||
              document.activeElement.hasAttribute(he.ContentEditable)
            );
          })() || e();
        };
      }
      function Ne() {}
      var Ie = {
        Title: "Polaris-Header-Title",
        SubTitle: "Polaris-Header-Title__SubTitle",
        hasThumbnail: "Polaris-Header-Title--hasThumbnail",
        TitleAndSubtitleWrapper:
          "Polaris-Header-Title__TitleAndSubtitleWrapper",
        TitleWithMetadataWrapper:
          "Polaris-Header-Title__TitleWithMetadataWrapper",
        TitleMetadata: "Polaris-Header-Title__TitleMetadata",
      };
      function Re({ title: e, subtitle: t, titleMetadata: n, thumbnail: a }) {
        const i = e
            ? r.a.createElement("h1", { className: Ie.Title }, e)
            : null,
          o = n
            ? r.a.createElement("div", { className: Ie.TitleMetadata }, n)
            : null,
          s = n
            ? r.a.createElement(
                "div",
                { className: Ie.TitleWithMetadataWrapper },
                i,
                o
              )
            : i,
          c = t
            ? r.a.createElement(
                "div",
                { className: Ie.SubTitle },
                r.a.createElement("p", null, t)
              )
            : null,
          l = a ? r.a.createElement("div", null, a) : null,
          u = a ? Ie.hasThumbnail : void 0;
        return r.a.createElement(
          "div",
          { className: u },
          l,
          r.a.createElement(
            "div",
            { className: Ie.TitleAndSubtitleWrapper },
            s,
            c
          )
        );
      }
      var Le = {
        Header: "Polaris-Page-Header",
        titleHidden: "Polaris-Page-Header--titleHidden",
        TitleWrapper: "Polaris-Page-Header__TitleWrapper",
        Navigation: "Polaris-Page-Header__Navigation",
        hasActionMenu: "Polaris-Page-Header--hasActionMenu",
        mobileView: "Polaris-Page-Header--mobileView",
        BreadcrumbWrapper: "Polaris-Page-Header__BreadcrumbWrapper",
        PaginationWrapper: "Polaris-Page-Header__PaginationWrapper",
        AdditionalNavigationWrapper:
          "Polaris-Page-Header__AdditionalNavigationWrapper",
        MainContent: "Polaris-Page-Header__MainContent",
        TitleActionMenuWrapper: "Polaris-Page-Header__TitleActionMenuWrapper",
        hasNavigation: "Polaris-Page-Header--hasNavigation",
        PrimaryActionWrapper: "Polaris-Page-Header__PrimaryActionWrapper",
        ActionMenuWrapper: "Polaris-Page-Header__ActionMenuWrapper",
        Row: "Polaris-Page-Header__Row",
        RightAlign: "Polaris-Page-Header__RightAlign",
        LeftAlign: "Polaris-Page-Header__LeftAlign",
        noBreadcrumbs: "Polaris-Page-Header--noBreadcrumbs",
        AdditionalMetaData: "Polaris-Page-Header__AdditionalMetaData",
        Actions: "Polaris-Page-Header__Actions",
        longTitle: "Polaris-Page-Header--longTitle",
        mediumTitle: "Polaris-Page-Header--mediumTitle",
        isSingleRow: "Polaris-Page-Header--isSingleRow",
      };
      function Me({
        title: e,
        subtitle: t,
        titleMetadata: n,
        additionalMetadata: a,
        thumbnail: i,
        titleHidden: o = !1,
        primaryAction: s,
        pagination: c,
        additionalNavigation: u,
        breadcrumbs: d = [],
        secondaryActions: p = [],
        actionGroups: h = [],
      }) {
        const { isNavigationCollapsed: f } = Object(W.a)(),
          b = !s && !c && !p.length && !h.length,
          m =
            d.length > 0
              ? r.a.createElement(
                  "div",
                  { className: Le.BreadcrumbWrapper },
                  r.a.createElement(pe, { breadcrumbs: d })
                )
              : null,
          g =
            c && !f
              ? r.a.createElement(
                  "div",
                  { className: Le.PaginationWrapper },
                  r.a.createElement(ke, c)
                )
              : null,
          v = u
            ? r.a.createElement(
                "div",
                { className: Le.AdditionalNavigationWrapper },
                u
              )
            : null,
          j =
            m || g || v
              ? r.a.createElement("div", { className: Le.Navigation }, m, v, g)
              : null,
          O = r.a.createElement(
            "div",
            { className: Le.TitleWrapper },
            r.a.createElement(Re, {
              title: e,
              subtitle: t,
              titleMetadata: n,
              thumbnail: i,
            })
          ),
          y = s ? r.a.createElement(De, { primaryAction: s }) : null,
          x =
            p.length > 0 ||
            (function (e = []) {
              return 0 !== e.length && e.some((e) => e.actions.length > 0);
            })(h)
              ? r.a.createElement(se, { actions: p, groups: h, rollup: f })
              : null,
          E = a
            ? r.a.createElement(
                "div",
                { className: Le.AdditionalMetaData },
                r.a.createElement(U.a, { variation: "subdued" }, a)
              )
            : null,
          P = Object(l.a)(
            Le.Header,
            b && Le.isSingleRow,
            o && Le.titleHidden,
            j && Le.hasNavigation,
            x && Le.hasActionMenu,
            f && Le.mobileView,
            !d.length && Le.noBreadcrumbs,
            e && e.length < 34 && Le.mediumTitle,
            e && e.length > 34 && Le.longTitle
          ),
          {
            slot1: C,
            slot2: S,
            slot3: _,
            slot4: A,
            slot5: k,
            slot6: T,
          } = (function ({
            actionMenuMarkup: e,
            additionalMetadataMarkup: t,
            additionalNavigationMarkup: n,
            breadcrumbMarkup: a,
            isNavigationCollapsed: i,
            pageTitleMarkup: o,
            paginationMarkup: s,
            primaryActionMarkup: c,
            title: l,
          }) {
            const u = {
              mobileCompact: {
                slots: {
                  slot1: null,
                  slot2: o,
                  slot3: e,
                  slot4: c,
                  slot5: t,
                  slot6: n,
                },
                condition: i && null == a && null != l && l.length <= 8,
              },
              mobileDefault: {
                slots: {
                  slot1: a,
                  slot2: o,
                  slot3: e,
                  slot4: c,
                  slot5: t,
                  slot6: n,
                },
                condition: i,
              },
              desktopCompact: {
                slots: {
                  slot1: a,
                  slot2: o,
                  slot3: e,
                  slot4: c,
                  slot5: t,
                  slot6: n,
                },
                condition:
                  !i && null == s && null == e && null != l && l.length <= 20,
              },
              desktopDefault: {
                slots: {
                  slot1: a,
                  slot2: o,
                  slot3: r.a.createElement(r.a.Fragment, null, e, c),
                  slot4: s,
                  slot5: t,
                  slot6: n,
                },
                condition: !i,
              },
            };
            return (
              Object.values(u).find((e) => e.condition) || u.desktopDefault
            ).slots;
          })({
            actionMenuMarkup: x,
            additionalMetadataMarkup: E,
            additionalNavigationMarkup: v,
            breadcrumbMarkup: m,
            isNavigationCollapsed: f,
            pageTitleMarkup: O,
            paginationMarkup: g,
            primaryActionMarkup: y,
            title: e,
          });
        return r.a.createElement(
          "div",
          { className: P },
          r.a.createElement(
            G.a,
            { condition: [C, S, _, A].some(Fe) },
            r.a.createElement(
              "div",
              { className: Le.Row },
              C,
              S,
              r.a.createElement(
                G.a,
                { condition: [_, A].some(Fe) },
                r.a.createElement(
                  "div",
                  { className: Le.RightAlign },
                  r.a.createElement(
                    G.b,
                    {
                      condition: [_, A].every(Fe),
                      wrapper: (e) =>
                        r.a.createElement("div", { className: Le.Actions }, e),
                    },
                    _,
                    A
                  )
                )
              )
            )
          ),
          r.a.createElement(
            G.a,
            { condition: [k, T].some(Fe) },
            r.a.createElement(
              "div",
              { className: Le.Row },
              r.a.createElement("div", { className: Le.LeftAlign }, k),
              r.a.createElement(
                G.a,
                { condition: null != T },
                r.a.createElement("div", { className: Le.RightAlign }, T)
              )
            )
          )
        );
      }
      function De({ primaryAction: e }) {
        const { isNavigationCollapsed: t } = Object(W.a)();
        let n = e;
        if (((a = e), !Object(i.isValidElement)(a) && void 0 !== a)) {
          const a = void 0 === e.primary || e.primary;
          n = Object(z.b)(
            (function (e, t) {
              let { content: n, accessibilityLabel: a, icon: i } = t;
              if (null == i)
                return Object(g.a)(Object(g.a)({}, t), {}, { icon: void 0 });
              e ? ((a = a || n), (n = void 0)) : (i = void 0);
              return Object(g.a)(
                Object(g.a)({}, t),
                {},
                { content: n, accessibilityLabel: a, icon: i }
              );
            })(t, e),
            { primary: a }
          );
        }
        var a;
        return r.a.createElement(
          "div",
          { className: Le.PrimaryActionWrapper },
          n
        );
      }
      function Fe(e) {
        return null != e;
      }
      var Be = {
        Page: "Polaris-Page",
        fullWidth: "Polaris-Page--fullWidth",
        narrowWidth: "Polaris-Page--narrowWidth",
        Content: "Polaris-Page__Content",
      };
      function He(e) {
        let { children: t, fullWidth: n, narrowWidth: a } = e,
          i = Object(g.b)(e, ["children", "fullWidth", "narrowWidth"]);
        const o = Object(l.a)(Be.Page, n && Be.fullWidth, a && Be.narrowWidth),
          s =
            (null != i.title && "" !== i.title) ||
            null != i.primaryAction ||
            (null != i.secondaryActions && i.secondaryActions.length > 0) ||
            (null != i.actionGroups && i.actionGroups.length > 0) ||
            (null != i.breadcrumbs && i.breadcrumbs.length > 0)
              ? r.a.createElement(Me, i)
              : null;
        return r.a.createElement(
          "div",
          { className: o },
          s,
          r.a.createElement("div", { className: Be.Content }, t)
        );
      }
      var We = r.a.createElement("path", {
          d:
            "M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z",
        }),
        Ge = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            We
          );
        },
        Ue = r.a.createElement("path", {
          fillRule: "evenodd",
          d:
            "M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4L9 11.6 6.7 9.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z",
        }),
        ze = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            Ue
          );
        },
        Ve = r.a.createElement("path", {
          fillRule: "evenodd",
          d:
            "M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
        }),
        $e = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            Ve
          );
        },
        qe = r.a.createElement("path", {
          fillRule: "evenodd",
          d:
            "M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
        }),
        Ke = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            qe
          );
        },
        Je = r.a.createElement("path", {
          d:
            "M11.768.768a2.5 2.5 0 0 0-3.536 0L.768 8.232a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536L11.768.768zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
        }),
        Ye = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            Je
          );
        },
        Xe = n("QMpG");
      var Qe = n("p1WN"),
        Ze = { Heading: "Polaris-Heading" };
      function et({ element: e = "h2", children: t }) {
        return r.a.createElement(e, { className: Ze.Heading }, t);
      }
      const tt = Object(i.createContext)(!1);
      var nt = {
        Banner: "Polaris-Banner",
        statusCritical: "Polaris-Banner--statusCritical",
        PrimaryAction: "Polaris-Banner__PrimaryAction",
        Button: "Polaris-Banner__Button",
        statusWarning: "Polaris-Banner--statusWarning",
        statusInfo: "Polaris-Banner--statusInfo",
        statusSuccess: "Polaris-Banner--statusSuccess",
        ContentWrapper: "Polaris-Banner__ContentWrapper",
        withinContentContainer: "Polaris-Banner--withinContentContainer",
        Dismiss: "Polaris-Banner__Dismiss",
        Ribbon: "Polaris-Banner__Ribbon",
        keyFocused: "Polaris-Banner--keyFocused",
        Actions: "Polaris-Banner__Actions",
        withinPage: "Polaris-Banner--withinPage",
        hasDismiss: "Polaris-Banner--hasDismiss",
        Heading: "Polaris-Banner__Heading",
        Content: "Polaris-Banner__Content",
        SecondaryAction: "Polaris-Banner__SecondaryAction",
        Text: "Polaris-Banner__Text",
        pressed: "Polaris-Banner--pressed",
      };
      const at = Object(i.forwardRef)(function (
        {
          icon: e,
          action: t,
          secondaryAction: n,
          title: a,
          children: o,
          status: s,
          onDismiss: c,
          stopAnnouncements: u,
        },
        d
      ) {
        const p = Object(i.useContext)(Qe.a),
          f = Object(Oe.a)("Banner"),
          {
            wrapperRef: b,
            handleKeyUp: m,
            handleBlur: v,
            handleMouseUp: j,
            shouldShowFocus: O,
          } = (function (e) {
            const t = Object(i.useRef)(null),
              [n, a] = Object(i.useState)(!1);
            Object(i.useImperativeHandle)(
              e,
              () => ({
                focus: () => {
                  var e;
                  null == (e = t.current) || e.focus(), a(!0);
                },
              }),
              []
            );
            return {
              wrapperRef: t,
              handleKeyUp: (e) => {
                e.target === t.current && a(!0);
              },
              handleBlur: () => a(!1),
              handleMouseUp: (e) => {
                e.currentTarget.blur(), a(!1);
              },
              shouldShowFocus: n,
            };
          })(d),
          { defaultIcon: y, iconColor: x, ariaRoleType: E } = (function (e) {
            switch (e) {
              case "success":
                return {
                  defaultIcon: ze,
                  iconColor: "success",
                  ariaRoleType: "status",
                };
              case "info":
                return {
                  defaultIcon: $e,
                  iconColor: "highlight",
                  ariaRoleType: "status",
                };
              case "warning":
                return {
                  defaultIcon: Ke,
                  iconColor: "warning",
                  ariaRoleType: "alert",
                };
              case "critical":
                return {
                  defaultIcon: Ye,
                  iconColor: "critical",
                  ariaRoleType: "alert",
                };
              default:
                return {
                  defaultIcon: $e,
                  iconColor: "base",
                  ariaRoleType: "status",
                };
            }
          })(s),
          P = e || y,
          C = Object(l.a)(
            nt.Banner,
            s && nt[Object(l.b)("status", s)],
            c && nt.hasDismiss,
            O && nt.keyFocused,
            p ? nt.withinContentContainer : nt.withinPage
          );
        let S,
          _ = null;
        a &&
          ((S = `${f}Heading`),
          (_ = r.a.createElement(
            "div",
            { className: nt.Heading, id: S },
            r.a.createElement(et, { element: "p" }, a)
          )));
        const A = t
            ? r.a.createElement(
                "div",
                { className: nt.PrimaryAction },
                (function (e, t, n) {
                  let { content: a, onAction: i } = e,
                    o = Object(g.b)(e, ["content", "onAction"]);
                  return r.a.createElement(
                    Xe.a,
                    Object.assign({ key: n, onClick: i }, o, t),
                    a
                  );
                })(t, { className: nt.Button })
              )
            : null,
          k = n ? r.a.createElement(it, { action: n }) : null,
          T =
            t || n
              ? r.a.createElement(
                  "div",
                  { className: nt.Actions },
                  r.a.createElement(q.a, null, A, k)
                )
              : null;
        let w,
          N = null;
        (o || T) &&
          ((w = `${f}Content`),
          (N = r.a.createElement(
            "div",
            { className: nt.Content, id: w },
            o,
            T
          )));
        const I =
          c &&
          r.a.createElement(
            "div",
            { className: nt.Dismiss },
            r.a.createElement(K.a, {
              plain: !0,
              icon: Ge,
              onClick: c,
              accessibilityLabel: "Dismiss notification",
            })
          );
        return r.a.createElement(
          tt.Provider,
          { value: !0 },
          r.a.createElement(
            "div",
            {
              className: C,
              tabIndex: 0,
              ref: b,
              role: E,
              "aria-live": u ? "off" : "polite",
              onMouseUp: j,
              onKeyUp: m,
              onBlur: v,
              "aria-labelledby": S,
              "aria-describedby": w,
            },
            I,
            r.a.createElement(
              "div",
              { className: nt.Ribbon },
              r.a.createElement(h.a, { source: P, color: x })
            ),
            r.a.createElement("div", { className: nt.ContentWrapper }, _, N)
          )
        );
      });
      function it({ action: e }) {
        return e.url
          ? r.a.createElement(
              j.a,
              {
                className: nt.SecondaryAction,
                url: e.url,
                external: e.external,
              },
              r.a.createElement("span", { className: nt.Text }, e.content)
            )
          : r.a.createElement(
              Xe.a,
              { className: nt.SecondaryAction, onClick: e.onAction },
              r.a.createElement("span", { className: nt.Text }, e.content)
            );
      }
      var rt = {
          Card: "Polaris-Card",
          subdued: "Polaris-Card--subdued",
          Header: "Polaris-Card__Header",
          Section: "Polaris-Card__Section",
          "Section-fullWidth": "Polaris-Card__Section--fullWidth",
          "Section-flush": "Polaris-Card__Section--flush",
          "Section-subdued": "Polaris-Card__Section--subdued",
          SectionHeader: "Polaris-Card__SectionHeader",
          Subsection: "Polaris-Card__Subsection",
          Footer: "Polaris-Card__Footer",
          LeftJustified: "Polaris-Card__LeftJustified",
        },
        ot = n("HiUX");
      function st({ children: e, title: t, actions: n }) {
        const a = n
            ? r.a.createElement(q.a, null, Object(z.b)(n, { plain: !0 }))
            : null,
          o = Object(i.isValidElement)(t) ? t : r.a.createElement(et, null, t),
          s =
            a || e
              ? r.a.createElement(
                  ot.a,
                  { alignment: "baseline" },
                  r.a.createElement(ot.a.Item, { fill: !0 }, o),
                  a,
                  e
                )
              : o;
        return r.a.createElement("div", { className: rt.Header }, s);
      }
      var ct = { Subheading: "Polaris-Subheading" };
      function lt({ element: e = "h3", children: t }) {
        const n = "string" === typeof t ? t : void 0;
        return r.a.createElement(
          e,
          { "aria-label": n, className: ct.Subheading },
          t
        );
      }
      function ut({
        children: e,
        title: t,
        subdued: n,
        flush: a,
        fullWidth: i,
        actions: o,
      }) {
        const s = Object(l.a)(
            rt.Section,
            a && rt["Section-flush"],
            n && rt["Section-subdued"],
            i && rt["Section-fullWidth"]
          ),
          c = o
            ? r.a.createElement(q.a, null, Object(z.b)(o, { plain: !0 }))
            : null,
          u = "string" === typeof t ? r.a.createElement(lt, null, t) : t,
          d =
            u || c
              ? r.a.createElement(
                  "div",
                  { className: rt.SectionHeader },
                  c
                    ? r.a.createElement(
                        ot.a,
                        { alignment: "baseline" },
                        r.a.createElement(ot.a.Item, { fill: !0 }, u),
                        c
                      )
                    : u
                )
              : null;
        return r.a.createElement("div", { className: s }, d, e);
      }
      const dt = function ({
        children: e,
        title: t,
        subdued: n,
        sectioned: a,
        actions: i,
        primaryFooterAction: o,
        secondaryFooterActions: s,
        secondaryFooterActionsDisclosureText: u,
        footerActionAlignment: d = "right",
      }) {
        const p = Object(c.a)(),
          { value: h, toggle: b } = Object(ae.a)(!1),
          m = Object(l.a)(rt.Card, n && rt.subdued),
          g = t || i ? r.a.createElement(st, { actions: i, title: t }) : null,
          v = a ? r.a.createElement(ut, null, e) : e,
          j = o ? Object(z.a)(o, { primary: !0 }) : null;
        let O = null;
        s &&
          s.length &&
          (O =
            1 === s.length
              ? Object(z.a)(s[0])
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    f.a,
                    {
                      active: h,
                      activator: r.a.createElement(
                        K.a,
                        { disclosure: !0, onClick: b },
                        u || p.translate("Polaris.Common.more")
                      ),
                      onClose: b,
                    },
                    r.a.createElement(X.a, { items: s })
                  )
                ));
        const y =
          j || O
            ? r.a.createElement(
                "div",
                {
                  className: Object(l.a)(
                    rt.Footer,
                    "left" === d && rt.LeftJustified
                  ),
                },
                "right" === d
                  ? r.a.createElement(q.a, null, O, j)
                  : r.a.createElement(q.a, null, j, O)
              )
            : null;
        return r.a.createElement(
          Qe.a.Provider,
          { value: !0 },
          r.a.createElement("div", { className: m }, g, v, y)
        );
      };
      (dt.Header = st),
        (dt.Section = ut),
        (dt.Subsection = function ({ children: e }) {
          return r.a.createElement("div", { className: rt.Subsection }, e);
        });
      var pt = n("rePB"),
        ht = n("5xm7"),
        ft = n("CFkb");
      function bt() {
        const e = Object(i.useContext)(ft.a);
        if (!e)
          throw new Error(
            "No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/structure/frame for implementation instructions."
          );
        return e;
      }
      const mt = Object(i.memo)(function (e) {
        const t = Object(Oe.a)("Toast"),
          { showToast: n, hideToast: a } = bt();
        return (
          Object(ht.a)(
            () => (
              n(Object(g.a)({ id: t }, e)),
              () => {
                a({ id: t });
              }
            ),
            [e]
          ),
          null
        );
      });
      var gt = {
          Tag: "Polaris-Tag",
          disabled: "Polaris-Tag--disabled",
          removable: "Polaris-Tag--removable",
          clickable: "Polaris-Tag--clickable",
          TagText: "Polaris-Tag__TagText",
          Button: "Polaris-Tag__Button",
        },
        vt = r.a.createElement(h.a, { source: Ge });
      function jt({ children: e, disabled: t = !1, onClick: n, onRemove: a }) {
        const i = Object(c.a)(),
          o = Object(l.a)(
            gt.Tag,
            t && gt.disabled,
            n && gt.clickable,
            a && gt.removable
          ),
          s = i.translate("Polaris.Tag.ariaLabel", { children: e || "" }),
          u = a
            ? r.a.createElement(
                "button",
                {
                  type: "button",
                  "aria-label": s,
                  className: gt.Button,
                  onClick: a,
                  onMouseUp: S.i,
                  disabled: t,
                },
                vt
              )
            : null;
        return n
          ? r.a.createElement(
              "button",
              { type: "button", disabled: t, className: o, onClick: n },
              e
            )
          : r.a.createElement(
              "span",
              { className: o },
              r.a.createElement("span", { title: e, className: gt.TagText }, e),
              u
            );
      }
      var Ot = {
          Layout: "Polaris-Layout",
          Section: "Polaris-Layout__Section",
          "Section-secondary": "Polaris-Layout__Section--secondary",
          "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
          "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
          "Section-oneThird": "Polaris-Layout__Section--oneThird",
          AnnotatedSection: "Polaris-Layout__AnnotatedSection",
          AnnotationWrapper: "Polaris-Layout__AnnotationWrapper",
          AnnotationContent: "Polaris-Layout__AnnotationContent",
          Annotation: "Polaris-Layout__Annotation",
          AnnotationDescription: "Polaris-Layout__AnnotationDescription",
        },
        yt = {
          TextContainer: "Polaris-TextContainer",
          spacingTight: "Polaris-TextContainer--spacingTight",
          spacingLoose: "Polaris-TextContainer--spacingLoose",
        };
      function xt({ spacing: e, children: t }) {
        const n = Object(l.a)(
          yt.TextContainer,
          e && yt[Object(l.b)("spacing", e)]
        );
        return r.a.createElement("div", { className: n }, t);
      }
      function Et({
        children: e,
        secondary: t,
        fullWidth: n,
        oneHalf: a,
        oneThird: i,
      }) {
        const o = Object(l.a)(
          Ot.Section,
          t && Ot["Section-secondary"],
          n && Ot["Section-fullWidth"],
          a && Ot["Section-oneHalf"],
          i && Ot["Section-oneThird"]
        );
        return r.a.createElement("div", { className: o }, e);
      }
      const Pt = function ({ sectioned: e, children: t }) {
        const n = e ? r.a.createElement(Et, null, t) : t;
        return r.a.createElement("div", { className: Ot.Layout }, n);
      };
      function Ct(e, t, n) {
        return (
          e.length === t.length &&
          e.every((e, a) => {
            const i = t[a];
            return null != n ? n(e, i) : e === i;
          })
        );
      }
      (Pt.AnnotatedSection = function (e) {
        const { children: t, title: n, description: a } = e,
          i = "string" === typeof a ? r.a.createElement("p", null, a) : a;
        return r.a.createElement(
          "div",
          { className: Ot.AnnotatedSection },
          r.a.createElement(
            "div",
            { className: Ot.AnnotationWrapper },
            r.a.createElement(
              "div",
              { className: Ot.Annotation },
              r.a.createElement(
                xt,
                null,
                r.a.createElement(et, null, n),
                i &&
                  r.a.createElement(
                    "div",
                    { className: Ot.AnnotationDescription },
                    i
                  )
              )
            ),
            r.a.createElement("div", { className: Ot.AnnotationContent }, t)
          )
        );
      }),
        (Pt.Section = Et);
      var St = n("gNKU"),
        _t = r.a.createElement("path", {
          d:
            "M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0",
        }),
        At = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            _t
          );
        },
        kt = {
          Checkbox: "Polaris-OptionList-Checkbox",
          active: "Polaris-OptionList-Checkbox--active",
          Backdrop: "Polaris-OptionList-Checkbox__Backdrop",
          Input: "Polaris-OptionList-Checkbox__Input",
          keyFocused: "Polaris-OptionList-Checkbox--keyFocused",
          "Input-indeterminate":
            "Polaris-OptionList-Checkbox__Input--indeterminate",
          Icon: "Polaris-OptionList-Checkbox__Icon",
          hover: "Polaris-OptionList-Checkbox--hover",
        },
        Tt = r.a.createElement(h.a, { source: At });
      function wt({
        id: e,
        checked: t = !1,
        disabled: n,
        active: a,
        onChange: o,
        name: s,
        value: c,
        role: u,
      }) {
        const d = Object(Oe.a)("Checkbox", e),
          [p, h] = Object(i.useState)(!1),
          f = Object(l.a)(kt.Checkbox, a && kt.active),
          b = Object(l.a)(kt.Input, p && kt.keyFocused);
        return r.a.createElement(
          "div",
          { className: f },
          r.a.createElement("input", {
            id: d,
            name: s,
            value: c,
            type: "checkbox",
            checked: t,
            disabled: n,
            className: b,
            "aria-checked": t,
            onChange: o,
            onBlur: () => {
              h(!1);
            },
            onKeyUp: () => {
              !p && h(!0);
            },
            role: u,
          }),
          r.a.createElement("div", { className: kt.Backdrop }),
          r.a.createElement("div", { className: kt.Icon }, Tt)
        );
      }
      var Nt = {
          Option: "Polaris-OptionList-Option",
          SingleSelectOption: "Polaris-OptionList-Option__SingleSelectOption",
          focused: "Polaris-OptionList-Option--focused",
          active: "Polaris-OptionList-Option--active",
          select: "Polaris-OptionList-Option--select",
          disabled: "Polaris-OptionList-Option--disabled",
          Media: "Polaris-OptionList-Option__Media",
          Label: "Polaris-OptionList-Option__Label",
          Checkbox: "Polaris-OptionList-Option__Checkbox",
        },
        It = r.a.createElement(St.a.ScrollTo, null);
      function Rt({
        label: e,
        value: t,
        id: n,
        select: a,
        active: o,
        allowMultiple: s,
        disabled: c,
        role: u,
        media: d,
        onClick: p,
        section: h,
        index: f,
      }) {
        const { value: b, toggle: m } = Object(ae.a)(!1),
          g = Object(i.useCallback)(() => {
            c || p(h, f);
          }, [c, f, p, h]),
          v = d ? r.a.createElement("div", { className: Nt.Media }, d) : null,
          j = Object(l.a)(
            Nt.SingleSelectOption,
            b && Nt.focused,
            c && Nt.disabled,
            a && Nt.select,
            o && Nt.active
          ),
          O = Object(l.a)(
            Nt.Label,
            c && Nt.disabled,
            o && Nt.active,
            a && Nt.select
          ),
          y = "option" === u ? "presentation" : void 0,
          x = s
            ? r.a.createElement(
                "label",
                { htmlFor: n, className: O },
                r.a.createElement(
                  "div",
                  { className: Nt.Checkbox },
                  r.a.createElement(wt, {
                    id: n,
                    value: t,
                    checked: a,
                    active: o,
                    disabled: c,
                    onChange: g,
                    role: y,
                  })
                ),
                v,
                e
              )
            : r.a.createElement(
                "button",
                {
                  id: n,
                  type: "button",
                  className: j,
                  onClick: g,
                  disabled: c,
                  onFocus: m,
                  onBlur: m,
                  "aria-pressed": o,
                },
                v,
                e
              ),
          E = o ? It : null;
        return r.a.createElement(
          "li",
          { key: n, className: Nt.Option, tabIndex: -1 },
          E,
          x
        );
      }
      var Lt = {
        OptionList: "Polaris-OptionList",
        Options: "Polaris-OptionList__Options",
        Title: "Polaris-OptionList__Title",
      };
      function Mt({
        options: e,
        sections: t,
        title: n,
        selected: a,
        allowMultiple: o,
        role: s,
        optionRole: c,
        onChange: l,
        id: u,
      }) {
        const [d, p] = Object(i.useState)(Dt(e, t, n)),
          h = Object(Oe.a)("OptionList", u);
        Object(ht.a)(
          () => {
            p(Dt(e || [], t || [], n));
          },
          [e, t, n],
          Bt
        );
        const f = Object(i.useCallback)(
            (e, t) => {
              const n = d[e].options[t].value,
                i = a.indexOf(n);
              if (o) {
                const e =
                  -1 === i
                    ? [n, ...a]
                    : [...a.slice(0, i), ...a.slice(i + 1, a.length)];
                l(e);
              } else l([n]);
            },
            [d, a, o, l]
          ),
          b =
            d.length > 0
              ? d.map(({ title: e, options: t }, n) => {
                  const i = e
                      ? r.a.createElement("p", { className: Lt.Title }, e)
                      : null,
                    l =
                      t &&
                      t.map((e, t) => {
                        const i = a.includes(e.value),
                          s = e.id || `${h}-${n}-${t}`;
                        return r.a.createElement(
                          Rt,
                          Object.assign({}, e, {
                            key: s,
                            id: s,
                            section: n,
                            index: t,
                            onClick: f,
                            select: i,
                            allowMultiple: o,
                            role: c,
                          })
                        );
                      });
                  return r.a.createElement(
                    "li",
                    { key: e || `noTitle-${n}` },
                    i,
                    r.a.createElement(
                      "ul",
                      { className: Lt.Options, id: `${h}-${n}`, role: s },
                      l
                    )
                  );
                })
              : null;
        return r.a.createElement(
          "ul",
          { className: Lt.OptionList, role: s },
          b
        );
      }
      function Dt(e, t, n) {
        if (null == e) {
          const e = { options: [], title: n };
          return null == t ? [] : [e, ...t];
        }
        return null == t
          ? [{ title: n, options: e }]
          : [{ title: n, options: e }, ...t];
      }
      function Ft(e) {
        return (
          "object" === typeof e[0] &&
          Object.prototype.hasOwnProperty.call(e[0], "options")
        );
      }
      function Bt(e, t) {
        return Ft(e) && Ft(t) ? Ct(e, t, Ht) : Ct(e, t);
      }
      function Ht(e, t) {
        const { options: n } = e,
          { options: a } = t,
          i = Ct(n, a),
          r = e.title === t.title;
        return i && r;
      }
      var Wt = r.a.createElement("path", {
          d: "M15 9H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z",
        }),
        Gt = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            Wt
          );
        },
        Ut = r.a.createElement("path", {
          d:
            "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
        }),
        zt = {
          InlineError: "Polaris-InlineError",
          Icon: "Polaris-InlineError__Icon",
        },
        Vt = r.a.createElement(h.a, {
          source: function (e) {
            return r.a.createElement(
              "svg",
              Object.assign({ viewBox: "0 0 20 20" }, e),
              Ut
            );
          },
        });
      function $t({ message: e, fieldID: t }) {
        return e
          ? r.a.createElement(
              "div",
              { id: qt(t), className: zt.InlineError },
              r.a.createElement("div", { className: zt.Icon }, Vt),
              e
            )
          : null;
      }
      function qt(e) {
        return `${e}Error`;
      }
      var Kt = {
        Choice: "Polaris-Choice",
        labelHidden: "Polaris-Choice--labelHidden",
        Label: "Polaris-Choice__Label",
        Control: "Polaris-Choice__Control",
        disabled: "Polaris-Choice--disabled",
        Descriptions: "Polaris-Choice__Descriptions",
        HelpText: "Polaris-Choice__HelpText",
      };
      function Jt({
        id: e,
        label: t,
        disabled: n,
        error: a,
        children: i,
        labelHidden: o,
        helpText: s,
        onClick: c,
        onMouseOut: u,
        onMouseOver: d,
      }) {
        const p = Object(l.a)(Kt.Choice, o && Kt.labelHidden, n && Kt.disabled),
          h = r.a.createElement(
            "label",
            {
              className: p,
              htmlFor: e,
              onClick: c,
              onMouseOver: d,
              onMouseOut: u,
            },
            r.a.createElement("span", { className: Kt.Control }, i),
            r.a.createElement("span", { className: Kt.Label }, t)
          ),
          f = s
            ? r.a.createElement("div", { className: Kt.HelpText, id: Yt(e) }, s)
            : null,
          b =
            a &&
            "boolean" !== typeof a &&
            r.a.createElement(
              "div",
              { className: Kt.Error },
              r.a.createElement($t, { message: a, fieldID: e })
            ),
          m =
            f || b
              ? r.a.createElement("div", { className: Kt.Descriptions }, b, f)
              : null;
        return m ? r.a.createElement("div", null, h, m) : h;
      }
      function Yt(e) {
        return `${e}HelpText`;
      }
      var Xt = {
        Checkbox: "Polaris-Checkbox",
        Input: "Polaris-Checkbox__Input",
        keyFocused: "Polaris-Checkbox--keyFocused",
        Backdrop: "Polaris-Checkbox__Backdrop",
        "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
        Icon: "Polaris-Checkbox__Icon",
        hover: "Polaris-Checkbox--hover",
        error: "Polaris-Checkbox--error",
      };
      const Qt = Object(i.forwardRef)(function (
        {
          ariaDescribedBy: e,
          label: t,
          labelHidden: n,
          checked: a = !1,
          helpText: o,
          disabled: s,
          id: c,
          name: u,
          value: d,
          error: p,
          onChange: f,
          onFocus: b,
          onBlur: m,
        },
        g
      ) {
        const v = Object(i.useRef)(null),
          j = Object(Oe.a)("Checkbox", c),
          { value: O, setTrue: y, setFalse: x } = Object(ae.a)(!1),
          [E, P] = Object(i.useState)(!1);
        Object(i.useImperativeHandle)(g, () => ({
          focus: () => {
            v.current && v.current.focus();
          },
        }));
        const C = () => {
            null == f ||
              null == v.current ||
              s ||
              (f(!v.current.checked, j), v.current.focus());
          },
          S = [];
        p && "boolean" !== typeof p && S.push(qt(j)),
          o && S.push(Yt(j)),
          e && S.push(e);
        const _ = S.length ? S.join(" ") : void 0,
          A = Object(l.a)(Xt.Checkbox, p && Xt.error),
          k = Object(l.a)(Xt.Backdrop, O && Xt.hover),
          T = "indeterminate" === a,
          w = !T && Boolean(a),
          N = T
            ? { indeterminate: "true", "aria-checked": "mixed" }
            : { "aria-checked": w },
          I = T ? Gt : At,
          R = Object(l.a)(
            Xt.Input,
            T && Xt["Input-indeterminate"],
            E && Xt.keyFocused
          );
        return r.a.createElement(
          Jt,
          {
            id: j,
            label: t,
            labelHidden: n,
            helpText: o,
            error: p,
            disabled: s,
            onClick: C,
            onMouseOver: y,
            onMouseOut: x,
          },
          r.a.createElement(
            "span",
            { className: A },
            r.a.createElement(
              "input",
              Object.assign(
                {
                  onKeyUp: (e) => {
                    const { keyCode: t } = e;
                    !E && P(!0), t === je.a.Space && C();
                  },
                  ref: v,
                  id: j,
                  name: u,
                  value: d,
                  type: "checkbox",
                  checked: w,
                  disabled: s,
                  className: R,
                  onFocus: b,
                  onBlur: () => {
                    m && m(), P(!1);
                  },
                  onClick: en,
                  onChange: Zt,
                  "aria-invalid": null != p,
                  "aria-describedby": _,
                  role: "checkbox",
                },
                N
              )
            ),
            r.a.createElement("span", { className: k }),
            r.a.createElement(
              "span",
              { className: Xt.Icon },
              r.a.createElement(h.a, { source: I })
            )
          )
        );
      });
      function Zt() {}
      function en(e) {
        e.stopPropagation();
      }
      var tn = r.a.createElement("path", {
          fillRule: "evenodd",
          d:
            "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z",
        }),
        nn = {
          Label: "Polaris-Label",
          hidden: "Polaris-Label--hidden",
          Text: "Polaris-Label__Text",
        };
      function an(e) {
        return `${e}Label`;
      }
      function rn({ children: e, id: t, hidden: n }) {
        const a = Object(l.a)(nn.Label, n && nn.hidden);
        return r.a.createElement(
          "div",
          { className: a },
          r.a.createElement(
            "label",
            { id: an(t), htmlFor: t, className: nn.Text },
            e
          )
        );
      }
      var on = {
        hidden: "Polaris-Labelled--hidden",
        LabelWrapper: "Polaris-Labelled__LabelWrapper",
        HelpText: "Polaris-Labelled__HelpText",
        Error: "Polaris-Labelled__Error",
        Action: "Polaris-Labelled__Action",
      };
      function sn(e) {
        let {
            id: t,
            label: n,
            error: a,
            action: i,
            helpText: o,
            children: s,
            labelHidden: c,
          } = e,
          u = Object(g.b)(e, [
            "id",
            "label",
            "error",
            "action",
            "helpText",
            "children",
            "labelHidden",
          ]);
        const d = Object(l.a)(c && on.hidden),
          p = i
            ? r.a.createElement(
                "div",
                { className: on.Action },
                Object(z.a)(i, { plain: !0 })
              )
            : null,
          h = o
            ? r.a.createElement("div", { className: on.HelpText, id: cn(t) }, o)
            : null,
          f =
            a &&
            "boolean" !== typeof a &&
            r.a.createElement(
              "div",
              { className: on.Error },
              r.a.createElement($t, { message: a, fieldID: t })
            ),
          b = n
            ? r.a.createElement(
                "div",
                { className: on.LabelWrapper },
                r.a.createElement(
                  rn,
                  Object.assign({ id: t }, u, { hidden: !1 }),
                  n
                ),
                p
              )
            : null;
        return r.a.createElement("div", { className: d }, b, s, f, h);
      }
      function cn(e) {
        return `${e}HelpText`;
      }
      var ln = {
        Connected: "Polaris-Connected",
        Item: "Polaris-Connected__Item",
        "Item-primary": "Polaris-Connected__Item--primary",
        "Item-focused": "Polaris-Connected__Item--focused",
      };
      function un({ children: e, position: t }) {
        const { value: n, setTrue: a, setFalse: i } = Object(ae.a)(!1),
          o = Object(l.a)(
            ln.Item,
            n && ln["Item-focused"],
            "primary" === t ? ln["Item-primary"] : ln["Item-connection"]
          );
        return r.a.createElement(
          "div",
          { onBlur: i, onFocus: a, className: o },
          e
        );
      }
      function dn({ children: e, left: t, right: n }) {
        const a = t ? r.a.createElement(un, { position: "left" }, t) : null,
          i = n ? r.a.createElement(un, { position: "right" }, n) : null;
        return r.a.createElement(
          "div",
          { className: ln.Connected },
          a,
          r.a.createElement(un, { position: "primary" }, e),
          i
        );
      }
      var pn = {
        TextField: "Polaris-TextField",
        multiline: "Polaris-TextField--multiline",
        Input: "Polaris-TextField__Input",
        hasValue: "Polaris-TextField--hasValue",
        focus: "Polaris-TextField--focus",
        Backdrop: "Polaris-TextField__Backdrop",
        error: "Polaris-TextField--error",
        readOnly: "Polaris-TextField--readOnly",
        disabled: "Polaris-TextField--disabled",
        Prefix: "Polaris-TextField__Prefix",
        "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
        "Input-suffixed": "Polaris-TextField__Input--suffixed",
        "Input-alignRight": "Polaris-TextField__Input--alignRight",
        "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
        "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
        Suffix: "Polaris-TextField__Suffix",
        CharacterCount: "Polaris-TextField__CharacterCount",
        AlignFieldBottom: "Polaris-TextField__AlignFieldBottom",
        ClearButton: "Polaris-TextField__ClearButton",
        "ClearButton-hidden": "Polaris-TextField__ClearButton--hidden",
        Spinner: "Polaris-TextField__Spinner",
        SpinnerIcon: "Polaris-TextField__SpinnerIcon",
        Resizer: "Polaris-TextField__Resizer",
        DummyInput: "Polaris-TextField__DummyInput",
        Segment: "Polaris-TextField__Segment",
      };
      function hn({
        contents: e,
        currentHeight: t = null,
        minimumLines: n,
        onHeightChange: a,
      }) {
        const o = Object(i.useRef)(null),
          s = Object(i.useRef)(null),
          c = Object(i.useRef)(),
          l = Object(i.useRef)(t);
        t !== l.current && (l.current = t),
          Object(i.useEffect)(
            () => () => {
              c.current && cancelAnimationFrame(c.current);
            },
            []
          );
        const u = n
            ? r.a.createElement("div", {
                ref: s,
                className: pn.DummyInput,
                dangerouslySetInnerHTML: { __html: gn(n) },
              })
            : null,
          d = Object(i.useCallback)(() => {
            c.current && cancelAnimationFrame(c.current),
              (c.current = requestAnimationFrame(() => {
                if (!o.current || !s.current) return;
                const e = Math.max(
                  o.current.offsetHeight,
                  s.current.offsetHeight
                );
                e !== l.current && a(e);
              }));
          }, [a]);
        return (
          Object(i.useLayoutEffect)(() => {
            d();
          }),
          r.a.createElement(
            "div",
            { "aria-hidden": !0, className: pn.Resizer },
            r.a.createElement(k.a, { event: "resize", handler: d }),
            r.a.createElement("div", {
              ref: o,
              className: pn.DummyInput,
              dangerouslySetInnerHTML: { __html: vn(e) },
            }),
            u
          )
        );
      }
      const fn = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "\n": "<br>",
          "\r": "",
        },
        bn = new RegExp(`[${Object.keys(fn).join()}]`, "g");
      function mn(e) {
        return fn[e];
      }
      function gn(e) {
        let t = "";
        for (let n = 0; n < e; n++) t += "<br>";
        return t;
      }
      function vn(e) {
        return e ? `${e.replace(bn, mn)}<br>` : "<br>";
      }
      var jn = n("D25i"),
        On = r.a.createElement(h.a, { source: jn.a }),
        yn = r.a.createElement(h.a, { source: u.a });
      function xn({ onChange: e, onClick: t, onMouseDown: n, onMouseUp: a }) {
        function i(t) {
          return () => e(t);
        }
        function o(e) {
          return (t) => {
            0 === t.button && n(e);
          };
        }
        return r.a.createElement(
          "div",
          { className: pn.Spinner, onClick: t, "aria-hidden": !0 },
          r.a.createElement(
            "div",
            {
              role: "button",
              className: pn.Segment,
              tabIndex: -1,
              onClick: i(1),
              onMouseDown: o(i(1)),
              onMouseUp: a,
            },
            r.a.createElement("div", { className: pn.SpinnerIcon }, On)
          ),
          r.a.createElement(
            "div",
            {
              role: "button",
              className: pn.Segment,
              tabIndex: -1,
              onClick: i(-1),
              onMouseDown: o(i(-1)),
              onMouseUp: a,
            },
            r.a.createElement("div", { className: pn.SpinnerIcon }, yn)
          )
        );
      }
      var En = r.a.createElement(h.a, {
        source: function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            tn
          );
        },
        color: "base",
      });
      function Pn({
        prefix: e,
        suffix: t,
        placeholder: n,
        value: a,
        helpText: o,
        label: s,
        labelAction: u,
        labelHidden: d,
        disabled: p,
        clearButton: h,
        readOnly: f,
        autoFocus: b,
        focused: m,
        multiline: v,
        error: j,
        connectedRight: O,
        connectedLeft: y,
        type: x,
        name: E,
        id: P,
        role: C,
        step: S,
        autoComplete: _,
        max: A,
        maxLength: k,
        min: w,
        minLength: N,
        pattern: I,
        inputMode: R,
        spellCheck: L,
        ariaOwns: M,
        ariaControls: D,
        ariaExpanded: F,
        ariaActiveDescendant: B,
        ariaAutocomplete: H,
        showCharacterCount: W,
        align: G,
        onClearButtonClick: U,
        onChange: z,
        onFocus: V,
        onBlur: $,
      }) {
        const q = Object(c.a)(),
          [K, J] = Object(i.useState)(null),
          [Y, X] = Object(i.useState)(Boolean(m)),
          Q = Object(T.a)(),
          Z = Object(Oe.a)("TextField", P),
          ee = Object(i.useRef)(null),
          te = Object(i.useRef)(null),
          ne = Object(i.useRef)(null),
          ae = Object(i.useRef)();
        Object(i.useEffect)(() => {
          const e = ee.current;
          e && void 0 !== m && (m ? e.focus() : e.blur());
        }, [m]);
        const ie = "string" === typeof a ? a : "",
          re = null != S ? S : 1,
          oe = null != A ? A : 1 / 0,
          se = null != w ? w : -1 / 0,
          ce = Object(l.a)(
            pn.TextField,
            Boolean(ie) && pn.hasValue,
            p && pn.disabled,
            f && pn.readOnly,
            j && pn.error,
            v && pn.multiline,
            Y && pn.focus
          ),
          ue = "currency" === x ? "text" : x,
          de = e
            ? r.a.createElement(
                "div",
                { className: pn.Prefix, id: `${Z}Prefix`, ref: te },
                e
              )
            : null,
          pe = t
            ? r.a.createElement(
                "div",
                { className: pn.Suffix, id: `${Z}Suffix`, ref: ne },
                t
              )
            : null;
        let he = null;
        if (W) {
          const e = ie.length,
            t = k
              ? q.translate("Polaris.TextField.characterCountWithMaxLength", {
                  count: e,
                  limit: k,
                })
              : q.translate("Polaris.TextField.characterCount", { count: e }),
            n = Object(l.a)(pn.CharacterCount, v && pn.AlignFieldBottom),
            a = k ? `${e}/${k}` : e;
          he = r.a.createElement(
            "div",
            {
              id: `${Z}CharacterCounter`,
              className: n,
              "aria-label": t,
              "aria-live": Y ? "polite" : "off",
              "aria-atomic": "true",
            },
            a
          );
        }
        const fe = "" !== ie,
          be = Object(l.a)(pn.ClearButton, !fe && pn["ClearButton-hidden"]),
          me = h
            ? r.a.createElement(
                "button",
                {
                  type: "button",
                  className: be,
                  onClick: function () {
                    U && U(Z);
                  },
                  disabled: p,
                  tabIndex: fe ? 0 : -1,
                },
                r.a.createElement(
                  le.a,
                  null,
                  q.translate("Polaris.Common.clear")
                ),
                En
              )
            : null,
          ge = Object(i.useCallback)(
            (e) => {
              if (null == z) return;
              const t = (e) => (e.toString().split(".")[1] || []).length,
                n = a ? parseFloat(a) : 0;
              if (isNaN(n)) return;
              const i = Math.max(t(n), t(re)),
                r = Math.min(Number(oe), Math.max(n + e * re, Number(se)));
              z(String(r.toFixed(i)), Z);
            },
            [Z, oe, se, z, re, a]
          ),
          ve = Object(i.useCallback)(() => {
            clearTimeout(ae.current);
          }, []),
          ye = Object(i.useCallback)(
            (e) => {
              let t = 200;
              const n = () => {
                t > 50 && (t -= 10),
                  e(0),
                  (ae.current = window.setTimeout(n, t));
              };
              (ae.current = window.setTimeout(n, t)),
                document.addEventListener("mouseup", ve, { once: !0 });
            },
            [ve]
          ),
          xe =
            "number" !== x || 0 === S || p || f
              ? null
              : r.a.createElement(xn, {
                  onChange: ge,
                  onMouseDown: ye,
                  onMouseUp: ve,
                }),
          Ee = v && K ? { height: K } : null,
          Pe = Object(i.useCallback)((e) => {
            J(e);
          }, []),
          Ce =
            v && Q
              ? r.a.createElement(hn, {
                  contents: ie || n,
                  currentHeight: K,
                  minimumLines: "number" === typeof v ? v : 1,
                  onHeightChange: Pe,
                })
              : null,
          Se = [];
        j && Se.push(`${Z}Error`),
          o && Se.push(cn(Z)),
          W && Se.push(`${Z}CharacterCounter`);
        const _e = [];
        e && _e.push(`${Z}Prefix`),
          t && _e.push(`${Z}Suffix`),
          _e.unshift(an(Z));
        const Ae = Object(l.a)(
            pn.Input,
            G && pn[Object(l.b)("Input-align", G)],
            t && pn["Input-suffixed"],
            h && pn["Input-hasClearButton"]
          ),
          ke = Object(i.createElement)(
            v ? "textarea" : "input",
            Object(g.a)(
              {
                name: E,
                id: Z,
                disabled: p,
                readOnly: f,
                role: C,
                autoFocus: b,
                value: ie,
                placeholder: n,
                onFocus: V,
                onBlur: $,
                onKeyPress: function (e) {
                  const { key: t, which: n } = e;
                  if (
                    "number" !== x ||
                    n === je.a.Enter ||
                    /[\d.eE+-]$/.test(t)
                  )
                    return;
                  e.preventDefault();
                },
                style: Ee,
                autoComplete: Cn(_),
                className: Ae,
                onChange: function (e) {
                  z && z(e.currentTarget.value, Z);
                },
                ref: ee,
                min: w,
                max: A,
                step: S,
                minLength: N,
                maxLength: k,
                spellCheck: L,
                pattern: I,
                inputMode: R,
                type: ue,
                "aria-describedby": Se.length ? Se.join(" ") : void 0,
                "aria-labelledby": _e.join(" "),
                "aria-invalid": Boolean(j),
                "aria-owns": M,
                "aria-activedescendant": B,
                "aria-autocomplete": H,
                "aria-controls": D,
                "aria-expanded": F,
              },
              (function (e) {
                return e && (Boolean(e) || e > 0)
                  ? { "aria-multiline": !0 }
                  : void 0;
              })(v)
            )
          ),
          Te = Object(l.a)(
            pn.Backdrop,
            y && pn["Backdrop-connectedLeft"],
            O && pn["Backdrop-connectedRight"]
          );
        return r.a.createElement(
          sn,
          { label: s, id: Z, error: j, action: u, labelHidden: d, helpText: o },
          r.a.createElement(
            dn,
            { left: y, right: O },
            r.a.createElement(
              "div",
              {
                className: ce,
                onFocus: function ({ target: e }) {
                  if (we(e)) return;
                  X(!0);
                },
                onBlur: function () {
                  X(!1);
                },
                onClick: function ({ target: e }) {
                  if (we(e)) return;
                  ee.current && ee.current.focus();
                },
              },
              de,
              ke,
              pe,
              he,
              me,
              xe,
              r.a.createElement("div", { className: Te }),
              Ce
            )
          )
        );
        function we(e) {
          return (
            e instanceof HTMLElement &&
            ((te.current && te.current.contains(e)) ||
              (ne.current && ne.current.contains(e)))
          );
        }
      }
      function Cn(e) {
        return !0 === e ? "on" : !1 === e || "off" === e ? "nope" : e;
      }
      var Sn = { PageActions: "Polaris-PageActions" };
      function _n({ primaryAction: e, secondaryActions: t }) {
        const n = e ? Object(z.b)(e, { primary: !0 }) : null,
          a = t ? r.a.createElement(q.a, null, Object(z.b)(t)) : null,
          i = a ? "equalSpacing" : "trailing";
        return r.a.createElement(
          "div",
          { className: Sn.PageActions },
          r.a.createElement(ot.a, { distribution: i, spacing: "tight" }, a, n)
        );
      }
      const An = Object(i.memo)(function () {
        const { startLoading: e, stopLoading: t } = bt();
        return (
          Object(i.useEffect)(
            () => (
              e(),
              () => {
                t();
              }
            ),
            [e, t]
          ),
          null
        );
      });
      var kn = n("p7gN");
      function Tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tn(Object(n), !0).forEach(function (t) {
                Object(pt.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Nn = function (e) {
          function t(e, t) {
            return e.slice(0, t).concat(e.slice(t + 1));
          }
          var n = Object(i.useState)(""),
            r = n[0],
            o = n[1],
            c = Object(i.useState)(!1),
            l = c[0],
            u = c[1],
            d = Object(i.useCallback)(function (e) {
              return u(e);
            }, []),
            p = Object(i.useCallback)(function (e) {
              return o(e);
            }, []),
            h = Object(i.useState)(!1),
            b = h[0],
            m = h[1],
            g = Object(i.useState)(!1),
            v = g[0],
            j = g[1],
            O = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
            y = O[0],
            x = O[1],
            E = y.isOpen
              ? Object(a.jsx)(mt, {
                  content: y.msg,
                  onDismiss: function () {
                    return x({ isOpen: !1, msg: "", isErr: !1 });
                  },
                  error: !!y.isErr,
                })
              : null,
            P = Object(i.useState)([]),
            C = P[0],
            S = P[1],
            _ = Object(i.useState)([]),
            A = _[0],
            k = _[1];
          function T() {
            m(!0),
              B.k()
                .then(function (e) {
                  if ((m(!1), e.data && "success" === e.data.status)) {
                    if (e.data.data) {
                      var t = e.data.data,
                        n = t.collections,
                        a = t.productIds,
                        i = t.tags,
                        r = t.productTypes,
                        s = t.byPrice,
                        c = t.applyByPrice;
                      n && Array.isArray(n) && de(n),
                        a && Array.isArray(a) && re(a),
                        i && Array.isArray(i) && M(i),
                        r && Array.isArray(r) && J(r),
                        c && s && o(String(s)),
                        u(!!c);
                    }
                  } else x({ isOpen: !0, msg: "Get product details error !", isErr: !0 });
                })
                .catch(function (e) {
                  m(!1),
                    x({
                      isOpen: !0,
                      msg: "Get product details error !",
                      isErr: !0,
                    }),
                    console.log("Error: ", e);
                });
          }
          Object(i.useEffect)(function () {
            m(!0),
              j(!0),
              B.r()
                .then(function (e) {
                  if (
                    (m(!1),
                    e.data &&
                      e.data.data &&
                      e.data.data.edges &&
                      Array.isArray(e.data.data.edges) &&
                      e.data.data.edges.length > 0)
                  ) {
                    var t = e.data.data.edges.map(function (e) {
                      return { label: e.node, value: e.node };
                    });
                    S(t);
                  }
                })
                .catch(function (e) {
                  m(!1),
                    x({ isOpen: !0, msg: "Get tags error !", isErr: !0 }),
                    console.log("Error: ", e);
                }),
              B.s()
                .then(function (e) {
                  if (
                    (j(!1),
                    e.data &&
                      e.data.data &&
                      e.data.data.edges &&
                      Array.isArray(e.data.data.edges) &&
                      e.data.data.edges.length > 0)
                  ) {
                    var t = e.data.data.edges.map(function (e) {
                      return { label: e.node, value: e.node };
                    });
                    k(t);
                  }
                })
                .catch(function (e) {
                  j(!1),
                    x({ isOpen: !0, msg: "Get types error !", isErr: !0 }),
                    console.log("Error: ", e);
                });
          }, []),
            Object(i.useEffect)(function () {
              T();
            }, []);
          var w = Object(i.useState)(!1),
            N = w[0],
            I = w[1],
            R = Object(i.useState)([]),
            L = R[0],
            M = R[1],
            D = Object(i.useCallback)(function () {
              return I(function (e) {
                return !e;
              });
            }, []),
            F = Object(a.jsx)(K.a, {
              onClick: D,
              disclosure: !0,
              children: "Product Tags",
            });
          function H(e) {
            var n = t(L, e);
            M(n);
          }
          var W =
              L &&
              Array.isArray(L) &&
              L.length > 0 &&
              L.map(function (e, t) {
                return Object(a.jsx)(
                  "div",
                  {
                    className: "custom-tag",
                    children: Object(a.jsx)(jt, {
                      onRemove: function () {
                        return H(t);
                      },
                      children: e,
                    }),
                  },
                  t
                );
              }),
            G = Object(i.useState)(!1),
            z = G[0],
            V = G[1],
            $ = Object(i.useState)([]),
            q = $[0],
            J = $[1],
            Y = Object(i.useCallback)(function () {
              return V(function (e) {
                return !e;
              });
            }, []),
            X = Object(a.jsx)(K.a, {
              onClick: Y,
              disclosure: !0,
              children: "Product Types",
            });
          function Q(e) {
            var n = t(q, e);
            J(n);
          }
          var Z =
              q &&
              Array.isArray(q) &&
              q.length > 0 &&
              q.map(function (e, t) {
                return Object(a.jsx)(
                  "div",
                  {
                    className: "custom-tag",
                    children: Object(a.jsx)(jt, {
                      onRemove: function () {
                        return Q(t);
                      },
                      children: e,
                    }),
                  },
                  t
                );
              }),
            ee = Object(i.useState)(!1),
            te = ee[0],
            ne = ee[1],
            ae = Object(i.useState)([]),
            ie = ae[0],
            re = ae[1];
          ie &&
            ie.selection &&
            Array.isArray(ie.selection) &&
            ie.selection.length > 0 &&
            ie.selection.map(function (e, n) {
              return Object(a.jsx)(
                "div",
                {
                  className: "custom-tag",
                  children: Object(a.jsx)(jt, {
                    onRemove: function () {
                      return (function (e) {
                        if (e > -1) {
                          var n = t(ie.selection, e);
                          re(wn(wn({}, ie), {}, { selection: n }));
                        }
                      })(n);
                    },
                    children: e.title,
                  }),
                },
                n
              );
            });
          var oe = Object(i.useState)(!1),
            se = oe[0],
            ce = oe[1],
            le = Object(i.useState)([]),
            ue = le[0],
            de = le[1];
          return (
            ue &&
              ue.selection &&
              Array.isArray(ue.selection) &&
              ue.selection.length > 0 &&
              ue.selection.map(function (e, n) {
                return Object(a.jsx)(
                  "div",
                  {
                    className: "custom-tag",
                    children: Object(a.jsx)(jt, {
                      onRemove: function () {
                        return (function (e) {
                          if (e > -1) {
                            var n = t(ue.selection, e);
                            de(wn(wn({}, ue), {}, { selection: n }));
                          }
                        })(n);
                      },
                      children: e.title,
                    }),
                  },
                  n
                );
              }),
            Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)("div", {
                  className: "Polaris-Header-Title heading-mar",
                  children: "Add FitKit",
                }),
                Object(a.jsxs)(Pt, {
                  children: [
                    Object(a.jsx)(Pt.Section, {
                      oneHalf: !0,
                      children: Object(a.jsxs)(dt, {
                        sectioned: !0,
                        children: [
                          Object(a.jsx)(U.a, {
                            variation: "strong",
                            children: "Select product to add FitKit",
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(K.a, {
                            onClick: function () {
                              return ne(!0);
                            },
                            children: "Choose Product",
                          }),
                          Object(a.jsx)("br", {}),
                          te &&
                            Object(a.jsx)(kn.ResourcePicker, {
                              resourceType: "Product",
                              open: !0,
                              onSelection: function (e) {
                                !(function (e) {
                                  var t =
                                    e.selection &&
                                    Array.isArray(e.selection) &&
                                    e.selection.length > 0
                                      ? e.selection.map(function (e) {
                                          return e.id;
                                        })
                                      : [];
                                  x({
                                    isOpen: !0,
                                    msg: "Click on save to update products.",
                                    isErr: !1,
                                  }),
                                    re(t),
                                    ne(!1);
                                })(e);
                              },
                              showVariants: !1,
                              allowMultiple: !0,
                              onCancel: function () {
                                return ne(!1);
                              },
                              initialSelectionIds:
                                ie && Array.isArray(ie) && ie.length > 0
                                  ? ie.map(function (e) {
                                      return { id: e };
                                    })
                                  : [],
                            }),
                        ],
                      }),
                    }),
                    Object(a.jsx)(Pt.Section, {
                      oneHalf: !0,
                      children: Object(a.jsxs)(dt, {
                        sectioned: !0,
                        children: [
                          Object(a.jsx)(U.a, {
                            variation: "strong",
                            children: "Select collection to add FitKit",
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(K.a, {
                            onClick: function () {
                              return ce(!0);
                            },
                            children: "Choose Collection",
                          }),
                          Object(a.jsx)("br", {}),
                          se &&
                            Object(a.jsx)(kn.ResourcePicker, {
                              resourceType: "Collection",
                              open: !0,
                              onSelection: function (e) {
                                !(function (e) {
                                  var t =
                                    e.selection &&
                                    Array.isArray(e.selection) &&
                                    e.selection.length > 0
                                      ? e.selection.map(function (e) {
                                          return e.id;
                                        })
                                      : [];
                                  x({
                                    isOpen: !0,
                                    msg: "click on save to update collection.",
                                    isErr: !1,
                                  }),
                                    de(t),
                                    ce(!1);
                                })(e);
                              },
                              showVariants: !1,
                              allowMultiple: !0,
                              onCancel: function () {
                                return ce(!1);
                              },
                              initialSelectionIds:
                                ue && Array.isArray(ue) && ue.length > 0
                                  ? ue.map(function (e) {
                                      return { id: e };
                                    })
                                  : [],
                            }),
                        ],
                      }),
                    }),
                    Object(a.jsx)(Pt.Section, {
                      children: Object(a.jsxs)(dt, {
                        sectioned: !0,
                        children: [
                          Object(a.jsx)(U.a, {
                            variation: "strong",
                            children: "Assign FitKit product tag wise",
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(f.a, {
                            active: N,
                            activator: F,
                            onClose: D,
                            children: Object(a.jsx)(Mt, {
                              title: "Manage Fitkit product tag wise",
                              onChange: M,
                              options: C,
                              selected: L,
                              allowMultiple: !0,
                            }),
                          }),
                          W && W,
                        ],
                      }),
                    }),
                    Object(a.jsx)(Pt.Section, {
                      children: Object(a.jsxs)(dt, {
                        sectioned: !0,
                        children: [
                          Object(a.jsx)(U.a, {
                            variation: "strong",
                            children: "Assign FitKit product type wise",
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(f.a, {
                            active: z,
                            activator: X,
                            onClose: Y,
                            children: Object(a.jsx)(Mt, {
                              title: "Manage Fitkit product type wise",
                              onChange: J,
                              options: A,
                              selected: q,
                              allowMultiple: !0,
                            }),
                          }),
                          Z && Z,
                        ],
                      }),
                    }),
                    Object(a.jsx)(Pt.Section, {
                      children: Object(a.jsxs)(dt, {
                        sectioned: !0,
                        children: [
                          Object(a.jsx)(U.a, {
                            variation: "strong",
                            children: "Apply widget by price",
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(Qt, {
                            label: "Filter by price?",
                            checked: l,
                            onChange: d,
                            helpText:
                              "Show the selected options if the price above (X).",
                          }),
                          " ",
                          l &&
                            Object(a.jsx)(Pn, {
                              type: "number",
                              value: r,
                              onChange: p,
                            }),
                        ],
                      }),
                    }),
                    Object(a.jsxs)(Pt.Section, {
                      children: [
                        Object(a.jsx)("div", {
                          className: "action-btns",
                          children: Object(a.jsx)(_n, {
                            primaryAction: {
                              disabled: b || v,
                              content: "Save",
                              onAction: function () {
                                m(!0);
                                var e = {
                                  collections: ue && ue,
                                  productIds: ie && ie,
                                  tags: L && L,
                                  productTypes: q && q,
                                  applyByPrice: l,
                                  byPrice: r,
                                };
                                B.a(e)
                                  .then(function (e) {
                                    m(!1),
                                      e && e.data && "success" === e.data.status
                                        ? (x({
                                            isOpen: !0,
                                            msg: "Successfully saved.",
                                            isErr: !1,
                                          }),
                                          T())
                                        : x({
                                            isOpen: !0,
                                            msg:
                                              "Something went wrong! Please try again.",
                                            isErr: !0,
                                          });
                                  })
                                  .catch(function (e) {
                                    x({
                                      isOpen: !0,
                                      msg:
                                        "Something went wrong! Please try again.",
                                      isErr: !0,
                                    }),
                                      m(!1),
                                      console.log("Error", e);
                                  });
                              },
                            },
                            secondaryActions: [
                              {
                                content: "Cancel",
                                destructive: !0,
                                onAction: T,
                              },
                            ],
                          }),
                        }),
                        Object(a.jsxs)(s.a, {
                          children: [(b || v) && Object(a.jsx)(An, {}), E],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        In = n("/MKj");
      n("EUEk");
      var Rn = function (e) {
          Object(In.b)();
          var t = Object(i.useState)(!0),
            n = t[0],
            r = t[1];
          return (
            Object(i.useEffect)(function () {
              B.j()
                .then(function (e) {
                  if (e && e.data && e.data.data && e.data.data.shopStatus) {
                    var t = e.data.data.shopStatus.isAppEnable;
                    r(!!t);
                  } else r(!1);
                })
                .catch(function (e) {
                  console.log("ERROR: ", e);
                });
            }, []),
            Object(In.c)(function (e) {
              return e.allReducer.page_info;
            }),
            Object(a.jsxs)(He, {
              children: [
                !1 === n &&
                  Object(a.jsxs)(a.Fragment, {
                    children: [
                      Object(a.jsx)(at, {
                        title: "Current app status is disabled.",
                        status: "critical",
                        children: Object(a.jsx)("p", {
                          children:
                            "To enable it go to app settings, Click on Enable button.",
                        }),
                      }),
                      Object(a.jsx)("br", {}),
                    ],
                  }),
                Object(a.jsx)("div", { children: Object(a.jsx)(Nn, {}) }),
              ],
            })
          );
        },
        Ln = {
          SettingAction: "Polaris-SettingAction",
          Setting: "Polaris-SettingAction__Setting",
          Action: "Polaris-SettingAction__Action",
        };
      function Mn({ action: e, children: t }) {
        return r.a.createElement(
          "div",
          { className: Ln.SettingAction },
          r.a.createElement("div", { className: Ln.Setting }, t),
          r.a.createElement("div", { className: Ln.Action }, e)
        );
      }
      function Dn({ enabled: e, action: t, children: n }) {
        const a = t ? Object(z.a)(t, { primary: !e }) : null;
        return r.a.createElement(
          dt,
          { sectioned: !0 },
          r.a.createElement(Mn, { action: a }, n)
        );
      }
      var Fn = n("rzqd");
      function Bn(e, t, n) {
        return e < t ? t : e > n ? n : e;
      }
      function Hn(e, t) {
        const n = Number(`${e}e${t}`),
          a = Math.round(n);
        return Number(`${a}e-${t}`);
      }
      function Wn(e) {
        const { red: t, green: n, blue: a } = e;
        return "alpha" in e
          ? `rgba(${t}, ${n}, ${a}, ${e.alpha})`
          : `rgb(${t}, ${n}, ${a})`;
      }
      function Gn(e) {
        const t = e.toString(16);
        return 1 === t.length ? `0${t}` : t;
      }
      function Un(e) {
        return (function ({ red: e, green: t, blue: n }) {
          return `#${Gn(e)}${Gn(t)}${Gn(n)}`;
        })(Vn(e));
      }
      function zn(e, t) {
        const n = e / 60,
          a = t * (1 - Math.abs((n % 2) - 1));
        let i = 0,
          r = 0,
          o = 0;
        return (
          n >= 0 && n <= 1 && ((i = t), (r = a), (o = 0)),
          n >= 1 && n <= 2 && ((i = a), (r = t), (o = 0)),
          n >= 2 && n <= 3 && ((i = 0), (r = t), (o = a)),
          n >= 3 && n <= 4 && ((i = 0), (r = a), (o = t)),
          n >= 4 && n <= 5 && ((i = a), (r = 0), (o = t)),
          n >= 5 && n <= 6 && ((i = t), (r = 0), (o = a)),
          { red: i, green: r, blue: o }
        );
      }
      function Vn(e) {
        const { hue: t, saturation: n, brightness: a, alpha: i = 1 } = e,
          r = a * n;
        let { red: o, green: s, blue: c } = zn(t, r);
        const l = a - r;
        return (
          (o += l),
          (s += l),
          (c += l),
          {
            red: Math.round(255 * o),
            green: Math.round(255 * s),
            blue: Math.round(255 * c),
            alpha: i,
          }
        );
      }
      function $n(e, t = "b") {
        const { alpha: n = 1 } = e,
          a = e.red / 255,
          i = e.green / 255,
          r = e.blue / 255,
          o = Math.max(a, i, r),
          s = Math.min(a, i, r),
          c = o - s,
          l = (o + s) / 2;
        let u = 0;
        if (0 === o) u = 0;
        else if ("b" === t) u = c / o;
        else if ("l" === t) {
          const e = l > 0.5 ? c / (2 - o - s) : c / (o + s);
          u = isNaN(e) ? 0 : e;
        }
        let d = 0;
        switch (o) {
          case a:
            d = (i - r) / c + (i < r ? 6 : 0);
            break;
          case i:
            d = (r - a) / c + 2;
            break;
          case r:
            d = (a - i) / c + 4;
        }
        const p = Bn((d / 6) * 360, 0, 360);
        return {
          hue: p ? Hn(p, 2) : 0,
          saturation: Hn(Bn(u, 0, 1), 4),
          brightness: Hn(Bn(o, 0, 1), 4),
          lightness: Hn(l, 4),
          alpha: Hn(n, 4),
        };
      }
      function qn(e) {
        const { hue: t, saturation: n, brightness: a, alpha: i = 1 } = $n(
          e,
          "b"
        );
        return { hue: t, saturation: n, brightness: a, alpha: i };
      }
      function Kn({
        acceptCharset: e,
        action: t,
        autoComplete: n,
        children: a,
        encType: o,
        implicitSubmit: s = !0,
        method: l = "post",
        name: u,
        noValidate: d,
        preventDefault: p = !0,
        target: h,
        onSubmit: f,
      }) {
        const b = Object(c.a)(),
          m = Object(i.useCallback)(
            (e) => {
              p && (e.preventDefault(), f(e));
            },
            [f, p]
          ),
          g = (function (e) {
            if (null == e) return e;
            return e ? "on" : "off";
          })(n),
          v = s
            ? r.a.createElement(
                le.a,
                null,
                r.a.createElement(
                  "button",
                  { type: "submit", "aria-hidden": "true", tabIndex: -1 },
                  b.translate("Polaris.Common.submit")
                )
              )
            : null;
        return r.a.createElement(
          "form",
          {
            acceptCharset: e,
            action: t,
            autoComplete: g,
            encType: o,
            method: l,
            name: u,
            noValidate: d,
            target: h,
            onSubmit: m,
          },
          a,
          v
        );
      }
      var Jn = {
        FormLayout: "Polaris-FormLayout",
        Title: "Polaris-FormLayout__Title",
        Items: "Polaris-FormLayout__Items",
        HelpText: "Polaris-FormLayout__HelpText",
        Item: "Polaris-FormLayout__Item",
        grouped: "Polaris-FormLayout--grouped",
        condensed: "Polaris-FormLayout--condensed",
      };
      function Yn(e) {
        return r.a.createElement("div", { className: Jn.Item }, e.children);
      }
      function Xn({ children: e, condensed: t, title: n, helpText: a }) {
        const o = Object(l.a)(t ? Jn.condensed : Jn.grouped),
          s = Object(Oe.a)("FormLayoutGroup");
        let c,
          u,
          d = null,
          p = null;
        a &&
          ((c = `${s}HelpText`),
          (d = r.a.createElement("div", { id: c, className: Jn.HelpText }, a))),
          n &&
            ((u = `${s}Title`),
            (p = r.a.createElement("div", { id: u, className: Jn.Title }, n)));
        const h = i.Children.map(e, (e) => Object(G.e)(e, Yn, {}));
        return r.a.createElement(
          "div",
          {
            role: "group",
            className: o,
            "aria-labelledby": u,
            "aria-describedby": c,
          },
          p,
          r.a.createElement("div", { className: Jn.Items }, h),
          d
        );
      }
      const Qn = Object(i.memo)(function ({ children: e }) {
        return r.a.createElement(
          "div",
          { className: Jn.FormLayout },
          i.Children.map(e, Zn)
        );
      });
      function Zn(e, t) {
        if (Object(G.d)(e, Xn)) return e;
        const n = { key: t };
        return Object(G.e)(e, Yn, n);
      }
      Qn.Group = Xn;
      var ea = {
          ColorPicker: "Polaris-ColorPicker",
          MainColor: "Polaris-ColorPicker__MainColor",
          Dragger: "Polaris-ColorPicker__Dragger",
          ColorLayer: "Polaris-ColorPicker__ColorLayer",
          HuePicker: "Polaris-ColorPicker__HuePicker",
          AlphaPicker: "Polaris-ColorPicker__AlphaPicker",
          Slidable: "Polaris-ColorPicker__Slidable",
        },
        ta = n("eMRj");
      let na = !1;
      ta.a ||
        window.addEventListener(
          "touchmove",
          (e) => {
            na && e.preventDefault();
          },
          { passive: !1 }
        );
      class aa extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = { dragging: !1 }),
            (this.node = null),
            (this.draggerNode = null),
            (this.setDraggerNode = (e) => {
              this.draggerNode = e;
            }),
            (this.setNode = (e) => {
              this.node = e;
            }),
            (this.startDrag = (e) => {
              (function (e) {
                return "mousedown" === e.type;
              })(e) && this.handleDraggerMove(e.clientX, e.clientY),
                (na = !0),
                this.setState({ dragging: !0 });
            }),
            (this.handleDragEnd = () => {
              (na = !1), this.setState({ dragging: !1 });
            }),
            (this.handleMove = (e) => {
              e.stopImmediatePropagation(),
                e.stopPropagation(),
                e.cancelable && e.preventDefault(),
                (function (e) {
                  return "mousemove" === e.type;
                })(e)
                  ? this.handleDraggerMove(e.clientX, e.clientY)
                  : this.handleDraggerMove(
                      e.touches[0].clientX,
                      e.touches[0].clientY
                    );
            }),
            (this.handleDraggerMove = (e, t) => {
              if (null == this.node) return;
              const { onChange: n } = this.props,
                a = this.node.getBoundingClientRect();
              n({ x: e - a.left, y: t - a.top });
            });
        }
        componentDidMount() {
          const { onDraggerHeight: e } = this.props;
          if (null == e) return;
          const { draggerNode: t } = this;
          null != t && e(t.clientWidth);
        }
        render() {
          const { dragging: e } = this.state,
            { draggerX: t = 0, draggerY: n = 0 } = this.props,
            a = { transform: `translate3d(${t}px, ${n}px, 0)` },
            i = e
              ? r.a.createElement(k.a, {
                  event: "mousemove",
                  handler: this.handleMove,
                  passive: !1,
                })
              : null,
            o = e
              ? r.a.createElement(k.a, {
                  event: "touchmove",
                  handler: this.handleMove,
                  passive: !1,
                })
              : null,
            s = e
              ? r.a.createElement(k.a, {
                  event: "mouseup",
                  handler: this.handleDragEnd,
                })
              : null,
            c = e
              ? r.a.createElement(k.a, {
                  event: "touchend",
                  handler: this.handleDragEnd,
                })
              : null,
            l = e
              ? r.a.createElement(k.a, {
                  event: "touchcancel",
                  handler: this.handleDragEnd,
                })
              : null;
          return r.a.createElement(
            "div",
            {
              ref: this.setNode,
              className: ea.Slidable,
              onMouseDown: this.startDrag,
              onTouchStart: this.startDrag,
            },
            s,
            i,
            o,
            c,
            l,
            r.a.createElement("div", {
              style: a,
              className: ea.Dragger,
              ref: this.setDraggerNode,
            })
          );
        }
      }
      const ia = 13;
      function ra(e, t, n) {
        const a = (function (e, t, n) {
          return Bn((1 - e) * (t - (n + ia)) + ia, 0, t - n);
        })(e, t, n);
        return Bn(a, 0, t);
      }
      function oa(e, t) {
        return (function (e, t) {
          return Bn(1 - (e - ia) / (t - 26), 0, 1);
        })(Bn(e, 0, t), t);
      }
      class sa extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = { sliderHeight: 0, draggerHeight: 0 }),
            (this.setSliderHeight = (e) => {
              null != e && this.setState({ sliderHeight: e.clientHeight });
            }),
            (this.setDraggerHeight = (e) => {
              this.setState({ draggerHeight: e });
            }),
            (this.handleChange = ({ y: e }) => {
              const { onChange: t } = this.props,
                { sliderHeight: n } = this.state;
              t(oa(e, n));
            });
        }
        render() {
          const { color: e, alpha: t } = this.props,
            { sliderHeight: n, draggerHeight: a } = this.state,
            i = ra(t, n, a),
            o = (function (e) {
              const { red: t, green: n, blue: a } = Vn(e),
                i = `${t}, ${n}, ${a}`;
              return `linear-gradient(to top, rgba(${i}, 0) 18px, rgba(${i}, 1) calc(100% - 18px))`;
            })(e);
          return r.a.createElement(
            "div",
            { className: ea.AlphaPicker, ref: this.setSliderHeight },
            r.a.createElement("div", {
              className: ea.ColorLayer,
              style: { background: o },
            }),
            r.a.createElement(aa, {
              draggerY: i,
              draggerX: 0,
              onChange: this.handleChange,
              onDraggerHeight: this.setDraggerHeight,
            })
          );
        }
      }
      const ca = 13;
      function la(e, t, n) {
        const a = (function (e, t, n) {
          return Bn((e / 360) * (t - (n + ca)) + ca, 0, t - n);
        })(e, t, n);
        return Bn(a, 0, t);
      }
      function ua(e, t) {
        return (function (e, t) {
          return Bn(((e - ca) / (t - 26)) * 360, 0, 360);
        })(Bn(e, 0, t), t);
      }
      class da extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = { sliderHeight: 0, draggerHeight: 0 }),
            (this.setSliderHeight = (e) => {
              null != e && this.setState({ sliderHeight: e.clientHeight });
            }),
            (this.setDraggerHeight = (e) => {
              this.setState({ draggerHeight: e });
            }),
            (this.handleChange = ({ y: e }) => {
              const { onChange: t } = this.props,
                { sliderHeight: n } = this.state;
              t(ua(e, n));
            });
        }
        render() {
          const { hue: e } = this.props,
            { sliderHeight: t, draggerHeight: n } = this.state,
            a = la(e, t, n);
          return r.a.createElement(
            "div",
            { className: ea.HuePicker, ref: this.setSliderHeight },
            r.a.createElement(aa, {
              draggerY: a,
              draggerX: 0,
              onChange: this.handleChange,
              onDraggerHeight: this.setDraggerHeight,
            })
          );
        }
      }
      class pa extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = { pickerSize: 0 }),
            (this.colorNode = null),
            (this.setColorNode = (e) => {
              this.colorNode = e;
            }),
            (this.handleHueChange = (e) => {
              const {
                color: { brightness: t, saturation: n, alpha: a = 1 },
                onChange: i,
              } = this.props;
              i({ hue: e, brightness: t, saturation: n, alpha: a });
            }),
            (this.handleAlphaChange = (e) => {
              const {
                color: { hue: t, brightness: n, saturation: a },
                onChange: i,
              } = this.props;
              i({ hue: t, brightness: n, saturation: a, alpha: e });
            }),
            (this.handleDraggerMove = ({ x: e, y: t }) => {
              const { pickerSize: n } = this.state,
                {
                  color: { hue: a, alpha: i = 1 },
                  onChange: r,
                } = this.props;
              r({
                hue: a,
                saturation: Bn(e / n, 0, 1),
                brightness: Bn(1 - t / n, 0, 1),
                alpha: i,
              });
            }),
            (this.handlePickerDrag = (e) => {
              e.preventDefault();
            });
        }
        componentDidMount() {
          const { colorNode: e } = this;
          null != e && this.setState({ pickerSize: e.clientWidth });
        }
        render() {
          const { id: e, color: t, allowAlpha: n } = this.props,
            { hue: a, saturation: i, brightness: o, alpha: s } = t,
            { pickerSize: c } = this.state,
            l = null != s && n ? s : 1,
            { red: u, green: d, blue: p } = Vn({
              hue: a,
              saturation: 1,
              brightness: 1,
            }),
            h = `rgba(${u}, ${d}, ${p}, ${l})`,
            f = Bn(i * c, 0, c),
            b = Bn(c - o * c, 0, c),
            m = n
              ? r.a.createElement(sa, {
                  alpha: l,
                  color: t,
                  onChange: this.handleAlphaChange,
                })
              : null;
          return r.a.createElement(
            "div",
            {
              className: ea.ColorPicker,
              id: e,
              onMouseDown: this.handlePickerDrag,
            },
            r.a.createElement(
              "div",
              { ref: this.setColorNode, className: ea.MainColor },
              r.a.createElement("div", {
                className: ea.ColorLayer,
                style: { backgroundColor: h },
              }),
              r.a.createElement(aa, {
                onChange: this.handleDraggerMove,
                draggerX: f,
                draggerY: b,
              })
            ),
            r.a.createElement(da, { hue: a, onChange: this.handleHueChange }),
            m
          );
        }
      }
      var ha = n("SFrf"),
        fa = {
          Select: "Polaris-Select",
          disabled: "Polaris-Select--disabled",
          Content: "Polaris-Select__Content",
          InlineLabel: "Polaris-Select__InlineLabel",
          Icon: "Polaris-Select__Icon",
          Backdrop: "Polaris-Select__Backdrop",
          placeholder: "Polaris-Select--placeholder",
          error: "Polaris-Select--error",
          Input: "Polaris-Select__Input",
          SelectedOption: "Polaris-Select__SelectedOption",
          Prefix: "Polaris-Select__Prefix",
          hover: "Polaris-Select--hover",
        };
      var ba = r.a.createElement(h.a, { source: ha.a });
      function ma({
        options: e,
        label: t,
        labelAction: n,
        labelHidden: a,
        labelInline: i,
        disabled: o,
        helpText: s,
        placeholder: c,
        id: u,
        name: d,
        value: p = "",
        error: h,
        onChange: f,
        onFocus: b,
        onBlur: m,
      }) {
        const g = Object(Oe.a)("Select", u),
          v = !!i || a,
          j = Object(l.a)(fa.Select, h && fa.error, o && fa.disabled),
          O = f ? (e) => f(e.currentTarget.value, g) : void 0,
          y = [];
        s && y.push(cn(g)), h && y.push(`${g}Error`);
        let x = (e || []).map(Oa);
        c && (x = [{ label: c, value: "", disabled: !0 }, ...x]);
        const E =
            i && r.a.createElement("span", { className: fa.InlineLabel }, t),
          P = (function (e, t) {
            const n = (function (e) {
              let t = [];
              return (
                e.forEach((e) => {
                  va(e) ? (t = t.concat(e.options)) : t.push(e);
                }),
                t
              );
            })(e);
            let a = n.find((e) => t === e.value);
            void 0 === a && (a = n.find((e) => !e.hidden));
            return a || { value: "", label: "" };
          })(x, p),
          C =
            P.prefix &&
            r.a.createElement("div", { className: fa.Prefix }, P.prefix),
          S = r.a.createElement(
            "div",
            { className: fa.Content, "aria-hidden": !0, "aria-disabled": o },
            E,
            C,
            r.a.createElement(
              "span",
              { className: fa.SelectedOption },
              P.label
            ),
            r.a.createElement("span", { className: fa.Icon }, ba)
          ),
          _ = x.map(xa);
        return r.a.createElement(
          sn,
          { id: g, label: t, error: h, action: n, labelHidden: v, helpText: s },
          r.a.createElement(
            "div",
            { className: j },
            r.a.createElement(
              "select",
              {
                id: g,
                name: d,
                value: p,
                className: fa.Input,
                disabled: o,
                onFocus: b,
                onBlur: m,
                onChange: O,
                "aria-invalid": Boolean(h),
                "aria-describedby": y.length ? y.join(" ") : void 0,
              },
              _
            ),
            S,
            r.a.createElement("div", { className: fa.Backdrop })
          )
        );
      }
      function ga(e) {
        return "string" === typeof e;
      }
      function va(e) {
        return "object" === typeof e && "options" in e && null != e.options;
      }
      function ja(e) {
        return { label: e, value: e };
      }
      function Oa(e) {
        if (ga(e)) return ja(e);
        if (va(e)) {
          const { title: t, options: n } = e;
          return { title: t, options: n.map((e) => (ga(e) ? ja(e) : e)) };
        }
        return e;
      }
      function ya(e) {
        const { value: t, label: n, prefix: a } = e,
          i = Object(g.b)(e, ["value", "label", "prefix"]);
        return r.a.createElement(
          "option",
          Object.assign({ key: t, value: t }, i),
          n
        );
      }
      function xa(e) {
        if (va(e)) {
          const { title: t, options: n } = e;
          return r.a.createElement("optgroup", { label: t, key: t }, n.map(ya));
        }
        return ya(e);
      }
      var Ea = function (e) {
          var t = Object(i.useState)(!1),
            n = t[0],
            r = t[1],
            o = Object(i.useState)(!1),
            s = o[0],
            c = o[1],
            l = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
            u = l[0],
            d = l[1],
            p = u.isOpen
              ? Object(a.jsx)(mt, {
                  content: u.msg,
                  onDismiss: function () {
                    return d({ isOpen: !1, msg: "", isErr: !1 });
                  },
                  error: !!u.isErr,
                })
              : null,
            h = Object(i.useState)("option1"),
            b = (h[0], h[1]),
            m =
              (Object(i.useCallback)(function (e, t) {
                return b(t);
              }, []),
              Object(i.useState)("16")),
            g = m[0],
            v = m[1],
            j = Object(i.useState)("16"),
            O = j[0],
            y = j[1],
            x = Object(i.useState)(!1),
            E = x[0],
            P = x[1],
            C = Object(i.useState)(!1),
            S = C[0],
            _ = C[1],
            A = Object(i.useState)(!1),
            k = A[0],
            T = A[1],
            w = Object(i.useCallback)(function () {
              return P(function (e) {
                return !e;
              });
            }, []),
            N = Object(i.useCallback)(function () {
              return _(function (e) {
                return !e;
              });
            }, []),
            I = Object(i.useCallback)(function () {
              return T(function (e) {
                return !e;
              });
            }, []),
            R = Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 }),
            L = R[0],
            M = R[1],
            D = Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 }),
            F = D[0],
            H = D[1],
            W = Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 }),
            G = W[0],
            z = W[1],
            V = Wn(Vn(G)),
            $ = Wn(Vn(L)),
            q = Wn(Vn(F)),
            J = Object(i.useState)(""),
            Y = J[0],
            X = J[1],
            Q = Object(i.useCallback)(function (e) {
              return X(e);
            }, []),
            Z = Object(i.useState)(Un(L)),
            ee = Z[0],
            te = Z[1],
            ne = Object(i.useState)(Un(F)),
            ae = ne[0],
            ie = ne[1],
            re = Object(i.useState)(Un(G)),
            oe = re[0],
            se = re[1],
            ce = function (e) {
              if (
                "#" === e.charAt(0) &&
                e.length <= 7 &&
                (te(e), 7 === e.length)
              ) {
                var t = qn(de(e));
                M(t);
              }
            },
            le = function (e) {
              if (
                "#" === e.charAt(0) &&
                e.length <= 7 &&
                (ie(e), 7 === e.length)
              ) {
                var t = qn(de(e));
                H(t);
              }
            },
            ue = function (e) {
              if (
                "#" === e.charAt(0) &&
                e.length <= 7 &&
                (se(e), 7 === e.length)
              ) {
                var t = qn(de(e));
                z(t);
              }
            },
            de = function (e) {
              e = e.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (e, t, n, a) {
                  return t + t + n + n + a + a;
                }
              );
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return t
                ? {
                    red: parseInt(t[1], 16),
                    green: parseInt(t[2], 16),
                    blue: parseInt(t[3], 16),
                  }
                : { red: 0, green: 0, blue: 0 };
            },
            pe = Object(a.jsxs)("div", {
              children: [
                Object(a.jsx)("label", { children: "Font Color" }),
                Object(a.jsx)("div", {
                  style: { paddingTop: "3px" },
                  children: Object(a.jsx)(K.a, {
                    onClick: w,
                    disclosure: !0,
                    children: Object(a.jsx)("div", {
                      children: Object(a.jsxs)(ot.a, {
                        spacing: "tight",
                        children: [
                          Object(a.jsx)("div", {
                            style: {
                              height: "2rem",
                              width: "2rem",
                              borderRadius: "0.3rem",
                              background: $,
                            },
                          }),
                          Object(a.jsx)("span", { children: ee }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            he = Object(a.jsxs)("div", {
              children: [
                Object(a.jsx)("label", { children: "Link Color" }),
                Object(a.jsx)("div", {
                  style: { paddingTop: "3px" },
                  children: Object(a.jsx)(K.a, {
                    onClick: N,
                    disclosure: !0,
                    children: Object(a.jsx)("div", {
                      children: Object(a.jsxs)(ot.a, {
                        spacing: "tight",
                        children: [
                          Object(a.jsx)("div", {
                            style: {
                              height: "2rem",
                              width: "2rem",
                              borderRadius: "0.3rem",
                              background: q,
                            },
                          }),
                          Object(a.jsx)("span", { children: ae }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            fe = Object(a.jsxs)("div", {
              children: [
                Object(a.jsx)("label", { children: "checkbox Color" }),
                Object(a.jsx)("div", {
                  style: { paddingTop: "3px" },
                  children: Object(a.jsx)(K.a, {
                    onClick: I,
                    disclosure: !0,
                    children: Object(a.jsx)("div", {
                      children: Object(a.jsxs)(ot.a, {
                        spacing: "tight",
                        children: [
                          Object(a.jsx)("div", {
                            style: {
                              height: "2rem",
                              width: "2rem",
                              borderRadius: "0.3rem",
                              background: V,
                            },
                          }),
                          Object(a.jsx)("span", { children: oe }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            });
          function be() {
            r(!0),
              B.p()
                .then(function (e) {
                  if ((r(!1), e && e.data && "success" === e.data.status)) {
                    if (e.data.data) {
                      var t = e.data.data,
                        n = t.fontColor,
                        a = t.fontSize,
                        i = t.checkboxColor,
                        o = t.fontType,
                        s = t.linkColor,
                        c = t.linkSize;
                      n && ce(n),
                        i && ue(i),
                        a && v(a.toString()),
                        o && X(o),
                        c && y(c.toString()),
                        s && le(s);
                    }
                  } else d({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
                })
                .catch(function (e) {
                  r(!1),
                    d({
                      isOpen: !0,
                      msg: "Get Setting details error !",
                      isErr: !0,
                    }),
                    console.log("ERROR: ", e);
                });
          }
          Object(i.useEffect)(function () {
            be();
          }, []),
            "<style>\n        .checkbox {\n            width: 100%;\n            position: relative;\n            display: block;\n        }\n        \n        .checkbox input[type=\"checkbox\"] {\n            width: auto;\n            opacity: 0.00000001;\n            position: absolute;\n            left: 0;\n            margin-left: -20px;\n        }\n        .checkbox label {\n            position: relative;\n        }\n        .checkbox label:before {\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 0;\n            margin: 4px;\n            width: 22px;\n            height: 22px;\n            transition: transform 0.28s ease;\n            border-radius: 3px;\n            border: 2px solid #E5E5E5;\n            background: #fff;\n        }\n        .checkbox label:after {\n          content: '';\n            display: block;\n            width: 10px;\n            height: 5px;\n            border-bottom: 2px solid #000;\n            border-left: 2px solid #000;\n            -webkit-transform: rotate(-45deg) scale(0);\n            transform: rotate(-45deg) scale(0);\n            transition: transform ease 0.25s;\n            will-change: transform;\n            position: absolute;\n            top: 12px;\n            left: 10px;\n        }\n        .checkbox input[type=\"checkbox\"]:checked ~ label::before {\n            background: ".concat(
              oe,
              ';\n            color: #000;\n        }\n\n        .checkbox input[type="checkbox"]:checked ~ label::after {\n            -webkit-transform: rotate(-45deg) scale(1);\n            transform: rotate(-45deg) scale(1);\n        }\n        .checkbox label {\n            min-height: 34px;\n            display: block;\n            padding-left: 38px;\n            margin-bottom: 0;\n            font-weight: normal;\n            cursor: pointer;\n            vertical-align: sub;\n        }\n        .checkbox label span {\n            position: absolute;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n        }\n        .checkbox input[type="checkbox"]:focus + label::before {\n            outline: 0;\n        }\n        </style>\n        <div style="width: 400px; height: 115px; background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: \'pnum\' on, \'lnum\' on;font-size: 16px;">\n            <div style="position:relative; height: 24px; left: 16px; right: 180px; top: 13px;font-weight: 600;line-height: 24px; color: #1F1E2C;"> \n                Get it tailored for free with \n                <img src="https://merchant.hemster.co/faherty/hemsterlogo.png" style="position:relative;top: 6px;"></img>\n            </div>\n            <div style="position: relative;height: 16px;left: 13px;right: 12px;top: 20px;">\n\n            <div class="checkbox">\n                <input type="checkbox" id="hemster_installation" >\n                <label for="hemster_installation">\n                    <span>\n                        Add a FitKit\n                    </span>\n                </lable>\n            </div>\n\n            </div>\n            <div class="lm-link">Learn More</div>\n        </div>'
            );
          var me = "<style>\n        .pdp-page{\n          height: 75px;\n          font-family: Montserrat, sans-serif;\n          font-feature-settings: 'pnum' on, 'lnum' on;\n          font-size: "
              .concat(
                g,
                "px !important;\n        }\n\n        .hemster_installation{\n          color:"
              )
              .concat(ee, ";\n          font-family:")
              .concat(
                Y,
                "\n        }\n\n        .lm-link{\n          position: relative;\n          height: 24px;\n          left: 36px;\n          top: 10px;\n          line-height: 24px;\n          text-decoration-line: underline;\n          color: "
              )
              .concat(ae, ";\n          font-size:")
              .concat(
                O,
                "px;\n          cursor:pointer\n        }\n        .checkbox {\n            width: 100%;\n            position: relative;\n            display: block;\n        }\n        \n        .checkbox input[type=\"checkbox\"] {\n            width: auto;\n            opacity: 0.00000001;\n            position: absolute;\n            left: 0;\n            margin-left: -20px;\n        }\n        .checkbox label {\n            position: relative;\n        }\n        .checkbox label:before {\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 0;\n            margin: 4px;\n            width: 22px;\n            height: 22px;\n            transition: transform 0.28s ease;\n            border-radius: 3px;\n            // border: 2px solid #E5E5E5;\n            border: 2px solid "
              )
              .concat(
                oe,
                ";\n            background: #fff;\n        }\n        .checkbox label:after {\n          content: '';\n            display: block;\n            width: 10px;\n            height: 5px;\n            border-bottom: 2px solid "
              )
              .concat(ee, ";\n            border-left: 2px solid ")
              .concat(
                ee,
                ';\n            -webkit-transform: rotate(-45deg) scale(0);\n            transform: rotate(-45deg) scale(0);\n            transition: transform ease 0.25s;\n            will-change: transform;\n            position: absolute;\n            top: 12px;\n            left: 10px;\n        }\n        .checkbox input[type="checkbox"]:checked ~ label::before {\n            color: #000;\n        }\n\n        .checkbox input[type="checkbox"]:checked ~ label::after {\n            -webkit-transform: rotate(-45deg) scale(1);\n            transform: rotate(-45deg) scale(1);\n        }\n        .checkbox label {\n            min-height: 26px;\n            display: block;\n            padding-left: 36px;\n            margin-bottom: 0;\n            font-weight: normal;\n            cursor: pointer;\n            vertical-align: sub;\n        }\n        .checkbox label span {\n            position: absolute;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n        }\n        .checkbox input[type="checkbox"]:focus + label::before {\n            outline: 0;\n        }\n        </style>\n        \n        <div class="pdp-page">\n            <div style="position:relative; height: 24px; left: 0px; right: 180px; top: 6px;font-weight: 600;line-height: 24px; color: #1F1E2C;"> \n\n            <div class="checkbox">\n\n                <input type="checkbox" id="hemster_installation" />\n                <label for="hemster_installation" class="hemster_installation">\n                    <span>Get it tailored for free with <img src="https://merchant.hemster.co/faherty/hemsterlogo.png" style="position:relative;top: 6px;"></img><span>\n                </label>\n\n            </div>\n\n            <div class="lm-link">Learn More</div>\n        </div>'
              ),
            ge = Object(a.jsx)(dt, {
              sectioned: !0,
              children: Object(a.jsx)(Kn, {
                children: Object(a.jsxs)(Qn, {
                  children: [
                    Object(a.jsxs)(Qn.Group, {
                      children: [
                        Object(a.jsx)("div", {
                          children: Object(a.jsx)(Pn, {
                            label: "Font Size",
                            onChange: function (e) {
                              v(e);
                            },
                            value: g,
                            type: "number",
                            min: 0,
                            suffix: "px",
                          }),
                        }),
                        Object(a.jsxs)(f.a, {
                          active: E,
                          activator: pe,
                          onClose: w,
                          children: [
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(pa, {
                                onChange: function (e) {
                                  var t = Un(e);
                                  te(t), M(e);
                                },
                                color: L,
                              }),
                            }),
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(Pn, {
                                value: ee,
                                label: "",
                                type: "text",
                                id: "FontColorHexColor",
                                onChange: ce,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)(Qn.Group, {
                      children: [
                        Object(a.jsx)(ma, {
                          label: "Font style",
                          placeholder: "Select",
                          options: [
                            {
                              label: 'Times, "Times New Roman", serif',
                              value: 'Times, "Times New Roman", serif',
                            },
                            {
                              label: "Helvetica, Arial, sans-serif",
                              value: "Helvetica, Arial, sans-serif",
                            },
                            { label: "serif", value: "serif" },
                            { label: "sans-serif", value: "sans-serif" },
                            { label: "monospace", value: "monospace" },
                            { label: "cursive", value: "cursive" },
                            { label: "fantasy", value: "fantasy" },
                            {
                              label: "Montserrat, sans-serif",
                              value: "Montserrat, sans-serif",
                            },
                          ],
                          onChange: Q,
                          value: Y,
                        }),
                        Object(a.jsxs)(f.a, {
                          active: k,
                          activator: fe,
                          onClose: I,
                          children: [
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(pa, {
                                onChange: function (e) {
                                  var t = Un(e);
                                  se(t), z(e);
                                },
                                color: G,
                              }),
                            }),
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(Pn, {
                                value: oe,
                                label: "",
                                type: "text",
                                id: "checkBoxColorHexColor",
                                onChange: ue,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsxs)(Qn.Group, {
                      children: [
                        Object(a.jsx)("div", {
                          children: Object(a.jsx)(Pn, {
                            label: "Link Size",
                            onChange: function (e) {
                              y(e);
                            },
                            value: O,
                            type: "number",
                            min: 0,
                            suffix: "px",
                          }),
                        }),
                        Object(a.jsxs)(f.a, {
                          active: S,
                          activator: he,
                          onClose: N,
                          children: [
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(pa, {
                                onChange: function (e) {
                                  var t = Un(e);
                                  ie(t), H(e);
                                },
                                color: F,
                              }),
                            }),
                            Object(a.jsx)(f.a.Section, {
                              children: Object(a.jsx)(Pn, {
                                value: ae,
                                label: "",
                                type: "text",
                                id: "LinkColorHexColor",
                                onChange: le,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          return Object(a.jsxs)("div", {
            children: [
              n
                ? Object(a.jsx)("div", {
                    className: "setting-spinner",
                    children: Object(a.jsx)(Fn.a, {
                      accessibilityLabel: "Spinner example",
                      size: "large",
                    }),
                  })
                : Object(a.jsxs)(a.Fragment, {
                    children: [
                      Object(a.jsxs)(Kn, {
                        children: [
                          Object(a.jsx)("br", {}),
                          s
                            ? Object(a.jsx)(He, {
                                fullWidth: !0,
                                title: "Edit style",
                                breadcrumbs: [
                                  {
                                    content: "settings",
                                    onAction: function () {
                                      return c(!1);
                                    },
                                  },
                                ],
                                children: ge,
                              })
                            : Object(a.jsx)("div", {
                                className: "edit-style-btn",
                                children: Object(a.jsx)(K.a, {
                                  onClick: function () {
                                    return c(!0);
                                  },
                                  outline: !0,
                                  children: "Edit Style",
                                }),
                              }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsx)(He, {
                            children: Object(a.jsxs)(dt, {
                              sectioned: !0,
                              children: [
                                Object(a.jsx)(U.a, { children: "Preview:" }),
                                Object(a.jsx)("div", {
                                  dangerouslySetInnerHTML: { __html: me },
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)(Qn, {
                            children: Object(a.jsx)("br", {}),
                          }),
                        ],
                      }),
                      Object(a.jsx)("div", {
                        className: "action-btns",
                        children: Object(a.jsx)(_n, {
                          primaryAction: {
                            content: "Save",
                            onAction: function () {
                              r(!0);
                              var e = {
                                fontColor: ee,
                                fontSize: parseInt(g),
                                checkboxColor: oe,
                                fontType: Y,
                                linkColor: ae,
                                linkSize: parseInt(O),
                              };
                              B.f(e)
                                .then(function (e) {
                                  r(!1),
                                    console.log("response assign pro set", e),
                                    e && e.data && "success" === e.data.status
                                      ? (d({
                                          isOpen: !0,
                                          msg: "Successfully saved.",
                                          isErr: !1,
                                        }),
                                        be())
                                      : d({
                                          isOpen: !0,
                                          msg:
                                            "Something went wrong! Please try again.",
                                          isErr: !0,
                                        });
                                })
                                .catch(function (e) {
                                  r(!1),
                                    d({
                                      isOpen: !0,
                                      msg:
                                        "Something went wrong! Please try again.",
                                      isErr: !0,
                                    }),
                                    console.log("ERROR", e);
                                });
                            },
                          },
                          secondaryActions: [
                            {
                              content: "Cancel",
                              destructive: !0,
                              onAction: be,
                            },
                          ],
                        }),
                      }),
                    ],
                  }),
              n && Object(a.jsx)(An, {}),
              p,
            ],
          });
        },
        Pa = {
          RadioButton: "Polaris-RadioButton",
          Input: "Polaris-RadioButton__Input",
          keyFocused: "Polaris-RadioButton--keyFocused",
          Backdrop: "Polaris-RadioButton__Backdrop",
          hover: "Polaris-RadioButton--hover",
        };
      function Ca({
        ariaDescribedBy: e,
        label: t,
        labelHidden: n,
        helpText: a,
        checked: o,
        disabled: s,
        onChange: c,
        onFocus: u,
        onBlur: d,
        id: p,
        name: h,
        value: f,
      }) {
        const b = Object(Oe.a)("RadioButton", p),
          m = h || b,
          g = Object(i.useRef)(null),
          [v, j] = Object(i.useState)(!1),
          { value: O, setTrue: y, setFalse: x } = Object(ae.a)(!1);
        const E = [];
        a && E.push(Yt(b)), e && E.push(e);
        const P = E.length ? E.join(" ") : void 0,
          C = Object(l.a)(Pa.Input, v && Pa.keyFocused),
          S = Object(l.a)(Pa.Backdrop, O && Pa.hover);
        return r.a.createElement(
          Jt,
          {
            label: t,
            labelHidden: n,
            disabled: s,
            id: b,
            helpText: a,
            onMouseOver: y,
            onMouseOut: x,
          },
          r.a.createElement(
            "span",
            { className: Pa.RadioButton },
            r.a.createElement("input", {
              id: b,
              name: m,
              value: f,
              type: "radio",
              checked: o,
              disabled: s,
              className: C,
              onChange: function ({ currentTarget: e }) {
                c && c(e.checked, b);
              },
              onFocus: u,
              onKeyUp: () => {
                !v && j(!0);
              },
              onBlur: () => {
                d && d(), j(!1);
              },
              "aria-describedby": P,
              ref: g,
            }),
            r.a.createElement("span", { className: S })
          )
        );
      }
      var Sa = function (e) {
        var t = Object(i.useState)(!1),
          n = t[0],
          r = t[1],
          o = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
          s = o[0],
          c = o[1],
          l = s.isOpen
            ? Object(a.jsx)(mt, {
                content: s.msg,
                onDismiss: function () {
                  return c({ isOpen: !1, msg: "", isErr: !1 });
                },
                error: !!s.isErr,
              })
            : null,
          u = Object(i.useState)("option1"),
          d = u[0],
          p = u[1],
          h = Object(i.useCallback)(function (e, t) {
            return p(t);
          }, []),
          f = Object(i.useState)(""),
          b = f[0],
          m = f[1],
          g = Object(i.useState)("15"),
          v = (g[0], g[1], Object(i.useState)("15")),
          j = (v[0], v[1], Object(i.useState)(!1)),
          O = (j[0], j[1]),
          y = Object(i.useState)(!1),
          x = (y[0], y[1]),
          E = Object(i.useState)(!1),
          P = (E[0], E[1]),
          C = Object(i.useState)(!1),
          S = (C[0], C[1]),
          _ = Object(i.useState)(!1),
          A = (_[0], _[1]),
          k =
            (Object(i.useCallback)(function () {
              return O(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return x(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return P(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return S(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return A(function (e) {
                return !e;
              });
            }, []),
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          T = k[0],
          w =
            (k[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          N = w[0],
          I =
            (w[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          R = I[0],
          L =
            (I[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          M = L[0],
          D =
            (L[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          F = D[0],
          H =
            (D[1],
            Wn(Vn(M)),
            Wn(Vn(R)),
            Wn(Vn(T)),
            Wn(Vn(N)),
            Wn(Vn(F)),
            Object(i.useState)(Un(T))),
          W = (H[0], H[1], Object(i.useState)(Un(R))),
          G = (W[0], W[1], Object(i.useState)(Un(M))),
          z = (G[0], G[1], Object(i.useState)(Un(N))),
          V = (z[0], z[1], Object(i.useState)(Un(F)));
        V[0];
        function $() {
          r(!0),
            B.q()
              .then(function (e) {
                if ((r(!1), e && e.data && "success" === e.data.status)) {
                  if (e.data.data) {
                    var t = e.data.data,
                      n = t.displayType,
                      a = t.redirectURL;
                    n && p(n), a && m(a);
                  }
                } else c({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
              })
              .catch(function (e) {
                r(!1),
                  c({
                    isOpen: !0,
                    msg: "Get Setting details error !",
                    isErr: !0,
                  }),
                  console.log("ERROR: ", e);
              });
        }
        V[1],
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          Object(i.useEffect)(function () {
            $();
          }, []);
        var q = '<div style="width: 60%;height: 216px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: \'pnum\' on, \'lnum\' on;font-size: 16px;">\n        <div>\n            <div\n                style="position:relative;top: 20px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;text-align: center;">\n\n                <img src="'.concat(
            window.location.origin,
            '/hook/assets/thankyou_page.gif" style="height: 60px;/* margin-right: 3px; */">\n                <div>\n                    <div\n                        style="font-family: Canela;font-style: normal;font-weight: normal;font-size: 30px;line-height: 30px;align-items: center;font-feature-settings: \'pnum\' on, \'lnum\' on;">\n                        Claim your free tailoring</div>\n                    <div\n                        style="font-family: \'Circular-Loom\';font-style: normal;font-weight: normal;font-size: 14px;align-items: center;font-feature-settings: \'pnum\' on, \'lnum\' on;color: #525258;">\n                        Find your perfect fit today with Hemster.</div>\n                </div>\n                <input type="submit" value="GET STARTED" class="btn"\n                    style="background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;margin: 5px;max-width: fit-content;">\n            </div>\n        </div>\n    </div>'
          ),
          J = "<style>\n        .ty-main{\n            width: 60%;height: 104px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;\n        }\n        .ty-inner{\n            position:relative;left: 9px;display: flex;top: 22px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;\n        }\n        .ty-image{\n            height: 60px;margin-right: 3px;\n        }\n        .ty-image-inner{\n            position: absolute;left: 70px;top: 0px;\n        }\n        .ty-text{\n            font-family: Canela;font-style: normal;font-weight: normal;font-size: 22.5px;line-height: 32px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;\n        }\n        .ty-text-sub{\n        font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;\n        }\n        .ty-button{\n            background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;position: absolute;right: 24px;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;\n        }\n        @media only screen and (max-width: 768px) {\n            .ty-main {\n                height: 221px;\n                text-align:center;  \n            }\n            .ty-text{\n                display: block;\n            }\n            .ty-text-sub{\n                display: block;\n            }\n            .ty-inner {\n                display: block;\n                position: relative;\n                left: unset;\n            }\n            .ty-image-inner{\n                position: unset;\n                width: fit-content;\n                margin: auto;\n            }\n            .ty-button {\n                position: unset;\n                margin-top: 10px;\n                padding: 2px 13px;\n                max-width: fit-content;\n            }\n        }\n        </style>\n        <div class=\"ty-main\">\n        <div>\n            <div\n                class=\"ty-inner\">\n                <img class=\"ty-image\" src=\"".concat(
            window.location.origin,
            '/hook/assets/thankyou_page.gif" >\n                <div class="ty-image-inner">\n                    <div class="ty-text">\n                        Don\u2019t forget!\n                    </div>\n                    <div class="ty-text-sub">\n                        Book your free fitting with Hemster today.</div>\n                </div>\n                <input type="submit" value="GET STARTED" class="btn ty-button">\n            </div>\n        </div>\n    </div>'
          );
        return Object(a.jsxs)("div", {
          children: [
            Object(a.jsx)("br", {}),
            Object(a.jsx)("br", {}),
            n
              ? Object(a.jsx)("div", {
                  className: "setting-spinner",
                  children: Object(a.jsx)(Fn.a, {
                    accessibilityLabel: "Spinner example",
                    size: "large",
                  }),
                })
              : Object(a.jsxs)(a.Fragment, {
                  children: [
                    Object(a.jsxs)(Kn, {
                      children: [
                        Object(a.jsxs)(Qn, {
                          children: [
                            Object(a.jsx)(Qn, {
                              children: Object(a.jsx)("div", {
                                className: "ty-url",
                                children: Object(a.jsx)(Pn, {
                                  value: b,
                                  label: "Redirect URL:",
                                  type: "text",
                                  id: "url",
                                  onChange: function (e) {
                                    return m(e);
                                  },
                                }),
                              }),
                            }),
                            Object(a.jsxs)("div", {
                              className: "type-radio",
                              children: [
                                Object(a.jsx)(U.a, { children: "Type:" }),
                                Object(a.jsx)("br", {}),
                                Object(a.jsx)("br", {}),
                                Object(a.jsxs)(ot.a, {
                                  children: [
                                    Object(a.jsx)(Ca, {
                                      label: "Option 1",
                                      checked: "option1" === d,
                                      id: "option1",
                                      name: "type",
                                      onChange: h,
                                    }),
                                    Object(a.jsx)(Ca, {
                                      label: "Option 2",
                                      id: "option2",
                                      name: "type",
                                      checked: "option2" === d,
                                      onChange: h,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)(Qn, {
                          children: [
                            Object(a.jsx)(U.a, { children: "Preview:" }),
                            "option1" === d &&
                              Object(a.jsx)("div", {
                                dangerouslySetInnerHTML: { __html: q },
                              }),
                            "option2" === d &&
                              Object(a.jsx)("div", {
                                dangerouslySetInnerHTML: { __html: J },
                              }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsx)("div", {
                      className: "action-btns",
                      children: Object(a.jsx)(_n, {
                        primaryAction: {
                          content: "Save",
                          onAction: function () {
                            r(!0);
                            var e = { displayType: d, redirectURL: b };
                            B.g(e)
                              .then(function (e) {
                                r(!1),
                                  e && e.data && "success" === e.data.status
                                    ? (c({
                                        isOpen: !0,
                                        msg: "Successfully saved.",
                                        isErr: !1,
                                      }),
                                      $())
                                    : c({
                                        isOpen: !0,
                                        msg:
                                          "Something went wrong! Please try again.",
                                        isErr: !0,
                                      });
                              })
                              .catch(function (e) {
                                r(!1),
                                  c({
                                    isOpen: !0,
                                    msg:
                                      "Something went wrong! Please try again.",
                                    isErr: !0,
                                  }),
                                  console.log("ERROR", e);
                              });
                          },
                        },
                        secondaryActions: [
                          { content: "Cancel", destructive: !0, onAction: $ },
                        ],
                      }),
                    }),
                  ],
                }),
            n && Object(a.jsx)(An, {}),
            l,
          ],
        });
      };
      var _a = function (e) {
        var t = Object(i.useState)(!1),
          n = t[0],
          r = t[1],
          o = Object(i.useState)(!1),
          s = o[0],
          c = o[1],
          l = Object(i.useCallback)(
            function () {
              s || c(!0);
            },
            [s]
          ),
          u = Object(i.useCallback)(
            function () {
              s && c(!1);
            },
            [s]
          ),
          d = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
          p = d[0],
          h = d[1],
          f = p.isOpen
            ? Object(a.jsx)(mt, {
                content: p.msg,
                onDismiss: function () {
                  return h({ isOpen: !1, msg: "", isErr: !1 });
                },
                error: !!p.isErr,
              })
            : null,
          b = Object(i.useState)(!1),
          m = (b[0], b[1], Object(i.useState)("15")),
          g = (m[0], m[1], Object(i.useState)("15")),
          v = (g[0], g[1], Object(i.useState)("15")),
          j = (v[0], v[1], Object(i.useState)(!1)),
          O = (j[0], j[1]),
          y = Object(i.useState)(!1),
          x = (y[0], y[1]),
          E = Object(i.useState)(!1),
          P = (E[0], E[1]),
          C = Object(i.useState)(!1),
          S = (C[0], C[1]),
          _ = Object(i.useState)(!1),
          A = (_[0], _[1]),
          k =
            (Object(i.useCallback)(function () {
              return O(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return x(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return P(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return S(function (e) {
                return !e;
              });
            }, []),
            Object(i.useCallback)(function () {
              return A(function (e) {
                return !e;
              });
            }, []),
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          T = k[0],
          w =
            (k[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          N = w[0],
          I =
            (w[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          R = I[0],
          L =
            (I[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          M = L[0],
          D =
            (L[1],
            Object(i.useState)({ hue: 0, brightness: 0, saturation: 0 })),
          F = D[0],
          H =
            (D[1],
            Wn(Vn(F)),
            Wn(Vn(M)),
            Wn(Vn(T)),
            Wn(Vn(N)),
            Wn(Vn(R)),
            Object(i.useState)(Un(T))),
          W = (H[0], H[1], Object(i.useState)(Un(M))),
          G = (W[0], W[1], Object(i.useState)(Un(F))),
          z = (G[0], G[1], Object(i.useState)(Un(N))),
          V = (z[0], z[1], Object(i.useState)(Un(R)));
        V[0];
        function $() {
          r(!0),
            B.n()
              .then(function (e) {
                if ((r(!1), e && e.data && "success" === e.data.status)) {
                  if (e.data.data) {
                    var t = e.data.data.isEnable;
                    c(!!t);
                  }
                } else h({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
              })
              .catch(function (e) {
                r(!1),
                  h({
                    isOpen: !0,
                    msg: "Get Setting details error !",
                    isErr: !0,
                  }),
                  console.log("ERROR: ", e);
              });
        }
        return (
          V[1],
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          K.a,
          ot.a,
          Object(i.useEffect)(function () {
            $();
          }, []),
          Object(a.jsxs)("div", {
            children: [
              Object(a.jsx)("br", {}),
              Object(a.jsx)("br", {}),
              n
                ? Object(a.jsx)("div", {
                    className: "setting-spinner",
                    children: Object(a.jsx)(Fn.a, {
                      accessibilityLabel: "Spinner example",
                      size: "large",
                    }),
                  })
                : Object(a.jsxs)(a.Fragment, {
                    children: [
                      Object(a.jsxs)(Kn, {
                        children: [
                          Object(a.jsx)(Qn, {
                            children: Object(a.jsxs)("div", {
                              className: "popup-settings",
                              children: [
                                Object(a.jsx)(U.a, {
                                  children: "Cart PopUp status",
                                }),
                                Object(a.jsx)(Qn.Group, {
                                  children: Object(a.jsxs)(q.a, {
                                    segmented: !0,
                                    children: [
                                      Object(a.jsx)(K.a, {
                                        pressed: s,
                                        onClick: l,
                                        children: "Enable",
                                      }),
                                      Object(a.jsx)(K.a, {
                                        pressed: !s,
                                        onClick: u,
                                        children: "Disable",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsxs)(Qn, {
                            children: [
                              Object(a.jsxs)("div", {
                                children: [
                                  Object(a.jsx)("div", {
                                    style: {
                                      cursor: "pointer",
                                      textDecoration: "underline",
                                    },
                                    onClick: function () {
                                      document
                                        .getElementById(
                                          "hemster-installation-modal"
                                        )
                                        .classList.add("is_open");
                                    },
                                    children: "Click here for Preview",
                                  }),
                                  Object(a.jsx)("br", {}),
                                ],
                              }),
                              Object(a.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    '\n    <div id="hemster-installation-modal" class="modal">\n    <div class="modal-content">\n        <div class="header" style="padding: 23px; padding-bottom: 0; height:53px;">\n        <span class="close" onclick="document.getElementById(\'hemster-installation-modal\').classList.remove(\'is_open\')">\n            <div style="font-size: 18px;font-weight: 600;color: #1F1E2C;">X</div>\n        </span>\n        </div>\n        <div style="color: #1F1E2C; text-align: center; font-family: Montserrat, sans-serif; font-style: normal; font-weight: normal;font-size: 40px;line-height: 48px;font-feature-settings: \'pnum\' on, \'lnum\' on;">\n                Get free tailoring!\n        </div>\n        <div class="grid" style="padding-top: 44px; margin-left: 0;display:flex">\n            <div class="grid__item image" style="width:343px;margin: 0 48px 48px 48px;background: url(https://merchant.hemster.co/faherty/hemster_installation_image.jpg);height: 380px;padding-left: 0;background-size: cover;"></div>\n              <div class="grid__item details" style="width:356px; padding: 30px 48px 80px 0;">\n              <h2 style="color: #1F1E2C; text-align: start; font-size: 18px;font-weight: bold; font-family: Montserrat, sans-serif;font-style: normal;line-height: 24px;letter-spacing: 0.2em;text-transform: uppercase;font-feature-settings: \'pnum\' on, \'lnum\' on;"> \n                  Hemster FitKit\n                  <br>\n                 <span style="color: #B4B4B6; font-style: normal;font-weight: bold;font-size: 14px;line-height: 20px;">Free</span>\n                 </h2>\n              <p style="margin-top: 15px;margin-bottom:32px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: normal;font-size: 16px;line-height: 24px;font-feature-settings: \'pnum\' on, \'lnum\' on;color: #1F1E2C;">\n                  Tailor your new garments to your perfect fit for free. Simply add a Hemster FitKit to your order and <span style="text-decoration-line: underline;font-weight: bold;cursor:pointer;">book an appointment</span> with one of the Hemster\u2019s fit experts.\n                  </p>\n              <input type="hidden" name="id" value="31652105355333" />\n              <input type="hidden" id="quantity" name="quantity" value="1"/>\n                \n              <div style="display: flex;justify-content: space-between;">\n                    <input type="submit" value="Add to cart" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px; font-size: 15px;" />\n                    <input type="submit" value="Learn more" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px;font-size: 15px;" />\n              </div>\n\n              <div style="text-align:center;padding-top:18px;" onclick="document.getElementById(\'hemster-installation-modal\').classList.remove(\'is_open\')">\n                    <span style="font-size: 16px;line-height: 24px;text-decoration-line: underline;font-feature-settings: \'pnum\' on, \'lnum\' on;color: #838386;cursor:pointer;">No, I don\u2019t want free tailoring</span>\n              </div>\n            </div>\n        </div>\n      \n  </div>\n\n</div>\n\n<style>\n/* The Modal (background) */\n#hemster-installation-modal.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 99999; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  opacity: 1;\n}\n\n#hemster-installation-modal.modal.is_open {\n  display: block;\n}\n\n/* Modal Content/Box */\n#hemster-installation-modal > .modal-content {\n  background-color: #FFFFFF;\n  margin: 5% auto; /* 15% from the top and centered */\n  border-radius: 8px;\n  width: 800px; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n#hemster-installation-modal .close {\n  color: #B4B4B6;\n  float: right;\n  font-size: 12px;\n}\n\n#hemster-installation-modal .close:hover,\n#hemster-installation-modal .close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 480px) {\n  #hemster-installation-modal .grid__item.image {\n    height: 250px !important;\n  }\n  .grid{\n      display:block !important;\n  }\n}\n@media only screen and (max-width: 830px) {\n  #hemster-installation-modal > .modal-content {\n    width: 80% !important; \n  }\n  \n  #hemster-installation-modal .grid__item.image {\n    width: calc(100% - 96px) !important;\n  }\n  \n  #hemster-installation-modal .grid__item.details {\n    padding: 0px 48px 48px 48px !important; \n    width: 100% !important; \n  }\n\n  .grid{\n    display:block !important;\n  }\n}\n</style>',
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsx)("div", {
                        className: "action-btns",
                        children: Object(a.jsx)(_n, {
                          primaryAction: {
                            content: "Save",
                            onAction: function () {
                              r(!0);
                              var e = { isEnable: s };
                              B.d(e)
                                .then(function (e) {
                                  r(!1),
                                    e && e.data && "success" === e.data.status
                                      ? (h({
                                          isOpen: !0,
                                          msg: "Successfully saved.",
                                          isErr: !1,
                                        }),
                                        $())
                                      : h({
                                          isOpen: !0,
                                          msg:
                                            "Something went wrong! Please try again.",
                                          isErr: !0,
                                        });
                                })
                                .catch(function (e) {
                                  r(!1),
                                    h({
                                      isOpen: !0,
                                      msg:
                                        "Something went wrong! Please try again.",
                                      isErr: !0,
                                    }),
                                    console.log("ERROR", e);
                                });
                            },
                          },
                          secondaryActions: [
                            { content: "Cancel", destructive: !0, onAction: $ },
                          ],
                        }),
                      }),
                    ],
                  }),
              n && Object(a.jsx)(An, {}),
              f,
            ],
          })
        );
      };
      function Aa() {
        var e = Object(i.useState)(!1),
          t = e[0],
          n = e[1],
          r = Object(i.useCallback)(
            function () {
              t || n(!0);
            },
            [t]
          ),
          o = Object(i.useCallback)(
            function () {
              t && n(!1);
            },
            [t]
          ),
          s = Object(i.useState)(!1),
          c = s[0],
          l = s[1],
          u = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
          d = u[0],
          p = u[1],
          h = d.isOpen
            ? Object(a.jsx)(mt, {
                content: d.msg,
                onDismiss: function () {
                  return p({ isOpen: !1, msg: "", isErr: !1 });
                },
                error: !!d.isErr,
              })
            : null,
          f = Object(i.useState)("option1"),
          b = f[0],
          m = f[1],
          g = Object(i.useCallback)(function (e, t) {
            return m(t);
          }, []);
        function v() {
          l(!0),
            B.o()
              .then(function (e) {
                if ((l(!1), e && e.data && "success" === e.data.status)) {
                  if (e.data.data) {
                    var t = e.data.data,
                      a = t.displayType,
                      i = t.isEnable;
                    a && m(a), n(!!i);
                  }
                } else p({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
              })
              .catch(function (e) {
                l(!1),
                  p({
                    isOpen: !0,
                    msg: "Get Setting details error !",
                    isErr: !0,
                  }),
                  console.log("ERROR: ", e);
              });
        }
        Object(i.useEffect)(function () {
          v();
        }, []);
        var j = "<head>\n  <style>\n      @import url('http://fonts.cdnfonts.com/css/sillii-willinn');\n\n      .grid__item-details {\n        background: #F4EEED;\n        font-family: serif;\n        font-size: 16px;\n        width: 278px;\n        padding: 10px 18px;\n        max-height: 116px;\n      }\n\n      .grid {\n          display: flex;\n          cursor: pointer;\n      }\n\n      p.grid-mine-text {\n        font-family: Sillii Willinn;\n        font-size: 41px;\n        transform: rotate(-5deg);\n        margin: 0px 0 !important;\n        padding: 0 !important;\n      }\n\n      .g-text {\n        display: flex;\n        line-height: 48px;\n      }\n\n      .grid-mine-line {\n          width: 80px;\n          height: 0px;\n          margin-top: 35px;\n          margin-left: -82px;\n          border: 1.16419px solid #1F1E2C;\n      }\n\n      .grid-text-2-container {\n          font-family: system-ui;\n      }\n\n      .grid-size {\n          color: #000;\n      }\n\n      .grid-size-text {\n          color: #77777a;\n      }\n\n      .logomark-custom {\n          height: fit-content;\n          margin: auto 0;\n      }\n\n      .grid-text-2 {\n          display: flex;\n          justify-content: space-between;\n      }\n  </style>\n</head>\n<div class=\"grid\">\n  <div>\n      <img src="
          .concat(
            "".concat(
              window.location.origin,
              "option1" === b
                ? "/hook/assets/collection1.png"
                : "option2" == b
                ? "/hook/assets/collection2.png"
                : "/hook/assets/collection3.png"
            ),
            ' />\n  </div>\n  <div class="grid__item-details">\n      <div class="g-text">\n          <span style="font-size: 40px; margin-right: 15px;">Make it </span>\n          <p class="grid-mine-text">Mine</p>\n          <p class="grid-mine-line"></p>\n      </div>\n      <div class="grid-text-2">\n          <div class="grid-text-2-container">\n              <div class="grid-size">In between sizes?</div>\n              <div class="grid-size-text">Get it tailored with Hemster.</div>\n          </div>\n          <img class="logomark-custom" src=\''
          )
          .concat(
            window.location.origin,
            "/hook/assets/logomark.png' />\n      </div>\n  </div>\n</div>"
          );
        return Object(a.jsxs)(a.Fragment, {
          children: [
            " ",
            c
              ? Object(a.jsx)("div", {
                  className: "setting-spinner",
                  children: Object(a.jsx)(Fn.a, {
                    accessibilityLabel: "Spinner example",
                    size: "large",
                  }),
                })
              : Object(a.jsxs)("div", {
                  children: [
                    Object(a.jsx)("br", {}),
                    Object(a.jsxs)("div", {
                      className: "popup-settings",
                      children: [
                        Object(a.jsx)(U.a, {
                          children: "Collection page status",
                        }),
                        Object(a.jsx)(Qn.Group, {
                          children: Object(a.jsxs)(q.a, {
                            segmented: !0,
                            children: [
                              Object(a.jsx)(K.a, {
                                pressed: t,
                                onClick: r,
                                children: "Enable",
                              }),
                              Object(a.jsx)(K.a, {
                                pressed: !t,
                                onClick: o,
                                children: "Disable",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(a.jsx)("br", {}),
                    Object(a.jsxs)(Kn, {
                      children: [
                        Object(a.jsx)(Qn, {
                          children: Object(a.jsxs)("div", {
                            className: "type-radio",
                            children: [
                              Object(a.jsx)(U.a, { children: "Type:" }),
                              Object(a.jsx)("br", {}),
                              Object(a.jsx)("br", {}),
                              Object(a.jsxs)(ot.a, {
                                children: [
                                  Object(a.jsx)(Ca, {
                                    label: "Option 1",
                                    checked: "option1" === b,
                                    id: "option1",
                                    name: "type",
                                    onChange: g,
                                  }),
                                  Object(a.jsx)(Ca, {
                                    label: "Option 2",
                                    id: "option2",
                                    name: "type",
                                    checked: "option2" === b,
                                    onChange: g,
                                  }),
                                  Object(a.jsx)(Ca, {
                                    label: "Option 3",
                                    checked: "option3" === b,
                                    id: "option3",
                                    name: "type",
                                    onChange: g,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)(Qn, {
                          children: [
                            Object(a.jsx)(U.a, { children: "Preview:" }),
                            Object(a.jsx)("div", {
                              dangerouslySetInnerHTML: { __html: j },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsx)("div", {
                      className: "action-btns",
                      children: Object(a.jsx)(_n, {
                        primaryAction: {
                          content: "Save",
                          onAction: function () {
                            l(!0);
                            var e = { displayType: b, isEnable: t };
                            B.e(e)
                              .then(function (e) {
                                l(!1),
                                  console.log("response assign pro set", e),
                                  e && e.data && "success" === e.data.status
                                    ? (p({
                                        isOpen: !0,
                                        msg: "Successfully saved.",
                                        isErr: !1,
                                      }),
                                      v())
                                    : p({
                                        isOpen: !0,
                                        msg:
                                          "Something went wrong! Please try again.",
                                        isErr: !0,
                                      });
                              })
                              .catch(function (e) {
                                l(!1),
                                  p({
                                    isOpen: !0,
                                    msg:
                                      "Something went wrong! Please try again.",
                                    isErr: !0,
                                  }),
                                  console.log("ERROR", e);
                              });
                          },
                        },
                        secondaryActions: [
                          { content: "Cancel", destructive: !0, onAction: v },
                        ],
                      }),
                    }),
                  ],
                }),
            h,
          ],
        });
      }
      var ka = function (e) {
        var t = Object(i.useState)(!1),
          n = t[0],
          r = t[1],
          o = Object(i.useState)(!1),
          s = o[0],
          c = o[1],
          l = Object(i.useCallback)(
            function () {
              s || c(!0);
            },
            [s]
          ),
          u = Object(i.useCallback)(
            function () {
              s && c(!1);
            },
            [s]
          ),
          d = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
          p = d[0],
          h = d[1],
          b = Object(i.useState)([]),
          m = b[0],
          g = b[1],
          v = Object(i.useState)(!1),
          j = v[0],
          O = v[1];
        console.log(m);
        var y = Object(i.useCallback)(function () {
            return O(function (e) {
              return !e;
            });
          }, []),
          x = Object(a.jsx)(K.a, {
            onClick: y,
            disclosure: !0,
            children: "Select Page",
          }),
          E = p.isOpen
            ? Object(a.jsx)(mt, {
                content: p.msg,
                onDismiss: function () {
                  return h({ isOpen: !1, msg: "", isErr: !1 });
                },
                error: !!p.isErr,
              })
            : null;
        function P() {
          r(!0),
            B.l()
              .then(function (e) {
                if ((r(!1), e && e.data && "success" === e.data.status)) {
                  if (e.data.data) {
                    var t = e.data.data,
                      n = t.isEnable,
                      a = t.selected_page;
                    a && g(a), c(!!n);
                  }
                } else h({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
              })
              .catch(function (e) {
                r(!1),
                  h({
                    isOpen: !0,
                    msg: "Get Setting details error !",
                    isErr: !0,
                  }),
                  console.log("ERROR: ", e);
              });
        }
        Object(i.useEffect)(function () {
          P();
        }, []);
        var C = '<style>\n    .he-container {\n        width: 100%;\n        background: #212E47;\n        color: #fff;\n        padding: 5px 0;\n        display: flex;\n        justify-content: space-between;\n    }\n    .he-text-container {\n        display: flex;\n        margin: 0 auto;\n        padding-top: 2px;\n    }\n    .he-text {\n        margin-right: 7px;\n        font-size: 14px;\n        letter-spacing: 3px;\n        font-family: system-ui;\n        line-height: 20px;\n        text-transform: uppercase;\n    }\n    .he-lm-button {\n        background: #F4EEED;\n        border-radius: 6px;\n        color: #000;\n        padding: 3px 10px;\n        cursor: pointer;\n        margin-right: 20px;\n        font-weight: 600;\n        letter-spacing: 2px;\n        font-family: system-ui;\n        vertical-align: top;\n        font-size: 14px;\n    }\n\n    </style>\n    \n    <div class="he-container">\n        <div class="he-text-container">\n            <div class="he-text">Get Free tailoring through our partnership with</div>\n            <span><img src="'.concat(
          window.location.origin,
          '/hook/assets/union.png" /></span>\n        </div>\n        <div class="he-lm-button">LEARN MORE</div>\n    </div>'
        );
        return Object(a.jsxs)("div", {
          children: [
            n
              ? Object(a.jsx)("div", {
                  className: "setting-spinner",
                  children: Object(a.jsx)(Fn.a, {
                    accessibilityLabel: "Spinner example",
                    size: "large",
                  }),
                })
              : Object(a.jsxs)(a.Fragment, {
                  children: [
                    Object(a.jsxs)(Kn, {
                      children: [
                        Object(a.jsx)(Qn, {
                          children: Object(a.jsxs)("div", {
                            className: "popup-settings",
                            children: [
                              Object(a.jsx)("br", {}),
                              Object(a.jsx)(U.a, {
                                children: "Announcement bar status",
                              }),
                              Object(a.jsx)(Qn.Group, {
                                children: Object(a.jsxs)(q.a, {
                                  segmented: !0,
                                  children: [
                                    Object(a.jsx)(K.a, {
                                      pressed: s,
                                      onClick: l,
                                      children: "Enable",
                                    }),
                                    Object(a.jsx)(K.a, {
                                      pressed: !s,
                                      onClick: u,
                                      children: "Disable",
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)(Qn.Group, {
                                children: Object(a.jsx)(f.a, {
                                  active: j,
                                  activator: x,
                                  onClose: y,
                                  children: Object(a.jsx)(Mt, {
                                    onChange: g,
                                    options: [
                                      {
                                        label: "Home page",
                                        value: "home_page",
                                      },
                                      {
                                        label: "Product page",
                                        value: "product_page",
                                      },
                                      {
                                        label: "Collection page",
                                        value: "collection_page",
                                      },
                                      {
                                        label: "Collection list",
                                        value: "collection_list",
                                      },
                                      { label: "Cart", value: "cart_page" },
                                      {
                                        label: "Checkout",
                                        value: "checkout_page",
                                      },
                                    ],
                                    selected: m,
                                    allowMultiple: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)(Qn, {
                          children: [
                            Object(a.jsx)("div", { children: "Preview:" }),
                            Object(a.jsx)("div", {
                              dangerouslySetInnerHTML: { __html: C },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsx)("div", {
                      className: "action-btns",
                      children: Object(a.jsx)(_n, {
                        primaryAction: {
                          content: "Save",
                          onAction: function () {
                            r(!0);
                            var e = { isEnable: s, selected_page: m };
                            B.b(e)
                              .then(function (e) {
                                r(!1),
                                  e && e.data && "success" === e.data.status
                                    ? (h({
                                        isOpen: !0,
                                        msg: "Successfully saved.",
                                        isErr: !1,
                                      }),
                                      P())
                                    : h({
                                        isOpen: !0,
                                        msg:
                                          "Something went wrong! Please try again.",
                                        isErr: !0,
                                      });
                              })
                              .catch(function (e) {
                                r(!1),
                                  h({
                                    isOpen: !0,
                                    msg:
                                      "Something went wrong! Please try again.",
                                    isErr: !0,
                                  }),
                                  console.log("ERROR", e);
                              });
                          },
                        },
                        secondaryActions: [
                          { content: "Cancel", destructive: !0, onAction: P },
                        ],
                      }),
                    }),
                  ],
                }),
            n && Object(a.jsx)(An, {}),
            E,
          ],
        });
      };
      var Ta = function (e) {
        var t = Object(i.useState)(!1),
          n = t[0],
          r = t[1],
          o = Object(i.useState)(!1),
          s = o[0],
          c = o[1],
          l = Object(i.useCallback)(
            function () {
              s || c(!0);
            },
            [s]
          ),
          u = Object(i.useCallback)(
            function () {
              s && c(!1);
            },
            [s]
          ),
          d = Object(i.useState)({ isOpen: !1, msg: "", isErr: !1 }),
          p = d[0],
          h = d[1],
          f = p.isOpen
            ? Object(a.jsx)(mt, {
                content: p.msg,
                onDismiss: function () {
                  return h({ isOpen: !1, msg: "", isErr: !1 });
                },
                error: !!p.isErr,
              })
            : null;
        function b() {
          r(!0),
            B.m()
              .then(function (e) {
                if ((r(!1), e && e.data && "success" === e.data.status)) {
                  if (e.data.data) {
                    var t = e.data.data.isEnable;
                    c(!!t);
                  }
                } else h({ isOpen: !0, msg: "Get Setting details error !", isErr: !0 });
              })
              .catch(function (e) {
                r(!1),
                  h({
                    isOpen: !0,
                    msg: "Get Setting details error !",
                    isErr: !0,
                  }),
                  console.log("ERROR: ", e);
              });
        }
        return (
          Object(i.useEffect)(function () {
            b();
          }, []),
          Object(a.jsxs)("div", {
            children: [
              n
                ? Object(a.jsx)("div", {
                    className: "setting-spinner",
                    children: Object(a.jsx)(Fn.a, {
                      accessibilityLabel: "Spinner example",
                      size: "large",
                    }),
                  })
                : Object(a.jsxs)(a.Fragment, {
                    children: [
                      Object(a.jsxs)(Kn, {
                        children: [
                          Object(a.jsx)(Qn, {
                            children: Object(a.jsxs)("div", {
                              className: "popup-settings",
                              children: [
                                Object(a.jsx)("br", {}),
                                Object(a.jsx)(U.a, {
                                  children: "PDP Account Details",
                                }),
                                Object(a.jsx)(Qn.Group, {
                                  children: Object(a.jsxs)(q.a, {
                                    segmented: !0,
                                    children: [
                                      Object(a.jsx)(K.a, {
                                        pressed: s,
                                        onClick: l,
                                        children: "Enable",
                                      }),
                                      Object(a.jsx)(K.a, {
                                        pressed: !s,
                                        onClick: u,
                                        children: "Disable",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)("br", {}),
                          Object(a.jsxs)(Qn, {
                            children: [
                              Object(a.jsx)("div", { children: "Preview:" }),
                              Object(a.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    '<style>\n  .container-acc {\n      text-align: left;\n      width: fit-content;\n      background: #F4EEED;\n      border-radius: 4px;\n      font-family: Montserrat, sans-serif;\n      font-size: 16px;\n      padding: 22px 20px;\n      margin: 10px 0px;\n      cursor: pointer;\n  }\n\n  .acc-text-1 {\n      font-weight: 600;\n      color: #1F1E2C;\n  }\n\n  .acc-text-image {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 5px;\n  }\n\n  .acc-text-2 {\n      position: relative;\n      top: 9px;\n      color: #C1ACA4;\n      text-decoration: underline;\n      cursor: pointer;\n  }\n\n  .acc-iamge-2 {\n      position: relative;\n      top: 6px;\n  }\n</style>\n\n<div class="container-acc" >\n  <div class="acc-text-1">\n      Fit issue? Get free virtual tailoring\n  </div>\n  <div class="acc-text-image">\n      <span class="acc-text-2">Book fitting</span>\n      <img src="https://merchant.hemster.co/faherty/hemsterlogo.png" class="acc-iamge-2">\n  </div>\n</div>',
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsx)("div", {
                        className: "action-btns",
                        children: Object(a.jsx)(_n, {
                          primaryAction: {
                            content: "Save",
                            onAction: function () {
                              r(!0);
                              var e = { isEnable: s };
                              B.c(e)
                                .then(function (e) {
                                  r(!1),
                                    e && e.data && "success" === e.data.status
                                      ? (h({
                                          isOpen: !0,
                                          msg: "Successfully saved.",
                                          isErr: !1,
                                        }),
                                        b())
                                      : h({
                                          isOpen: !0,
                                          msg:
                                            "Something went wrong! Please try again.",
                                          isErr: !0,
                                        });
                                })
                                .catch(function (e) {
                                  r(!1),
                                    h({
                                      isOpen: !0,
                                      msg:
                                        "Something went wrong! Please try again.",
                                      isErr: !0,
                                    }),
                                    console.log("ERROR", e);
                                });
                            },
                          },
                          secondaryActions: [
                            { content: "Cancel", destructive: !0, onAction: b },
                          ],
                        }),
                      }),
                    ],
                  }),
              n && Object(a.jsx)(An, {}),
              f,
            ],
          })
        );
      };
      var wa = function (e) {
          var t = Object(i.useState)(!0),
            n = t[0],
            r = t[1],
            o = Object(i.useState)(!1),
            s = o[0],
            c = o[1],
            l = n ? "Disable" : "Enable",
            u = n ? "enabled" : "disabled";
          Object(i.useEffect)(function () {
            f();
          }, []);
          var d = Object(i.useState)(0),
            p = d[0],
            h = d[1];
          function f() {
            c(!0),
              B.j()
                .then(function (e) {
                  if (
                    (c(!1),
                    e && e.data && e.data.data && e.data.data.shopStatus)
                  ) {
                    var t = e.data.data.shopStatus.isAppEnable;
                    r(!!t);
                  } else r(!1);
                })
                .catch(function (e) {
                  c(!1), console.log("ERROR: ", e);
                });
          }
          return Object(a.jsxs)(He, {
            title: "Settings",
            children: [
              Object(a.jsx)(Dn, {
                action: {
                  content: l,
                  onAction: function () {
                    c(!0);
                    var e = { isAppEnable: !n };
                    B.h(e)
                      .then(function (e) {
                        "success" === e.data.status && (r(!n), f()), c(!1);
                      })
                      .catch(function (e) {
                        c(!1), console.log("Error", e);
                      });
                  },
                },
                enabled: n,
                children: Object(a.jsxs)("div", {
                  className: "enable-setting",
                  children: [
                    "This app is",
                    " ",
                    Object(a.jsx)(U.a, {
                      variation: "strong",
                      children: s
                        ? Object(a.jsx)(Fn.a, { size: "small", color: "teal" })
                        : u + ".",
                    }),
                  ],
                }),
              }),
              Object(a.jsx)(dt, {
                sectioned: !0,
                title: "Display Settings",
                children: Object(a.jsxs)(F, {
                  tabs: [
                    { id: "productPage", content: "Product page" },
                    { id: "thankyou", content: "Thank you page" },
                    { id: "cartPopUp", content: "Cart page Pop-up" },
                    { id: "collection", content: "Collection page" },
                    { id: "account_details", content: "PDP account details" },
                    { id: "announcementBar", content: "Announcement bar" },
                  ],
                  selected: p,
                  onSelect: h,
                  children: [
                    0 === p && Object(a.jsx)(Ea, {}),
                    1 === p && Object(a.jsx)(Sa, {}),
                    2 === p && Object(a.jsx)(_a, {}),
                    3 === p && Object(a.jsx)(Aa, {}),
                    4 === p && Object(a.jsx)(Ta, {}),
                    5 === p && Object(a.jsx)(ka, {}),
                  ],
                }),
              }),
            ],
          });
        },
        Na = r.a.createElement("path", {
          d:
            "M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z",
        }),
        Ia = function (e) {
          return r.a.createElement(
            "svg",
            Object.assign({ viewBox: "0 0 20 20" }, e),
            Na
          );
        },
        Ra = {
          Link: "Polaris-Link",
          IconLockup: "Polaris-Link__IconLockup",
          IconLayout: "Polaris-Link__IconLayout",
          monochrome: "Polaris-Link--monochrome",
          removeUnderline: "Polaris-Link--removeUnderline",
        };
      function La({
        url: e,
        children: t,
        onClick: n,
        external: a,
        id: i,
        monochrome: o,
        removeUnderline: s,
        accessibilityLabel: u,
      }) {
        const d = Object(c.a)();
        let p = t;
        if (a && "string" === typeof t) {
          const e = d.translate("Polaris.Common.newWindowAccessibilityHint");
          p = r.a.createElement(
            r.a.Fragment,
            null,
            t,
            r.a.createElement(
              "span",
              { className: Ra.IconLockup },
              r.a.createElement(
                "span",
                { className: Ra.IconLayout },
                r.a.createElement(h.a, { accessibilityLabel: e, source: Ia })
              )
            )
          );
        }
        return r.a.createElement(tt.Consumer, null, (t) => {
          const c = o || t,
            d = Object(l.a)(
              Ra.Link,
              c && Ra.monochrome,
              s && Ra.removeUnderline
            );
          return e
            ? r.a.createElement(
                j.a,
                {
                  onClick: n,
                  className: d,
                  url: e,
                  external: a,
                  id: i,
                  "aria-label": u,
                },
                p
              )
            : r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: n,
                  className: d,
                  id: i,
                  "aria-label": u,
                },
                p
              );
        });
      }
      var Ma = n("EVdn"),
        Da = n.n(Ma);
      var Fa = function (e) {
        return (
          Object(i.useEffect)(function () {
            Da()(document).ready(function () {
              Da()(".faq_question").click(function () {
                Da()(this).parent().is(".open")
                  ? (Da()(this)
                      .closest(".faq")
                      .find(".faq_answer_container")
                      .slideUp(),
                    Da()(this).closest(".faq").removeClass("open"))
                  : (Da()(".faq_answer_container").slideUp(),
                    Da()(".faq").removeClass("open"),
                    Da()(this)
                      .closest(".faq")
                      .find(".faq_answer_container")
                      .slideDown(),
                    Da()(this).closest(".faq").addClass("open"));
              });
            });
          }),
          Object(a.jsx)("div", {
            children: Object(a.jsx)(He, {
              title: "Support",
              children: Object(a.jsx)("div", {
                className: "faq_container",
                children: Object(a.jsx)(Pt, {
                  children: Object(a.jsx)(Pt.Section, {
                    children: Object(a.jsx)(dt, {
                      sectioned: !0,
                      children: Object(a.jsx)("div", {
                        className: "faq",
                        children: Object(a.jsxs)("div", {
                          children: [
                            Object(a.jsx)(et, { children: "Quick Answers" }),
                            Object(a.jsxs)("div", {
                              className: "faq_answer",
                              style: { marginTop: "10px" },
                              children: [
                                "For support and app related queries, feel free to email us",
                                " ",
                                Object(a.jsxs)(La, {
                                  external: !0,
                                  onClick: function () {
                                    return window.open(
                                      "mailto:matt@hemster.co",
                                      "_blank"
                                    );
                                  },
                                  children: [" ", "here"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      };
      n("l7Dk");
      t.default = function () {
        var e = Object(i.useState)(0),
          t = e[0],
          n = e[1],
          r = Object(i.useState)(!0),
          c = r[0],
          l = r[1],
          u = Object(i.useState)(!1),
          d = u[0],
          p = u[1];
        return (
          Object(i.useEffect)(function () {
            "localhost" !== window.location.hostname
              ? B.i()
                  .then(function (e) {
                    e.data && e.data.confirmationUrl
                      ? (window.top.location.href = e.data.confirmationUrl)
                      : e.data.app_charge && l(!1);
                  })
                  .catch(function (e) {
                    l(!1), p(!0), console.log("ERROR: ", e);
                  })
              : l(!1);
          }, []),
          console.log("isErr", d),
          Object(a.jsx)(o.a, {
            i18n: H,
            children: Object(a.jsx)(s.a, {
              children: c
                ? Object(a.jsx)("div", {
                    className: "spinner",
                    children: Object(a.jsx)(Fn.a, {}),
                  })
                : d
                ? Object(a.jsx)("div", {
                    className: "spinner",
                    children:
                      "Something went wrong with billing! please try again.",
                  })
                : Object(a.jsx)(a.Fragment, {
                    children: Object(a.jsxs)(F, {
                      tabs: [
                        { id: "products", content: "Products" },
                        { id: "settings", content: "Settings" },
                        { id: "support", content: "Support" },
                      ],
                      selected: t,
                      onSelect: n,
                      children: [
                        0 === t && Object(a.jsx)(Rn, {}),
                        1 === t && Object(a.jsx)(wa, {}),
                        2 === t && Object(a.jsx)(Fa, {}),
                      ],
                    }),
                  }),
            }),
          })
        );
      };
    },
    uF9B: function (e, t, n) {
      "use strict";
      function a(e) {
        return Array.from(e)
          .map(function (e) {
            return ("00" + e.toString(16)).slice(-2);
          })
          .join("");
      }
      function i(e) {
        if (
          "function" === typeof Uint8Array &&
          "object" === typeof window &&
          window.crypto
        ) {
          var t = new Uint8Array(e),
            n = window.crypto.getRandomValues(t);
          if (n) return n;
        }
        return Array.from(new Array(e), function () {
          return (255 * Math.random()) | 0;
        });
      }
      function r() {
        var e = i(1),
          t = i(2);
        return (
          (e[0] &= 191),
          (t[0] &= 79),
          [
            a(i(4)),
            "-",
            a(i(2)),
            "-",
            a(t),
            "-",
            a(e),
            a(i(1)),
            "-",
            a(i(6)),
          ].join("")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateUuid = void 0),
        (t.generateUuid = r),
        (t.default = r);
    },
    "ud+W": function (e, t, n) {
      "use strict";
      (function (e) {
        var n, a;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isFrameless = t.isDevelopmentClient = t.isProduction = t.isDevelopment = t.isClient = t.isServer = void 0),
          (t.isServer = "undefined" === typeof window),
          (t.isClient = !t.isServer),
          (t.isDevelopment = "undefined" !== typeof e && e.env && !1),
          (t.isProduction = !t.isDevelopment),
          (t.isDevelopmentClient = t.isDevelopment && t.isClient),
          (t.isFrameless =
            t.isClient &&
            (null ===
              (a =
                null === (n = window.navigator) || void 0 === n
                  ? void 0
                  : n.userAgent) || void 0 === a
              ? void 0
              : a.indexOf(" Frameless ")) > 0);
      }.call(this, n("8oxB")));
    },
    vDqi: function (e, t, n) {
      e.exports = n("zuR4");
    },
    vfSc: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ComponentType = t.Group = void 0),
        (function (e) {
          (e.AuthCode = "AuthCode"),
            (e.Button = "Button"),
            (e.ButtonGroup = "ButtonGroup"),
            (e.Cart = "Cart"),
            (e.Client = "Client"),
            (e.ContextualSaveBar = "ContextualSaveBar"),
            (e.Error = "Error"),
            (e.Features = "Features"),
            (e.FeedbackModal = "FeedbackModal"),
            (e.Fullscreen = "Fullscreen"),
            (e.LeaveConfirmation = "LeaveConfirmation"),
            (e.Link = "Link"),
            (e.Loading = "Loading"),
            (e.Menu = "Menu"),
            (e.Modal = "Modal"),
            (e.Navigation = "Navigation"),
            (e.Performance = "Performance"),
            (e.Pos = "Pos"),
            (e.Print = "Print"),
            (e.ResourcePicker = "Resource_Picker"),
            (e.Scanner = "Scanner"),
            (e.SessionToken = "SessionToken"),
            (e.Share = "Share"),
            (e.TitleBar = "TitleBar"),
            (e.Toast = "Toast"),
            (e.MarketingExternalActivityTopBar =
              "MarketingExternalActivityTopBar");
        })(t.Group || (t.Group = {})),
        (function (e) {
          (e.Button = "Button"), (e.ButtonGroup = "ButtonGroup");
        })(t.ComponentType || (t.ComponentType = {}));
    },
    w0Vi: function (e, t, n) {
      "use strict";
      var a = n("xTJ+"),
        i = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          n,
          r,
          o = {};
        return e
          ? (a.forEach(e.split("\n"), function (e) {
              if (
                ((r = e.indexOf(":")),
                (t = a.trim(e.substr(0, r)).toLowerCase()),
                (n = a.trim(e.substr(r + 1))),
                t)
              ) {
                if (o[t] && i.indexOf(t) >= 0) return;
                o[t] =
                  "set-cookie" === t
                    ? (o[t] ? o[t] : []).concat([n])
                    : o[t]
                    ? o[t] + ", " + n
                    : n;
              }
            }),
            o)
          : o;
      };
    },
    xAGQ: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      e.exports = function (e, t, n) {
        return (
          a.forEach(n, function (n) {
            e = n(e, t);
          }),
          e
        );
      };
    },
    "xTJ+": function (e, t, n) {
      "use strict";
      var a = n("HSsa"),
        i = Object.prototype.toString;
      function r(e) {
        return "[object Array]" === i.call(e);
      }
      function o(e) {
        return "undefined" === typeof e;
      }
      function s(e) {
        return null !== e && "object" === typeof e;
      }
      function c(e) {
        if ("[object Object]" !== i.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function l(e) {
        return "[object Function]" === i.call(e);
      }
      function u(e, t) {
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), r(e)))
            for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
          else
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                t.call(null, e[i], i, e);
      }
      e.exports = {
        isArray: r,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === i.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !o(e) &&
            null !== e.constructor &&
            !o(e.constructor) &&
            "function" === typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" !== typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" === typeof e;
        },
        isNumber: function (e) {
          return "number" === typeof e;
        },
        isObject: s,
        isPlainObject: c,
        isUndefined: o,
        isDate: function (e) {
          return "[object Date]" === i.call(e);
        },
        isFile: function (e) {
          return "[object File]" === i.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === i.call(e);
        },
        isFunction: l,
        isStream: function (e) {
          return s(e) && l(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" !== typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        },
        forEach: u,
        merge: function e() {
          var t = {};
          function n(n, a) {
            c(t[a]) && c(n)
              ? (t[a] = e(t[a], n))
              : c(n)
              ? (t[a] = e({}, n))
              : r(n)
              ? (t[a] = n.slice())
              : (t[a] = n);
          }
          for (var a = 0, i = arguments.length; a < i; a++) u(arguments[a], n);
          return t;
        },
        extend: function (e, t, n) {
          return (
            u(t, function (t, i) {
              e[i] = n && "function" === typeof t ? a(t, n) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    },
    xlsT: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createTransportListener = t.fromWindow = t.fromFrame = t.Context = void 0);
      var a = n("iqGl"),
        i = n("dBzg"),
        r = n("229i"),
        o = n("ye8r"),
        s = n("ud+W");
      !(function (e) {
        (e.Modal = "Modal"), (e.Main = "Main");
      })(t.Context || (t.Context = {})),
        (t.fromFrame = function (e, t, n) {
          var r = [];
          if (
            "undefined" === typeof e ||
            !e.ownerDocument ||
            !e.ownerDocument.defaultView
          )
            throw a.fromAction(
              "App frame is undefined",
              a.AppActionType.WINDOW_UNDEFINED
            );
          var s = e.ownerDocument.defaultView;
          return (
            s.addEventListener("message", function (n) {
              if (i.isAppMessage(n))
                if (n.origin === t)
                  for (var o = 0, s = r; o < s.length; o++) {
                    (0, s[o])(n);
                  }
                else {
                  var c = e.contentWindow;
                  if (c) {
                    var l =
                        "Message origin '" +
                        n.origin +
                        "' does not match app origin '" +
                        t +
                        "'.",
                      u = {
                        type: "dispatch",
                        payload: a.invalidOriginAction(l),
                      };
                    c.postMessage(u, n.origin);
                  }
                }
            }),
            {
              context: n,
              localOrigin: t,
              frameWindow: e.contentWindow,
              hostFrame: s,
              dispatch: function (n) {
                var a = e.contentWindow;
                a && a.postMessage(n, t);
              },
              subscribe: function (e) {
                return o.addAndRemoveFromCollection(r, e);
              },
            }
          );
        }),
        (t.fromWindow = function (e, t) {
          var n = [];
          return (
            void 0 !== typeof window &&
              window.addEventListener("message", function (t) {
                if (
                  (window !== e || s.isFrameless) &&
                  t.source === e &&
                  (i.isAppBridgeAction(t.data.payload) || i.isAppMessage(t))
                )
                  for (var a = 0, r = n; a < r.length; a++) {
                    (0, r[a])(t);
                  }
              }),
            {
              localOrigin: t,
              hostFrame: e,
              dispatch: function (t) {
                var n;
                if (null === (n = t.source) || void 0 === n ? void 0 : n.host)
                  if (s.isFrameless && window && window.SmartWebView)
                    window.SmartWebView.handleMessage(
                      "frameless://fromClient",
                      JSON.stringify(t)
                    );
                  else {
                    var a = new URL("https://" + t.source.host).origin;
                    e.postMessage(t, a);
                  }
              },
              subscribe: function (e) {
                return o.addAndRemoveFromCollection(n, e);
              },
            }
          );
        }),
        (t.createTransportListener = function () {
          var e = [],
            t = {};
          return {
            createSubscribeHandler: function (n) {
              return function () {
                if (arguments.length < 2)
                  return o.addAndRemoveFromCollection(e, {
                    callback: arguments[0],
                  });
                var a = Array.from(arguments),
                  i = a[0],
                  s = a[1],
                  c = a[2],
                  l = { callback: s, id: c },
                  u = { type: i, id: c };
                return (
                  Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []),
                  n && n(r.MessageType.Subscribe, u),
                  o.addAndRemoveFromCollection(t[i], l, function () {
                    n && n(r.MessageType.Unsubscribe, u);
                  })
                );
              };
            },
            handleMessage: function (t) {
              e.forEach(function (e) {
                return e.callback(t);
              });
            },
            handleActionDispatch: function (e) {
              var n = e.type,
                a = e.payload,
                i = !1;
              if (Object.prototype.hasOwnProperty.call(t, n))
                for (var r = 0, o = t[n]; r < o.length; r++) {
                  var s = o[r],
                    c = s.id,
                    l = s.callback;
                  (!(a && a.id === c) && c) || (l(a), (i = !0));
                }
              return i;
            },
          };
        });
    },
    yK9s: function (e, t, n) {
      "use strict";
      var a = n("xTJ+");
      e.exports = function (e, t) {
        a.forEach(e, function (n, a) {
          a !== t &&
            a.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[a]);
        });
      };
    },
    ye8r: function (e, t, n) {
      "use strict";
      function a(e, t, n) {
        var a = e.findIndex(function (e) {
          return e === t;
        });
        return a >= 0 && (e.splice(a, 1), n && n(t), !0);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeFromCollection = t.addAndRemoveFromCollection = void 0),
        (t.addAndRemoveFromCollection = function (e, t, n) {
          return (
            e.push(t),
            function () {
              return a(e, t, n);
            }
          );
        }),
        (t.removeFromCollection = a);
    },
    zuR4: function (e, t, n) {
      "use strict";
      var a = n("xTJ+"),
        i = n("HSsa"),
        r = n("CgaS"),
        o = n("SntB");
      function s(e) {
        var t = new r(e),
          n = i(r.prototype.request, t);
        return a.extend(n, r.prototype, t), a.extend(n, t), n;
      }
      var c = s(n("JEQr"));
      (c.Axios = r),
        (c.create = function (e) {
          return s(o(c.defaults, e));
        }),
        (c.Cancel = n("endd")),
        (c.CancelToken = n("jfS+")),
        (c.isCancel = n("Lmem")),
        (c.all = function (e) {
          return Promise.all(e);
        }),
        (c.spread = n("DfZB")),
        (c.isAxiosError = n("XwJu")),
        (e.exports = c),
        (e.exports.default = c);
    },
  },
]);
