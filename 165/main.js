const body = document.body;
body.style.backgroundColor = "blue";

setInterval(function() {
	for (let i = 0; i < 20; i++) {
		let p = document.createElement("p");
		body.appendChild(p);
		p.innerHTML = "&#96" + Math.floor(Math.random() * 22 + 10);

		p.style.fontSize = Math.floor(Math.random() * 255) + "px";
		if (Math.random() < 0.1) {
			p.style.color =
				"rgb(" +
				Math.floor(Math.random() * 255) +
				"," +
				Math.floor(Math.random() * 255) +
				"," +
				Math.floor(Math.random() * 25) +
				")";
		} else {
			p.style.color = "blue";
		}

		p.style.position = "absolute";
		p.style.left = Math.floor(Math.random() * innerWidth) + "px";
		p.style.top = Math.floor(Math.random() * innerHeight) + "px";
	}
}, 60);
