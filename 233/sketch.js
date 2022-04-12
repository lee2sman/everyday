//music by sholeh asgary
//code my lee tusman

let snd;
let wadi;
let started = false;
let level;
let initialHeight;
let initial_viewport_width;

function preload() {
  snd = loadSound("excerpt.mp3");
  wadi = loadImage("wadi.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  initial_viewport =
    document.documentElement.clientWidth *
    document.documentElement.clientHeight;
  
  rectMode(CENTER);
  noStroke();
  textAlign(CENTER, CENTER);
  snd.playMode("untilDone");
}

function draw() {
  image(wadi, 0, 0, windowWidth, windowHeight);

  if (!started) {
    fill("rgb(62,69,246)");
    rect(width / 2, height / 2, 400, 100);
    fill(0);
    textSize(48);
    text("Click to start", width / 2, height / 2);
  } else {
    cur_viewport =
      document.documentElement.clientWidth *
      document.documentElement.clientHeight;
    vol = map(cur_viewport, initial_viewport / 4, initial_viewport * 2, 0, 1);

    outputVolume(vol);
  }
}

function mousePressed() {
  started = true;
  snd.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
