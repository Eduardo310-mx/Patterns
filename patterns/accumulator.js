/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n <0) return undefined;
  if (n === 0) return 1;

  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  return factor;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== 'number') return null
  if (n <=0) return [];

  // const result = [];
  // for (let i = 1; i <= n; i++) {
  //   result.push(i);
  // }

  let buildArr = new Array(n);
  for (let i = 0; i < n; i++) {
    buildArr[i] = i + 1;
  }
  return buildArr;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  //.sort() method js ::: is an intrinsic method of the Array object used to sort the elements of an array in place
  //numbers.sort((a, b) => b - a);
  if (!Array.isArray(strings) || strings.length === 0) return '';
  //If b is longer than a, it comes before a.
  //Longer strings get moved to the start of the array.
  return [...strings].sort((a, b) => b.length - a.length)[0]; 
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (!attendance) return 0;
  let count = 0;
  //Loops over every item in the attendance array using an index (i).
  for (let i = 0; i < attendance.length; i++){
    //Checks if the current item in the array is exactly true.
    if (attendance[i] === true){
      //If yes, it increases the count by 1.
      count++;
    }
  }
  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== 'string') return null;

  const nucleobase = {A: 'T', T: 'A', C: 'G', G: 'C'}
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    //Checks if the current base exists in the nucleobase map.
    //dna[i] gets the current character (base) from the DNA string at position i.
    //This checks if the current character dna[i] is a key in the nucleobase object.
    if (nucleobase[dna[i]]) {
      //If true: add the complementary base
      //Adds the complemtary base to the result string
      result += nucleobase[dna[i]];
    } else {
      //If false: add an empty string
      result += '';
    }
  }
  return result;
}
