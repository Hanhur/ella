import images1Img from "../../img/imageGallery/images-1.png";
import images2Img from "../../img/imageGallery/images-2.png";
import images3Img from "../../img/imageGallery/images-3.png";
import images4Img from "../../img/imageGallery/images-4.png";
import images5Img from "../../img/imageGallery/images-5.png";
import "./imageGallery.css";

export function getImageGallery()
{
    const section = document.createElement("section");
    section.className = "section-gallery";

    const container = document.createElement("div");
    container.className = "container";

    const galleryBlock = document.createElement("div");
    galleryBlock.className = "gallery-block";
    galleryBlock.innerHTML = `
        <h2 class="gallery-title">Image Gallery</h2>
        <p class="gallery-text">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
        <div class="gallery-box">
            <img class="gallery-img" src="${images1Img}"/>
            <div class="gallery-minbox">
                <img class="gallery-img" src="${images2Img}"/>
                <div class="galeery-min">
                    <img class="gallery-img" src="${images4Img}"/>
                    <img class="gallery-img" src="${images5Img}"/>
                </div>
            </div>
            <img class="gallery-img" src="${images3Img}"/>
        </div>
        <h3 class="gallery_title">Newsletter Sign Up</h3>
        <p class="gallery_text">Sign up for new arrivals, offers, and more!</p>
        <form class="gallery-form">
            <input class="gallery-input" type="text" placeholder="Enter Your Email">
            <button class="gallery-btn" type="submit">Submit</button>
        </form>
    `;

    section.append(container);
    container.append(galleryBlock);

    return section;
}