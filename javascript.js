
const button = document.querySelector("#restart_button");
createGrid(16);


button.addEventListener("click", () => {
  const input = prompt("Enter the number of squares:");
  const totalSquares = parseInt(input);

  if (totalSquares > 100) {
    alert("Please enter a number under 100.");
    return;
  }
  removeGrid();
  createGrid(totalSquares);
});



function createGrid(size) {

  const container = document.querySelector("#container");
  
  // create a 16x16 square of divs
  const widthHeight = 800 / size + "px";

  for (let i=1; i<=size; i++ ){
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j=1; j<=size; j++ ){
          const grid = document.createElement("div");
          grid.classList.add("grid");
          row.appendChild(grid);
          grid.style.width = widthHeight;
          grid.style.height = widthHeight;
      }
      container.appendChild(row);
  }

  const myGrid = document.querySelectorAll('.grid');

  myGrid.forEach((square) => {
    // and for each one we add a 'click' listener
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = 'lightblue';
    });
  });

}

function removeGrid(){
  const myRows = document.querySelectorAll('.row');
  const myGrid = document.querySelectorAll('.grid');
  myGrid.forEach((grid) => {
    if (myGrid) { 
          grid.remove();
      }});
  myRows.forEach((row) => {
    if (myRows) { 
          row.remove();
      }});

}



