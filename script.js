const cells = Array.from(document.querySelectorAll(".grid-cell"));
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("highlighted-grid-cell");
    })
})