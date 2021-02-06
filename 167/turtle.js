let blockSize = 20
function turtle(){

  //start
  background('black')
  penup()
  left(45)
  forward(400)
  right(45)

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
  function half(){
    pendown()
    penColor('green')
   
    for(let i=0; i < 40; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(40)

      penup()
  }
  function easy(){
    pendown()
    penColor('yellow')
   
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

function otherHalf(){
    back(40)
    pendown()
    penColor('green')
   
    for(let i=0; i < 40; i++){
      back(1)
      right(90)
      forward(80)
      back(80)
      left(90)
    }
    forward(80)

      penup()
  }
  function twoUp(){
    half()
    otherHalf()
  }
  function tri(){

    penColor('lightgreen')
    pendown()
    for(let i=80; i>0; i--){
      right(90)
      forward(i)
      back(i)
      left(90)
      back(1)
    }
    forward(80)
    penup()
  }

  function choosePiece(){
  block()
  
  let piece = randint(5)

  switch (piece){
    case 0:
      half();
      break;
    case 1:
      otherHalf();
      break;
    case 2:
      tri();
      break;
    case 3:
      easy();     
      break;
    case 4:
      twoUp()
      break;
    default:
      //no filling
  }

  nextBlock()
  }

  //program 
  penup()
  left(45)
  forward(200)
  right(45)
  left(90)
  forward(330)
  right(90)
  for (let j=0;j<17;j++){
    for (let i=0;i<blockSize;i++){
      block()
      choosePiece()
    }
    nextRow()
  }

  fill('white')
  text('green and yeller quilt, 2/6/21 3:02am 2021',20,height-20)
}
