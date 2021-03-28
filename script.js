// Assignment code here

// Request password length
var passwordLength = function () {
  var length = 0
  while (length < 8 || length > 128) {
    length = window.prompt(" Choose a password Length between 8 - 128.");
  };
  return length;
}

// Checks if user wants lower case
var lowerCase = function () {

}

// Checks if user wants upper case
var upperCase = function () {

}

// Checks if user wants numeric
var numeric = function () {
  var number = Math.floor(Math.random() * 10);
  console.log(number);
}

// Checks if user wants special charaters
var specialCharaters = function () {

}

// Generates password
var generatePassword = function () {
  var length = passwordLength();
  console.log("password length: " + length);

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
