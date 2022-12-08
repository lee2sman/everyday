let pX,pY,player
//random generated flatgame prototype
const imgs = [
  "collective.gif",
  "milkcrates.gif",
  "rhizome.gif"
]
function setup() {
  noCanvas()


  pX=windowWidth/2
  pY=windowHeight/2

for (let i= 0; i < imgs.length; i++){
  let img = createImg(imgs[i]);
  img.position(random(windowWidth), random(windowHeight));
  img.style('opacity','0.3').style('rotate',random(-24,24)+"deg");
}


//create peers

//create player
player = createImg("gemini-icon.svg")
//player.style('backround-color','white')
player.position(pX,pY)

}

function draw(){

if (keyIsPressed){
  if ((keyCode === LEFT_ARROW) || (key=='a')) {
    pX-=10
  } else if ((keyCode === RIGHT_ARROW)||(key=='d')) {
    pX+=10
  } else if ((keyCode === UP_ARROW) || (key=='w')){
    pY-=10
  } else if ((keyCode === DOWN_ARROW) || (key=='s')){
    pY+=10
  }

    player.position(pX,pY)
}

}
