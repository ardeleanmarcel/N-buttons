function addNumber() {
	let numberAdded = document.getElementById("nrAdded").value;
	const randomWinner = Math.floor(Math.random() * (numberAdded - 1 + 1)) + 1;
	while (numberAdded > 0) {
		let buttonsCreated = document.createElement("button");
		let buttonClicked = numberAdded;
		buttonsCreated.innerHTML = "ClickMe";
		buttonsCreated.type = "button";
		buttonsCreated.onclick = function() {
			if (randomWinner == buttonClicked + 1) {
				alert("You WIN! Congratulations!");
			} else {
				alert("You LOSE! Try again!")
			}
			location.reload();
		};
		document.body.appendChild(buttonsCreated);
		--numberAdded;
		--buttonClicked;
	}
}
