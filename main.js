//INNITIALIZE THE GAME BOARD ON LOAD
initBoard();
initCatRow();

function initCatRow() {
  let catRow = document.getElementById('category-row');
  for (let j = 0; j < 6; j++) {
    let box = document.createElement('div');
    box.className = 'clue-box category-box';
    catRow.appendChild(box);
  }
}

function initBoard() {
  let board = document.getElementById('clue-board');

  //GENERATE 5 ROWS OF CLUES, THEN PLACE 6 BOXES IN EACH ROW

  for (let i = 0; i < 5; i++) {
    let row = document.createElement('div');
    let boxValue = 200 * (i + 1);
    row.className = 'clue-row';

    for (let j = 0; j < 6; j++) {
      let box = document.createElement('div');
      box.className = 'clue-box';
      box.textContent = `$ ${boxValue}`;
      box.addEventListener('click', getClue, false);
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function getClue() {
  console.log('have a nice day');
}
