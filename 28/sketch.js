//flatgame template by github/Lee2sman 2018
//MIT License

let me, myImg, myAnimation, soundtrack,  room = 0, totalRooms = 0, items = [], bg, roomItems = [], itemImages = [], roomTexts = [];
let gamefile = [], itemInfo;

function setup(){

  createCanvas(1088, 612);
  //loadjsonfile
  gamefile = loadJSON('gamefile.json' , loadedGame);

}

function loadedGame(gamefile){

   for (let i=0; i<gamefile.length; i++){
//     print(gamefile[i].data.type);

       if (gamefile[i].data.type == 'audio'){
         soundFormats('mp3');
         soundtrack = loadSound(gamefile[i].data.file,function(){soundtrack.loop();});
       } else if (gamefile[i].data.type == 'image'){
         itemImages[i] = loadImage(gamefile[i].data.file, function(){
         //roomItems[i] = createSprite(gamefile[i].data.location.x, gamefile[i].data.location.y); //this doesn't work
           //image(itemImages[i], gamefile[i].data.location.x, gamefile[i].data.location.y); //this works
         });
       } else if (gamefile[i].data.type == 'player'){
           myImg = loadImage(gamefile[i].data.file, function(){
             image(myImg, gamefile[i].data.location.x, gamefile[i].data.location.y);
           });
       }
    }
}


function draw(){

   // for (let i=0; i<gamefile.length; i++){
   //
   //     if (gamefile[i].data.type == 'image'){
   //       print(itemImages[i]);
   //       //image(itemImages[i],gamefile[i].data.location.x,gamefile[i].data.location.y);
   //    }
   // }
}
