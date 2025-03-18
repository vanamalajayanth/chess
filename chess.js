class CreateChessBoard {
  constructor() {
    this.board = {};
    this.pieces = {};
    this.color = "white";
  }

  toggleColor() {
    this.color = this.color === "black" ? "white" : "black";
  }

  bluePrint() {
    for (let boxNum = 0; boxNum < 64; boxNum++) {
      if (boxNum % 8 !== 0) this.toggleColor(this.color);

      this.board[boxNum + 1] = { boxNum: boxNum + 1, color: this.color };
    }
  }

  addPieces() {
    this.addPawns();
    this.addBishops();
    this.addKings();
    this.addRooks();
    this.addKnights();
    this.addQueens();
  }
  addPawns() {
    for (let position = 9; position <= 16; position++) {
      this.pieces[`pawnB${position - 8}`] = {
        type: "pawn",
        color: "black",
        position: position,
      };
    }

    for (let position = 49; position <= 56; position++) {
      this.pieces[`pawnW${position - 48}`] = {
        type: "pawn",
        color: "white",
        position: position,
      };
    }
  }

  addRooks() {
    this.pieces["rookB1"] = { type: "rook", color: "black", position: 1 };
    this.pieces["rookB2"] = { type: "rook", color: "black", position: 8 };
    this.pieces["rookW1"] = { type: "rook", color: "white", position: 57 };
    this.pieces["rookW2"] = { type: "rook", color: "white", position: 64 };
  }

  addKnights() {
    this.pieces["knightB1"] = { type: "knight", color: "black", position: 2 };
    this.pieces["knightB2"] = { type: "knight", color: "black", position: 7 };
    this.pieces["knightW1"] = { type: "knight", color: "white", position: 58 };
    this.pieces["knightW2"] = { type: "knight", color: "white", position: 63 };
  }

  addBishops() {
    this.pieces["bishopB1"] = { type: "bishop", color: "black", position: 3 };
    this.pieces["bishopB2"] = { type: "bishop", color: "black", position: 6 };
    this.pieces["bishopW1"] = { type: "bishop", color: "white", position: 59 };
    this.pieces["bishopW2"] = { type: "bishop", color: "white", position: 62 };
  }

  addQueens() {
    this.pieces["queenB"] = { type: "queen", color: "black", position: 4 };
    this.pieces["queenW"] = { type: "queen", color: "white", position: 60 };
  }

  addKings() {
    this.pieces["kingB"] = { type: "king", color: "black", position: 5 };
    this.pieces["kingW"] = { type: "king", color: "white", position: 61 };
  }

  print() {
    console.log(this.board, this.pieces);
  }
}

const main = () => {
  const board = new CreateChessBoard();
  board.bluePrint();
  board.addPieces();
  board.print();
};

main();
