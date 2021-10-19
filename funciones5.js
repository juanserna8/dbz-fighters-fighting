function evolveCharacter(character, maxEvolution = 3) {
    let image = document.getElementById(character);
    let currentEvolutionNumber = Number(image.src.substr(-5, 1));
    let baseImageDir = `./images/characters/${character}/evolution-`

    // if (image.src.match('1')) {
    //     image.src = './images/characters/goku/evolution-2.png';
    // } else if (image.src.match('2')) {
    //     image.src = './images/characters/goku/evolution-3.png';
    // } else {
    //    image.src = './images/characters/goku/evolution-1.png';
    //}

    if (currentEvolutionNumber < maxEvolution) {
        image.src = `${baseImageDir}${++currentEvolutionNumber}.png`
    } else {
        image.src = `${baseImageDir}1.png`
    }
}

function removeCharacters() {
        let elem1 = document.getElementById('aside1');
        let elem2 = document.getElementById('aside2');
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);

        let clases = 'col-6 col-lg-6 text-center justify-content-center d-flex animate__animated animate__zoomIn';
        let clases2 = 'img-fluid';


        let articulo = document.getElementById('articulo');
        let newAside = document.createElement("aside");
        let newImage = document.createElement("IMG");
        newImage.setAttribute("src", "./images/characters/gogeta/gogeta-1.png");
        newImage.setAttribute("height", "250");
        
        newAside.appendChild(newImage);
        newAside.className = clases;
        newImage.className = clases2;
        articulo.parentNode.appendChild(newAside);
    };

