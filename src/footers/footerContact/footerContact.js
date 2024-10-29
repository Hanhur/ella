import "./footerContact.css";

export function getFooterContact()
{
    const footerContact = document.createElement("address");
    footerContact.className = "footer-contact";
    footerContact.innerHTML = `
        <div class="contact-block">
            <h2 class="contact-title">Contact Us</h2>
            <ul class="contact-list">
                <li class="contact-item">
                    <a class="contact-link" href="tel:">TEXT: (090) 123-EIIA</a>
                </li>
                <li class="contact-item">
                    <a class="contact-link" href="mailto:example@domain.com">Email:example@domain.com</a>
                </li>
            </ul>
        </div>
    `;

    return footerContact;
}