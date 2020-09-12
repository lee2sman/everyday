let cnv, capture, camIcon, vignette;

function preload(){
  camIcon=loadImage('vintage.png');
  vignette=loadImage('vignette.png');
}
function setup() {
 
  cnv = createCanvas(500,500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  
  image(camIcon,width/2-50,height/2-50,100,100);
  
  pg = createGraphics(500, 500);
  
  capture = createCapture(VIDEO, toBuffer);
  capture.hide();
  
}

function toBuffer(){
 
  display();
  
   let shutterBtn = createImg('vintage.svg');
  shutterBtn.size(70,70);
  //createButton('shutter');
  
  shutterBtn.mousePressed(display);
  
  
  createElement('br');
  
  let btn = createImg('disk.png');
  btn.size(70,70);
  btn.mousePressed(function(){
    save('photo.jpg');
  });
  
 
}

function display(){
  pg.background(0);
  pg.image(capture,0,0,500,500);
  pg.background(random(40),0,random(255),random(30,150));
  pg.image(vignette,0,0,500,500);
  image(pg,0,0);
  filter(DILATE);
  filter(BLUR,2.4);
  }

