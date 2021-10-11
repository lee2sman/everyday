let merzbau = [];
let totalImg = 8;
let step;
let shape;
function preload() {
	for (let i = 0; i < totalImg; i++) {
		merzbau[i] = loadImage("../196/assets/" + i + ".png");
	}
}
function setup() {
	//createCanvas(400,400)
	createCanvas(4921, 7360); //resize for 300dpi!
	step = width / 6;

  background(0)
	for (let y = 0; y < height; y += step) {
		for (let x = 0; x < width; x += step) {

		  if (random()>0.5){fill(0);} else {fill(255)}
		//  rect(x,y,step,step)
			//image(random(merzbau), x, y, step, step);
		  let _scale = ceil(random(0.1,1.5))
image(merzbau[7], x, y, step*_scale, step*_scale, random(step), random(step),step,step)

		}
	}

	filter(THRESHOLD);
}
function draw() {}
function mousePressed() {}
function keyPressed() {
	if (key == "s") {
		save();
	}
}
