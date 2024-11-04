var elemento = "ele1";
var ele = document.querySelector('#ele1');
ele.style.backgroundColor='green';


function pintar(elementoid){
    ele = document.querySelector('#'+ elementoid);
    ele.style.backgroundColor= 'yellow';
}

ele.addEventListener("click", () => pintar("ele1"));


