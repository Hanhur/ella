import { getHeader } from "./src/components/header/header.js";

const app = document.querySelector("#app");


const header = getHeader();


app.append(header);