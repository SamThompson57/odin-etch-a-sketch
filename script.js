//let gridSize = 2;

const body = document.querySelector('body');
const grid = document.createElement('div')
grid.classList.add('content');
let gridExists = false

function drawGrid (gridSize) {
    if(gridExists){
        console.log("Grid Exists Resetting");
        while (grid.firstChild){
            grid.removeChild(grid.lastChild)
        };
    }
    if(gridSize>100){
        gridSize=100;
    }
    
    for(let y = 0; y < gridSize; y++ ){
      const divY = document.createElement('div');
      divY.setAttribute('id', `row${y}`);
      divY.classList.add('row');
      for(let x = 0; x < gridSize; x++){
        const divX = document.createElement('div');
        divX.setAttribute('id', `${x},${y}`)
        divX.classList.add('square')
        divX.addEventListener('mouseover', function(e){
            e.target.style.background = 'blue';
        })
        divY.appendChild(divX);
      }
      grid.appendChild(divY)
      

    }
    body.appendChild(grid);
    gridExists = true;

}



