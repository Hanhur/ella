import { shipingOvers } from "../shipingOvers/shipingOvers";
import { getSearch } from "../search/search";
import { Navigations } from "../navigations/navigation";

import "./header.css";

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    header.append(shipingOvers(), getSearch(), Navigations());

    return header;
}