//paintmaster 5054
//coded in a free improv session that started in a constructed park in east cambridge near the charles river/big dig construction. 
//sheesh, took a long time. i was tired and mosquito bitten.
//glue it up
//code sketch 62
let imgs = [], loaded = false, f

function preload(){
    for (let i = 0; i < 8; i++){
      imgs[i] = loadImage('assets/background'+i+'.png',function(){console.log('loaded')});
    }
    f = loadFont('assets/linear_beam/Linebeam.ttf')
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    angleMode(DEGREES)
    textFont(f)
}
   

function draw(){
  if (loaded ){
    push()
    rotate(frameCount)
    pop()
  } else {
    textAlign(CENTER, CENTER);
    textSize(width/30)
    text('PaintMaster5054',width/2,height/2);
  }
}

function paint(){
   //if (width<height){rotate(90)}
    times = ceil(random(3))
  for (let i = 0; i < times; i++){
    push()
    rotate(random(360))
    scale(random(2))
    tint(random(360),random(360),random(360))
    image(imgs[round(random(2))],random(width),random(height),width,height)
    pop()
  }

    //cover it up with a png screen
    for (let i = 0; i < times; i++){
        tint(random(360),random(360),random(360))
        image(imgs[round(random(2,7))],0,0,width,height)
    }
}

function mousePressed(){
    loaded = true
    background(0)
    paint()
}
