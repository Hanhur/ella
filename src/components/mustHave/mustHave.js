import havePng from "../../img/mustHave/have.png";
import carSvg from "../../img/mustHave/car.svg";
import packageSvg from "../../img/mustHave/package.svg";
import secureSvg from "../../img/mustHave/secure.svg";

import "./mustHave.css";

export function getMustHave()
{
    const section = document.createElement("section");
    section.className = "section-have";

    const container = document.createElement("div");
    container.className = "container";

    const mustHaveTitle = document.createElement("h2");
    mustHaveTitle.className = "have-title";
    mustHaveTitle.textContent = "Must Have";

    const mustHaveBlock = document.createElement("div");
    mustHaveBlock.className = "have-block";
    mustHaveBlock.innerHTML = `
        <div class="have-box">
            <div class="have_box">
                <img class="have-img" src="${havePng}"/>
                <div class="have-save">
                    <p class="have-save_text">18k Gold Bracelets</p>
                    <span class="have-save_span">SALE UP TO 30% OFF</span>
                </div>
            </div>
            <div class="have_save">
                <p class="have-save-text">SALE UP TO 30% OFF</p>
                <h3 class="have-save-title">18k Gold Bracelets</h3>
                <button class="have-save-btn">SHOP NOW</button>
            </div>
        </div>
        <div class="have-shipping">
            <div class="have-shipping-box">
                <img class="have-shipping-img" src="${carSvg}"/>
                <div class="have_shipping">
                    <h4 class="have-shipping-title">FREE SHIPPING</h4>
                    <p class="have-shipping-text">Lorem ipsum dolor sit amet,.</p>
                </div>
            </div>
            <div class="have-shipping-box">
                <img class="have-shipping-img" src="${packageSvg}"/>
                <div class="have_shipping">
                    <h4 class="have-shipping-title">FREE IN STORE RETURN</h4>
                    <p class="have-shipping-text">Lorem ipsum dolor sit amet,.</p>
                </div>
            </div>
            <div class="have-shipping-box">
                <img class="have-shipping-img" src="${secureSvg}"/>
                <div class="have_shipping">
                    <h4 class="have-shipping-title">100%SECURE CHECKOUT</h4>
                    <p class="have-shipping-text">Lorem ipsum dolor sit amet,.</p>
                </div>
            </div>
        </div>
    `;

    section.append(container);
    container.append(mustHaveTitle, mustHaveBlock);

    return section;
}