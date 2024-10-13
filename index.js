import { getHeader } from "./src/components/header/header.js";
import { getMain } from "./src/page/pageMain.js";

const app = document.querySelector("#app");


const header = getHeader();
const main = getMain();


app.append(header, main);