import "./footerAbout.css";

export function getFooterAbout()
{
    const footerAbout = document.createElement("div");
    footerAbout.className = "footer-about";
    footerAbout.innerHTML = `
        <div class="about-block">
            <h2 class="about-title">About</h2>
            <ul class="about-list">
                <li class="about-item">
                    <a class="about-link" href="#">Our Story</a>
                </li>
                <li class="about-item">
                    <a class="about-link" href="#">Careers</a>
                </li>
                <li class="about-item">
                    <a class="about-link" href="#">Press</a>
                </li>
                <li class="about-item">
                    <a class="about-link" href="#">Blog</a>
                </li>
            </ul>
        </div>
    `;

    return footerAbout;
}
