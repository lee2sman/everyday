////THIS IS TO CREATE GOAL SHEETS TASK LISTS WHAT-HAVE-YOU. IT"S A HACK LIKE EVERYTHING ELSE I MAKE
//lee2sman xmas eve day 2k19
//-------------------------------------Post-it background and text color tables-----------------------------
const bgColor = [
  '#ffb3b3', //peach
  '#ffb3ec', //pink
  '#dd99ff', //purple 
  '#99ffbb', //green
  '#ffff80', //yellow
  '#99ffff', //blue
  '#8080ff', //light urple
  '#99ffeb', //light aqua
  '#c2c2d6', //light gray
  '#ffd9b3', //orange
  '#e6ccb3', //light brown
  '#ccff99', //light green
  '#ff9999', //peachy
  '#ffccb3' //soft pink truth
];

const txtColor = [
  '#ff0066', //red
  '#e68a00', //orange
  '#40ff00', //green
  '#0066ff', //blue
  '#0000ff', //indigo
  '#cc00cc', //violet
  '#cccc00', //yellow-black
  '#1a001a' //purple-black
];

//---------------------------------------------SELECT BG COLOR-----------------------------------------
const body = document.querySelector('body');
body.style.backgroundColor = txtColor[Math.round((Math.random()*(txtColor.length-1)))];

//------------------------------------CREATE BUTTON AND FIRST POST-IT----------------------------------
const x = document.querySelectorAll('div'); //unecessary since i only start with one post now
for (let v of x) { 
  const whichBg = Math.round((Math.random()*(bgColor.length-1))); //choose bg color
  v.style.backgroundColor = bgColor[whichBg];  //set bg color

  const whichTxtColor = Math.round((Math.random()*(txtColor.length-1))); //choose txt color
  v.style.color = txtColor[whichTxtColor];  //set text color
}

function setup(){
  noCanvas();

//-----------------------------------------------ADD BUTTONS TO PAGE------------------------------------------
  //CREATE NEW NOTE
  createNoteButton = createImg('assets/noun_Add note_534027.png').position(3,3).style('background-color','yellow').style('border-radius','10%').style('width','5vw').style('height','5vw');
  if (windowWidth < 600){
    createNoteButton.style('width','13vw').style('height','13vw');
  }
  //Add note by icon 54 from the Noun Project
  createNoteButton.mousePressed(createNewList);

}

//----------------------------------------CLICK BUTTON TO CREATE NEW POST-IT----------------------------------
function createNewList(){

  var div = document.createElement("div");

  div.style.margin = '3vw';
  div.style.padding = '3vw';
  div.style.maxWidth = '50%';
  div.style.maxHeight= '50%';

  const whichBg = Math.round((Math.random()*(bgColor.length-1)));
  div.style.backgroundColor = bgColor[whichBg]; 

  const whichTxtColor = Math.round((Math.random()*(txtColor.length-1)))
  div.style.color = txtColor[whichTxtColor];

  div.innerHTML = " <h1>Category</h1> <ul> <li>thing 1</li> <li>thing 2</li> </ul> ";
  div.setAttribute('contenteditable','true');
  
  document.body.appendChild(div);
}

//------------------DELETE ANY DIV THAT IS EMPTY UPON KEY-RELEASE (so checks after delete key) ---------------
function keyReleased(){
  let allDiv = document.querySelectorAll('div');

  for (let eachDiv of allDiv) { 
    if (eachDiv.innerHTML == '<br>'){
        eachDiv.style.display = 'none';
    }
  }
}
