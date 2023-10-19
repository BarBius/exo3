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
    { src: 'asset/Marvel.jpeg', title: 'Affiche Marvel' },
    { src: 'asset/black-panther.jpeg', title: 'Black-panther' },
    { src: 'asset/captain-america.jpeg', title: 'Captain-america' },
    { src: 'asset/deadpool.jpeg', title: 'Deadpool' },
    { src: 'asset/doctor-strange.jpeg', title: 'Docteur-strange' },
    { src: 'asset/hulk.jpeg', title: 'Hulk' },
    { src: 'asset/iron-man.jpeg', title: 'Iron-man' },
    { src: 'asset/spider-man.jpeg', title: 'Spider-man' },
    { src: 'asset/Thor.jpeg', title: 'Thor' },
];
const params = {
    images: images,
    area: 'div.slider', //Selecteur CSS
    width:'100%', //optionel
    height:'100%' //optionel
}

const slider = new Slider(params);



