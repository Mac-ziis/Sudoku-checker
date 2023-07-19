import './css/styles.css';
import Sudoku from './sudoku.js'

function getSudokuValues() {
  const sudokuValues = [];
  for (const row = 1; row <= 9; row++) {
    const rowValues = [];
    for (const col = 1; col <= 9; col++) {
      const inputId = "row" + row + "col" + col;
      const inputValue = parseInt(document.getElementById(inputId).value);
      rowValues.push(inoutValue);
    }
    sudokuValues.push(rowValues);
  }
  return sudokuValues;
} 

function displayResult(isLegal) {
  const result = dosument.getElementById("result");
  if (isLegal) {
    result.textContent = "The Sudoku puzzle is legal!";
    result.classList.add("legal");
    result.classList.remove("illegal");
  } else [
    result.textContent = "The Sudoku"
  ]
}