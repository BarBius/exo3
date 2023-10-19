class Slider {
    constructor(params) {
        this.images = params.images;
        this.area = document.querySelector(params.area);
        this.currentIndex = 0;

        this.createButtons();

        this.nextButton = this.area.querySelector('.next');
        this.prevButton = this.area.querySelector('.prev');

        this.nextButton.addEventListener('click', () => this.next());
        this.prevButton.addEventListener('click', () => this.previous());

        this.renderImage();  
    }

    renderImage() {
        const image = document.createElement('img');
        image.src = this.images[this.currentIndex].src;
        image.alt = this.images[this.currentIndex].title;
    image.setAttribute('width', '1000'); 
        image.setAttribute('height', '700');
        this.area.appendChild(image);
    }

    createButtons() {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Suivant';
        nextButton.classList.add('next');

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Precedent';
        prevButton.classList.add('prev');

        this.area.appendChild(nextButton);
        this.area.appendChild(prevButton);
    }
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }
    previous() {
        this.currentIndex = (this.currentIndex -1) % this.images.length;
        this.updateImage();
    }
    updateImage() {
        const image = this.area.querySelector('img');
        image.src = this.images[this.currentIndex].src;
        image.alt = this.images[this.currentIndex].title;
    }
}


