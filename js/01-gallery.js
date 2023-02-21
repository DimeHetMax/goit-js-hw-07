import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerEl = document.querySelector(".gallery");
const images = createGalleryItems(galleryItems);

containerEl.insertAdjacentHTML("beforeend", images)
containerEl.addEventListener('click', onGalleryContainerClick)

function createGalleryItems(images){
    return images.map(({preview, original, description} )=> 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
     </div>`  
    ).join("")
}

function onGalleryContainerClick(event){
    if(event.target.nodeName !== "IMG"){
        return
    }
    const originalImageLink = event.target.dataset.source;
    console.log(originalImageLink)

}
