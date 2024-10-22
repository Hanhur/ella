import { getTopProductShop } from "../topProductShop/topProductShop";
import chevronLeft from "../../img/topProduct/chevron-left.svg";
import chevronRight from "../../img/topProduct/chevron-right.svg";

import "./topProduct.css";

const productArray = ["Diamond Ring", "Bracelet", "Pendant", "Earring"];

export function getTopProduct()
{
    const section = document.createElement("section");
    section.className = "section-product";

    const container = document.createElement("div");
    container.className = "container";

    const productBlock = document.createElement("div");
    productBlock.className = "product-block";

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = "Top Product";

    const list = document.createElement("ul");
    list.className = "list-product";

    productArray.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "items-product";

        const link = document.createElement("a");
        link.className = "link-product";
        link.href = "/";
        
        list.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });

    const chevronLeftSvg = document.createElement("img");
    chevronLeftSvg.className = "chevron-lift";
    chevronLeftSvg.src = chevronLeft;
    chevronLeftSvg.alt = "Example image";

    const chevronRightSvg = document.createElement("img");
    chevronRightSvg.className = "chevron-right";
    chevronRightSvg.src = chevronRight;
    chevronRightSvg.alt = "Example image";


    section.append(container);
    container.append(productBlock, getTopProductShop());
    productBlock.append(title, list, chevronLeftSvg, chevronRightSvg);

    return section;
}