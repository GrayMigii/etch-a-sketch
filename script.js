const maxCanvasSize = 70;

const createCanvas = (numberOffSquares) => {
    const container = document.querySelector('.container');
    for(let i = 0; i < numberOffSquares; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.display = 'flex';
        for (let j = 0; j < numberOffSquares; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            //row.style.flex = '0 0 auto';
            row.style.width = `${ maxCanvasSize / numberOffSquares }vh`;
            row.style.height = `${ maxCanvasSize / numberOffSquares }vh`;
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createCanvas(32);

const rows = document.querySelectorAll('.row');

let currentColor = 'blue';

rows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = currentColor;
    });
});