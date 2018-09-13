document.addEventListener('DOMContentLoaded', function(){
// Define Variables
  const row = prompt('How many rows?');
  const col = prompt('How many columns?');
  const board = document.getElementById('board');

// Make boxes
  for (i = 0; i<row; i++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'row');
    board.appendChild(box);
    box.addEventListener('click', () => {
    box.style.backgroundColor = randomColor();
    });
    for (j=0; j<col; j++) {
      const box = document.createElement('div');
      box.setAttribute('class', 'col');
      board.appendChild(box);
      box.addEventListener('click', () => {
      box.style.backgroundColor = randomColor();
      });
    }
    j = 0;
// Colour
  }
  function randomColor() {
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += (Math.random() * 16 | 0).toString(16);
    }
    return c;
}
});
