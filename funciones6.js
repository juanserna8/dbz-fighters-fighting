function evolveCharacter(character, maxEvolution = 3) {
    let image = document.getElementById(character);
    let asideParent = image.parentNode;
    asideParent.classList.add('animate__animated', 'animate__fadeInLeft');
    let currentEvolutionNumber = Number(image.src.substr(-5, 1));
    let baseImageDir = `./images/characters/${character}/evolution-`

    if (currentEvolutionNumber < maxEvolution) {
        image.src = `${baseImageDir}${++currentEvolutionNumber}.png`
    } else {
        image.src = `${baseImageDir}1.png`
    }

    setTimeout(() => {
        asideParent.classList.remove('animate__animated', 'animate__fadeInLeft');  
    }, 1000);
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
    
    function setAndRemoveAnimationClass(element, animationClass, timeOut = 500) {
        
        element.classList.add('animate__animated', animationClass);
        
        setTimeout(() => {
            element.classList.remove('animate__animated', animationClass)
        }, timeOut)
    }

    function animateMovements(attackerElement, defendantElement, attackAnimationString = 'animate__slideOutLeft', painAnimationString = 'animate__flash') {
        setAndRemoveAnimationClass(attackerElement, attackAnimationString);
        setAndRemoveAnimationClass(defendantElement, painAnimationString, 1000)
    }

    function getNewLife(previousLife) {
        let newLife = Number(previousLife) - getRandomInt(25);
        if(newLife >= 0){
            return newLife;
        } else {
            return 0;
        }
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    function declareWinner(defendantElement, attacker, buttons) {
        let h2Tag = document.createElement('h2');

        buttons.innerHTML = null;
        h2Tag.classList.add('mt-3', 'px-4', 'py-3', 'rounded');
        //Agregar estilos del h2 en la linea de arriba
        h2Tag.innerHTML = 'Felicidades, ' + attacker + ' ha sido el ganador';
        defendantElement.src = './images/rip.png';
        buttons.appendChild(h2Tag);
        setAndRemoveAnimationClass(h2Tag, 'animate__shakeY');
    }