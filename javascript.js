

const container = document.querySelector("#container");

// create a 16x16 square of divs

for (let i=1; i<=16; i++ ){
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j=1; j<=16; j++ ){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        row.appendChild(grid);
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