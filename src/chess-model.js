class Chess {
  constructor(player1, player2) {
    this.white = player1;
    this.black = player2;
    this.board = getBoard();
    this.pieces = getPieces();
    this.moves = [];
  }

  getBoard() {
    for (let i = 1; i <= 64; i++) {
      this.board[i] = isPiecePos(i);
    }
  }

  isPiecePos(num) {
    this.pieces
  }
  getPieces() {
    return {
      pawnW1: 9,
      pawnW2: 10,
      pawnW3: 11,
      pawnW4: 12,
      pawnW5: 13,
      pawnW6: 14,
      pawnW7: 15,
      pawnW8: 16,

      pawnB1: 49,
      pawnB2: 50,
      pawnB3: 51,
      pawnB4: 52,
      pawnB5: 53,
      pawnB6: 54,
      pawnB7: 55,
      pawnB8: 56,

      rookW1: 1,
      rookW2: 8,
      rookB1: 57,
      rookB2: 64,

      knightW1: 2,
      knightW2: 7,
      knightB1: 58,
      knightB2: 63,

      bishopW1: 3,
      bishopW2: 6,
      bishopB1: 59,
      bishopB2: 62,

      queenW: 4,
      queenB: 60,
      kingW: 5,
      kingB: 61,
    };
  }

  possibleMoves() {}
}
