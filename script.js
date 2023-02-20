const sizeChangerBtn = document.querySelector('.size-changer');
const resetBtn = document.querySelector('.reset');
const container = document.querySelector('.container');
const color = document.querySelector('#color-picker');
const eraser = document.querySelector('#eraser');
const defaultCanvasSize = 16;
let currentColor = color.getAttribute('value');

eraser.addEventListener('click', () => {
    color.style.borderColor = 'gray';
    eraser.style.borderColor = 'yellow';
    currentColor = 'white';
});

color.addEventListener('click', (e) => {
    color.style.borderColor = 'yellow';
    eraser.style.borderColor = 'gray';
    currentColor = e.target.value;
});


const createCanvas = (numberOfSquares) => {
    const maxCanvasSize = 70;
    const container = document.querySelector('.container');
    for(let i = 0; i < numberOfSquares; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.display = 'flex';
        for (let j = 0; j < numberOfSquares; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.width = `${ maxCanvasSize / numberOfSquares }vh`;
            row.style.height = `${ maxCanvasSize / numberOfSquares }vh`;
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

const deleteCanvas = () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        container.removeChild(column);
    });
}

const resetSquares = () => {
    const rows = document.querySelectorAll('.row');
    resetBtn.addEventListener('click', () => {
        rows.forEach(row => {
            row.style.backgroundColor = 'white';
        });
    });
}

const colorSquares = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            row.style.backgroundColor = currentColor;
        });
    });
}

const selectColor = () => {
    color.addEventListener('change', (e) => {
        currentColor = e.target.value;
    });
}

sizeChangerBtn.addEventListener('click', () => {
    let numberOfSquares = prompt('Enter the number of squares you want: ');
    if (numberOfSquares > 100) {
        prompt("you've exceeded the number of possible squares");
        numberOfSquares = null;
    } 
    
    if (numberOfSquares === null) numberOfSquares = 16;
    deleteCanvas();
    createCanvas(numberOfSquares);
    colorSquares();
    resetSquares();
});

createCanvas(defaultCanvasSize);
colorSquares();
resetSquares();
selectColor();
