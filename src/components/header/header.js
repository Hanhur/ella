import { shipingOvers } from "../shipingOvers/shipingOvers";
import { getSearch } from "../search/search";

import "./header.css";

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";

    header.append(container);
    container.append(shipingOvers(), getSearch());

    return header;
}