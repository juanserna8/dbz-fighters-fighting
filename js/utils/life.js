function getNewLife(previousLife) {
    let newLife = Number(previousLife) - getRandomInt(25);
    if(newLife >= 0){
        return newLife;
    } else {
        return 0;
    }
};

export {
    getNewLife
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};