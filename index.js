const square = document.querySelector('#square');

function blueBackground() {
    document.removeEventListener('scroll', orangeBackground);
    square.classList = '';
    square.classList.add('blue');
}

function greenBackground() {
    square.classList = '';
    square.classList.add('green');
}

function orangeBackground() {
    square.classList = '';
    square.classList.add('orange');
}

function redBackground() {
    square.classList = '';
    square.classList.add('red');
}

function yellowBackground() {
    square.classList = '';
    square.classList.add('yellow');
}

square.addEventListener('mouseover', blueBackground);

square.addEventListener('mouseout', () => {
    square.classList = '';
    document.addEventListener('scroll', orangeBackground);
});

square.addEventListener('mousedown', redBackground);

square.addEventListener('mouseup', yellowBackground);

square.addEventListener('dblclick', greenBackground);

document.addEventListener('scroll', orangeBackground);

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'b':
            square.classList = '';
            square.classList.add('blue');
            break;
        case 'g':
            square.classList = '';
            square.classList.add('green');
            break;
        case 'o':
            square.classList = '';
            square.classList.add('orange');
            break;
        case 'r':
            square.classList = '';
            square.classList.add('red');
            break;
        case 'y':
            square.classList = '';
            square.classList.add('yellow');
            break;
    }
});
