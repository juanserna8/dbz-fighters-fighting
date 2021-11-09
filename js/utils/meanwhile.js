import { animateAttack } from './animation.js'
import { getNewLife } from './life.js'
import { declareWinner } from './winner.js'


function evolveCharacter(character, maxEvolution = 3) {
    let image = document.getElementById(character);
    let asideParent = image.parentNode;
    asideParent.classList.add('animate__animated', 'animate__fadeInLeft');
    let currentEvolutionNumber = Number(image.src.substr(-5, 1));
    let baseImageDir = `./images/characters/${character}/evolution-`

    if (currentEvolutionNumber < maxEvolution) {
        image.src = `${baseImageDir}${++currentEvolutionNumber}.png`
        
        // Animation (USE)
        setTimeout(() => {
            asideParent.classList.remove('animate__animated', 'animate__fadeInLeft');  
        }, 1000);
    }
}

export {
    evolveCharacter
}


function atacar(defendant, attacker, attackerDirection = 'left') {
    //Defendant variables
    let buttons = document.getElementById('container-buttons');
    let defendantElement = document.getElementById(defendant);
    let defendantElementLifeBar = defendantElement
        .nextElementSibling
        .firstElementChild
        .firstElementChild;

    //Defendant life bar
    let currentLifePercentaje = defendantElementLifeBar.style.width;
    let currentLife = currentLifePercentaje.substring(0, currentLifePercentaje.length - 1);
    let newLife = getNewLife(currentLife);
    
    if (newLife <= 0) {
        declareWinner(defendantElement, attacker, buttons)
    }

    if (newLife < 60 && newLife > 25) {
        defendantElementLifeBar.classList.remove('bg-warning');
        defendantElementLifeBar.classList.add('bg-error');
    } else if (newLife <= 25) {
        defendantElementLifeBar.classList.remove('bg-error');
        defendantElementLifeBar.classList.add('bg-danger');
    }

    defendantElementLifeBar.style.width = `${newLife}%`;
    defendantElementLifeBar.innerText = `${newLife}%`;
    
    animateAttack(attacker, defendant, attackerDirection);
}

export { 
    atacar 
};