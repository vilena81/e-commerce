const buyBtn=document.querySelectorAll(".plus-btn");
const basket=document.querySelector("basket");

let zero=document.querySelector(".zero");

function inc(){
    parseInt(zero.textContent++);
    zero.className+="add"
}


buyBtn.forEach((el)=>{
    el.addEventListener('click', inc)
})


