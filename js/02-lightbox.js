import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// ==========================================================================
const ulEl = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems)
ulEl.insertAdjacentHTML('beforeend', imageMarkup)

function createImageMarkup(images){
    return images.map(({preview,original,description})=>{
        return ` 
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" 
                />
            </a>
        </li>`
    }).join("");
}

let gallery = new SimpleLightbox('.gallery .gallery__link',{captionsData: "alt", captionDelay: 250});

gallery.on('show.simplelightbox', function () {});
