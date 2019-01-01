let grid = [];
let cols = 5;
let rows = 5;
let playerX = 2;
let playerY = 2;
let xp = 1;
let hp = 5;
let prevIcon = '.';
let numOfBoards = 0;
let gold = 0;
let potions = 0;
let monsters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
			if (random() < 0.01){
				grid[i][j] = '*';
			} else if (random() < 0.02){
				grid[i][j] = '?';
			} else if (random() < 0.03){
				grid[i][j] = '!';
			} else if (random() < 0.05){
				//create an enemy
				let chooseMonster = round(random(3*xp));
				while (chooseMonster > monsters.length){
					chooseMonster = round(random(3*xp));
				}

				grid[i][j] = monsters[chooseMonster];
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

        if (hp<=0){ //did you die?
		dead();
        } else {
		drawBoard();
	}
}

function checkKeys(){

    //check to make sure not on edge of map
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

	//quaff a potion
	if (key === 'q'){
		if (potions>0){
			hp+=round(random(xp));	
			potions--;
		}
	}
//return false; //prevent default
}

function checkCollision(){

	//have you hit an enemy?
	if (monsters.indexOf(prevIcon) >= 0) {

	    if (random() > 0.5){  //you hit monster
		if (monsters.indexOf(prevIcon)>0){
			prevIcon = monsters[monsters.indexOf(prevIcon)-1];
		} else {
			monsterKilled();
		}
	    } else {  //otherwise monster hits you
		hp--;
	    }


	}

	if (prevIcon === '*'){
		//you've hit gold
		//add a random amount of gold	
		gold+=int(random(20,70));

        	//now that player has taken gold, let's replace * with .
        	prevIcon = '.';
	}

	if (prevIcon == '%'){
		createP('castle');
	}

	if (prevIcon == '!'){
		potions++;
		prevIcon = '.'; //it's picked up so remove it
	}
}

function monsterKilled(){
			//remove monster from board 
			prevIcon = '.';

			//increase xp and hp
			xp++;
			hp+=round(random(xp));

}

function drawBoard(){
	for (let i = 0; i < rows; i++){
		createP(grid[i].join(''));
	}
	createP('HP '+hp);
	createP('XP '+xp);
	createP('Ptn '+potions);

	//display total gold
	if (gold>99){
		createP('G:'+gold);
	} else if (gold>9){
		createP('Gld'+gold);
	} else {
		createP('Gold'+gold);
	}
}

function dead(){
	removeElements(); //clean out all P added to page
createP('.....');
createP('.---.');
createP('|RIP|');
createP('|...|');
createP('|...|');
}
