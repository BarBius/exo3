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
        this.area.appendChild(image);
    }

    createButtons() {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Suivant';
        nextButton.classList.add('next');

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Précédent';
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
const images = [
    { src: 'images/1.jpg', title: 'A link to the Past' },
    { src: 'images/2.jpg', title: 'Twilight princess' },
    { src: 'images/3.jpg', title: 'Skyward Sword' },
    { src: 'images/4.jpg', title: 'WindWaker' },
    { src: 'images/5.jpg', title: 'Breath of the wild' },
    { src: 'images/6.jpg', title: 'Link\'s awakening' },
];
const params = {
    images: images,
    area: 'div.slider', //Selecteur CSS
    width:'100%', //optionel
    height:'100%' //optionel
}

const slider = new Slider(params);



