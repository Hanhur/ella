import diamondImg from "../../img/topProduct/diamond.png";
import makersImg from "../../img/topProduct/makers.png";
import nestingImg from "../../img/topProduct/nesting.png";
import oliveImg from "../../img/topProduct/olive.png";

import "./topProductShop.css";

export function getTopProductShop()
{
    const productShop = document.createElement("div");
    productShop.className = "product-shop";
    productShop.innerHTML = `
        <div class="product-shop-block">
            <img class="product-shop-img" src="${diamondImg}" alt="Diamond In Platinum"/>
            <h3 class="product-shop-title">Diamond In Platinum</h3>
            <p class="product-shop-text">Shop Now</p>
        </div>
        <div class="product-shop-block">
            <img class="product-shop-img" src="${makersImg}" alt="Makers Slice Ring"/>
            <h3 class="product-shop-title">Makers Slice Ring</h3>
            <p class="product-shop-text">Shop Now</p>
        </div>
        <div class="product-shop-block">
            <img class="product-shop-img" src="${nestingImg}" alt="Nesting Band Ring"/>
            <h3 class="product-shop-title">Nesting Band Ring</h3>
            <p class="product-shop-text">Shop Now</p>
        </div>
        <div class="product-shop-block">
            <img class="product-shop-img" src="${oliveImg}" alt="Olive Leaf Band Ring"/>
            <h3 class="product-shop-title">Olive Leaf Band Ring</h3>
            <p class="product-shop-text">Shop Now</p>
        </div>
    `;
    
    return productShop;
}