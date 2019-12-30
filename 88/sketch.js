//Printster7200
//quick idea to remix the ZineMaker2054 into a poster-maker
let loaded = false, f = []
let totalPages = 1, canvasW, canvasH
let uploadedImg = [], imgCount = 0
let titleBgColor = '#00C8C8'
let zineTitle = 'Printster7200', artistName, choosePages
let caption = [], captionCounter = 0

function preload(){
    f[0] = loadFont('assets/fontType/linear_beam/Linebeam.ttf')
    f[1] = loadFont('assets/fontType/BadTV-Regular.otf')
    f[2] = loadFont('assets/fontType/BDP_FOX.ttf')
    f[3] = loadFont('assets/fontType/Comfortaa-Bold.ttf')
    f[4] = loadFont('assets/fontType/ComicHelvetic_Medium.otf')
    f[5] = loadFont('assets/fontType/Multicolore.otf')
    f[6] = loadFont('assets/fontType/Monoround.otf')
    f[7] = loadFont('assets/fontType/MyFontIsSlimey-Regular.ttf')
    f[8] = loadFont('assets/fontType/Pipes.ttf')
    f[9] = loadFont('assets/fontType/Random.ttf')
    uploadedImg[0] = loadImage('assets/black.jpg')
    uploadedImg[1] = loadImage('assets/black.jpg')
    uploadedImg[2] = loadImage('assets/black.jpg')
    uploadedImg[3] = loadImage('assets/black.jpg')
}

function setup(){
    pageH = windowHeight
    pageW = pageH * 8.5 / 11

    canvasW = pageW
    canvasH = pageH * totalPages
    createCanvas(canvasW,canvasH)

    angleMode(DEGREES)

    chooseFont()
    textAlign(CENTER, CENTER)
    textSize(pageW/zineTitle.length)

    //draw preview zine pages
    previewZine()

    //create Input Buttons
    createInputButtons()
 }

function previewZine(){
  strokeWeight(12)
  rectMode(CORNER)

  for (let i = 0; i < totalPages; i++){
    rect(0,i*pageH,pageW,pageH)
    if (i > 0){ //don't print 0 on zine cover since there's a title there already
      text(i,width/2,i*pageH+pageH/2)
    }
  }

  //after drawn, reset
  strokeWeight(1)
}


function createInputButtons(){
  //file uploader
    input = createFileInput(handleFile, 'multiple')
    input.position(0, 0);

  //color picker
    //colorPicker = createColorPicker('#00C8C8')
    colorPicker = createButton('Colorizer') //ADDED for Printster7200
    colorPicker.position(0, input.height)
    //colorPicker.input(printColor)
    colorPicker.mousePressed(printColor) //ADDED for Printster7200

  //change title 
    let chooseTitle = createButton('Change Title')
    chooseTitle.position(0, 2 * input.height)
    chooseTitle.mousePressed(changeTitle)

  //NEW ADDED for Printster7200
    let undoText = createButton('Remove Last Text')
    undoText.position(0, 3 * input.height)
    undoText.mousePressed(removeLastText)

  //NEW ADDED FOR Printster7200
    let randomizer = createButton('Randomizer')
    randomizer.position(0, 4 * input.height)
    randomizer.mousePressed(makeRandom)

  //change author
  //let addCreator = createButton("Add Artist's Name")
  //addCreator.position(0, 3 * input.height)
  //addCreator.mousePressed(addName)

  //change total page
  //choosePages = createButton('8 Pages')
  //choosePages.position(0, 4 * input.height)
  //choosePages.mousePressed(changePages)

  //print zine
  let printButton = createButton('Save')
  printButton.position(0, 6 * input.height)
  printButton.mousePressed(printZine)

  //info zine
  //let helpButton = createButton('?')
  //helpButton.position(0, 6*input.height)
  //helpButton.mousePressed(help)
}

function chooseFont(){
  
  let whichFont = int(random(f.length-1))
  textFont(f[whichFont])
}

function changePages() {
  totalPages = prompt('New page total: ')
  if (totalPages > 0 && totalPages < 256){
    totalPages=int(totalPages) //in case someone puts a decimal!
 } else {
    alert('Must be a number between 1 and 255. Returning to default (8).')
    totalPages = 8
  }
  choosePages.html(totalPages+' pages')

  //resize - change height based on new page total
  canvasH = pageH * totalPages

  resizeCanvas(canvasW, canvasH)
  renderZine()
}

function changeTitle(){
  zineTitle = prompt('New title: ')
   if (zineTitle == null || zineTitle == '') {
    zineTitle = 'Printster7200'
   }  

  textSize(pageW/zineTitle.length)

  makeCover()
}

function removeLastText(){
  if (captionCounter > 0){
    captionCounter--
    caption.pop()

    reRenderPage()
  }
}

function addName(){
  artistName = prompt("Artist/Creator's Name: ")

  makeCover()
}

function printColor(){
  //titleBgColor = this.value()
  titleBgColor = color(random(255),random(255),random(255))

  makeCover()
}

function makeRandom(){
  printColor()
  chooseFont()

  //if (uploadedImg.length>0){
    reRenderPage()
  //}
}

function placeText(){
  
  caption[captionCounter] ={"textEntry":captionText=prompt('Enter short text: '),"x":mouseX,"y":mouseY}

  makeCover(caption[captionCounter].textEntry,caption[captionCounter].x,caption[captionCounter].y)

  captionCounter++ //advance, ready for the next one
}

function printZine(){
    //window.print()

    //hide all the buttons
    let buttons = selectAll('button')
    for (let b in buttons){
      buttons[b].hide()
    }
    let inputs = selectAll('input')
    for (let i in inputs){
      inputs[i].hide()
    }

    let saveOurZine = createGraphics(pageW,totalPages*pageH)
    let screengrab = get((width-pageW)/2,0,pageW,totalPages*pageH)

    screengrab = get(0,0,pageW,totalPages*pageH)

    saveOurZine.image(screengrab, 0, 0)
    save(saveOurZine,'poster.jpg')

    for (let b in buttons){
      buttons[b].show()
    }
    inputs = selectAll('input')
    for (let i in inputs){
      inputs[i].show()
    }
}

function help(){
  window.open('help')
}

function draw(){
  if (!loaded){
    text('Printster7200',width/2,pageH/2)

      if ((mouseX > 0) && (mouseX < width)){
	if (!((mouseX < input.width)&&(mouseY < 4*input.height))){
	    cursor('assets/wand.png')
        } else {
            cursor('default')
	}
      }
  }
}

function makeCover(captionString,x,y){
  fill(titleBgColor)
  rectMode(CENTER)
  noStroke()
  rect(pageW/2,pageH/2,pageW*2/3,80)

  if (zineTitle.length < 1){
    zineTitle = 'Printster7200'
  }

  if (zineTitle.length > 19){
    rect(pageW/2,pageH/2,pageW,100)
  }

  //title goes here
  fill(0)
  text(zineTitle,pageW/2,pageH/2)

  //if (
  for (let i = 0; i < caption.length; i++){
    fill(titleBgColor)

    rect(caption[i].x,caption[i].y,(caption[i].textEntry.length)*36,50)
    fill(0)
    text(caption[i].textEntry,caption[i].x,caption[i].y)
  }

  //RESET?
  textSize(pageW/zineTitle.length)
}

function makePages(){
  
  for (let i = 0; i < totalPages; i++){
     makePage(i)
  }

  makeCover()

}

function makePage(_pageNum){

     whichImg = []
    for (let j = 0; j < 4; j++){
      whichImg[j] = floor(random(uploadedImg.length))
    }

    switch(floor(random(15))) {
      case 0:
	//cover img
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH) 
        break
      case 1:
	//2 up
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH/2)
	makeImage(whichImg[1],0,_pageNum*pageH+pageH/2,pageW,pageH/2)
        break
      case 2:
	//2 side by side
	makeImage(whichImg[0],0,_pageNum*pageH,pageW/2,pageH)
	makeImage(whichImg[1],pageW/2,_pageNum*pageH,pageW/2,pageH)
        break
      case 4:
	//4 up
	makeImage(whichImg[0],0,_pageNum*pageH,pageW/2,pageH/2)
	makeImage(whichImg[1],pageW/2,_pageNum*pageH,pageW/2,pageH/2)
	makeImage(whichImg[2],0,_pageNum*pageH+pageH/2,pageW/2,pageH/2)
	makeImage(whichImg[3],pageW/2,_pageNum*pageH+pageH/2,pageW/2,pageH/2)
        break
      case 5:
	//1 over 2
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH/2)
	makeImage(whichImg[1],0,_pageNum*pageH+pageH/2,pageW/2,pageH/2)
	makeImage(whichImg[2],pageW/2,_pageNum*pageH+pageH/2,pageW/2,pageH/2)
        break
      case 6:
	//2 over 1
	makeImage(whichImg[0],0,_pageNum*pageH,pageW/2,pageH/2)
	makeImage(whichImg[1],pageW/2,_pageNum*pageH,pageW/2,pageH/2)
	makeImage(whichImg[2],0,_pageNum*pageH+pageH/2,pageW,pageH/2)
        break
      case 7:
	//picture in picture
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
	makeImage(whichImg[1],pageW/8,_pageNum*pageH+pageH/8,pageW*6/8,pageH*6/8)
        break
      case 8:
	//picture in picture on color background
	rectMode(CORNER)
        fill(titleBgColor)
	rect(0,_pageNum*pageH,pageW,pageH)
	makeImage(whichImg[1],pageW/6,_pageNum*pageH+pageH/6,pageW*4/6,pageH*4/6)
        break
      case 9:
	//mini picture in picture
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
	//which corner?
	let whichCorner = random(4)
	if (whichCorner<1){
	  makeImage(whichImg[1],pageW/8,_pageNum*pageH+(pageH*1/8),pageW*3/8,pageW*2/8)
	} else if (whichCorner<2){
	  makeImage(whichImg[1],pageW/8,_pageNum*pageH+(pageH*5/8),pageW*3/8,pageW*2/8)
	} else if (whichCorner<3){
	  makeImage(whichImg[1],pageW*(4/8),_pageNum*pageH+(pageH*1/8),pageW*3/8,pageW*2/8)
	} else {
	  makeImage(whichImg[1],pageW*(4/8),_pageNum*pageH+(pageH*5/8),pageW*3/8,pageW*2/8)
	}
        break
      case 10:
	//cross
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
	rectMode(CORNER)
        fill(titleBgColor)
	rect(0,_pageNum*pageH,pageW*3/8,pageH*3/8)
	rect(pageW*5/8,_pageNum*pageH,pageW*3/8,pageH*3/8)
	rect(0,_pageNum*pageH+pageH*5/8,pageW*3/8,pageH*3/8)
	rect(pageW*5/8,_pageNum*pageH+pageH*5/8,pageW*3/8,pageH*3/8)
        break
      case 11:
	//tri
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
        fill(titleBgColor)
	let whichTri = random(4)
	if (whichTri<1){
	  triangle(0,_pageNum*pageH+pageH,pageW/2,0,pageW,_pageNum*pageH+pageH)
	} else if (whichTri<2){
	triangle(0,_pageNum*pageH,width/2,_pageNum*pageH+pageH,pageW,0)
	} else if (whichTri<3){
        triangle(0,_pageNum*pageH,pageW,_pageNum*pageH+pageH/2,0,_pageNum*pageH+pageH)
	} else {
        triangle(pageW,_pageNum*pageH,0,_pageNum*pageH+pageH/2,pageW,_pageNum*pageH+pageH)
	}
        break
      case 12:
	//circle
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
        fill(titleBgColor)
	if (random()<0.5){
	  circle(pageW/2,_pageNum*pageH+pageH/2,pageW)
	} else {
	  circle(pageW/2,_pageNum*pageH+pageH/2,random(pageW))
	}
        break
      case 13:
	//more circles
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
        fill(titleBgColor)
	if (random()<0.5){
	  circle(random(pageW),_pageNum*pageH+random(pageH),pageW)
	} else {
	  circle(random(pageW),_pageNum*pageH+random(pageH),pageW)
	  circle(random(pageW),_pageNum*pageH+random(pageH),pageW)
	  circle(random(pageW),_pageNum*pageH+random(pageH),pageW)
	}
        break
      case 14:
	//strokes
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH)
        fill(titleBgColor)
	
	let whichShape = int(random(3))
	if (whichShape < 1){
	  beginShape()
	  vertex(0,_pageNum*pageH+(pageH*2/3))
	  vertex(pageW*2/3,0)
	  vertex(pageW,0)
	  vertex(pageW,_pageNum*pageH+pageH/3)
	  vertex(pageW/3,_pageNum*pageH+pageH)
	  vertex(0,_pageNum*pageH+pageH)
	  endShape(CLOSE)
	} else if (whichShape < 2){
	  beginShape()
          vertex(pageW/3,_pageNum*pageH)
	  vertex(pageW,_pageNum*pageH+pageH*2/3)
	  vertex(pageW,_pageNum*pageH+pageH)
	  vertex(pageW*2/3,_pageNum*pageH+pageH)
	  vertex(0,_pageNum*pageH+pageH/3)
	  vertex(0,_pageNum*pageH)
          endShape(CLOSE)
	} else {
	  beginShape()
	  vertex(0,_pageNum*pageH+(pageH*2/3))
	  vertex(pageW*2/3,0)
	  vertex(pageW,0)
	  vertex(pageW,_pageNum*pageH+pageH/3)
	  vertex(pageW/3,_pageNum*pageH+pageH)
	  vertex(0,_pageNum*pageH+pageH)
	  endShape(CLOSE)

	  beginShape()
          vertex(pageW/3,_pageNum*pageH)
	  vertex(pageW,_pageNum*pageH+pageH*2/3)
	  vertex(pageW,_pageNum*pageH+pageH)
	  vertex(pageW*2/3,_pageNum*pageH+pageH)
	  vertex(0,_pageNum*pageH+pageH/3)
	  vertex(0,_pageNum*pageH)
          endShape(CLOSE)
	}
        break
      default:
	//fullscreen image
	makeImage(whichImg[0],0,_pageNum*pageH,pageW,pageH) 
    }
}

function reRenderPage(){
  //RE-RENDER PAGE you are on top of
  //pick different rendering of zine page underneath mouse click position
  let currentPage = int(mouseY/pageH)

  makePage(currentPage)
  //re-add cover in case you changed first page
  if (currentPage == 0){
    makeCover()
  }
}

function makeImage(_img,imgX,imgY,imgW,imgH){
  image(uploadedImg[_img],imgX,imgY,imgW,imgH)
}

function mousePressed(){
    loaded = true

    //if (uploadedImg[0]){
      if ((mouseX > 0) && (mouseX < width)){
        if (!((mouseX < input.width)&&(mouseY < 4*input.height))){
         // reRenderPage()
	  placeText()
	 
        }
      }
    //}

    return false
}

function touchStarted(){
    loaded = true

    return false
}

function renderZine(){
  //RENDER zine
    select('body').style('background-color','black')  //make page background black
    background(0)

    makePages()
}

function handleFile(file) {
  //print(file);
  if (file.type === 'image') {
    uploadedImg[imgCount] = createImg(file.data);
    uploadedImg[imgCount].hide();

    if (imgCount < 4){
      for (let i = 1; i < (4 - imgCount); i++){
	uploadedImg[imgCount+i] = createImg(file.data);
	uploadedImg[imgCount+i].hide();
      }
    }

    imgCount++
    
    renderZine()

  } else {
    uploadedImg[imgCount] = null;
  }
}
