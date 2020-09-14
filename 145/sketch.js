let cnv, capture, camIcon, vignette;

if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

function preload(){
  camIcon=loadImage('vintage.png');
}
function setup() {


 
  cnv = createCanvas(100,100);
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
    save('photo.png');
  });
  
 
}

function display(){
  pg.background(0);
  pg.image(capture,0,0,width,height);

  image(pg,0,0);
  }

