import {ImagesGallery} from './ImagesGallery.js';

(async () => {
    const imagesGalleryContainer = document.querySelector('.images-gallery');
    const loader = document.querySelector('.loader');
    const imagesGallery = new ImagesGallery(imagesGalleryContainer);
    await imagesGallery.fetchImages();

    const intersectionObserver = new IntersectionObserver(async (entries) => {
        console.log(entries);
        if (entries[0].intersectionRatio <= 0) {
            return;
        }
        await imagesGallery.fetchImages();
    });

    intersectionObserver.observe(loader);
})()
