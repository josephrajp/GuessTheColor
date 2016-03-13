var colors = []

colorsArr();

var colorBoxes = document.querySelectorAll(".colorBox");
var pickedColor = colors[pickColor()];
var colorText = document.querySelector("#rgb");
var statusText = document.querySelector("#status")

colorText.textContent = pickedColor;

for(var i=0; i<colorBoxes.length; i++){
	colorBoxes[i].style.backgroundColor = colors[i];

	colorBoxes[i].addEventListener("click", function(){
		if(pickedColor === this.style.backgroundColor){
			changeColors(pickedColor);
			statusText.innerHTML = "<a href='index.html'> You've guessed the Right color. Click here to Play Again...</a>";
			statusText.style.color = "#2ecc71";
		}else{
			statusText.textContent = "You've guessed the Wrong color - Try Again!";
			statusText.style.color = "#e74c3c";
			this.style.backgroundColor = "rgb(255, 255, 255)";
		}
	
})
}

function changeColors(pickedColor){
	for(var i=0; i<colorBoxes.length; i++){
		colorBoxes[i].style.backgroundColor = pickedColor;
	}
}

function pickColor(){
	return Math.floor(Math.random() * colors.length);
}

function colorsArr (){
	for(var i=0; i<6; i++){
		var colorVal = "rgb("
		for(var j=0; j<3; j++){
			var random255 = Math.floor(Math.random()*256);
			if(j<2){
			colorVal += random255+", "
			}else{
			colorVal += random255 +")"
			}
		}
		colors.push(colorVal);
	}
}