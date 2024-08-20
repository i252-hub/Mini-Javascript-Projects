//using selectors inside the element
// traversing the dom

const arr = [...document.querySelectorAll('.question-btn')];

arr.forEach(arrs => {
    arrs.addEventListener("click", () => {
        arrs.classList.add("question-text");

      /*  if(arrs < arrs - 1){
            arrs.previousElementSibling.classList.remove("question-text");
        }*/
    });

    
})