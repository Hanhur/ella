import "./footerAddress.css";

export function getFooterAddress()
{
    const footerAddress = document.createElement("address");
    footerAddress.className = "footer-address";
    footerAddress.innerHTML = `
        <div class="address-block">
            <h2 class="address-title">Address</h2>
            <p class="address-text">685 Market Street San Francisco, CA 94105, US</p>
        </div>
    `;

    return footerAddress;
}