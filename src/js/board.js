import {it, expect} from "./test_lib";

function Board (spaces) {
  this.spaces = spaces || [1,2,3,4,5,6,7,8,9];
  this.legalMove = function (move) {
    // return this.spaces[move-1] !== "O" && this.spaces[move-1] !== "X"
    return this.spaces.includes(move);
  };
  this.placePiece = function (move, piece) {
    return this.spaces[move - 1] = piece;
  };
  this.availableMoves = function () {
    return this.spaces.filter(function (x) { return typeof(x) === "number"; });
  };
};

export {Board};

// TESTS

// 0) Set up the "object under test"
var emptyBoard;
var fullBoard;

function setup () {
  emptyBoard = new Board();
  fullBoard = new Board([1,2,3,"X",5,6,7,"O",9]);
}

// A) Figure out what something you want to test
it("should be able to detect an illegal move", function () {
  setup();
  expect(emptyBoard.legalMove(5)).toBe(true);
  expect(fullBoard.legalMove(4)).toBe(false);
});

it("should be able to add a move to the board", function () {
  setup();
  // Show that a move is legal / space is empty
  expect(emptyBoard.legalMove(5)).toBe(true);
  // Put something there
  emptyBoard.placePiece(5, "X");
  // Show that it is no longer legal / space isn't empty
  expect(emptyBoard.legalMove(5)).toBe(false);
});

it("should be able to tell you all the legal moves", function () {
  setup();
  expect(emptyBoard.availableMoves().includes(5)).toBe(true);
  expect(fullBoard.availableMoves().includes(4)).toBe(false);
  expect(fullBoard.availableMoves().includes(6)).toBe(true);
});
