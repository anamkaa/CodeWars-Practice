// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
    //convert string to array
    var newArray = Array.from(str);
    
    //filter vowels from array to make new array with only vowels
    var vowelArray = newArray.filter((item) => {
      if(item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u'){
          return item } } );
    
    //count number of vowels 
    var result = vowelArray.length;
    return result;
    
  
  }