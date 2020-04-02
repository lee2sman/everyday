let wrong;

function preload(){
  wrong = loadSound('assets/wrong.mp3');
}

function setup(){
  noCanvas();

  for (let i = 1; i < 70; i++){
    if (i < 10){
      i = "0" + str(i);
    }
    createImg("assets/"+i+".jpg");
  }
}

function mousePressed(){
  wrong.play();
}
