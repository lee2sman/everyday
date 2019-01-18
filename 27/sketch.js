let fileX, fileY;
let img;
let colorSlider;
let roomItemsJSON = [];
let item = 0;
let totalRooms = 6;
let roomSprites = [];
let spriteNum = 0;
let itemImages = [];
let draggedSprite;
let tempName;
let bg = []; //backgrounds groups. 1 for each room
let room = 0; //starting room
let tempText;

function setup() {
  var c = createCanvas(1088, 612);
  background(200);
  textAlign(CENTER);
  text('drop image', width / 2, height / 2);
  c.drop(handleFile);

  for (let i = 0; i < totalRooms; i++){
    bg[i] = new Group();
  }

  createDropDownMenu();
  createSliders();
  createButtons();
}

function createButtons(){
  button = createButton('Save');
  button.position(width-50,10);
  button.mousePressed(saveAll);

  button = createButton('Text');
  button.position(55,10);
  button.mousePressed(createTextInput);
}

function createSliders(){
  rSlider = createSlider(0,255,200);
  gSlider = createSlider(0,255,200);
  bSlider = createSlider(0,255,200);
  rSlider.position(10,30);
  gSlider.position(10,50);
  bSlider.position(10,70);
  rSlider.style('width','80px')
  gSlider.style('width','80px')
  bSlider.style('width','80px')
  rSlider.changed(saveRoomColor);
  bSlider.changed(saveRoomColor);
  gSlider.changed(saveRoomColor);
}

 function createDropDownMenu(){
   sel = createSelect();
   sel.position(10, 10);
   for (let i = 0; i < totalRooms; i++){
       sel.option(i);
   }
   sel.changed(changeRoom);
 }

function draw() {
  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();
  background(r,g,b);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  drawSprites(bg[room]);

  if (typeof pg !== 'undefined'){
    image(pg,100,100);
  }
}

function changeRoom() {
  room = sel.value();
}

function handleFile(file) {
  tempName = file.name;

  if (file.type == 'text'){
    roomItemsJSON[item] = createStringDict({
        'type': 'text',
        'text': file.data,
        'location': {
          'x': mouseX,
          'y': mouseY
        }
    });
  }

  if (file.type === 'audio') {
   let snd = createAudio('assets/'+file.name);
   snd.autoplay(true);

    roomItemsJSON[item] = createStringDict({
          'type': 'audio',
          'file': 'assets/'+file.name,
          'room': room,
    });
  }

  if (file.type === 'image') {
    fileX= mouseX;
    fileY=mouseY;

    //createSprite with image

    itemImages[spriteNum] = loadImage(file.data, showItem);

    spriteNum++; //get it ready for the next one

    roomItemsJSON[item] = createStringDict({
          'type': 'image',
          'file': 'assets/'+file.name,
          'room': room,
          'location': {
              'x': fileX,
              'y': fileY
          }
    });
  }

    item++;
}

function showItem(daImg){
  //image(daImg,0,0);
  roomSprites[spriteNum] = createSprite(fileX,fileY);
  roomSprites[spriteNum].addImage(daImg);
  roomSprites[spriteNum].scale = 0.5;
  roomSprites[spriteNum].addToGroup(bg[room]);
  roomSprites[spriteNum].mouseActive = true;
  roomSprites[spriteNum].name = tempName;

  roomSprites[spriteNum].onMousePressed = function(){
    if (draggedSprite == null) {
      draggedSprite = this;
    }
  }

  roomSprites[spriteNum].onMouseReleased = function(){
    if (draggedSprite == this) {

    //update in the JSON
    for (let i=0; i<roomItemsJSON.length;i++){

        if (roomItemsJSON[i].data.file == this.name){
        //delete if dragged offscreen
          if ((mouseX > width) || (mouseX < 0) || (mouseY > height) || (mouseY < 0)){
              this.remove();
              roomItemsJSON[i].data = 'removed';
          } else { //otherwise, update the x and y in the json file
            roomItemsJSON[i].data.location.x = mouseX;
            roomItemsJSON[i].data.location.y = mouseY;
          }
        }
    }

      draggedSprite = null;
    }
  }
}

function createTextInput(){
  inp = createInput('Enter text. Drag to position.');
  inp.style('font-size', '24px');
  inp.position(110,10);
  inp.input(function(){
    enteredText = this.value();
  });

  inp.mouseMoved(function(){
    if (mouseIsPressed)  {
        this.position(mouseX,mouseY);
    }
    if ((mouseX>width)||(mouseX<0)||(mouseY>height)||(mouseY<0)){
        this.remove();
    }
  });
  inp.mouseOut(function(){

  //TODO:
  //need to save to temp array first. write to jsonfile on save.
    roomItemsJSON[item] = createStringDict({
        'type': 'text',
        'text': this.elt.value,
        'location': {
          'x': this.x,
          'y': this.y
        }
    });
    item++;
  });
}

function saveRoomColor(){
   //already saved color for this room?
  for (let i = 0; i < roomItemsJSON.length; i++){
      if (roomItemsJSON[i].data.type == 'roomColor'){
        if (roomItemsJSON[i].data.room == room){ //if there's already color data saved for this room, replace it
          roomItemsJSON[i].data.colorData.r = rSlider.value;
          roomItemsJSON[i].data.colorData.g = gSlider.value;
          roomItemsJSON[i].data.colorData.b = bSlider.value;
        }
      }
  }

  roomItemsJSON[item] = createStringDict({
          'type': 'roomColor',
          'colorData': {
              'r': rSlider.value(),
              'g': gSlider.value(),
              'b': bSlider.value()
          },
            'room': room
  });
}

function getMusic(file){
  if (file.type === 'audio') {
   let snd = createAudio('assets/'+file.name);
   snd.autoplay(true);
  }
}

function saveAll(){
		saveJSON(roomItemsJSON, 'gamefile.json');
}
