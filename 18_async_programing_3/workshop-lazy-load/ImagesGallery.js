export class ImagesGallery {
    #imagesContainer;
    #currentPage;
    #limitForOnePage;
    #images;

    constructor(imagesContainer) {
        this.#imagesContainer = imagesContainer;
        this.#currentPage = 1;
        this.#limitForOnePage = 13;
        this.#images = [];
    }

    #renderImageCard = (image) => {
        const {author, download_url, id} = image;
        return `<figure class="image-card" id=${id}><img class="image-card__image" src=${download_url} alt=${author}>
                    <figcaption class="image-card__caption">Author: ${author}</figcaption>
                </figure>`;


    }

    #addImageCardsToDom = (images) => {
        images.forEach((image) => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");
            imageWrapper.innerHTML = this.#renderImageCard(image);
            this.#imagesContainer.appendChild(imageWrapper);
        })
    }

    fetchImages = async () => {
        const API_URL = `https://picsum.photos/v2/list?page=${this.#currentPage}&limit=${this.#limitForOnePage}`;

        try {
            const response = await fetch(API_URL);
            this.#images = await response.json();
            this.#addImageCardsToDom(this.#images);
            this.#currentPage++;
        } catch (error) {
            throw new Error(error);
        }
    }
}
