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

let currentColor = 'yellow';

const colorSquares = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            console.log(currentColor);
            row.style.backgroundColor = currentColor;
        });
    });
}

const selectColor = () => {
    const magenta = document.querySelector('.magenta');
    const cyan = document.querySelector('.cyan');
    const yellow = document.querySelector('.yellow');
    
    magenta.addEventListener('click', () => {
        currentColor = 'magenta';
        colorSquares();
    });

    cyan.addEventListener('click', () => {
        currentColor = 'cyan';
        colorSquares();
    });

    yellow.addEventListener('click', () => {
        currentColor = 'yellow';
        colorSquares();
    });

}

sizeChangerBtn.addEventListener('click', () => {
    const numberOfSquares = prompt('Enter the number of squares you want: ');
    deleteCanvas();
    createCanvas(numberOfSquares);
    colorSquares();
    resetSquares();
    selectColor();
});

createCanvas(16);
colorSquares();
resetSquares();
selectColor();
