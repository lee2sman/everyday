let numOfPhotos = 10; // num of gifs in assets
let states = ['4up','2up','hero','1up'];
let imgs = [];
let cur_Imgs = [];
let layoutState = 0;
let timer = 5000;
layoutState = 'hero';
function preload(){
  for (let i=0;i<numOfPhotos;i++){
    imgs[i] = loadImage('assets/'+i+'.png');
  }
}
function setup(){
  createCanvas(windowWidth,windowHeight);

  changeImgs();
}
function draw(){

  background(0);

  switch (layoutState){
    case '4up':
      image(cur_Imgs[0],0,0,width/2,height/2);
      image(cur_Imgs[1],width/2,0,width/2,height/2);
      image(cur_Imgs[2],0,height/2,width/2,height/2);
      image(cur_Imgs[3],width/2,height/2,width/2,height/2);
      break;
    case '2up':
      image(cur_Imgs[0],0,0,width/2,height);
      image(cur_Imgs[1],width/2,0,width/2,height);
      break;
    case 'hero':
      image(cur_Imgs[0],width/4,height/4,width/2,height/2);
      break;
    case '1up':
    default:
      image(cur_Imgs[0],width,height);
  }


  if (millis()>timer){
      changeImgs();
      timer+=5000;
  }
  
}

function changeImgs(){
  for (let i=0;i<4;i++){
    cur_Imgs[i] = random(imgs);
  }
  layoutState = random(states);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
