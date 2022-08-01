const getBtnElement = document.querySelector('.btn-start');

getBtnElement.addEventListener('click', grid) 

// grid(gridDim, containerElement)

let bombs = []

function grid() {
    let dim = 10;    
    let container = document.querySelector('.container');
    container.innerHTML = '';
    const cellNum = dim ** 2;
    
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