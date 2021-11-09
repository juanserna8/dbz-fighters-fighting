import { evolveCharacter }  from './meanwhile.js';
import { atacar } from './meanwhile.js';

function appendEvolveCharactersMethod () {
    document
        .getElementById('firstCharacterEvolve')
        .addEventListener('click', () => {
            evolveCharacter('goku')
        });
    
    document
        .getElementById('secondCharacterEvolve')
        .addEventListener('click', () => {
            evolveCharacter('vegeta')
        });
}

export {
    appendEvolveCharactersMethod
};

function appendAtackMethod () {
    document
        .getElementById('atacar1')
        .addEventListener('click', () => {
            atacar('vegeta', 'goku', 'right')
        });

    document
        .getElementById('atacar2')
        .addEventListener('click', () => {
            atacar('goku', 'vegeta', 'left')
        });
};

export {appendAtackMethod};