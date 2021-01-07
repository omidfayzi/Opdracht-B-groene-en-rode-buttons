
var container = document.querySelector("#container");

for (var i = 1; i <= 30; i++) {
	var buttonsContainer = document.createElement("button");
	buttonsContainer.innerText = i;
	container.appendChild(buttonsContainer);
	buttonsContainer.classList.add("buttonsContainer");
};

document.querySelector("#container").addEventListener("click", function(e) {
	var selectedButton = e.target;
	selectedButton.classList.add("selectedButton");
	console.log(selectedButton);
	});	 


	





