let input,data;
let btn = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  text("test - don't look at me",50,height-10);

  input = createFileInput(handleFile);
  input.position(0, 0);
}

function handleFile(file){
  data = loadJSON(file.name,buildPageFromJSON);
}

function buildPageFromJSON(){
  for (button in data.buttons){
  print(data.buttons[button].xpos);

  btn[button] = new Clickable(data.buttons[button].xpos, data.buttons[button].ypos);
  btn[button].resize(data.buttons[button].w, data.buttons[button].h);
  btn[button].draw();
  }
}

function draw(){
}
