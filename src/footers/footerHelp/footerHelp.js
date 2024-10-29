import "./footerHelp.css";

export function getFooterHelp()
{
    const footerHelp = document.createElement("div");
    footerHelp.className = "footer-help";
    footerHelp.innerHTML = `
        <div class="help-block">
            <h2 class="help-title">Help</h2>
            <ul class="help-list">
                <li class="help-item">
                    <a class="help-link" href="#">Sizing Help</a>
                </li>
                <li class="help-item">
                    <a class="help-link" href="#">Returns & Exchanges</a>
                </li>
                <li class="help-item">
                    <a class="help-link" href="#">Shipping</a>
                </li>
                <li class="help-item">
                    <a class="help-link" href="#">Theme FAQs</a>
                </li>
            </ul>
        </div>
    `;

    return footerHelp;
}