let die1;
let drone1;
let vid;

function preload(){
  drone1 = loadSound('assets/1.wav');
  drone2 = loadSound('assets/2.wav');
  drone3 = loadSound('assets/3.wav');
  drone4 = loadSound('assets/4.wav');
  drone5 = loadSound('assets/5.wav');
  drone6 = loadSound('assets/6.wav');

  vid = createVideo('assets/mouth_zoom.mp4');
}

function setup(){
  noCanvas();

  vid.loop();

  mousePressed();

}

function mousePressed(){
      let die = new Die(mouseX,mouseY);
      die.rollDie();
}


class Die {

  constructor(_x, _y, _w = 200, _dotW = 20){
    this.x = _x;
    this.y = _y;
    this.w = _w
    this.dotW = _dotW;
    this.roll;
  }

  rollDie(){
    this.roll = ceil(random(6));

     switch (this.roll){
      case 1:
        drone1.loop();
        break;
      case 2:
        drone2.loop();
        break;
      case 3:
        drone3.loop();
        break;
      case 4:
        drone4.loop();
        break;
      case 5:
        drone5.loop();
        break;
      case 6:
        drone6.loop();
        break;
    }

  }
}

