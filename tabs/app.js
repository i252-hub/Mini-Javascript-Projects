//Select Buttons

const btnHistory = document.querySelector('[data-id= "history"]');
const btnVision = document.querySelector('[data-id= "vision"]');
const btnGoals = document.querySelector('[data-id= "goals"]');

//Select Content

const abtContent = document.querySelector('.about-content');
const contentV = document.querySelector('#vision');
const contentH = document.querySelector('#history');
const contentG = document.querySelector("#goals");

//Click the button vision

const vision = () => {
    btnVision.addEventListener("click", () => {
        contentV.classList.add('about-content', 'active');
        contentH.classList.remove('about-content', 'active');
        contentG.classList.remove('about-content', 'active');
        btnVision.classList.add('active');
        btnHistory.classList.remove('active');
        btnGoals.classList.remove('active');
    });
}



//Click the button history

const history = () => {
    btnHistory.addEventListener("click", () => {
        contentH.classList.add('about-content', 'active');
        contentV.classList.remove('about-content', 'active');
       contentG.classList.remove('about-content', 'active');
        btnHistory.classList.add('active');
        btnVision.classList.remove('active');
        btnGoals.classList.remove('active');
    });
}


//Click the button goals

const goals = () => {
    btnGoals.addEventListener("click", () => {
        contentG.classList.add('about-content', 'active');
        contentH.classList.remove('about-content', 'active');
        contentV.classList.remove('about-content', 'active');
        btnGoals.classList.add('active');
        btnVision.classList.remove('active');
        btnHistory.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    vision();
    history();
    goals();
})
