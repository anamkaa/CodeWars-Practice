// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false. Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    
    ///^\d+$/.test(pin) checks for a string and returns true if no digits are found and give false if contains any digits.

    if(/^\d+$/.test(pin) == true && (pin.length === 4 || pin.length === 6)){
      return true;
    }
    else return false;
   
  }