const arr = [1, 22, 35, 7, 9, 5, 8];

//return obj with sum of all odd num and even num separately
const oddEvenReducer = (evenOddObj, num) =>
  num % 2 == 0
    ? { ...evenOddObj, even: evenOddObj.even + num }
    : { ...evenOddObj, odd: evenOddObj.odd + num };
const oddEven = { even: 0, odd: 0 };
arr.reduce(oddEvenReducer, oddEven);

//find sum of all odd numbers - wants a single value , so use filter
const sumOddReducer = (sum, num) => (num % 2 == 0 ? sum : sum + num);
arr.reduce(sumOddReducer, 0);

//find numbers divisible by 5 - wants list of numbers so use filter
const divBy = (num) => num % 5 == 0;
arr.filter(divBy);

//return array of numbers where even num increment by 1 , odd num decrement by 1 - wants to apply somenthing so use map
const oddEvenCalc = (num) => (num % 2 == 0 ? num + 1 : num - 1);
arr.map(oddEvenCalc);

//sum of all numbers at odd indices - wants a single val so use reduce
const oddIndexReducer = (sum, num, index) => (index % 2 == 0 ? sum : sum + num);
arr.reduce(oddIndexReducer, 0);

//find the biggest num in the array
const biggestNum = (arr) => {
  var x = 0;
  arr.map((i) => (i > x ? (x = i) : x));
  return x;
};
biggestNum(arr);
