import './css/styles.css';
import Sudoku from './js/sudoku.js';

function getSudokuValues() {
  const sudokuValues = [];
  for (const row = 1; row <= 9; row++) {
    const rowValues = [];
    for (const col = 1; col <= 9; col++) {
      const inputId = "row" + row + "col" + col;
      const inputValue = parseInt(document.getElementById(inputId).value);
      rowValues.push(inputValue);
    }
    sudokuValues.push(rowValues);
  }
  return sudokuValues;
}

function displayResult(isLegal) {
  const result = document.getElementById("result");
  if (isLegal) {
    result.textContent = "The Sudoku puzzle is legal!";
    result.classList.add("legal");
    result.classList.remove("illegal");
  } else {
    result.textContent = "The Sudoku puzzle is illegal!";
    result.classList.add("illegal");
    result.classList.remove("legal");
  }
}

const checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", function () {
  const sudokuValues = getSudokuValues();
  const sudoku = new Sudoku(
    sudokuValues[0], sudokuValues[1], sudokuValues[2],
    sudokuValues[3], sudokuValues[4], sudokuValues[5],
    sudokuValues[6], sudokuValues[7], sudokuValues[8],
  );
  const isLegal = sudoku.isLegal();
  displayResult(isLegal);
});