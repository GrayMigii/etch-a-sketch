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

var currentColor = 'blue';
const sizeChangerBtn = document.querySelector('.size-changer');
const resetBtn = document.querySelector('.reset');
const container = document.querySelector('.container');

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

const selectColor = () => {
    const magenta = document.querySelectorAll('.magenta');
    const cyan = document.querySelectorAll('.cyan');
    const yellow = document.querySelectorAll('.yellow');


    magenta.addEventListener('click', () => {
        currentColor = 'magenta';
    });
    cyan.addEventListener('click', () => {
        currentColor = 'cyan';
    });
    yellow.addEventListener('click', () => {
        currentColor = 'yellow';
    });
}

const colorSquares = () => {
    const rows = document.querySelectorAll('.row');
    //electColor();
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = currentColor;
        });
    });
}

sizeChangerBtn.addEventListener('click', () => {
    const numberOfSquares = prompt('Enter the number of squares you want: ');
    deleteCanvas();
    createCanvas(numberOfSquares);
    colorSquares();
    resetSquares();
});

createCanvas(16);

//selectColor();

colorSquares();
resetSquares();

