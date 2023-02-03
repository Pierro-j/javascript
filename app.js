class Carrousel {
    constructor(images, htmlId) {
        this.images = images;
        this.htmlId = htmlId;
        this.carrouselImageContainer = document.getElementById(htmlId);
        this.indexActuel = 0;
        this.carouselElement = document.createElement('img'); 
        this.display();
    }
    display = () => {
        this.carouselElement.setAttribute('alt', "Alternative text");
        this.carouselElement.setAttribute('src', this.images[this.indexActuel]);

        this.carrouselImageContainer.appendChild(this.carouselElement);
    }
    suivant = () => {
        if (!this.images[this.indexActuel + 1]) {
            this.indexActuel = 0;
        } else {
            this.indexActuel += 1;
        }
        this.display()
    }
    precedent = () => {
        
        if (!this.images[this.indexActuel - 1]) {
            this.indexActuel = this.images.length - 1;
        } else {
            this.indexActuel -= 1;
        }
        this.display()
    }
}

const imagesArray = ["https://images.pexels.com/photos/6243717/pexels-photo-6243717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15262296/pexels-photo-15262296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/7323054/pexels-photo-7323054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
const carrousel1 = new Carrousel(imagesArray, "carouselContent")

const previousArrow = document.getElementById('arrowLeft');
const nextArrow = document.getElementById('arrowRight');


previousArrow.addEventListener('click', () => carrousel1.precedent())
nextArrow.addEventListener('click', () => carrousel1.suivant())

setInterval(() => {
    carrousel1.suivant()
}, 3000);