import group1Img from "../../img/newArrivals/group-1.png";
import group2Img from "../../img/newArrivals/group-2.png";
import group3Img from "../../img/newArrivals/group-3.png";
import shoppingBagSvg from "../../img/newArrivals/shopping-bag.svg";
import "./newArrivals.css";

export function getNewArrivals()
{
    const section = document.createElement("section");
    section.className = "section-arrivals";

    const container = document.createElement("div");
    container.className = "container";

    const newArrivalsTitle = document.createElement("h2");
    newArrivalsTitle.className = "arrivals-title";
    newArrivalsTitle.textContent = "New Arrivals";

    const newArrivalsBlock = document.createElement("div");
    newArrivalsBlock.className = "arrivals-block";
    newArrivalsBlock.innerHTML = `
        <div class="arrivals-box">
            <img class="arrivals-img" src="${group1Img}" alt=""/>
            <div class="arrivals-brend">
                <div class="arrivals_brend">
                    <span class="arrivals-span">$22.00</span>
                    <span class="arrivals_span">$82.00</span>
                    <p class="arrivals-text">Sterling Silver Band Ring</p>
                </div>
                <img class="arrivals-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
        <div class="arrivals-box">
            <img class="arrivals-img" src="${group2Img}" alt=""/>
            <div class="arrivals-brend">
                <div class="arrivals_brend">
                    <span class="arrivals-span">$22.00</span>
                    <span class="arrivals_span">$82.00</span>
                    <p class="arrivals-text">Sterling Silver Band Ring</p>
                </div>
                <img class="arrivals-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
        <div class="arrivals-box">
            <img class="arrivals-img" src="${group3Img}" alt=""/>
            <div class="arrivals-brend">
                <div class="arrivals_brend">
                    <span class="arrivals-span">$22.00</span>
                    <span class="arrivals_span">$82.00</span>
                    <p class="arrivals-text">Sterling Silver Band Ring</p>
                </div>
                <img class="arrivals-shopping" src="${shoppingBagSvg}" alt=""/>
            </div>
        </div>
    `;

    const arrivalsButton = document.createElement("button");
    arrivalsButton.className = "arrivals-btn";
    arrivalsButton.textContent = "View All";

    section.append(container);
    container.append(newArrivalsTitle, newArrivalsBlock, arrivalsButton);

    return section;
}