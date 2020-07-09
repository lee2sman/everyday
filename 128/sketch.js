let hand, timer

let numSegments = 50,
  x = [],
  y = [],
  angle = [],
  segLength = 26,
  targetX,
  targetY;

for (let i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)
  hand = createImg('assets/hand.png','wacky hand')
  //hand.style('position','relative')
  noCursor()
  timer = millis()+1000

  stroke(196,147,158)
  strokeWeight(50)

  x[x.length - 1] = width / 2; // Set base x-coordinate
  y[x.length - 1] = 0; // Set base y-coordinate
}

function draw() {
	clear()
  reachSegment(0, mouseX, mouseY);
  for (let i = 1; i < numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for (let j = x.length - 1; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  for (let k = 0; k < x.length; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }

  hand.position(winMouseX-50,winMouseY-20,'fixed')

  if(millis()>timer){
    clear()
    timer+=5000
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  //strokeWeight(sw);
  strokeWeight(45);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
