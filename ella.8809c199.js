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
},{"./milancelosMain.css":"mbKa"}],"Mixc":[function(require,module,exports) {
module.exports="/ella/chevron-left.760aebd1.svg";
},{}],"TQsp":[function(require,module,exports) {
module.exports="/ella/chevron-right.057288cb.svg";
},{}],"TSaB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTopProduct=c;var e=r(require("../../img/topProduct/chevron-left.svg")),t=r(require("../../img/topProduct/chevron-right.svg"));function r(e){return e&&e.__esModule?e:{default:e}}require("./topProduct.css");var a=["Diamond Ring","Bracelet","Pendant","Earring"];function c(){var r=document.createElement("section");r.className="section-product";var c=document.createElement("div");c.className="container";var n=document.createElement("div");n.className="product-block";var o=document.createElement("h2");o.className="product-title",o.textContent="Top Product";var l=document.createElement("ul");l.className="list-product",a.forEach(function(e){var t=document.createElement("li");t.className="items-product";var r=document.createElement("a");r.className="link-product",r.href="/",l.appendChild(t),t.appendChild(r),r.innerHTML=e});var d=document.createElement("img");d.className="chevron-lift",d.src=e.default,d.alt="Example image";var m=document.createElement("img");return m.className="chevron-right",m.src=t.default,m.alt="Example image",r.append(c),c.append(n),n.append(o,l,d,m),r}
},{"../../img/topProduct/chevron-left.svg":"Mixc","../../img/topProduct/chevron-right.svg":"TQsp","./topProduct.css":"mbKa"}],"UspE":[function(require,module,exports) {

},{"./../img/main-bg.png":[["main-bg.f3ad2d1f.png","uxOP"],"uxOP"]}],"BzMS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMain=n;var e=require("../components/milancelos/milancelosMain"),t=require("../components/topProduct/topProduct");function n(){var n=document.createElement("main");return n.className="main",n.append((0,e.getSectionMain)(),(0,t.getTopProduct)()),n}require("./pageMain.css");
},{"../components/milancelos/milancelosMain":"OdPH","../components/topProduct/topProduct":"TSaB","./pageMain.css":"UspE"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./src/components/header/header.js"),r=require("./src/page/pageMain.js"),a=document.querySelector("#app"),p=(0,e.getHeader)(),s=(0,r.getMain)();a.append(p,s);
},{"./src/components/header/header.js":"PU4h","./src/page/pageMain.js":"BzMS"}]},{},["Focm"], null)
//# sourceMappingURL=/ella/ella.8809c199.js.map