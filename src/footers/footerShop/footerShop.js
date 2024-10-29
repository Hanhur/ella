import "./footerShop.css";

export function getFooterShop()
{
    const footerShop = document.createElement("div");
    footerShop.className = "footer-shop";
    footerShop.innerHTML = `
        <div class="shop-block">
            <h2 class="shop-title">Shop</h2>
            <ul class="shop-list">
                <li class="shop-item">
                    <a class="shop-link" href="#">Bibendumetos</a>
                </li>
                <li class="shop-item">
                    <a class="shop-link" href="#">Pellentes Habitanto</a>
                </li>
                <li class="shop-item">
                    <a class="shop-link" href="#">Senectus</a>
                </li>
                <li class="shop-item">
                    <a class="shop-link" href="#">Consequatod</a>
                </li>
            </ul>
        </div>
    `;

    return footerShop;
}