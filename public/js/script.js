console.log("hi");

const circle=document.querySelector('circle');

let maxOffset = 2*Math.PI*circle.r.baseVal.value;

circle.setAttribute("stroke-dasharray", maxOffset);
offset = 0;
const interval = setInterval(() => {
        circle.setAttribute("stroke-dashoffset", offset);
        if(offset < -maxOffset) {
            offset = 0;
        }
        else {
            offset -= maxOffset/ 240;    
        }
    }, 250);