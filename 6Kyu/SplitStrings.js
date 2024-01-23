// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  //returns an array from string {1,2} index limit each
  var arr = str.match(/.{1,2}/g) ?? [];
  //match for string length , if less than 2 chars then add character
  var arr1 = arr.map((i) => (i.length < 2 ? i + "_" : i));
  return arr1;
}
