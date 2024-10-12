import chevronDown from "../../img/chevron-down.svg";
import "./shipingOvers.css";

export function shipingOvers()
{
    const shipingOvers = document.createElement("div");
    shipingOvers.className = "shiping-overs";

    const shipingOversText = document.createElement("p")
    shipingOversText.className = "shiping-overs-text";
    shipingOversText.textContent = "FREE SHIPPING OVERS";

    const shipingOversSpan = document.createElement("span");
    shipingOversSpan.className = "shiping-overs-span";
    shipingOversSpan.textContent = "$99";

    const shipingOversSale = document.createElement("p");
    shipingOversSale.className = "shiping-overs-sale";
    shipingOversSale.textContent = "Mid-Season Sale Up to 70% OFF.";

    const shipingOversButton = document.createElement("button");
    shipingOversButton.className = "shiping-overs-btn";
    shipingOversButton.textContent = "INR";

    const shipingOversImages = document.createElement("img");
    shipingOversImages.className = "shiping-ovres-img";
    shipingOversImages.src = chevronDown;
    shipingOversImages.alt = "Example image";

    shipingOvers.append(shipingOversText, shipingOversSale, shipingOversButton);
    shipingOversText.append(shipingOversSpan);
    shipingOversButton.append(shipingOversImages);

    return shipingOvers;
}