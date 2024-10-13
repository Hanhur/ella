import "./milancelosMain.css";

export function getSectionMain()
{
    const section = document.createElement("section")
    section.className = "section-milancelos";

    const container = document.createElement("div");
    container.className = "container";

    const newText = document.createElement("p");
    newText.className = "new-text";
    newText.textContent = "NEW ARRIVALS";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Milancélos";

    const text = document.createElement("p");
    text.className = "text";
    text.textContent = "Quisquemos sodale suscipit delio condiment cosmo lacus meleifend blanditos.";

    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = "SHOP NOW";

    section.append(container);
    container.append(newText, title, text, button);

    return section;
}