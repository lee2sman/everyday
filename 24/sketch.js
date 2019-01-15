//flatgame template by Lee2sman

let fence, hut, store, table, tool, trough;
let item = [],itemImg = [], drawn = [];
let touched = false;
let toPlace = 0;
let itemX, screenLeftBorder;

function preload(){
  itemImg[0] = loadImage('assets/fence.png');
  itemImg[1] = loadImage('assets/hut.png');
  itemImg[2] = loadImage('assets/store.png');
  itemImg[3] = loadImage('assets/table.png');
  itemImg[4] = loadImage('assets/tool.png');
  itemImg[5] = loadImage('assets/trough.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //font size
  textSize(24);

  //default x of items
  itemX = width/24;
  screenLeftBorder = itemX*2;

    for (let i =0;i<6;i++){
        item[i] = createSprite(itemX, height/12+i*height/6);
        item[i].addImage(itemImg[i]);
	item[i].setCollider('rectangle');
        item[i].scale = 0.2;
	item[i].mouseActive = true;
    }
}

function draw() {
    background(5, 5, 5);

    drawSprites();
}

function mousePressed(){

    if (mouseX < screenLeftBorder){

      for (let i =0;i<6;i++){

          item[i].onMousePressed = function(){
		toPlace = i;
	  }

      }
    } else { //otherwise you clicked within drawingScreen


	    //print('placing item '+toPlace);
        drawn[toPlace] = createSprite(mouseX, mouseY);
        drawn[toPlace].addImage(itemImg[toPlace]);
	drawn[toPlace].setCollider('rectangle');
        drawn[toPlace].scale = 0.2;
	drawn[toPlace].mouseActive = true;

    }

}


function mouseReleased(){
	touched = false;
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
