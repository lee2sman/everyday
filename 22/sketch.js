let grid = [];
let cols = 25;
let rows = 25;
let playerX = 2, playerY = 2;
let xp = 1;
let hp = 5;
let prevIcon = '.';
let numOfBoards = 0;
let gold = 0;
let potions = 0;
let scrolls = 0;
let deg=0;
let timer = 1000;

function setup(){
	noCanvas();
	
	createBoard();

	//draw initially
	drawBoard();
}

function createBoard(){

	//create MAIN BOARD with trees and such, by percentage chance
	for (let i = 0; i < rows; i++){
		grid[i] = [];
		for (let j=0; j < cols; j++){
			grid[i][j] = 0;
			if (random() < 0.2){
				grid[i][j] = '*';
			} else if (random() < 0.4){
				grid[i][j] = '?';
			} else {
				grid[i][j] = '.';
			}

		}
	        //start player in center
		if(i==playerY){
			grid[playerY][playerX] = '@';

		}
		
	}
}

//this is essentially the gameloop
function draw(){
	if ((millis() > timer) || (keyIsPressed)){
		main();
		deg+=1;
		timer = millis() + 100;
	}
}

function mouseClicked(){
	main();
}

function main(){
	removeElements(); //clean out all P added to page
	checkKeys();
   	drawBoard();
}

function checkKeys(){

    //check to make sure not on edge of map
    if (((keyCode == UP_ARROW || key == 'k') && (playerY > 0)) || ((keyCode == DOWN_ARROW || key == 'j') && (playerY < rows-1)) || ((keyCode == LEFT_ARROW || key == 'h') && (playerX > 0)) || ((keyCode == RIGHT_ARROW || key == 'l') && (playerX < cols-1))){
    
	//save original letter where player is moving
	grid[playerY][playerX] = prevIcon;
	
	//save current player x, y as prevX, prevY
	prevX=playerX;
	prevY=playerY;


	if ((keyCode === UP_ARROW) || (key == 'k')){
		playerY--;	

		deg-=random(180,189);
	}
	if ((keyCode === DOWN_ARROW) || (key == 'j')){
		playerY++;

		deg+=-random(180,189);
	}
	if ((keyCode === LEFT_ARROW) || (key == 'h')){
		playerX--;

		deg-=random(9);

	}
	if ((keyCode === RIGHT_ARROW) || (key == 'l')){
		playerX++;

		deg+=random(9);


	}

        //grab element at position before player moves into it, and store it
        prevIcon = grid[playerY][playerX]
//print(prevIcon);
	
	//check for Collisions and act on it
	checkCollision();

        //now change player pos
        grid[playerY][playerX] = '@';
	    
    } else {
	    
	//TODO: store old board so we can move back to it later

	//OTHERWISE you must be on the edge AND moving offscreen
	    //WRAP PLAYER AROUND to be on the other side of the screen now
	if (keyCode === UP_ARROW || key == 'k'){
		playerY=rows-1;	
		createBoard();
	}
	if (keyCode === DOWN_ARROW || key == 'j'){
		playerY=0;
		createBoard();
	}
	if (keyCode === LEFT_ARROW || key == 'h'){
		playerX=cols-1;
		createBoard();
	}
	if (keyCode === RIGHT_ARROW || key == 'l'){
		playerX=0;
		createBoard();
	}
	    
	//TODO: check to see if you've already been there and load map?

    }
}

function checkCollision(){

	if (prevIcon === '*'){
		//you've hit gold
		//add a random amount of gold	
		gold+=(int(random(5,20))*xp);

        	//now that player has taken gold, let's replace * with .
        	prevIcon = '.';
	}

	if (prevIcon == '?'){ //scroll
		scrolls++;
		prevIcon = '.'; //it's picked up so remove it
	}
}

function drawBoard(){
	for (let i = 0; i < rows; i++){
		createP(grid[i].join(''));
	}

		let cells = selectAll('p');

	for (let i = 0; i < cells.length; i++){
		cells[i].style('rotate', deg).style('rotation-point','-50% -50%');
	}

	select('body').style('background-color','rgb('+random(100)+', 0, '+random(160,255)+')');
}

function restart(){
	grid = [];
	cols = 5;
	rows = 5;
	playerX = 2, playerY = 2;
	xp = 1;
	hp = 5;
	prevIcon = '.';
	numOfBoards = 0;
	gold = 0;
	potions = 0;
	scrolls = 0;

		//run setup again
	setup();
}
