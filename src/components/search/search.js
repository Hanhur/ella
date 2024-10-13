import logo from "../../img/logo.svg";
import microfonSvg from "../../img/microfon.svg";
import searchSvg from "../../img/search.svg";
import userSvg from "../../img/user.svg";
import heartSvg from "../../img/heart.svg";
import shoppingBagSvg from "../../img/shopping-bag.svg";

import "./search.css";

export function getSearch()
{
    const searchBox = document.createElement("div");
    searchBox.className = "search-box";

    const searchLogo = document.createElement("img");
    searchLogo.className = "search-logo-img";
    searchLogo.src = logo;
    searchLogo.alt = "Example image";

    const searchForm = document.createElement("form");
    searchForm.className = "search-form";
    
    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "What are you looking for Today? e.g dimond ring";

    const searchUser = document.createElement("img");
    searchUser.className = "search-user";
    searchUser.src = userSvg;
    searchUser.alt = "Example image";

    const searchHeart = document.createElement("img");
    searchHeart.className = "heart-user";
    searchHeart.src = heartSvg;
    searchHeart.alt = "Example image";

    const searchShoppingBag = document.createElement("img");
    searchShoppingBag.className = "shopping-bag";
    searchShoppingBag.src = shoppingBagSvg;
    searchShoppingBag.alt = "Example image";

    searchBox.append(searchLogo, searchForm, searchUser, searchHeart, searchShoppingBag);
    searchForm.append(searchInput);

    return searchBox;
}