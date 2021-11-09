import { setAndRemoveAnimationClass } from './classes.js'

function declareWinner(defendantElement, attacker, buttons) {
    let h2Tag = document.createElement('h2');

    buttons.innerHTML = null;
    h2Tag.classList.add('mt-3', 'py-3', 'rounded');
    h2Tag.style.color = '#F08C13';
    //Agregar estilos del h2 en la linea de arriba
    h2Tag.innerHTML = 'Felicidades, ' + attacker + ' ha sido el ganador';
    defendantElement.src = './images/rip.png';
    buttons.appendChild(h2Tag);
    setAndRemoveAnimationClass(h2Tag, 'animate__shakeY');
}

export {
    declareWinner
}