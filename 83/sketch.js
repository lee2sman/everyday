let capture;
let whatLine;
let clickIcon;
let scannerIcon;
let triggered = false;
let altScan = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(15);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  
  clickIcon = loadImage('click.png',
    function(){ScannerIcon = loadImage('scanner-icon.png',function(){
      textSize(48);
      text('click to scan',width/2,height/4)
      
      textSize(12);
      text('top to bottom',width/3,height/2-100);
      image(ScannerIcon,width/3,height/2,100,150);
    
      text('left to right',width*2/3-80,height/2);
      image(ScannerIcon,width*2/3,height/2,100,150);
    
    //  image(clickIcon,width/2,height/2+150,100,150); 
      imageMode(CORNER);
    });
  });
}

function draw() {
  print('width/2: '+width/2+' , mouseX: '+mouseX+' , altScan: '+altScan);
  if (capture){
   if (capture.loadedmetadata) {
      
     if (altScan){
       image(capture,whatLine,0,10,height,whatLine,0,10,height);
     } else {
        //normal top to bottom capture render
        image(capture,0, whatLine,width,3,0,whatLine,width,height);
     }
            
     
      whatLine+=1;
       
     //check to see if scan finished
       if ((altScan == false) && (whatLine > height) && (triggered)){
          //for continous scan
          //whatLine = 0;  
         saveCanvas('scanner.png');
         //reset so you can click to start again
         triggered = false;
       } else if ((altScan == true) && (whatLine > width) && (triggered)){
         //for continous scan
          //whatLine = 0;  
         saveCanvas('scanner.png');
         //reset so you can click to start again
         triggered = false;
       }
   }
  }
}

function mousePressed(){
  if (!(triggered)){
    if (mouseX < width/2){
      //clicked on left, scan top to bottom
      altScan = false;
    } else {
     //click on right, scan left to right
      altScan = true;
    }
    
    triggered = true;
    background(255);
    capture = createCapture(VIDEO);
    capture.hide();
    whatLine = 0;
  }
}

function keyTyped(){
  if (key == 's'){
   saveCanvas('scanner.png'); 
  }
}