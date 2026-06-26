let card1 ="BASIC";
if(card1==="BASIC"){
    console.log("THE ESSENTIALS");
}
let card2 ="PRO";
if (card2==="PRO"){
    console.log("THE COMPLETE EXPERIENCE");
}
let card3 ="PREMIUM";
if (card3==="PREMIUM"){
    console.log("THE ULTIMATE PACKAGE");
}
//price//
let price ="$29";
if (price==="$29"){
    console.log("BASIC");
} else if (price===$49){
    console.log("PRO");
} else if (price==="$89"){
    console.log("PREMIUM");
}
//buttons//
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");

btn1.addEventListener("click", function () {
    btn1.innerText = "Activated";
});

btn2.addEventListener("click", function () {
    btn2.innerText = "Activated";
});

btn3.addEventListener("click", function () {
    btn3.innerText = "Activated";
});