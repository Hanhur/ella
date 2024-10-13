// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/img/chevron-down.svg":[function(require,module,exports) {
module.exports = "/chevron-down.e0da3f97.svg";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/components/shipingOvers/shipingOvers.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/shipingOvers/shipingOvers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shipingOvers = shipingOvers;
var _chevronDown = _interopRequireDefault(require("../../img/chevron-down.svg"));
require("./shipingOvers.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function shipingOvers() {
  var shipingOvers = document.createElement("div");
  shipingOvers.className = "shiping-overs";
  var shipingOversText = document.createElement("p");
  shipingOversText.className = "shiping-overs-text";
  shipingOversText.textContent = "FREE SHIPPING OVERS";
  var shipingOversSpan = document.createElement("span");
  shipingOversSpan.className = "shiping-overs-span";
  shipingOversSpan.textContent = "$99";
  var shipingOversSale = document.createElement("p");
  shipingOversSale.className = "shiping-overs-sale";
  shipingOversSale.textContent = "Mid-Season Sale Up to 70% OFF.";
  var shipingOversButton = document.createElement("button");
  shipingOversButton.className = "shiping-overs-btn";
  shipingOversButton.textContent = "INR";
  var shipingOversImages = document.createElement("img");
  shipingOversImages.className = "shiping-ovres-img";
  shipingOversImages.src = _chevronDown.default;
  shipingOversImages.alt = "Example image";
  shipingOvers.append(shipingOversText, shipingOversSale, shipingOversButton);
  shipingOversText.append(shipingOversSpan);
  shipingOversButton.append(shipingOversImages);
  return shipingOvers;
}
},{"../../img/chevron-down.svg":"src/img/chevron-down.svg","./shipingOvers.css":"src/components/shipingOvers/shipingOvers.css"}],"src/img/logo.svg":[function(require,module,exports) {
module.exports = "/logo.cabda74f.svg";
},{}],"src/img/microfon.svg":[function(require,module,exports) {
module.exports = "/microfon.52931de0.svg";
},{}],"src/img/search.svg":[function(require,module,exports) {
module.exports = "/search.dca1606c.svg";
},{}],"src/img/user.svg":[function(require,module,exports) {
module.exports = "/user.c3b14727.svg";
},{}],"src/img/heart.svg":[function(require,module,exports) {
module.exports = "/heart.195e365b.svg";
},{}],"src/img/shopping-bag.svg":[function(require,module,exports) {
module.exports = "/shopping-bag.e4235124.svg";
},{}],"src/components/search/search.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/search.svg":[["search.dca1606c.svg","src/img/search.svg"],"src/img/search.svg"],"./../../img/microfon.svg":[["microfon.52931de0.svg","src/img/microfon.svg"],"src/img/microfon.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/search/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearch = getSearch;
var _logo = _interopRequireDefault(require("../../img/logo.svg"));
var _microfon = _interopRequireDefault(require("../../img/microfon.svg"));
var _search = _interopRequireDefault(require("../../img/search.svg"));
var _user = _interopRequireDefault(require("../../img/user.svg"));
var _heart = _interopRequireDefault(require("../../img/heart.svg"));
var _shoppingBag = _interopRequireDefault(require("../../img/shopping-bag.svg"));
require("./search.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getSearch() {
  var searchBox = document.createElement("div");
  searchBox.className = "search-box";
  var searchLogo = document.createElement("img");
  searchLogo.className = "search-logo-img";
  searchLogo.src = _logo.default;
  searchLogo.alt = "Example image";
  var searchForm = document.createElement("form");
  searchForm.className = "search-form";
  var searchInput = document.createElement("input");
  searchInput.className = "search-input";
  searchInput.placeholder = "What are you looking for Today? e.g dimond ring";
  var searchUser = document.createElement("img");
  searchUser.className = "search-user";
  searchUser.src = _user.default;
  searchUser.alt = "Example image";
  var searchHeart = document.createElement("img");
  searchHeart.className = "heart-user";
  searchHeart.src = _heart.default;
  searchHeart.alt = "Example image";
  var searchShoppingBag = document.createElement("img");
  searchShoppingBag.className = "shopping-bag";
  searchShoppingBag.src = _shoppingBag.default;
  searchShoppingBag.alt = "Example image";
  searchBox.append(searchLogo, searchForm, searchUser, searchHeart, searchShoppingBag);
  searchForm.append(searchInput);
  return searchBox;
}
},{"../../img/logo.svg":"src/img/logo.svg","../../img/microfon.svg":"src/img/microfon.svg","../../img/search.svg":"src/img/search.svg","../../img/user.svg":"src/img/user.svg","../../img/heart.svg":"src/img/heart.svg","../../img/shopping-bag.svg":"src/img/shopping-bag.svg","./search.css":"src/components/search/search.css"}],"src/components/navigations/navigation.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/navigations/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigations = Navigations;
require("./navigation.css");
var navigationsArray = ["Theme Demo", "Shop", "ProductHot", "Blog", "Pages", "New In", "Trend", "Collections", "Buy Ella"];
function Navigations() {
  var navigation = document.createElement("div");
  navigation.className = "navigation";
  var nav = document.createElement("nav");
  nav.className = "navigator";
  var list = document.createElement("ul");
  list.className = "list";
  navigationsArray.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "items";
    var link = document.createElement("a");
    link.className = "link";
    link.href = "/";
    list.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  navigation.append(nav);
  nav.append(list);
  return navigation;
}
},{"./navigation.css":"src/components/navigations/navigation.css"}],"src/components/header/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeader = getHeader;
var _shipingOvers = require("../shipingOvers/shipingOvers");
var _search = require("../search/search");
var _navigation = require("../navigations/navigation");
require("./header.css");
function getHeader() {
  var header = document.createElement("header");
  header.className = "header";
  header.append((0, _shipingOvers.shipingOvers)(), (0, _search.getSearch)(), (0, _navigation.Navigations)());
  return header;
}
},{"../shipingOvers/shipingOvers":"src/components/shipingOvers/shipingOvers.js","../search/search":"src/components/search/search.js","../navigations/navigation":"src/components/navigations/navigation.js","./header.css":"src/components/header/header.css"}],"src/components/milancelos/milancelosMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/milancelos/milancelosMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionMain = getSectionMain;
require("./milancelosMain.css");
function getSectionMain() {
  var section = document.createElement("section");
  section.className = "section-milancelos";
  var container = document.createElement("div");
  container.className = "container";
  section.append(container);
  return section;
}
},{"./milancelosMain.css":"src/components/milancelos/milancelosMain.css"}],"src/page/pageMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/main-bg.png":[["main-bg.13403173.png","src/img/main-bg.png"],"src/img/main-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMain = getMain;
var _milancelosMain = require("../components/milancelos/milancelosMain");
require("./pageMain.css");
function getMain() {
  var main = document.createElement("main");
  main.className = "main";
  main.append((0, _milancelosMain.getSectionMain)());
  return main;
}
},{"../components/milancelos/milancelosMain":"src/components/milancelos/milancelosMain.js","./pageMain.css":"src/page/pageMain.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _header = require("./src/components/header/header.js");
var _pageMain = require("./src/page/pageMain.js");
var app = document.querySelector("#app");
var header = (0, _header.getHeader)();
var main = (0, _pageMain.getMain)();
app.append(header, main);
},{"./src/components/header/header.js":"src/components/header/header.js","./src/page/pageMain.js":"src/page/pageMain.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42551" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/ella.e31bb0bc.js.map