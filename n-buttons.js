function addNumber() {
	let numberAdded = document.getElementById("nrAdded").value;
	const random = Math.floor(Math.random() * (numberAdded - 1 + 1)) + 1;
	while (numberAdded > 0) {
		let btn = document.createElement("button");
		let buttonNumber = numberAdded;
		btn.innerHTML = "ClickMe";
		btn.type = "button";
		btn.onclick = function() {
			if (random == buttonNumber + 1) {
				alert("You WIN! Congratulations!");
			} else {
				alert("You LOSE! Try again!")
			}
			location.reload();
		};
		document.body.appendChild(btn);
		--numberAdded;
		--buttonNumber;
	}
}
