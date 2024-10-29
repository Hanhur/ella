import "./footerPopularSearch.css";

export function getFooterPopularSearch()
{
    const footerPopularSearch = document.createElement("div");
    footerPopularSearch.className = "footer-popularSerch";
    footerPopularSearch.innerHTML = `
        <div class="populerSearch-block">
            <h2 class="populerSearch-title">Popular Search</h2>
            <ul class="populerSearch-list">
                <li class="populerSearch-item">
                    <a class="populerSearch-link" href="#">18K White Gold</a>
                </li>
                <li class="populerSearch-item">
                    <a class="populerSearch-link" href="#">Rose Gold</a>
                </li>
                <li class="populerSearch-item">
                    <a class="populerSearch-link" href="#">Wedding Jewelry</a>
                </li>
                <li class="populerSearch-item">
                    <a class="populerSearch-link" href="#">Luxury Watches</a>
                </li>
            </ul>
        </div>
    `;

    return footerPopularSearch;
}