function SnakesLadders() {

};

let gd = {
  ladders : [ [2, 38], [7, 14], [8, 31], [15, 26], [21, 42], [28, 84], [36, 44], [51, 67],
    [71, 91], [78, 98], [87, 94] ],
  snakes : [[16, 6], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88],
    [95, 75], [99, 80]],
  currPlayer : 1,
  player1Loc: {val: 0},
  player2Loc: {val: 0},
  displayInfo: '',
  gameOver: false,
  movePlayer(currP, move) {
  
    currP.val += move;
    
    if(currP.val > 100) {
      currP.val = (currP.val - (currP.val - 100) * 2)
    }
    for(let i = 0; i < this.ladders.length; i++) {
      if(currP.val == this.ladders[i][0]) {
        currP.val = this.ladders[i][1];
        break;
      }
      if(this.snakes[i]) {
        if(currP.val == this.snakes[i][0]){
          currP.val = this.snakes[i][1];
          break;
        }
      }
    }
    
    
    
  }
};

SnakesLadders.prototype.play = function(die1, die2) {

  if(gd.gameOver) {
    return 'Game over!';
  }

  const dieTotal = die1+die2;
  const startPlayer = {};
  
  if(gd.currPlayer == 1){
    startPlayer.txt = "Player 1";
  } else {
    startPlayer.txt = "Player 2";
  }

  if(gd.currPlayer == 1) {
    gd.movePlayer(gd.player1Loc, dieTotal);
    startPlayer.num = gd.player1Loc.val;
  } else {
    gd.movePlayer(gd.player2Loc, dieTotal);
    startPlayer.num = gd.player2Loc.val;
  }
    
  
  
  
  
  
  gd.displayInfo = `${startPlayer.txt} is on square ${startPlayer.num}`;
  
  if(gd.currPlayer == 1 && gd.player1Loc.val == 100) { 
    gd.displayInfo = "Player 1 Wins!"
    gd.gameOver = true;
  } else if(gd.currPlayer == -1 && gd.player2Loc.val == 100) {
    gd.displayInfo = "Player 2 Wins!"
    gd.gameOver = true;
  }
  
  if(die1 != die2) {
    gd.currPlayer = -gd.currPlayer;
  }
  
  
  return gd.displayInfo;
  
}