var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.querySelector("button");


 css.textContent=body.style.background + ";";

color1.value="#ff0000";
color2.value="#ffff00";

 function setGradient(){
 	body.style.background="linear-gradient(to right," + 
 	color1.value + "," + color2.value + ")";

 	css.textContent=body.style.background+";";

 }
 color1.addEventListener("input",setGradient);

 color2.addEventListener("input",setGradient);

function randomrgb(){
	return Math.floor(Math.random()*256);
}
function rgb(){
	return "rgb("+ randomrgb() + "," + randomrgb() + "," + randomrgb() + ")" 
}


function rangrad1(){
 	body.style.background= "linear-gradient(to right, " + rgb() +","+ rgb() + ")" ;
 }

button.addEventListener("click",rangrad1);
