let grid = [];
let cols = 10;
let rows = 10;
let playerX = 2;
let playerY = 5;
let prevIcon = '.';
let numOfBoards = 0;
let gold = 0;

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
			if (random() < 0.001){
				grid[i][j] = '*';
			} else if (random() < 0.002){
				grid[i][j] = '&';
			} else if (random() < 0.003){
				grid[i][j] = '?';
			} else if (random() < 0.004){
				grid[i][j] = '!';
			} else if (random() < 0.005){
				grid[i][j] = '%';
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
function keyPressed(){

	removeElements(); //clean out all P added to page

	checkKeys();

	drawBoard();
	
	//debug
//	print("col: "+playerX+" row: "+playerY);
}

function checkKeys(){

    //check to see if on edge of map
    if (((keyCode == UP_ARROW || key == 'k') && (playerY > 0)) || ((keyCode == DOWN_ARROW || key == 'j') && (playerY < rows-1)) || ((keyCode == LEFT_ARROW || key == 'h') && (playerX > 0)) || ((keyCode == RIGHT_ARROW || key == 'l') && (playerX < cols-1))){
    
	//first we reset the player current position to what it was previously 
	grid[playerY][playerX] = prevIcon;

	if ((keyCode === UP_ARROW) || (key == 'k')){
		playerY--;	
	}
	if ((keyCode === DOWN_ARROW) || (key == 'j')){
		playerY++;
	}
	if ((keyCode === LEFT_ARROW) || (key == 'h')){
		playerX--;
	}
	if ((keyCode === RIGHT_ARROW) || (key == 'l')){
		playerX++;
	}

        //grab element at position before player moves into it, and store it
        prevIcon = grid[playerY][playerX]
//print(prevIcon);
	
	//check for Collisions and act on it
	checkCollision();

        //now change player pos
        grid[playerY][playerX] = '@';
	    
    } else {
	//OTHERWISE you must be on the edge AND moving offscreen
	    //WRAP PLAYER AROUND to be on the other side of the screen now
	if (keyCode === UP_ARROW || key == 'k'){
		playerY=rows-1;	
	}
	if (keyCode === DOWN_ARROW || key == 'j'){
		playerY=0;
	}
	if (keyCode === LEFT_ARROW || key == 'h'){
		playerX=cols-1;
	}
	if (keyCode === RIGHT_ARROW || key == 'l'){
		playerX=0;
	}


	    
	//TODO: store old board so we can move back to it later
		
	//then create new board map - TODO: or check to see if you've already been there and load map
	createBoard();

    }
//return false; //prevent default
}

function checkCollision(){

	if (prevIcon === '*'){
		//you've hit gold
		//add a random amount of gold	
		gold+=int(random(20,70));
		createP('Total Gold: '+gold);

        	//now that player has taken gold, let's replace * with .
        	prevIcon = '.';
	}

	if (prevIcon == '%'){
		createP('castle');
	}
}

function drawBoard(){
	for (let i = 0; i < rows; i++){
		createP(grid[i].join(''));
	}
}

