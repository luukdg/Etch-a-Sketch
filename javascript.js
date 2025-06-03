const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }

const hover = document.querySelectorAll(".squareDiv");

hover.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
});


