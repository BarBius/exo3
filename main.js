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
const images = [
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/Marvel.jpeg?raw=true', title: 'Affiche Marvel' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/black-panther.jpeg?raw=true', title: 'Black-panther' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/captain-america.jpeg?raw=true', title: 'Captain-america' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/deadpool.jpeg?raw=true', title: 'Deadpool' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/doctor-strange.jpeg?raw=true', title: 'Docteur-strange' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/hulk.jpeg?raw=true', title: 'Hulk' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/iron-man.jpeg?raw=true', title: 'Iron-man' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/sider-man.jpeg?raw=true', title: 'Spider-man' },
    { src: 'https://github.com/BarBius/exo3/blob/main/asset/thor.jpeg?raw=true', title: 'Thor' },
];
const params = {
    images: images,
    area: 'div.slider', //Selecteur CSS
    width:'100%', //optionel
    height:'100%' //optionel
}

const slider = new Slider(params);
