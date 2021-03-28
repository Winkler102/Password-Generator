// Assignment code here

// Checks if user wants lower case
var lowerCase = function () {

}

// Checks if user wants upper case
var upperCase = function () {

}

// Checks if user wants numeric
var numeric = function () {

}

// Checks if user wants special charaters
var specialCharaters = function () {

}

// Generates password
var generatePassword = function () {

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
