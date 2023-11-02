let changeCanvasSize = () => {
    let canvasSize = prompt("Enter Dimensions (max 100)");
    while(isNaN(canvasSize) || canvasSize > 100) {
        canvasSize = prompt("Invalid dimensions, Enter Dimensions (max 100)");
    }

    let canvas = document.querySelector(".container")
    removeAllChildren(canvas);

    for(let i=0; i<canvasSize; i++) {
        let row = document.createElement("div");
        row.classList.add("grid-row");
        for(let j=0; j<canvasSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            changeToHightlightClass(cell);
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

let removeAllChildren = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let changeToHightlightClass = cell => {
    cell.addEventListener("mouseover", () => {
        if(cell.style.background == "") {
            let h = Math.round(Math.random() * 360);
            let s = formatAsPercentage(Math.round(Math.random() * 100));
            let l = formatAsPercentage(Math.round(Math.random() * 100));
            cell.style.background = `hsl(${h}, ${s}, ${l})`;
        }
        
        
    })
}

function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
  }

const cells = Array.from(document.querySelectorAll(".grid-cell"));
cells.forEach(changeToHightlightClass);

let test = Math.round(Math.random() * 255);
console.log(test);