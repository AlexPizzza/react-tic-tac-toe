export const isMovesLeft = (board: string[]) => {
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      return true;
    }
  }

  return false;
};

export const evaluate = (board: string[]) => {};
