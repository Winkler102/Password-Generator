// Assignment code here

// Request password length
var passwordLength = function () {
  var length = 0
  while (length < 8 || length > 128) {
    length = window.prompt(" Choose a password Length between 8 - 128.");
  };
  return length;
}

// Generates a lower case letter
var lowerCase = function () {
  var letter = "abcdefghijklmnopqrstuvwxyz";
  return letter.charAt(Math.floor(Math.random() * 27));
}

// Generates a upper case letter
var upperCase = function () {
  var letter = lowerCase();
  letter = letter.toUpperCase();
  return letter.charAt(Math.floor(Math.random() * 27));
}

// Generates a numeric
var numeric = function () {
  var number = Math.floor(Math.random() * 10);
  return number;
}

// Generates a special charaters
var specialCharaters = function () {
  var specialCharaters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return specialCharaters.charAt(Math.floor(Math.random() * 32));
}

// Select types
var types = function () {
  var lowercaseConfirm = window.confirm("Would you like to have Lowercase Letters?");
  console.log(lowercaseConfirm);
  var uppercaseConfirm = window.confirm("Would you like to have Uppercase Letters?");
  console.log(uppercaseConfirm);
  var specialCharatersConfirm = window.confirm("Would you like to have Special Charaters?");
  console.log(specialCharatersConfirm);
  var numericConfirm = window.confirm("Would you like to have Numbers?");
  console.log(numericConfirm);

  if (lowercaseConfirm && uppercaseConfirm && specialCharatersConfirm && numericConfirm) {
    return 1;
  }
  else {
    return 2;
  }
}

var charater = function (type) {
  var newCharater = "";
  switch (type) {
    case 1:
      newCharater = numeric();
      break;
    case 2:
      newCharater = specialCharaters();
      break;
    case 3:
      newCharater = lowerCase();
      break;
    case 4:
      newCharater = upperCase();
      console.log(newCharater);
      break;
  }
  return newCharater;

}

// Generates password
var generatePassword = function () {
  // Get password length
  var length = passwordLength();
  var type = types();
  var password = "";

  // Add charaters until password length
  while (password.length < length) {
    password = password + charater(type);
  }
  console.log("password length: " + password.length);
  console.log("length choosen: " + length);
  console.log("password: " + password);
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
