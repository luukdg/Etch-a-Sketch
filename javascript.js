function gridMaker (gridAnswer) {
    const container = document.querySelector(".container");
    let gridSize = gridAnswer * gridAnswer

    // Remove all content for container
    container.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.width = `calc(100% / ${gridAnswer})`;
        squareDiv.style.height = `calc(100% / ${gridAnswer})`;
        container.appendChild(squareDiv);
    }
}

// Hover color changing function
function applyHoverColor () {
    const hover = document.querySelectorAll(".squareDiv");
    hover.forEach((div) => {
        div.addEventListener("mouseover", () => {
            if (div.style.backgroundColor) {
                return;
            } else {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                let rgbValue = "#" + randomColor
                div.style.backgroundColor = rgbValue;
                div.style.opacity = 1;
            }
        });
});
}

// Button grid changing
const button = document.querySelector(".gridButton");
button.addEventListener("click", () => {
    // Prompt for an answer
    let gridAnswer = prompt("Enter a number below 100");

    if (gridAnswer >= 100 || gridAnswer <= 0 || isNaN(gridAnswer)) {
        alert("Please enter a valid number between 1 and 99.")
    }
    else {
        gridMaker (gridAnswer);
        applyHoverColor ();
    }
});

// Starting grid and hover color
gridMaker (16);
applyHoverColor ();