import { getSectionMain } from "../components/milancelos/milancelosMain";
import { getTopProduct } from "../components/topProduct/topProduct";
import { getNewArrivals } from "../components/newArrivals/newArrivals";
import { getNewCollection } from "../components/newCollection/newCollection";
import { getFeaturedProducts } from "../components/featuredProducts/featuredProducts";
import { getMustHave } from "../components/mustHave/mustHave";
import { getImageGallery } from "../components/imageGallery/imageGallery";


import "./pageMain.css";

export function getMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(
        getSectionMain(), 
        getTopProduct(),
        getNewArrivals(),
        getNewCollection(),
        getFeaturedProducts(),
        getMustHave(),
        getImageGallery()
    );

    return main;
}