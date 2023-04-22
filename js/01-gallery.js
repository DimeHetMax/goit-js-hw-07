import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()

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
		<img src="${img}">
	`).show()
}


