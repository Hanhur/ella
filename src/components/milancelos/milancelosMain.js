import "./milancelosMain.css";

export function getSectionMain()
{
    const section = document.createElement("section")
    section.className = "section-milancelos";

    const container = document.createElement("div");
    container.className = "container";

    section.append(container);

    return section;
}