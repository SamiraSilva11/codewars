function isSolved(board) {
    // Check rows
      for (let r = 0; r<3 ; r++) {
        if(board[r][0] === board[r][1] && board[r][1] === board[r][2] && board[r][0] !== 0) {
          return board[r][0];
        }
      }
    
    // Check columns
      for (let c=0 ; c<3 ; c++){
        if (board[0][c] === board[1][c] && board[1][c] === board[2][c] && board[0][c] !== 0) {
              return board[0][c];
          }
      }
    
    // Check diagonals
      if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) ||
          (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0)) {
          return board[1][1];
      }
  
      // Check for draw
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              if (board[i][j] === 0) {
                  return -1;
              }
          }
      }
    
      return 0;
  }



  //best practice

  function isSolved(board) {
    board = board.join('-').replace(/,/g,'');
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
 }