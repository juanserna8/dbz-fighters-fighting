//const imagen = document.querySelector('img');

//imagen.onclick = function() {
//    alert('Hola');
//};

//imagen.addEventListener('click', function() {
//    alert('click 1');
//});

//imagen.addEventListener('click', function() {
//    alert('click 2');
//});


function changeImage() {
    var image = document.getElementById('goku');
    if (image.src.match('vegeta')) {
        image.src = 'goku.png';
    } else {
        image.src = 'vegeta.png';
    }
}