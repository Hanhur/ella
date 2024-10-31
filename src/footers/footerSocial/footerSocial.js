import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";

const socialArray = [instagram, facebook, twitter];

import "./footerSocial.css";

export function getFooterSocial()
{
    const list = document.createElement("ul");
    list.className = "footer-list";

    socialArray.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "footer-items";

        const link = document.createElement("a");
        link.className = "footer-link";
        link.href = "#";

        const img = document.createElement("img");
        img.className = "footer-img";
        img.src = item;
        img.alt = "Example image";

        list.appendChild(items);
        items.appendChild(link);
        link.appendChild(img);
    });

    return list;
}