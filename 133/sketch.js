let cnv,
	rate = 10,
	looping = true,
	countdown = 30;
snd;

function setup() {
	cnv = createCanvas(300, 300);
	cnv.position(
		constrain(random(windowWidth), 300, windowWidth - 300),
		constrain(random(windowHeight), 300, windowHeight - 300)
	);

	rectMode(CENTER);
	angleMode(DEGREES);
	noFill();
	background(0);
	stroke(255);
	strokeWeight(8);
	strokeCap(PROJECT);
	frameRate(rate);
	snd = loadSound("fog-descends.mp3");
	snd.playMode("untilDone");
}

function draw() {
	countdown--;

	if (countdown > 0) {
		background(0);
		cnv.position(
			constrain(random(windowWidth), 300, windowWidth - 300),
			constrain(random(windowHeight), 300, windowHeight - 300)
		);
		let times = int(random(4, 7));
		for (let i = 0; i < times; i++) {
			strokeWeight(int(random(3, 10)));
			let what = int(random(4));
			if (what == 1) {
				//ellipse(random(width),random(height),random(width))
				arc(
					random(width),
					random(height),
					random(width),
					random(height),
					random(width),
					random(height)
				);
			} else if (what == 2) {
				//rect(random(width),random(height),random(width),random(height))
				quad(
					random(width),
					random(height),
					random(width),
					random(height),
					random(width),
					random(height),
					random(width),
					random(height)
				);
			} else {
				line(random(width), random(height), random(width), random(height));
			}
		}
	} else {
		createP("click to regenerate");
		noLoop();
	}
}
function mousePressed() {
	removeElements();
	countdown = 30;
	loop();
	snd.loop();
}
