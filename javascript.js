// Creating a grid with div's
const container = document.querySelector(".container");
for (let i = 1; i < 257; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }

// Hover color changing function
const hover = document.querySelectorAll(".squareDiv");
hover.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
});

// Button grid changing
const button = document.querySelector(".gridButton");
button.addEventListener("click", () => {
    let gridAnswer = prompt("Enter a number below 100");
    let gridSize = gridAnswer * gridAnswer

    // remove div
    document.querySelectorAll(".squareDiv").forEach(div => div.remove());

    // create new div's
    const container = document.querySelector(".container");
    for (let i = 1; i < gridSize; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }
});