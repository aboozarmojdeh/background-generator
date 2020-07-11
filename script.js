css=document.querySelector(".css-code");
color1=document.querySelector(".color1");
color2=document.querySelector(".color2");
body=document.getElementById("gradient");
body.style.background=
"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
    + ")";
css.textContent = body.style.background;

// console.log(color1)
// console.log(color2)
// console.log(gradient)
// console.log(css)
function gradientSet(){
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
    + ")";
    
    css.textContent = body.style.background + ";";
}
color1.addEventListener("input",gradientSet)

color2.addEventListener("input",gradientSet)



