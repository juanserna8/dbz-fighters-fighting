import { setAndRemoveAnimationClass } from './classes.js'

function animateAttack(attacker, defendant, attackerDirection) {
    //Attacker section
    let attackerElement = document.getElementById(attacker)
    let defendantElement = document.getElementById(defendant);
    
    if (attackerDirection === 'left') {
        animateMovements(attackerElement, defendantElement, 'animate__slideOutLeft');
    } else {
        animateMovements(attackerElement, defendantElement, 'animate__slideOutRight', 'animate__flash');
    };
}

export {
    animateAttack
};

function animateMovements(attackerElement, defendantElement, attackAnimationString = 'animate__slideOutLeft', painAnimationString = 'animate__flash') {
    setAndRemoveAnimationClass(attackerElement, attackAnimationString);
    setAndRemoveAnimationClass(defendantElement, painAnimationString, 1000)
}
