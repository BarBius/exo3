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
