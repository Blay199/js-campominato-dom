const getBtnElement = document.querySelector('.btn-start');

getBtnElement.addEventListener('click', grid) 

// grid(gridDim, containerElement)

function grid() {
    let dim = 10;    
    let container = document.querySelector('.container');
    container.innerHTML = '';
    const cellNum = dim ** 2;

    bombsPosition = bombsGenerator(cellNum)
    
    for (let i = 0; i < cellNum; i++) {
        // console.log(i);
        const cell = getCellElement();

        cell.innerHTML = i + 1;

        // appendere elemento al tabellone
        container.append(cell);
    }
}

function getCellElement() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', clickHandler); 
    return cell;
}

function clickHandler(
) {
    const cell = this;
    cell.classList.toggle('clicked');
    cell.removeEventListener('click', clickHandler);
}

function bombsGenerator (max) {
    const bombs = []
    console.log (bombs)

    while (bombs.length < 16) {
        const n = getRandomIntInclusive(1, max)
    }

    if (!bombs.includes(n)) {
        bombs.push(n)
    }

    return bombs
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}