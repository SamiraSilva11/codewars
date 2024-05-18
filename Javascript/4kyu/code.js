// returns index of move
function solveTTT(board) {
    const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
    
    // Check if there's a winning move for X
      for (let combo of winningCombinations) {
          const [a, b, c] = combo;
          if (board[a] === 'X' && board[b] === 'X' && board[c] === '') {
              return c;
          }
          if (board[a] === 'X' && board[c] === 'X' && board[b] === '') {
              return b;
          }
          if (board[b] === 'X' && board[c] === 'X' && board[a] === '') {
              return a;
          }
      }
    
        // If no winning move, make any valid move
      for (let i = 0; i < board.length; i++) {
          if (board[i] === '') {
              return i;
          }
      }
      
      // Return -1 if no valid move (should never reach here)
      return -1;
  }