import { getSectionMain } from "../components/milancelos/milancelosMain";


import "./pageMain.css";

export function getMain()
{
    const main = document.createElement("main");
    main.className = "main";

    main.append(getSectionMain());

    return main;
}