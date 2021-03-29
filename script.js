// Assignment code here

//Random number generator
var ranNum = function (max) {
  var returnValue = Math.floor(Math.random() * (max + 1));
  return returnValue;
}

// Request password length
var passwordLength = function () {
  var length = window.prompt("Choose a password Length: 8 - 128.");
  while (length < 8 || length > 128) {
    length = window.prompt("Please choose a number between 8 and 128.");
  };
  return length;
}

// Generates a lower case letter
var lowerCase = function () {
  var letter = "abcdefghijklmnopqrstuvwxyz";
  return letter.charAt(ranNum(letter.length));
}

// Generates a upper case letter
var upperCase = function () {
  var letter = lowerCase();
  letter = letter.toUpperCase();
  return letter.charAt(ranNum(letter.length));
}

// Generates a numeric
var numeric = function () {
  var number = ranNum(9);
  return number;
}

// Generates a Special Characters
var specialCharacter = function () {
  var specialCharacter = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return specialCharacter.charAt(ranNum(specialCharacter.length));
}

// Randomly selects character type
var character = function (num, special, lower, upper) {
  var newCharater = "";
  var type = ranNum(4);

  switch (type) {
    case 1:
      if (num) {
        newCharater = numeric();
      }
      break;
    case 2:
      if (special) {
        newCharater = specialCharacter();
      }
      break;
    case 3:
      if (lower) {
        newCharater = lowerCase();
      }
      break;
    case 4:
      if (upper) {
        newCharater = upperCase();
      }
      break;
  }
  return newCharater;

}

// Generates password
var generatePassword = function () {

  // Get password length
  var length = passwordLength();
  var password = "";
  var typeChoosen = true;

  // Get Charater Types
  while (typeChoosen) {
    var lowercaseConfirm = window.confirm("Would you like to have Lowercase Letters?");

    var uppercaseConfirm = window.confirm("Would you like to have Uppercase Letters?");

    var specialCharacterConfirm = window.confirm("Would you like to have Special Characters?");

    var numericConfirm = window.confirm("Would you like to have Numbers?");
    if (lowercaseConfirm || uppercaseConfirm || specialCharacterConfirm || numericConfirm) {
      typeChoosen = false;
    }
    else {
      window.alert("Please choose at least one character type.")
    }
  }

  // Add charaters until password length
  while (password.length < length) {
    password = password + character(numericConfirm, specialCharacterConfirm, lowercaseConfirm, uppercaseConfirm);
  }

  //Verify  selections in Console
  console.log("password length: " + password.length);
  console.log("length choosen: " + length);
  console.log("Lowercase: " + lowercaseConfirm);
  console.log("Uppercase: " + uppercaseConfirm);
  console.log("Special Characters: " + specialCharacterConfirm);
  console.log("Numeric: " + numericConfirm);
  console.log("Password: " + password);

  // Returns password to HTML
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
