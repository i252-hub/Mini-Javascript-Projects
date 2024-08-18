const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btns = document.querySelector("#btn");
text = document.querySelector(".color");

btns.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    text.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
