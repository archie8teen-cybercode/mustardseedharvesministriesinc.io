const faders = document.querySelectorAll(".fade");


window.addEventListener("scroll",()=>{


faders.forEach(element=>{


let position = element.getBoundingClientRect().top;

let screen = window.innerHeight;


if(position < screen - 100){

element.classList.add("show");

}


});



const navbar = document.getElementById("navbar");


if(window.scrollY > 50){

navbar.classList.add("active");

}else{

navbar.classList.remove("active");

}


});
function openImage(src){

document.getElementById("imageModal").style.display="flex";

document.getElementById("modalImg").src=src;

}

function closeImage(){

document.getElementById("imageModal").style.display="none";

}