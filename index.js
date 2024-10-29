import { getHeader } from "./src/components/header/header.js";
import { getMain } from "./src/page/pageMain.js";
import { getFooter } from "./src/components/footer/footer.js";

const app = document.querySelector("#app");

const header = getHeader();
const main = getMain();
const footer = getFooter();

app.append(header, main, footer);