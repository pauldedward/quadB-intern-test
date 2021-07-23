//timer element 
//make timer value change
const circle=document.querySelector('circle');
const timerText = document.querySelector('#timerText');
const maxOffset = 2*Math.PI*circle.r.baseVal.value;
let offset = 0;
let timeLeft = 59;
let counter = 0;
circle.setAttribute("stroke-dasharray", maxOffset);
timerText.innerHTML = timeLeft;

//changing state of timer
const interval = setInterval(() => {
        counter++;
        circle.setAttribute("stroke-dashoffset", offset);
        if(offset <= -maxOffset) {
            offset = 0;
            timeLeft = 59;
            timerText.innerHTML = timeLeft;
        }
        else {
            offset -= maxOffset/ 240;    
        }
        if (counter % 4 == 0 ) {
            timeLeft--;
            timerText.innerHTML = timeLeft;
            counter = 0;
        }
    }, 250);


//change theme
const themeSelect = document.querySelector('#themeSelect');
const themeSlide = document.querySelector('#themeSlide');
const tableBody = document.querySelector('#tableBody');
const bestPrice = document.querySelector('#bestPrice');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.themeBtn');

themeSelect.addEventListener("click", ()=> {

    body.classList.toggle("light-theme");
    themeSelect.classList.toggle('light-theme');
    bestPrice.classList.toggle('light-theme');
    tableBody.classList.toggle('light-theme');
    timerText.classList.toggle('light-theme');
    themeSlide.classList.toggle('light-theme');

    console.log("working")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('light-theme');
    }

    
})
