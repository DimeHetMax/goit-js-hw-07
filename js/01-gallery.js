import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery")
const imageMarkup = createImageMarkup(galleryItems)
ulEl.insertAdjacentHTML('beforeend', imageMarkup)
ulEl.addEventListener("click", onImageClick)

function createImageMarkup(images){
    return images.map(({preview,original,description})=>{
        return ` 
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li>`
    }).join("");
}

function onImageClick (event){
    event.preventDefault()
    if(event.target.nodeName !== "IMG"  && event.target.nodeName !== "A"){
        return;
    }
    const img = event.target.dataset.source;
    basicLightbox.create(`
		<img class ="js-opened-modal" src="${img}">
	`).show()
}


// document.addEventListener("keydown", onButtonEscape);

// function onButtonEscape(event){
//     event.preventDefault();
//     if(event.code !== "Escape"){
//         return
//     }
//     console.log("It was definatly ESCAPE")
// }