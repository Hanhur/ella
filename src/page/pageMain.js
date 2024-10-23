import { getSectionMain } from "../components/milancelos/milancelosMain";
import { getTopProduct } from "../components/topProduct/topProduct";
import { getNewArrivals } from "../components/newArrivals/newArrivals";
import { getNewCollection } from "../components/newCollection/newCollection";


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
    );

    return main;
}