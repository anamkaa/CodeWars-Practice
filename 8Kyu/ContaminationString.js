// An AI has infected a text with a character!! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!! Note: The character is a string of length 1 or an empty string.  Example: text before = "abc" | character   = "z" | text after  = "zzz"

//mysolution
function contamination(text, char){

    if(text == "" || char == ''){
      return "";
    }
   
    //converting the text string to array of characters  
    var textToArray = Array.from(text);
    
    //replacing the characters with character given in a new array
    var newArray = textToArray.map((item) => char);
    
    //joining the characters of the new array to make the string
    var newString = newArray.join("");
    
    //returning the string with replaced characters
    return newString;
    
  }