import birthdayImg from "../../img/birthday.png";
import summerImg from "../../img/summer.png";
import "./newCollection.css";

export function getNewCollection()
{
    const section = document.createElement("section");
    section.className = "section-collection";

    const container = document.createElement("div");
    container.className = "container";

    const newCollectionBlock = document.createElement("div");
    newCollectionBlock.className = "collection-block";
    newCollectionBlock.innerHTML = `
        <div class="collectiob-box">
            <img class="birthday-img" src="${birthdayImg}" alt="Example image"/>
            <div class="collection-birthday">
                <p class="collection-text">Must See New Style</p>
                <h2 class="collection-title">Birthday Collection</h2>
                <button class="collection-btn">Shop Now</button>
            </div>
        </div>
        <div class="collectiob-box">
            <img class="birthday-img" src="${summerImg}" alt="Example image"/>
            <div class="collection-birthday">
                <p class="collection-text">New collection</p>
                <h2 class="collection-title">Summer Essentials</h2>
                <button class="collection-btn">Shop Now</button>
            </div>
        </div>
    `;

    section.append(container);
    container.append(newCollectionBlock);

    return section;
}