function appendGoku() {
    let createCharacterButton = document.getElementById('createGoku');
    
    createCharacterButton.addEventListener('click', () => {
        createCharacter('goku', 1);    
    });
}

function appendVegeta() {
    let createCharacterButton = document.getElementById('createVegeta');
    
    createCharacterButton.addEventListener('click', () => {
        createCharacter('vegeta', 2);    
    });
}

function createCharacter(character = 'vegeta', barId = 2) {
    let imagesContainer = document.getElementById('imagesContainer');
    let asideElement = createAsideElement(character, barId);

    imagesContainer.appendChild(asideElement);
}

function createAsideElement(character, barId) {
    let asideElement = createAside();
    let imageElement = createImage(character);
    let lifeBarElement = createLifeBar(barId);

    asideElement.appendChild(imageElement);
    asideElement.appendChild(lifeBarElement);

    return asideElement;
}

function createAside() {
    let asideCharacter = document.createElement('aside');
    asideCharacter.classList.add("col-md-5", "col-6", "text-center");

    return asideCharacter;
}

function createImage(character) {
    let imageCharacter = document.createElement('img');
    
    imageCharacter.setAttribute("id", character);
    imageCharacter.classList.add("img-fluid");
    imageCharacter.style.maxHeight = '15rem';
    imageCharacter.setAttribute("alt", character);
    imageCharacter.src = `./images/characters/${character}/evolution-1.png`;

    return imageCharacter;
}

function createLifeBarFather() {
    let lifeBarContainerProgress = document.createElement('div');
    lifeBarContainerProgress.classList.add("progress");

    return lifeBarContainerProgress;
};

function createLifeBar(barId) {
    let lifeBarContainer = createLifeBarContainer();
    let lifeBarContainerProgress = createLifeBarFather();
    let lifeBar = createLifeBarElement(barId);

    lifeBarContainer.appendChild(lifeBarContainerProgress);
    lifeBarContainerProgress.appendChild(lifeBar);
    
    return lifeBarContainer;
}

function createLifeBarContainer() {
    let lifeBarContainer = document.createElement('div');
    lifeBarContainer.classList.add("col-12", "pt-3");

    return lifeBarContainer;
};

function createLifeBarElement(barId) {
    let lifeBar = document.createElement('div');
    
    lifeBar.setAttribute("id", `barra${barId}`);
    lifeBar.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-warning");
    lifeBar.style.width = '100%';
    lifeBar.setAttribute("role", "progressbar");
    lifeBar.innerText = "100%";

    return lifeBar;
}

export { appendGoku, appendVegeta }