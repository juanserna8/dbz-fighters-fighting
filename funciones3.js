function changeImage() {
    var image = document.getElementById('goku');
    if (image.src.match('vegeta')) {
        image.src = 'gokuEdited.png';
    } else {
        image.src = 'vegetaEdited.png';
    }
}