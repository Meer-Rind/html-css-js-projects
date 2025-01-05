
//first of all making the variabels for the buttons
let btn1 = document.querySelector('.btn1');
let btn2 =document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4= document.querySelector(".btn4");

// now changing the color of the background with the help of the btns
btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor  = "blue";
});
btn2.addEventListener('click',()=>{
    document.body.style.backgroundColor  = "black";
});
btn3.addEventListener('click',()=>{
    document.body.style.backgroundColor  = "red";
});
btn4.addEventListener('click',()=>{
    document.body.style.backgroundColor  = "yellow";
});