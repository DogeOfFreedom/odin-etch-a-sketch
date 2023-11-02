let changeCanvasSize = () => {
    let canvasSize = prompt("Enter Dimensions (max 100)");
    while(isNaN(canvasSize) || canvasSize > 100) {
        canvasSize = prompt("Invalid dimensions, Enter Dimensions (max 100)");
    }
}

const cells = Array.from(document.querySelectorAll(".grid-cell"));
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("highlighted-grid-cell");
    })
})
