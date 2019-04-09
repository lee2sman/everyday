let face, eye;
let eyes = 20;
let eyeX = [], eyeY = [];

function preload(){
  face = loadImage('face.jpg');
  eye = loadImage('eye.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  noCursor();

  for (let i=0; i<eyes;i++){
    eyeX[i] = random(-width/2,width/2);
    eyeY[i] = random(-height/2,height/2);
  }
}

function draw() {
  background(200);

  //eye
for (let i=0; i<eyes;i++){
  push();
  translate(eyeX[i],eyeY[i]);
  rotateX(map(mouseY,0,height,7,5));
  rotateY(map(mouseX,0,width,108,112));
  texture(eye);
  ellipsoid(60,56);
  pop();
}

  //bldng
  push();
    texture(face);
    translate(map(mouseX,0,width,-width/2,width/2),map(mouseY,0,height,-height/2,height/2));
   box(120,220,30);
  pop();
}
