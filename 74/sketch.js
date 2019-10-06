let charset = '                                             abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let step = 18;
let f;
let world = [
  //['◢','◢','◢','◢','◢'],
  //['▨','▨','▨','▨','▨'],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
  ['█ ','█ ','█ ','█ ','█ ','█ ','█ '],
];

function preload(){
  f = loadFont("assets/vt323.ttf");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  textFont(f);
  textSize(24);

  select('body').style('background-color','black');
    
//make em
  for (let i = 0; i < 3; i++){
	populate();
	makeDungeon(random(width-world.length*step),random(height-world.length*step));
  }

  nameIt();
}

function nameIt(){
  let theName = charset[int(random(charset.length))].toUpperCase();
  for (let i = 0; i < 10; i++){
    theName+=charset[int(random(charset.length))];
  }
  fill(0,220,0);
  text(theName+" Zoo",100,100);
}

function populate(){

  //populate zoo
  for (let y = 0; y < world.length; y++){
    for (let x = 0; x < world[y].length; x++){
      //print('x-loc: '+x+' y-loc: '+y+' value: '+world[y][x]);
      world[y][x] = '#'; //populate all of room including outer ring of room
    }
  }
	
  //populate inner area
  for (let y = 1; y < world.length-1; y++){
    for (let x = 1; x < world[y].length-1; x++){
      world[y][x] = charset[int(random(charset.length))];
    }
  }

}

function makeDungeon(dungeonX,dungeonY){
  fill(0,220,0);

  for (let y = 0; y < world.length; y++){
    for (let x = 0; x < world[y].length; x++){
      //print('x-loc: '+x+' y-loc: '+y+' value: '+world[y][x]);
	if ((y > 0) && (y < world.length - 1) && (x > 0) && (x < world[y].length-1)){
		fill(random(255),random(255),random(255));
	} else {
		fill(0,220,0);
	}

      text(world[y][x],x*step+dungeonX,y*step+dungeonY);
    }
  }


}
