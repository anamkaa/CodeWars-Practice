// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// var countBits = function(n) {
//     return n.toString(2).replace(/0/g,'').length;
//   };

var countBits = function(n) {
  
    //convert to binary
    let bin = n.toString(2);
    //convert binary to array
    let arr = Array.from(bin);
    //filter bit from the binary array
    let result = arr.filter((i) => (i == 1));
    return result.length;
  };