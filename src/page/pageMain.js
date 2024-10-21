import { getSectionMain } from "../components/milancelos/milancelosMain";
import { getTopProduct } from "../components/topProduct/topProduct";


import "./pageMain.css";

export function getMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(getSectionMain(), getTopProduct());

    return main;
}