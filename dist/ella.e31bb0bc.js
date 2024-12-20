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
  var newText = document.createElement("p");
  newText.className = "new-text";
  newText.textContent = "NEW ARRIVALS";
  var title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Milancélos";
  var text = document.createElement("p");
  text.className = "text";
  text.textContent = "Quisquemos sodale suscipit delio condiment cosmo lacus meleifend blanditos.";
  var button = document.createElement("button");
  button.className = "btn";
  button.textContent = "SHOP NOW";
  section.append(container);
  container.append(newText, title, text, button);
  return section;
}
},{"./milancelosMain.css":"src/components/milancelos/milancelosMain.css"}],"src/img/topProduct/diamond.png":[function(require,module,exports) {
module.exports = "/diamond.32b31afe.png";
},{}],"src/img/topProduct/makers.png":[function(require,module,exports) {
module.exports = "/makers.87111406.png";
},{}],"src/img/topProduct/nesting.png":[function(require,module,exports) {
module.exports = "/nesting.d4c63f01.png";
},{}],"src/img/topProduct/olive.png":[function(require,module,exports) {
module.exports = "/olive.f7467bff.png";
},{}],"src/components/topProductShop/topProductShop.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/topProductShop/topProductShop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopProductShop = getTopProductShop;
var _diamond = _interopRequireDefault(require("../../img/topProduct/diamond.png"));
var _makers = _interopRequireDefault(require("../../img/topProduct/makers.png"));
var _nesting = _interopRequireDefault(require("../../img/topProduct/nesting.png"));
var _olive = _interopRequireDefault(require("../../img/topProduct/olive.png"));
require("./topProductShop.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getTopProductShop() {
  var productShop = document.createElement("div");
  productShop.className = "product-shop";
  productShop.innerHTML = "\n        <div class=\"product-shop-block\">\n            <img class=\"product-shop-img\" src=\"".concat(_diamond.default, "\" alt=\"Diamond In Platinum\"/>\n            <h3 class=\"product-shop-title\">Diamond In Platinum</h3>\n            <p class=\"product-shop-text\">Shop Now</p>\n        </div>\n        <div class=\"product-shop-block\">\n            <img class=\"product-shop-img\" src=\"").concat(_makers.default, "\" alt=\"Makers Slice Ring\"/>\n            <h3 class=\"product-shop-title\">Makers Slice Ring</h3>\n            <p class=\"product-shop-text\">Shop Now</p>\n        </div>\n        <div class=\"product-shop-block\">\n            <img class=\"product-shop-img\" src=\"").concat(_nesting.default, "\" alt=\"Nesting Band Ring\"/>\n            <h3 class=\"product-shop-title\">Nesting Band Ring</h3>\n            <p class=\"product-shop-text\">Shop Now</p>\n        </div>\n        <div class=\"product-shop-block\">\n            <img class=\"product-shop-img\" src=\"").concat(_olive.default, "\" alt=\"Olive Leaf Band Ring\"/>\n            <h3 class=\"product-shop-title\">Olive Leaf Band Ring</h3>\n            <p class=\"product-shop-text\">Shop Now</p>\n        </div>\n    ");
  return productShop;
}
},{"../../img/topProduct/diamond.png":"src/img/topProduct/diamond.png","../../img/topProduct/makers.png":"src/img/topProduct/makers.png","../../img/topProduct/nesting.png":"src/img/topProduct/nesting.png","../../img/topProduct/olive.png":"src/img/topProduct/olive.png","./topProductShop.css":"src/components/topProductShop/topProductShop.css"}],"src/img/topProduct/chevron-left.svg":[function(require,module,exports) {
module.exports = "/chevron-left.fb015092.svg";
},{}],"src/img/topProduct/chevron-right.svg":[function(require,module,exports) {
module.exports = "/chevron-right.3792c08a.svg";
},{}],"src/components/topProduct/topProduct.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/topProduct/topProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopProduct = getTopProduct;
var _topProductShop = require("../topProductShop/topProductShop");
var _chevronLeft = _interopRequireDefault(require("../../img/topProduct/chevron-left.svg"));
var _chevronRight = _interopRequireDefault(require("../../img/topProduct/chevron-right.svg"));
require("./topProduct.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var productArray = ["Diamond Ring", "Bracelet", "Pendant", "Earring"];
function getTopProduct() {
  var section = document.createElement("section");
  section.className = "section-product";
  var container = document.createElement("div");
  container.className = "container";
  var productBlock = document.createElement("div");
  productBlock.className = "product-block";
  var title = document.createElement("h2");
  title.className = "product-title";
  title.textContent = "Top Product";
  var list = document.createElement("ul");
  list.className = "list-product";
  productArray.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "items-product";
    var link = document.createElement("a");
    link.className = "link-product";
    link.href = "/";
    list.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var chevronLeftSvg = document.createElement("img");
  chevronLeftSvg.className = "chevron-lift";
  chevronLeftSvg.src = _chevronLeft.default;
  chevronLeftSvg.alt = "Example image";
  var chevronRightSvg = document.createElement("img");
  chevronRightSvg.className = "chevron-right";
  chevronRightSvg.src = _chevronRight.default;
  chevronRightSvg.alt = "Example image";
  section.append(container);
  container.append(productBlock, (0, _topProductShop.getTopProductShop)());
  productBlock.append(title, list, chevronLeftSvg, chevronRightSvg);
  return section;
}
},{"../topProductShop/topProductShop":"src/components/topProductShop/topProductShop.js","../../img/topProduct/chevron-left.svg":"src/img/topProduct/chevron-left.svg","../../img/topProduct/chevron-right.svg":"src/img/topProduct/chevron-right.svg","./topProduct.css":"src/components/topProduct/topProduct.css"}],"src/img/newArrivals/group-1.png":[function(require,module,exports) {
module.exports = "/group-1.5f173f12.png";
},{}],"src/img/newArrivals/group-2.png":[function(require,module,exports) {
module.exports = "/group-2.eb444e9b.png";
},{}],"src/img/newArrivals/group-3.png":[function(require,module,exports) {
module.exports = "/group-3.5359a3b8.png";
},{}],"src/img/newArrivals/shopping-bag.svg":[function(require,module,exports) {
module.exports = "/shopping-bag.fb6e8e59.svg";
},{}],"src/components/newArrivals/newArrivals.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/newArrivals/newArrivals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewArrivals = getNewArrivals;
var _group = _interopRequireDefault(require("../../img/newArrivals/group-1.png"));
var _group2 = _interopRequireDefault(require("../../img/newArrivals/group-2.png"));
var _group3 = _interopRequireDefault(require("../../img/newArrivals/group-3.png"));
var _shoppingBag = _interopRequireDefault(require("../../img/newArrivals/shopping-bag.svg"));
require("./newArrivals.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getNewArrivals() {
  var section = document.createElement("section");
  section.className = "section-arrivals";
  var container = document.createElement("div");
  container.className = "container";
  var newArrivalsTitle = document.createElement("h2");
  newArrivalsTitle.className = "arrivals-title";
  newArrivalsTitle.textContent = "New Arrivals";
  var newArrivalsBlock = document.createElement("div");
  newArrivalsBlock.className = "arrivals-block";
  newArrivalsBlock.innerHTML = "\n        <div class=\"arrivals-box\">\n            <img class=\"arrivals-img\" src=\"".concat(_group.default, "\" alt=\"\"/>\n            <div class=\"arrivals-brend\">\n                <div class=\"arrivals_brend\">\n                    <span class=\"arrivals-span\">$22.00</span>\n                    <span class=\"arrivals_span\">$82.00</span>\n                    <p class=\"arrivals-text\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"arrivals-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n        <div class=\"arrivals-box\">\n            <img class=\"arrivals-img\" src=\"").concat(_group2.default, "\" alt=\"\"/>\n            <div class=\"arrivals-brend\">\n                <div class=\"arrivals_brend\">\n                    <span class=\"arrivals-span\">$22.00</span>\n                    <span class=\"arrivals_span\">$82.00</span>\n                    <p class=\"arrivals-text\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"arrivals-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n        <div class=\"arrivals-box\">\n            <img class=\"arrivals-img\" src=\"").concat(_group3.default, "\" alt=\"\"/>\n            <div class=\"arrivals-brend\">\n                <div class=\"arrivals_brend\">\n                    <span class=\"arrivals-span\">$22.00</span>\n                    <span class=\"arrivals_span\">$82.00</span>\n                    <p class=\"arrivals-text\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"arrivals-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n    ");
  var arrivalsButton = document.createElement("button");
  arrivalsButton.className = "arrivals-btn";
  arrivalsButton.textContent = "View All";
  section.append(container);
  container.append(newArrivalsTitle, newArrivalsBlock, arrivalsButton);
  return section;
}
},{"../../img/newArrivals/group-1.png":"src/img/newArrivals/group-1.png","../../img/newArrivals/group-2.png":"src/img/newArrivals/group-2.png","../../img/newArrivals/group-3.png":"src/img/newArrivals/group-3.png","../../img/newArrivals/shopping-bag.svg":"src/img/newArrivals/shopping-bag.svg","./newArrivals.css":"src/components/newArrivals/newArrivals.css"}],"src/img/birthday.png":[function(require,module,exports) {
module.exports = "/birthday.9a5b5a85.png";
},{}],"src/img/summer.png":[function(require,module,exports) {
module.exports = "/summer.cf13226d.png";
},{}],"src/components/newCollection/newCollection.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/newCollection/newCollection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewCollection = getNewCollection;
var _birthday = _interopRequireDefault(require("../../img/birthday.png"));
var _summer = _interopRequireDefault(require("../../img/summer.png"));
require("./newCollection.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getNewCollection() {
  var section = document.createElement("section");
  section.className = "section-collection";
  var container = document.createElement("div");
  container.className = "container";
  var newCollectionBlock = document.createElement("div");
  newCollectionBlock.className = "collection-block";
  newCollectionBlock.innerHTML = "\n        <div class=\"collectiob-box\">\n            <img class=\"birthday-img\" src=\"".concat(_birthday.default, "\" alt=\"Example image\"/>\n            <div class=\"collection-birthday\">\n                <p class=\"collection-text\">Must See New Style</p>\n                <h2 class=\"collection-title\">Birthday Collection</h2>\n                <button class=\"collection-btn\">Shop Now</button>\n            </div>\n        </div>\n        <div class=\"collectiob-box\">\n            <img class=\"birthday-img\" src=\"").concat(_summer.default, "\" alt=\"Example image\"/>\n            <div class=\"collection-birthday\">\n                <p class=\"collection-text\">New collection</p>\n                <h2 class=\"collection-title\">Summer Essentials</h2>\n                <button class=\"collection-btn\">Shop Now</button>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(newCollectionBlock);
  return section;
}
},{"../../img/birthday.png":"src/img/birthday.png","../../img/summer.png":"src/img/summer.png","./newCollection.css":"src/components/newCollection/newCollection.css"}],"src/components/featuredProducts/featuredProducts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/featuredProducts/featuredProducts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeaturedProducts = getFeaturedProducts;
var _group = _interopRequireDefault(require("../../img/newArrivals/group-1.png"));
var _group2 = _interopRequireDefault(require("../../img/newArrivals/group-2.png"));
var _group3 = _interopRequireDefault(require("../../img/newArrivals/group-3.png"));
var _shoppingBag = _interopRequireDefault(require("../../img/newArrivals/shopping-bag.svg"));
require("./featuredProducts.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getFeaturedProducts() {
  var section = document.createElement("section");
  section.className = "section-products";
  var featuredProductsTitle = document.createElement("h2");
  featuredProductsTitle.className = "featured-title";
  featuredProductsTitle.textContent = "Featured Products";
  var featuredProductsBlock = document.createElement("div");
  featuredProductsBlock.className = "featured-block";
  featuredProductsBlock.innerHTML = "\n        <div class=\"featured-box\">\n            <img class=\"featured-img\" src=\"".concat(_group.default, "\" alt=\"\"/>\n            <div class=\"featured-brend\">\n                <div class=\"featured_brend\">\n                    <span class=\"featured-span\">$22.00</span>\n                    <span class=\"featured_span\">$82.00</span>\n                    <p class=\"afeaturedtext\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"featured-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n        <div class=\"featured-box\">\n            <img class=\"featured-img\" src=\"").concat(_group2.default, "\" alt=\"\"/>\n            <div class=\"featured-brend\">\n                <div class=\"featured_brend\">\n                    <span class=\"featured-span\">$22.00</span>\n                    <span class=\"featured_span\">$82.00</span>\n                    <p class=\"featured-text\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"featured-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n        <div class=\"featured-box\">\n            <img class=\"featured-img\" src=\"").concat(_group3.default, "\" alt=\"\"/>\n            <div class=\"featured-brend\">\n                <div class=\"featured_brend\">\n                    <span class=\"featured-span\">$22.00</span>\n                    <span class=\"featured_span\">$82.00</span>\n                    <p class=\"featured-text\">Sterling Silver Band Ring</p>\n                </div>\n                <img class=\"featured-shopping\" src=\"").concat(_shoppingBag.default, "\" alt=\"\"/>\n            </div>\n        </div>\n        \n    ");
  var featuredProductsButton = document.createElement("button");
  featuredProductsButton.className = "featured-btn";
  featuredProductsButton.textContent = "View All";
  section.append(featuredProductsTitle, featuredProductsBlock, featuredProductsButton);
  return section;
}
},{"../../img/newArrivals/group-1.png":"src/img/newArrivals/group-1.png","../../img/newArrivals/group-2.png":"src/img/newArrivals/group-2.png","../../img/newArrivals/group-3.png":"src/img/newArrivals/group-3.png","../../img/newArrivals/shopping-bag.svg":"src/img/newArrivals/shopping-bag.svg","./featuredProducts.css":"src/components/featuredProducts/featuredProducts.css"}],"src/img/mustHave/have.png":[function(require,module,exports) {
module.exports = "/have.5d0b43ff.png";
},{}],"src/img/mustHave/car.svg":[function(require,module,exports) {
module.exports = "/car.9ca70bb1.svg";
},{}],"src/img/mustHave/package.svg":[function(require,module,exports) {
module.exports = "/package.754f8d3f.svg";
},{}],"src/img/mustHave/secure.svg":[function(require,module,exports) {
module.exports = "/secure.7948dd78.svg";
},{}],"src/components/mustHave/mustHave.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/mustHave/mustHave.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMustHave = getMustHave;
var _have = _interopRequireDefault(require("../../img/mustHave/have.png"));
var _car = _interopRequireDefault(require("../../img/mustHave/car.svg"));
var _package = _interopRequireDefault(require("../../img/mustHave/package.svg"));
var _secure = _interopRequireDefault(require("../../img/mustHave/secure.svg"));
require("./mustHave.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getMustHave() {
  var section = document.createElement("section");
  section.className = "section-have";
  var container = document.createElement("div");
  container.className = "container";
  var mustHaveTitle = document.createElement("h2");
  mustHaveTitle.className = "have-title";
  mustHaveTitle.textContent = "Must Have";
  var mustHaveBlock = document.createElement("div");
  mustHaveBlock.className = "have-block";
  mustHaveBlock.innerHTML = "\n        <div class=\"have-box\">\n            <div class=\"have_box\">\n                <img class=\"have-img\" src=\"".concat(_have.default, "\"/>\n                <div class=\"have-save\">\n                    <p class=\"have-save_text\">18k Gold Bracelets</p>\n                    <span class=\"have-save_span\">SALE UP TO 30% OFF</span>\n                </div>\n            </div>\n            <div class=\"have_save\">\n                <p class=\"have-save-text\">SALE UP TO 30% OFF</p>\n                <h3 class=\"have-save-title\">18k Gold Bracelets</h3>\n                <button class=\"have-save-btn\">SHOP NOW</button>\n            </div>\n        </div>\n        <div class=\"have-shipping\">\n            <div class=\"have-shipping-box\">\n                <img class=\"have-shipping-img\" src=\"").concat(_car.default, "\"/>\n                <div class=\"have_shipping\">\n                    <h4 class=\"have-shipping-title\">FREE SHIPPING</h4>\n                    <p class=\"have-shipping-text\">Lorem ipsum dolor sit amet,.</p>\n                </div>\n            </div>\n            <div class=\"have-shipping-box\">\n                <img class=\"have-shipping-img\" src=\"").concat(_package.default, "\"/>\n                <div class=\"have_shipping\">\n                    <h4 class=\"have-shipping-title\">FREE IN STORE RETURN</h4>\n                    <p class=\"have-shipping-text\">Lorem ipsum dolor sit amet,.</p>\n                </div>\n            </div>\n            <div class=\"have-shipping-box\">\n                <img class=\"have-shipping-img\" src=\"").concat(_secure.default, "\"/>\n                <div class=\"have_shipping\">\n                    <h4 class=\"have-shipping-title\">100%SECURE CHECKOUT</h4>\n                    <p class=\"have-shipping-text\">Lorem ipsum dolor sit amet,.</p>\n                </div>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(mustHaveTitle, mustHaveBlock);
  return section;
}
},{"../../img/mustHave/have.png":"src/img/mustHave/have.png","../../img/mustHave/car.svg":"src/img/mustHave/car.svg","../../img/mustHave/package.svg":"src/img/mustHave/package.svg","../../img/mustHave/secure.svg":"src/img/mustHave/secure.svg","./mustHave.css":"src/components/mustHave/mustHave.css"}],"src/img/imageGallery/images-1.png":[function(require,module,exports) {
module.exports = "/images-1.63293946.png";
},{}],"src/img/imageGallery/images-2.png":[function(require,module,exports) {
module.exports = "/images-2.b3ce80ee.png";
},{}],"src/img/imageGallery/images-3.png":[function(require,module,exports) {
module.exports = "/images-3.302bd359.png";
},{}],"src/img/imageGallery/images-4.png":[function(require,module,exports) {
module.exports = "/images-4.98eb7348.png";
},{}],"src/img/imageGallery/images-5.png":[function(require,module,exports) {
module.exports = "/images-5.b34b4a9f.png";
},{}],"src/components/imageGallery/imageGallery.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/imageGallery/imageGallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageGallery = getImageGallery;
var _images = _interopRequireDefault(require("../../img/imageGallery/images-1.png"));
var _images2 = _interopRequireDefault(require("../../img/imageGallery/images-2.png"));
var _images3 = _interopRequireDefault(require("../../img/imageGallery/images-3.png"));
var _images4 = _interopRequireDefault(require("../../img/imageGallery/images-4.png"));
var _images5 = _interopRequireDefault(require("../../img/imageGallery/images-5.png"));
require("./imageGallery.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getImageGallery() {
  var section = document.createElement("section");
  section.className = "section-gallery";
  var container = document.createElement("div");
  container.className = "container";
  var galleryBlock = document.createElement("div");
  galleryBlock.className = "gallery-block";
  galleryBlock.innerHTML = "\n        <h2 class=\"gallery-title\">Image Gallery</h2>\n        <p class=\"gallery-text\">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>\n        <div class=\"gallery-box\">\n            <img class=\"gallery-img\" src=\"".concat(_images.default, "\"/>\n            <div class=\"gallery-minbox\">\n                <img class=\"gallery-img\" src=\"").concat(_images2.default, "\"/>\n                <div class=\"galeery-min\">\n                    <img class=\"gallery-img\" src=\"").concat(_images4.default, "\"/>\n                    <img class=\"gallery-img\" src=\"").concat(_images5.default, "\"/>\n                </div>\n            </div>\n            <img class=\"gallery-img\" src=\"").concat(_images3.default, "\"/>\n        </div>\n        <h3 class=\"gallery_title\">Newsletter Sign Up</h3>\n        <p class=\"gallery_text\">Sign up for new arrivals, offers, and more!</p>\n        <form class=\"gallery-form\">\n            <input class=\"gallery-input\" type=\"text\" placeholder=\"Enter Your Email\">\n            <button class=\"gallery-btn\" type=\"submit\">Submit</button>\n        </form>\n    ");
  section.append(container);
  container.append(galleryBlock);
  return section;
}
},{"../../img/imageGallery/images-1.png":"src/img/imageGallery/images-1.png","../../img/imageGallery/images-2.png":"src/img/imageGallery/images-2.png","../../img/imageGallery/images-3.png":"src/img/imageGallery/images-3.png","../../img/imageGallery/images-4.png":"src/img/imageGallery/images-4.png","../../img/imageGallery/images-5.png":"src/img/imageGallery/images-5.png","./imageGallery.css":"src/components/imageGallery/imageGallery.css"}],"src/page/pageMain.css":[function(require,module,exports) {
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
var _topProduct = require("../components/topProduct/topProduct");
var _newArrivals = require("../components/newArrivals/newArrivals");
var _newCollection = require("../components/newCollection/newCollection");
var _featuredProducts = require("../components/featuredProducts/featuredProducts");
var _mustHave = require("../components/mustHave/mustHave");
var _imageGallery = require("../components/imageGallery/imageGallery");
require("./pageMain.css");
function getMain() {
  var main = document.createElement("main");
  main.className = "main";
  main.append((0, _milancelosMain.getSectionMain)(), (0, _topProduct.getTopProduct)(), (0, _newArrivals.getNewArrivals)(), (0, _newCollection.getNewCollection)(), (0, _featuredProducts.getFeaturedProducts)(), (0, _mustHave.getMustHave)(), (0, _imageGallery.getImageGallery)());
  return main;
}
},{"../components/milancelos/milancelosMain":"src/components/milancelos/milancelosMain.js","../components/topProduct/topProduct":"src/components/topProduct/topProduct.js","../components/newArrivals/newArrivals":"src/components/newArrivals/newArrivals.js","../components/newCollection/newCollection":"src/components/newCollection/newCollection.js","../components/featuredProducts/featuredProducts":"src/components/featuredProducts/featuredProducts.js","../components/mustHave/mustHave":"src/components/mustHave/mustHave.js","../components/imageGallery/imageGallery":"src/components/imageGallery/imageGallery.js","./pageMain.css":"src/page/pageMain.css"}],"src/footers/footerAbout/footerAbout.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerAbout/footerAbout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterAbout = getFooterAbout;
require("./footerAbout.css");
function getFooterAbout() {
  var footerAbout = document.createElement("div");
  footerAbout.className = "footer-about";
  footerAbout.innerHTML = "\n        <div class=\"about-block\">\n            <h2 class=\"about-title\">About</h2>\n            <ul class=\"about-list\">\n                <li class=\"about-item\">\n                    <a class=\"about-link\" href=\"#\">Our Story</a>\n                </li>\n                <li class=\"about-item\">\n                    <a class=\"about-link\" href=\"#\">Careers</a>\n                </li>\n                <li class=\"about-item\">\n                    <a class=\"about-link\" href=\"#\">Press</a>\n                </li>\n                <li class=\"about-item\">\n                    <a class=\"about-link\" href=\"#\">Blog</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return footerAbout;
}
},{"./footerAbout.css":"src/footers/footerAbout/footerAbout.css"}],"src/footers/footerShop/footerShop.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerShop/footerShop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterShop = getFooterShop;
require("./footerShop.css");
function getFooterShop() {
  var footerShop = document.createElement("div");
  footerShop.className = "footer-shop";
  footerShop.innerHTML = "\n        <div class=\"shop-block\">\n            <h2 class=\"shop-title\">Shop</h2>\n            <ul class=\"shop-list\">\n                <li class=\"shop-item\">\n                    <a class=\"shop-link\" href=\"#\">Bibendumetos</a>\n                </li>\n                <li class=\"shop-item\">\n                    <a class=\"shop-link\" href=\"#\">Pellentes Habitanto</a>\n                </li>\n                <li class=\"shop-item\">\n                    <a class=\"shop-link\" href=\"#\">Senectus</a>\n                </li>\n                <li class=\"shop-item\">\n                    <a class=\"shop-link\" href=\"#\">Consequatod</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return footerShop;
}
},{"./footerShop.css":"src/footers/footerShop/footerShop.css"}],"src/footers/footerPopularSearch/footerPopularSearch.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerPopularSearch/footerPopularSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterPopularSearch = getFooterPopularSearch;
require("./footerPopularSearch.css");
function getFooterPopularSearch() {
  var footerPopularSearch = document.createElement("div");
  footerPopularSearch.className = "footer-popularSerch";
  footerPopularSearch.innerHTML = "\n        <div class=\"populerSearch-block\">\n            <h2 class=\"populerSearch-title\">Popular Search</h2>\n            <ul class=\"populerSearch-list\">\n                <li class=\"populerSearch-item\">\n                    <a class=\"populerSearch-link\" href=\"#\">18K White Gold</a>\n                </li>\n                <li class=\"populerSearch-item\">\n                    <a class=\"populerSearch-link\" href=\"#\">Rose Gold</a>\n                </li>\n                <li class=\"populerSearch-item\">\n                    <a class=\"populerSearch-link\" href=\"#\">Wedding Jewelry</a>\n                </li>\n                <li class=\"populerSearch-item\">\n                    <a class=\"populerSearch-link\" href=\"#\">Luxury Watches</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return footerPopularSearch;
}
},{"./footerPopularSearch.css":"src/footers/footerPopularSearch/footerPopularSearch.css"}],"src/footers/footerHelp/footerHelp.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerHelp/footerHelp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterHelp = getFooterHelp;
require("./footerHelp.css");
function getFooterHelp() {
  var footerHelp = document.createElement("div");
  footerHelp.className = "footer-help";
  footerHelp.innerHTML = "\n        <div class=\"help-block\">\n            <h2 class=\"help-title\">Help</h2>\n            <ul class=\"help-list\">\n                <li class=\"help-item\">\n                    <a class=\"help-link\" href=\"#\">Sizing Help</a>\n                </li>\n                <li class=\"help-item\">\n                    <a class=\"help-link\" href=\"#\">Returns & Exchanges</a>\n                </li>\n                <li class=\"help-item\">\n                    <a class=\"help-link\" href=\"#\">Shipping</a>\n                </li>\n                <li class=\"help-item\">\n                    <a class=\"help-link\" href=\"#\">Theme FAQs</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return footerHelp;
}
},{"./footerHelp.css":"src/footers/footerHelp/footerHelp.css"}],"src/footers/footerContact/footerContact.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerContact/footerContact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterContact = getFooterContact;
require("./footerContact.css");
function getFooterContact() {
  var footerContact = document.createElement("address");
  footerContact.className = "footer-contact";
  footerContact.innerHTML = "\n        <div class=\"contact-block\">\n            <h2 class=\"contact-title\">Contact Us</h2>\n            <ul class=\"contact-list\">\n                <li class=\"contact-item\">\n                    <a class=\"contact-link\" href=\"tel:\">TEXT: (090) 123-EIIA</a>\n                </li>\n                <li class=\"contact-item\">\n                    <a class=\"contact-link\" href=\"mailto:example@domain.com\">Email:example@domain.com</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return footerContact;
}
},{"./footerContact.css":"src/footers/footerContact/footerContact.css"}],"src/footers/footerAddress/footerAddress.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerAddress/footerAddress.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterAddress = getFooterAddress;
require("./footerAddress.css");
function getFooterAddress() {
  var footerAddress = document.createElement("address");
  footerAddress.className = "footer-address";
  footerAddress.innerHTML = "\n        <div class=\"address-block\">\n            <h2 class=\"address-title\">Address</h2>\n            <p class=\"address-text\">685 Market Street San Francisco, CA 94105, US</p>\n        </div>\n    ";
  return footerAddress;
}
},{"./footerAddress.css":"src/footers/footerAddress/footerAddress.css"}],"src/img/instagram.svg":[function(require,module,exports) {
module.exports = "/instagram.20737fa7.svg";
},{}],"src/img/facebook.svg":[function(require,module,exports) {
module.exports = "/facebook.64abde7d.svg";
},{}],"src/img/twitter.svg":[function(require,module,exports) {
module.exports = "/twitter.015fe60e.svg";
},{}],"src/footers/footerSocial/footerSocial.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/footers/footerSocial/footerSocial.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterSocial = getFooterSocial;
var _instagram = _interopRequireDefault(require("../../img/instagram.svg"));
var _facebook = _interopRequireDefault(require("../../img/facebook.svg"));
var _twitter = _interopRequireDefault(require("../../img/twitter.svg"));
require("./footerSocial.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var socialArray = [_instagram.default, _facebook.default, _twitter.default];
function getFooterSocial() {
  var list = document.createElement("ul");
  list.className = "footer-list";
  socialArray.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "footer-items";
    var link = document.createElement("a");
    link.className = "footer-link";
    link.href = "#";
    var img = document.createElement("img");
    img.className = "footer-img";
    img.src = item;
    img.alt = "Example image";
    list.appendChild(items);
    items.appendChild(link);
    link.appendChild(img);
  });
  return list;
}
},{"../../img/instagram.svg":"src/img/instagram.svg","../../img/facebook.svg":"src/img/facebook.svg","../../img/twitter.svg":"src/img/twitter.svg","./footerSocial.css":"src/footers/footerSocial/footerSocial.css"}],"src/components/footer/footer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footer/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooter = getFooter;
var _footerAbout = require("../../footers/footerAbout/footerAbout");
var _footerShop = require("../../footers/footerShop/footerShop");
var _footerPopularSearch = require("../../footers/footerPopularSearch/footerPopularSearch");
var _footerHelp = require("../../footers/footerHelp/footerHelp");
var _footerContact = require("../../footers/footerContact/footerContact");
var _footerAddress = require("../../footers/footerAddress/footerAddress");
var _footerSocial = require("../../footers/footerSocial/footerSocial");
var _logo = _interopRequireDefault(require("../../img/logo.svg"));
require("./footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getFooter() {
  var footer = document.createElement("footer");
  footer.className = "footer";
  var container = document.createElement("div");
  container.className = "container";
  var footerInner = document.createElement("div");
  footerInner.className = "footer-inner";
  var footerLogo = document.createElement("img");
  footerLogo.className = "footer-logo";
  footerLogo.src = _logo.default;
  footerLogo.alt = "Example image";
  var footerSocialBox = document.createElement("div");
  footerSocialBox.className = "footer-box";
  footer.append(container);
  container.append(footerInner, footerSocialBox);
  footerInner.append(footerLogo, (0, _footerAbout.getFooterAbout)(), (0, _footerShop.getFooterShop)(), (0, _footerPopularSearch.getFooterPopularSearch)(), (0, _footerHelp.getFooterHelp)(), (0, _footerContact.getFooterContact)(), (0, _footerAddress.getFooterAddress)());
  footerSocialBox.append((0, _footerSocial.getFooterSocial)());
  return footer;
}
},{"../../footers/footerAbout/footerAbout":"src/footers/footerAbout/footerAbout.js","../../footers/footerShop/footerShop":"src/footers/footerShop/footerShop.js","../../footers/footerPopularSearch/footerPopularSearch":"src/footers/footerPopularSearch/footerPopularSearch.js","../../footers/footerHelp/footerHelp":"src/footers/footerHelp/footerHelp.js","../../footers/footerContact/footerContact":"src/footers/footerContact/footerContact.js","../../footers/footerAddress/footerAddress":"src/footers/footerAddress/footerAddress.js","../../footers/footerSocial/footerSocial":"src/footers/footerSocial/footerSocial.js","../../img/logo.svg":"src/img/logo.svg","./footer.css":"src/components/footer/footer.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _header = require("./src/components/header/header.js");
var _pageMain = require("./src/page/pageMain.js");
var _footer = require("./src/components/footer/footer.js");
var app = document.querySelector("#app");
var header = (0, _header.getHeader)();
var main = (0, _pageMain.getMain)();
var footer = (0, _footer.getFooter)();
app.append(header, main, footer);
},{"./src/components/header/header.js":"src/components/header/header.js","./src/page/pageMain.js":"src/page/pageMain.js","./src/components/footer/footer.js":"src/components/footer/footer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43713" + '/');
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