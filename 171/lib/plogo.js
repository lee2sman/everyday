let angle,
	x,
	y,
	drawing = true,
	retroStyle = false,
	showCommands = true,
	turtleC;
function setup() {
	createCanvas(windowWidth, windowHeight); //canvas is size of window
	resetDefaults();
	turtle();
	displayTurtle();
	retroFilter();
	displayConsole();
}

function resetDefaults() {
	angleMode(DEGREES); //instead of p5.js's default RADIANS

	angle = 180; //facing up
	x = width / 2; //start turtle in center
	y = height / 2;
}
function setpos(_newX, _newY, startx = x, starty = y) {
	let newX = _newX;
	let newY = _newY;

	if (drawing) {
		line(startx, starty, newX, newY);
	}
	x = newX;
	y = newY;
}
function forward(d, startx = x, starty = y, _angle = 360 - angle) {
	let newX = startx + d * sin(_angle);
	let newY = starty + d * cos(_angle);

	if (drawing) {
		line(startx, starty, newX, newY);
	}

	x = newX;
	y = newY;
}
function back(d, startx = x, starty = y, _angle = 180 - angle) {
	let newX = startx + d * sin(_angle);
	let newY = starty + d * cos(_angle);

	if (drawing) {
		line(startx, starty, newX, newY);
	}
	x = newX;
	y = newY;
}
function left(_angle) {
	angle -= _angle;
}
function right(_angle) {
	angle += _angle;
}

function pendown() {
	drawing = true;
}
function penup() {
	drawing = false;
}
function penSize(weight = 1) {
	strokeWeight(weight);
}
function penColor(c) {
	stroke(c);
}
function randint(max = 100) {
	//default returns int between 0 and 100
	return int(random(max));
}
function bg(c='black'){
  background(c)
}
function retro() {
	retroStyle = true;
}
function noConsole() {
	showCommands = false;
}
function retroFilter() {
	if (retroStyle) {
		//attempts a 'retro' aesthetic
		filter(THRESHOLD);
		filter(BLUR, 3);
	}
}
function displayTurtle() {
	stroke(0, 255, 0);
	strokeWeight(1);
	fill(0, 255, 0);
	push();
	translate(x, y);
	rotate(180 + angle);
	triangle(-10, 10, 10, 10, 0, -10);
	pop();
}
function displayConsole() {
	if (showCommands) {
		let programCode = turtle.toString();
		programCodeArr = splitTokens(programCode, "\n");

		let container = createDiv();

		for (let i = 1; i < programCodeArr.length - 1; i++) {
			createP("\u00A0" + programCodeArr[i])
				.style("font-family", "monospace")
				.style("font-weight", "bold")
				.style("font-size", "2rem")
				.style("display", "fixed")
				.style("background-color", "black")
				.style("color", "yellow")
				.style("border", "0")
				.style("margin", "0")
				.style("padding", "0")
				.style("display", "inline-block")
				.parent(container);
		}

		container.position(0, height - height / 8);
	}
}
function windowResized() {
	//resizes canvas if window is resized
	resizeCanvas(windowWidth, windowHeight);
	turtle(); //rerender
}
