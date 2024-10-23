import group1Img from "../../img/newArrivals/group-1.png";
import group2Img from "../../img/newArrivals/group-2.png";
import group3Img from "../../img/newArrivals/group-3.png";
import shoppingBagSvg from "../../img/newArrivals/shopping-bag.svg";

import "./featuredProducts.css";

export function getFeaturedProducts()
{
    const section = document.createElement("section");
    section.className = "section-products";

    const featuredProductsTitle = document.createElement("h2");
    featuredProductsTitle.className = "featured-title";
    featuredProductsTitle.textContent = "Featured Products";
    
    const featuredProductsBlock = document.createElement("div");
    featuredProductsBlock.className = "featured-block";
    featuredProductsBlock.innerHTML = `
        <div class="featured-box">
            <img class="featured-img" src="${group1Img}" alt=""/>
            <div class="featured-brend">
                <div class="featured_brend">
                    <span class="featured-span">$22.00</span>
                    <span class="featured_span">$82.00</span>
                    <p class="afeaturedtext">Sterling Silver Band Ring</p>
                </div>
                <img class="featured-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
        <div class="featured-box">
            <img class="featured-img" src="${group2Img}" alt=""/>
            <div class="featured-brend">
                <div class="featured_brend">
                    <span class="featured-span">$22.00</span>
                    <span class="featured_span">$82.00</span>
                    <p class="featured-text">Sterling Silver Band Ring</p>
                </div>
                <img class="featured-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
        <div class="featured-box">
            <img class="featured-img" src="${group3Img}" alt=""/>
            <div class="featured-brend">
                <div class="featured_brend">
                    <span class="featured-span">$22.00</span>
                    <span class="featured_span">$82.00</span>
                    <p class="featured-text">Sterling Silver Band Ring</p>
                </div>
                <img class="featured-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
        
    `;

    const featuredProductsButton = document.createElement("button");
    featuredProductsButton.className = "featured-btn";
    featuredProductsButton.textContent = "View All";

    section.append(featuredProductsTitle, featuredProductsBlock, featuredProductsButton);

    return section;
}