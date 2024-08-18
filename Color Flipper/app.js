const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

simpleBtn = document.querySelector("#btn");
text = document.querySelector(".color");

simpleBtn.addEventListener("click", () =>{
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
     text.textContent = colors[randomColor];
    }); 

