parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"e2hA":[function(require,module,exports) {
module.exports="/ella/chevron-down.1288965a.svg";
},{}],"mbKa":[function(require,module,exports) {

},{}],"xEQe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shipingOvers=n;var e=t(require("../../img/chevron-down.svg"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){var t=document.createElement("div");t.className="shiping-overs";var n=document.createElement("p");n.className="shiping-overs-text",n.textContent="FREE SHIPPING OVERS";var s=document.createElement("span");s.className="shiping-overs-span",s.textContent="$99";var a=document.createElement("p");a.className="shiping-overs-sale",a.textContent="Mid-Season Sale Up to 70% OFF.";var r=document.createElement("button");r.className="shiping-overs-btn",r.textContent="INR";var i=document.createElement("img");return i.className="shiping-ovres-img",i.src=e.default,i.alt="Example image",t.append(n,a,r),n.append(s),r.append(i),t}require("./shipingOvers.css");
},{"../../img/chevron-down.svg":"e2hA","./shipingOvers.css":"mbKa"}],"OEkT":[function(require,module,exports) {
module.exports="/ella/logo.0643f726.svg";
},{}],"NEkv":[function(require,module,exports) {
module.exports="/ella/microfon.083dcd85.svg";
},{}],"wy9e":[function(require,module,exports) {
module.exports="/ella/search.e6a3b3c9.svg";
},{}],"kACH":[function(require,module,exports) {
module.exports="/ella/user.78e6e7c6.svg";
},{}],"Qs9Y":[function(require,module,exports) {
module.exports="/ella/heart.c04f5b7b.svg";
},{}],"zUo9":[function(require,module,exports) {
module.exports="/ella/shopping-bag.bb52d86c.svg";
},{}],"vO6E":[function(require,module,exports) {

},{"./../../img/search.svg":[["search.e6a3b3c9.svg","wy9e"],"wy9e"],"./../../img/microfon.svg":[["microfon.083dcd85.svg","NEkv"],"NEkv"]}],"jthq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSearch=i;var e=c(require("../../img/logo.svg")),a=c(require("../../img/microfon.svg")),r=c(require("../../img/search.svg")),t=c(require("../../img/user.svg")),m=c(require("../../img/heart.svg")),s=c(require("../../img/shopping-bag.svg"));function c(e){return e&&e.__esModule?e:{default:e}}function i(){var a=document.createElement("div");a.className="search-box";var r=document.createElement("img");r.className="search-logo-img",r.src=e.default,r.alt="Example image";var c=document.createElement("form");c.className="search-form";var i=document.createElement("input");i.className="search-input",i.placeholder="What are you looking for Today? e.g dimond ring";var l=document.createElement("img");l.className="search-user",l.src=t.default,l.alt="Example image";var u=document.createElement("img");u.className="heart-user",u.src=m.default,u.alt="Example image";var o=document.createElement("img");return o.className="shopping-bag",o.src=s.default,o.alt="Example image",a.append(r,c,l,u,o),c.append(i),a}require("./search.css");
},{"../../img/logo.svg":"OEkT","../../img/microfon.svg":"NEkv","../../img/search.svg":"wy9e","../../img/user.svg":"kACH","../../img/heart.svg":"Qs9Y","../../img/shopping-bag.svg":"zUo9","./search.css":"vO6E"}],"GiJk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Navigations=a,require("./navigation.css");var e=["Theme Demo","Shop","ProductHot","Blog","Pages","New In","Trend","Collections","Buy Ella"];function a(){var a=document.createElement("div");a.className="navigation";var n=document.createElement("nav");n.className="navigator";var t=document.createElement("ul");return t.className="list",e.forEach(function(e){var a=document.createElement("li");a.className="items";var n=document.createElement("a");n.className="link",n.href="/",t.appendChild(a),a.appendChild(n),n.innerHTML=e}),a.append(n),n.append(t),a}
},{"./navigation.css":"mbKa"}],"PU4h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHeader=i;var e=require("../shipingOvers/shipingOvers"),r=require("../search/search"),a=require("../navigations/navigation");function i(){var i=document.createElement("header");return i.className="header",i.append((0,e.shipingOvers)(),(0,r.getSearch)(),(0,a.Navigations)()),i}require("./header.css");
},{"../shipingOvers/shipingOvers":"xEQe","../search/search":"jthq","../navigations/navigation":"GiJk","./header.css":"mbKa"}],"OdPH":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("section");e.className="section-milancelos";var t=document.createElement("div");t.className="container";var n=document.createElement("p");n.className="new-text",n.textContent="NEW ARRIVALS";var a=document.createElement("h1");a.className="title",a.textContent="Milancélos";var c=document.createElement("p");c.className="text",c.textContent="Quisquemos sodale suscipit delio condiment cosmo lacus meleifend blanditos.";var s=document.createElement("button");return s.className="btn",s.textContent="SHOP NOW",e.append(t),t.append(n,a,c,s),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSectionMain=e,require("./milancelosMain.css");
},{"./milancelosMain.css":"mbKa"}],"QUrj":[function(require,module,exports) {
module.exports="/ella/diamond.644f5b5d.png";
},{}],"rGhV":[function(require,module,exports) {
module.exports="/ella/makers.a0c3f42a.png";
},{}],"oaCz":[function(require,module,exports) {
module.exports="/ella/nesting.5e2469f3.png";
},{}],"PbPH":[function(require,module,exports) {
module.exports="/ella/olive.c2753d4d.png";
},{}],"HcsG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTopProductShop=p;var o=n(require("../../img/topProduct/diamond.png")),t=n(require("../../img/topProduct/makers.png")),s=n(require("../../img/topProduct/nesting.png")),c=n(require("../../img/topProduct/olive.png"));function n(o){return o&&o.__esModule?o:{default:o}}function p(){var n=document.createElement("div");return n.className="product-shop",n.innerHTML='\n        <div class="product-shop-block">\n            <img class="product-shop-img" src="'.concat(o.default,'" alt="Diamond In Platinum"/>\n            <h3 class="product-shop-title">Diamond In Platinum</h3>\n            <p class="product-shop-text">Shop Now</p>\n        </div>\n        <div class="product-shop-block">\n            <img class="product-shop-img" src="').concat(t.default,'" alt="Makers Slice Ring"/>\n            <h3 class="product-shop-title">Makers Slice Ring</h3>\n            <p class="product-shop-text">Shop Now</p>\n        </div>\n        <div class="product-shop-block">\n            <img class="product-shop-img" src="').concat(s.default,'" alt="Nesting Band Ring"/>\n            <h3 class="product-shop-title">Nesting Band Ring</h3>\n            <p class="product-shop-text">Shop Now</p>\n        </div>\n        <div class="product-shop-block">\n            <img class="product-shop-img" src="').concat(c.default,'" alt="Olive Leaf Band Ring"/>\n            <h3 class="product-shop-title">Olive Leaf Band Ring</h3>\n            <p class="product-shop-text">Shop Now</p>\n        </div>\n    '),n}require("./topProductShop.css");
},{"../../img/topProduct/diamond.png":"QUrj","../../img/topProduct/makers.png":"rGhV","../../img/topProduct/nesting.png":"oaCz","../../img/topProduct/olive.png":"PbPH","./topProductShop.css":"mbKa"}],"Mixc":[function(require,module,exports) {
module.exports="/ella/chevron-left.760aebd1.svg";
},{}],"TQsp":[function(require,module,exports) {
module.exports="/ella/chevron-right.057288cb.svg";
},{}],"TSaB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTopProduct=o;var e=require("../topProductShop/topProductShop"),t=a(require("../../img/topProduct/chevron-left.svg")),r=a(require("../../img/topProduct/chevron-right.svg"));function a(e){return e&&e.__esModule?e:{default:e}}require("./topProduct.css");var c=["Diamond Ring","Bracelet","Pendant","Earring"];function o(){var a=document.createElement("section");a.className="section-product";var o=document.createElement("div");o.className="container";var n=document.createElement("div");n.className="product-block";var d=document.createElement("h2");d.className="product-title",d.textContent="Top Product";var u=document.createElement("ul");u.className="list-product",c.forEach(function(e){var t=document.createElement("li");t.className="items-product";var r=document.createElement("a");r.className="link-product",r.href="/",u.appendChild(t),t.appendChild(r),r.innerHTML=e});var l=document.createElement("img");l.className="chevron-lift",l.src=t.default,l.alt="Example image";var m=document.createElement("img");return m.className="chevron-right",m.src=r.default,m.alt="Example image",a.append(o),o.append(n,(0,e.getTopProductShop)()),n.append(d,u,l,m),a}
},{"../topProductShop/topProductShop":"HcsG","../../img/topProduct/chevron-left.svg":"Mixc","../../img/topProduct/chevron-right.svg":"TQsp","./topProduct.css":"mbKa"}],"rxtd":[function(require,module,exports) {
module.exports="/ella/group-1.a86f7d68.png";
},{}],"FhfG":[function(require,module,exports) {
module.exports="/ella/group-2.be0dcf45.png";
},{}],"vC2X":[function(require,module,exports) {
module.exports="/ella/group-3.eb8c2357.png";
},{}],"HMoV":[function(require,module,exports) {
module.exports="/ella/shopping-bag.a2fcc119.svg";
},{}],"jgkF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNewArrivals=i;var a=e(require("../../img/newArrivals/group-1.png")),s=e(require("../../img/newArrivals/group-2.png")),r=e(require("../../img/newArrivals/group-3.png")),n=e(require("../../img/newArrivals/shopping-bag.svg"));function e(a){return a&&a.__esModule?a:{default:a}}function i(){var e=document.createElement("section");e.className="section-arrivals";var i=document.createElement("div");i.className="container";var l=document.createElement("h2");l.className="arrivals-title",l.textContent="New Arrivals";var t=document.createElement("div");t.className="arrivals-block",t.innerHTML='\n        <div class="arrivals-box">\n            <img class="arrivals-img" src="'.concat(a.default,'" alt=""/>\n            <div class="arrivals-brend">\n                <div class="arrivals_brend">\n                    <span class="arrivals-span">$22.00</span>\n                    <span class="arrivals_span">$82.00</span>\n                    <p class="arrivals-text">Sterling Silver Band Ring</p>\n                </div>\n                <img class="arrivals-shopping" src="').concat(n.default,'" alt=""/>\n            </div>\n        </div>\n        <div class="arrivals-box">\n            <img class="arrivals-img" src="').concat(s.default,'" alt=""/>\n            <div class="arrivals-brend">\n                <div class="arrivals_brend">\n                    <span class="arrivals-span">$22.00</span>\n                    <span class="arrivals_span">$82.00</span>\n                    <p class="arrivals-text">Sterling Silver Band Ring</p>\n                </div>\n                <img class="arrivals-shopping" src="').concat(n.default,'" alt=""/>\n            </div>\n        </div>\n        <div class="arrivals-box">\n            <img class="arrivals-img" src="').concat(r.default,'" alt=""/>\n            <div class="arrivals-brend">\n                <div class="arrivals_brend">\n                    <span class="arrivals-span">$22.00</span>\n                    <span class="arrivals_span">$82.00</span>\n                    <p class="arrivals-text">Sterling Silver Band Ring</p>\n                </div>\n                <img class="arrivals-shopping" src="').concat(n.default,'" alt=""/>\n            </div>\n        </div>\n    ');var c=document.createElement("button");return c.className="arrivals-btn",c.textContent="View All",e.append(i),i.append(l,t,c),e}require("./newArrivals.css");
},{"../../img/newArrivals/group-1.png":"rxtd","../../img/newArrivals/group-2.png":"FhfG","../../img/newArrivals/group-3.png":"vC2X","../../img/newArrivals/shopping-bag.svg":"HMoV","./newArrivals.css":"mbKa"}],"KnI9":[function(require,module,exports) {
module.exports="/ella/birthday.11164844.png";
},{}],"h7F3":[function(require,module,exports) {
module.exports="/ella/summer.69a49e2e.png";
},{}],"GpeU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNewCollection=l;var e=c(require("../../img/birthday.png")),t=c(require("../../img/summer.png"));function c(e){return e&&e.__esModule?e:{default:e}}function l(){var c=document.createElement("section");c.className="section-collection";var l=document.createElement("div");l.className="container";var n=document.createElement("div");return n.className="collection-block",n.innerHTML='\n        <div class="collectiob-box">\n            <img class="birthday-img" src="'.concat(e.default,'" alt="Example image"/>\n            <div class="collection-birthday">\n                <p class="collection-text">Must See New Style</p>\n                <h2 class="collection-title">Birthday Collection</h2>\n                <button class="collection-btn">Shop Now</button>\n            </div>\n        </div>\n        <div class="collectiob-box">\n            <img class="birthday-img" src="').concat(t.default,'" alt="Example image"/>\n            <div class="collection-birthday">\n                <p class="collection-text">New collection</p>\n                <h2 class="collection-title">Summer Essentials</h2>\n                <button class="collection-btn">Shop Now</button>\n            </div>\n        </div>\n    '),c.append(l),l.append(n),c}require("./newCollection.css");
},{"../../img/birthday.png":"KnI9","../../img/summer.png":"h7F3","./newCollection.css":"mbKa"}],"iiCO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFeaturedProducts=r;var e=t(require("../../img/newArrivals/group-1.png")),a=t(require("../../img/newArrivals/group-2.png")),n=t(require("../../img/newArrivals/group-3.png")),s=t(require("../../img/newArrivals/shopping-bag.svg"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){var t=document.createElement("section");t.className="section-products";var r=document.createElement("h2");r.className="featured-title",r.textContent="Featured Products";var d=document.createElement("div");d.className="featured-block",d.innerHTML='\n        <div class="featured-box">\n            <img class="featured-img" src="'.concat(e.default,'" alt=""/>\n            <div class="featured-brend">\n                <div class="featured_brend">\n                    <span class="featured-span">$22.00</span>\n                    <span class="featured_span">$82.00</span>\n                    <p class="afeaturedtext">Sterling Silver Band Ring</p>\n                </div>\n                <img class="featured-shopping" src="').concat(s.default,'" alt=""/>\n            </div>\n        </div>\n        <div class="featured-box">\n            <img class="featured-img" src="').concat(a.default,'" alt=""/>\n            <div class="featured-brend">\n                <div class="featured_brend">\n                    <span class="featured-span">$22.00</span>\n                    <span class="featured_span">$82.00</span>\n                    <p class="featured-text">Sterling Silver Band Ring</p>\n                </div>\n                <img class="featured-shopping" src="').concat(s.default,'" alt=""/>\n            </div>\n        </div>\n        <div class="featured-box">\n            <img class="featured-img" src="').concat(n.default,'" alt=""/>\n            <div class="featured-brend">\n                <div class="featured_brend">\n                    <span class="featured-span">$22.00</span>\n                    <span class="featured_span">$82.00</span>\n                    <p class="featured-text">Sterling Silver Band Ring</p>\n                </div>\n                <img class="featured-shopping" src="').concat(s.default,'" alt=""/>\n            </div>\n        </div>\n        \n    ');var c=document.createElement("button");return c.className="featured-btn",c.textContent="View All",t.append(r,d,c),t}require("./featuredProducts.css");
},{"../../img/newArrivals/group-1.png":"rxtd","../../img/newArrivals/group-2.png":"FhfG","../../img/newArrivals/group-3.png":"vC2X","../../img/newArrivals/shopping-bag.svg":"HMoV","./featuredProducts.css":"mbKa"}],"UspE":[function(require,module,exports) {

},{"./../img/main-bg.png":[["main-bg.f3ad2d1f.png","uxOP"],"uxOP"]}],"BzMS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMain=c;var e=require("../components/milancelos/milancelosMain"),r=require("../components/topProduct/topProduct"),t=require("../components/newArrivals/newArrivals"),o=require("../components/newCollection/newCollection"),n=require("../components/featuredProducts/featuredProducts");function c(){var c=document.createElement("main");return c.className="main",c.append((0,e.getSectionMain)(),(0,r.getTopProduct)(),(0,t.getNewArrivals)(),(0,o.getNewCollection)(),(0,n.getFeaturedProducts)()),c}require("./pageMain.css");
},{"../components/milancelos/milancelosMain":"OdPH","../components/topProduct/topProduct":"TSaB","../components/newArrivals/newArrivals":"jgkF","../components/newCollection/newCollection":"GpeU","../components/featuredProducts/featuredProducts":"iiCO","./pageMain.css":"UspE"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./src/components/header/header.js"),r=require("./src/page/pageMain.js"),a=document.querySelector("#app"),p=(0,e.getHeader)(),s=(0,r.getMain)();a.append(p,s);
},{"./src/components/header/header.js":"PU4h","./src/page/pageMain.js":"BzMS"}]},{},["Focm"], null)
//# sourceMappingURL=/ella/ella.44e34e99.js.map