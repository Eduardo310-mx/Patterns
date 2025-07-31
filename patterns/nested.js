/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size ) {
  if (typeof size !== 'number') return null;
  if (size <= 0) return [];

  const triangle = [];
  for (let i = 1; i <= size; i++) {
     //For each row: It creates a new array with i elements, all filled with the string '-'.
    //Example: when i = 3, it makes ['-', '-', '-'].
    const row = Array(i).fill('-');
    triangle.push(row);
  }

  return triangle;
}

/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */
export function countLetter(words, letter) {
  if (typeof letter !== 'string' || letter.length !== 1) return 0;
  //returns a new string by concatenating all of the elements in this array, 
  //separated by commas or a specified separator string.
  const allWords = words.join('');
  let count = 0;
  //Iterates a string (allWords), checking each character one by one.
  for (let i = 0; i < allWords.length; i++) {
    //Checks if the character at index i equals the letter we're looking for.
    if (allWords[i] === letter) {
      count++;
    }
  }

  return count;

}
