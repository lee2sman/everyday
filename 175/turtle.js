// there's a bug in here somewherz
let blockSize = 20
function turtle(){

  //start
    block = () => {
    //outer
    pendown()
    for(let i=0;i<4;i++){
      right(90)
      forward(80)
    }
    penup()
  }

  nextBlock = () => {
    right(90)
    forward(80)
    left(90)
  }

  nextRow = () => {
    back(80)
    left(90)
    forward(blockSize * 80)
    right(90)
  }


  //blocks
  function tree(){
    pendown()
    penColor('lightgreen')
   
    for(let i=0; i < 80; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(20)
    right(90)
    forward(70)
    pendown()
    penColor('green')
    left(90)
    for(let i=0; i < 60; i++){
      forward(1)
      left(90)
      penup()
      forward(i/2)
      pendown()
      forward(60-i)
      back(60-i)
      penup()
      back(i/2)
      right(90)
    }
    left(90)
    forward(30)
    right(90)
    pendown()
    back(80)
    forward(80)
    penup()
    left(90)
    forward(40)
    right(90)

      penup()
  }
  function tree2(){
    pendown()
    penColor('YellowGreen')
   
    for(let i=0; i < 80; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(20)
    right(90)
    forward(70)
    pendown()
    penColor('green')
    left(90)
    for(let i=0; i < 60; i++){
      forward(1)
      left(90)
      penup()
      forward(i/2)
      pendown()
      forward(60-i)
      back(60-i)
      penup()
      back(i/2)
      right(90)
    }
    left(90)
    forward(30)
    right(90)
    pendown()
    back(80)
    forward(80)
    penup()
    left(90)
    forward(40)
    right(90)

      penup()
  }
  function easy(){
    pendown()
    penColor('BurlyWood')
   
    for(let i=0; i < 80; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(80)

      penup()
  }
  function rocky(){
    pendown()
    penColor('BurlyWood')
   
    for(let i=0; i < 80; i++){
      back(1)
      right(90)

      for (let i = 0; i < 16; i++){
	if (random()>0.7){
	  penColor('SeaGreen')
	} else {
	  penColor('LightGreen')
	}
         forward(5)
      }
      back(80)
      left(90)
    }
    forward(80)

      penup()
  }
  function addWater(){
    setpos(0+4*blockSize*randint(blockSize),0+4*blockSize*randint(blockSize))
    penColor('blue')
    pendown()
   
    for(let i=0; i < 80; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(80)

      penup()

  }
  function addLake(){
    setpos(0+4*blockSize*randint(blockSize),0+4*blockSize*randint(blockSize))
    penColor('blue')
    pendown()
   
    for(let i=0; i < 160; i++){
      back(1)
      right(90)
      forward(160)
      back(160)
      left(90)
    }
    forward(160)

      penup()

  }



  function choosePiece(){
  block()
  
  let piece = randint(5)

  switch (piece){
    case 0:
      tree()
      break;
    case 1:
      tree()
      break;
    case 2:
      rocky()
      break;
    case 3:
      easy();     
      break;
    case 4:
      tree2()
      break;
    default:
      //no filling
  }

  nextBlock()
  }

  //program 
  background('DarkSeaGreen')

  setpos(0,0)
  for (let j=0;j<17;j++){
    for (let i=0;i<blockSize;i++){
      block()
      choosePiece()
    }
    nextRow()
  }

  addWater()
  addWater()
  addLake()
  addChar()

  for (let i=0; i < 220; i++){
    drunkRogue()
  }
  fill('black')
  text('forest quilt 2/7/21 2-3am 2021',20,height-20)


}
  function addChar(){
    //setpos(randint(20)*blockSize,randint(10)*blockSize)
    //setpos(randint(width/(4*blockSize))*4*blockSize,randint(height/(4*blockSize))*4*blockSize)
    setpos(30*blockSize,20*blockSize)
    left(90)
    forward(2*blockSize)
    right(90)
    forward(2*blockSize)
    pendown()
    penColor('yellow')
    penSize(3.5*blockSize)
    forward(1)
  }


function keyPressed() {
  pendown();
    penColor('yellow')
    penSize(3.5*blockSize)
  if (keyCode === UP_ARROW) {
    forward(4*blockSize);
  } else if (keyCode === RIGHT_ARROW) {
    right(90)
    forward(4*blockSize);
    left(90)
  } else if (keyCode === LEFT_ARROW) {
    left(90)
    forward(4*blockSize);
    right(90)
  } else if (keyCode === DOWN_ARROW) {
    back(4*blockSize);
  }
 

  return false; // prevent default
}

function drunkRogue(){
  pendown();
    penColor('yellow')
    penSize(3.5*blockSize)
  let choice = randint(4)
  if (choice==0) {
    forward(4*blockSize);
  } else if (choice==1){
    right(90)
    forward(4*blockSize);
    left(90)
  } else if (choice==2){
    left(90)
    forward(4*blockSize);
    right(90)
  } else if (choice==3){
    back(4*blockSize);
  }
 


}
