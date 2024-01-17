// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
//Kata.getMiddle("test") should return "es"
//Kata.getMiddle("testing") should return "t"
//Kata.getMiddle("middle") should return "dd"
//Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  //for even word, return substring using substr()
  if(s.length%2==0){
   return s.substr((s.length/2)-1,2);
  }
  //for odd word return character at middle using charAt()
  else return s.charAt(s.length/2);  
}