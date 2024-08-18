const container = document.querySelector("#container");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.id = "value";

for(i=0; i<3; i++){
    let btn = document.createElement("button");
   if(i == 0){
    btn.textContent = "INCREASE";
    btn.id = "add";
   }
   if(i == 1){
    btn.textContent = "RESET";
    btn.id = "reset";
   }
   if(i == 2){
    btn.textContent = "DECREASE";
    btn.id = "subtract"
   }


container.appendChild(btn);
}

const increase = document.querySelector("#add");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#subtract");
const value = document.querySelector("#value")

let j=0;

increase.addEventListener("click", () => {
        j++;
        value.textContent = `${j}`;
        value.style.color = "hsl(205, 78%, 60%)";
    
});

decrease.addEventListener("click", () => {
    j--;
    value.textContent = `${j}`;
    if(j < 0) {
        value.style.color = "hsl(205, 77%, 27%)";
    }


});

reset.addEventListener("click", () => {
    j=0;
    value.textContent = `${j}`;
    value.style.color = "hsl(205, 86%, 17%)";


});



