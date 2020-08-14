let cnv,
	rate = 10,
	looping = true,
	snd,
	clicked = false;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);

	rectMode(CENTER);
	angleMode(DEGREES);
	noFill();
	background(0);
	stroke(255);
	strokeWeight(8);
	strokeCap(PROJECT);
	frameRate(rate);
	snd = loadSound("boop.mp3");
	snd.playMode("untilDone");
}

function draw() {
	if (clicked) {
		background(0);

		//change x,y location here

		let times = int(random(4, 7));
		for (let i = 0; i < times; i++) {
			strokeWeight(int(random(20, 40)));
			let what = int(random(4));

			//stroke(random(255), random(255), random(255));
		  stroke(0,random(120,255),random(255))

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
			  stroke(random(100,155),0,random(100,155))
				line(random(width), random(height), random(width), random(height));
			}
		}
	} else {
		createP("click to generate");
		select("p").position(0, 0);
		noLoop();
	  snd.pause();
	}
}
function mousePressed() {
	clicked = !clicked;
	removeElements();
	loop();
	snd.loop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
