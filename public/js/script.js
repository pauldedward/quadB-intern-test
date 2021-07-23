


//timer element 
const circle=document.querySelector('circle');
const maxOffset = 2*Math.PI*circle.r.baseVal.value;
let offset = 0;

circle.setAttribute("stroke-dasharray", maxOffset);
//changing state of timer
const interval = setInterval(() => {
        circle.setAttribute("stroke-dashoffset", offset);
        if(offset <= -maxOffset) {
            offset = 0;
        }
        else {
            offset -= maxOffset/ 240;    
        }
    }, 250);