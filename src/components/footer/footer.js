import { getFooterAbout } from "../../footers/footerAbout/footerAbout";
import { getFooterShop } from "../../footers/footerShop/footerShop";
import { getFooterPopularSearch } from "../../footers/footerPopularSearch/footerPopularSearch";
import { getFooterHelp } from "../../footers/footerHelp/footerHelp";
import { getFooterContact } from "../../footers/footerContact/footerContact";
import { getFooterAddress } from "../../footers/footerAddress/footerAddress";
import { getFooterSocial } from "../../footers/footerSocial/footerSocial";

import logo from "../../img/logo.svg";
import "./footer.css";

export function getFooter()
{
    const footer = document.createElement("footer");
    footer.className = "footer";

    const container = document.createElement("div");
    container.className = "container";

    const footerInner = document.createElement("div");
    footerInner.className = "footer-inner";

    const footerLogo = document.createElement("img");
    footerLogo.className = "footer-logo";
    footerLogo.src = logo;
    footerLogo.alt = "Example image";

    const footerSocialBox = document.createElement("div");
    footerSocialBox.className = "footer-box";

    footer.append(container);
    container.append(footerInner, footerSocialBox);

    footerInner.append(
        footerLogo, 
        getFooterAbout(),
        getFooterShop(),
        getFooterPopularSearch(),
        getFooterHelp(),
        getFooterContact(),
        getFooterAddress(),
    );

    footerSocialBox.append(getFooterSocial());

    return footer;
}