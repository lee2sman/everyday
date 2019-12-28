//ZineMaster 2054
//photo zine maker <-- had this idea years, finally implemented
//glue it up
//coded at variety coffee, sipping an espresso and seltzer
//code sketch 62 as starter code
let loaded = false, f
let totalPages = 8, canvasW, canvasH
let uploadedImg = [], imgCount = 0
let titleBgColor = '#00C8C8'
let zineTitle = 'ZineMaster2054', artistName

function preload(){
    f = loadFont('assets/linear_beam/Linebeam.ttf')
}

function setup(){
  if (windowWidth > windowHeight){
    pageW = windowHeight/2
  } else {
    pageW = windowWidth
  }

    pageH = pageW*(11/8.5)
    canvasW = pageW
    canvasH = pageH * totalPages
    createCanvas(canvasW,canvasH)

    angleMode(DEGREES)

    textFont(f)
    textAlign(CENTER, CENTER)
    textSize(pageW/zineTitle.length)

    //draw preview zine pages
    previewZine()

    //create Input Buttons
    createInputButtons()
 }

function previewZine(){
  
  //previewZine
  strokeWeight(12)
  rectMode(CORNER)

  for (let i = 0; i < totalPages; i++){
    rect(0,i*pageH,pageW,pageH)
    text(i,width/2,i*pageH+pageH/2)
  }

  //after drawn, reset
  strokeWeight(1)
}


function createInputButtons(){
  //file uploader
    input = createFileInput(handleFile, 'multiple')
    input.position(0, 0);

  //color picker
    colorPicker = createColorPicker('#00C8C8')
    colorPicker.position(0, input.height)
    colorPicker.input(printColor)

  //change title 
    let chooseTitle = createButton('Change Title')
    chooseTitle.position(0, 2 * input.height)
    chooseTitle.mousePressed(changeTitle)

  //change author
    let addCreator = createButton("Add Artist's Name")
    addCreator.position(0, 3 * input.height)
    addCreator.mousePressed(addName)

  //change total page
    let choosePages = createButton('8 pages')
    choosePages.position(0, 4 * input.height)
    choosePages.mousePressed(changePages)

  //print zine
  let printButton = createButton('print')
  printButton.position(0, 5*input.height)
  printButton.mousePressed(printZine)

  //info zine
  let helpButton = createButton('?')
  helpButton.position(0, 6*input.height)
  helpButton.mousePressed(help)
}

function changePages() {
  totalPages = prompt('New page total: ')
  if (totalPages > 0 || totalPages < 255){
    
  } else if (totalPages == '' || totalPages == null) {
    alert('must be between 1 and 255')
    totalPages = 8
  } else {
    totalPages = 8
  }

  //resize - change height based on new page total
  canvasH = pageH * totalPages

  resizeCanvas(canvasW, canvasH)
  renderZine()
}

function changeTitle(){
  zineTitle = prompt('New title: ')
   if (zineTitle == null || zineTitle == '') {
    zineTitle = 'ZineMaster2054'
   }  

  textSize(pageW/zineTitle.length)

  makeCover()
}

function addName(){
  artistName = prompt("Artist/Creator's Name: ")

  makeCover()
}

function printColor(){
  titleBgColor = this.value()

  makeCover()
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
    save(saveOurZine,'zine.jpg')

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
    text('ZineMaster2054',width/2,pageH/2)
  }
}

function makeCover(){
  fill(titleBgColor)
  rectMode(CENTER)
  noStroke()
  rect(pageW/2,pageH/2,pageW*4/5,100)

  if (zineTitle.length < 1){
    zineTitle = 'ZineMaster2054'
  }

  if (zineTitle.length > 19){
    rect(pageW/2,pageH/2,pageW,100)
  }

  if (artistName){ 
     rect(pageW*3/4,pageH*4/5,pageW*2/5,50)
  }

  fill(0)
  text(zineTitle,pageW/2,pageH/2)

  textSize(width/60)
  text(artistName,pageW*3/4,pageH*4/5)
  textSize(pageW/zineTitle.length)
}

function makePages(){
  
  for (let i = 0; i < totalPages; i++){
     makePage(i)
  }

  makeCover()

}

function makePage(_pageNum){
    let whichImg = []
    for (let j = 0; j < 4; j++){
      whichImg[j] = floor(random(uploadedImg.length))
    }

    switch(floor(random(8))) {
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

    if (uploadedImg[0]){
      if ((mouseX > 0) && (mouseX < width)){
        if (!((mouseX < input.width)&&(mouseY < 4*input.height))){
          reRenderPage()
        }
      }
    }

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
    imgCount++
    
    renderZine()

  } else {
    uploadedImg[imgCount] = null;
  }
}
