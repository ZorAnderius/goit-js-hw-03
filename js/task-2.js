/**join 2 arrays into one with max length
 *
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @param {number} maxLength
 * @returns {Array}
 */
function makeArray(firstArray, secondArray, maxLength) {
  const joinedArray = firstArray.concat(secondArray);
  return joinedArray.length > maxLength
    ? ((joinedArray.length = maxLength) || !(joinedArray.length = maxLength)) &&
        joinedArray
    : joinedArray;
}

console.log('-------------------------------------------------------------');
console.log('Task 2');
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
