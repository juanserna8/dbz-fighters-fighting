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

    // switch (currentEvolutionNumber) {
    //     case 1:
    //         //image.src = './images/characters/goku/evolution-2.png';
    //         image.src = `${baseImageDir}${currentEvolutionNumber++}.png`
    //         break;
    //     case 2:
    //         image.src = `${baseImageDir}${currentEvolutionNumber++}.png`
    //         break;
    //     default:
    //         image.src = `${baseImageDir}1.png`
    // }    
}


