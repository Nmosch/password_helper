//setting global variables
//split converts a string to an array
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
lowerCaseString = lowerCaseString.split("")
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
upperCaseString = upperCaseString.split("")
var numericString = "0123456789"
numericString = numericString.split("")
var specialString = "!@#$%^&*()-_=+[{]}\|';:/?.>,<]"
specialString = specialString.split("")

var resultsString = ""
var oneLowerCase = ""
var oneUpperCase = ""
var oneNumericChar = ""
var oneSpecialChar = ""
var trueCounter = 0

var possibleCharacters = []

document.getElementById("generate").addEventListener("click", function () {

  //initializing the password generator
  var passwordLength = prompt("How long would you like your password to be between 8 and 128?")
  passwordLength = parseInt(passwordLength)
  console.log(passwordLength)

  //determines how long the password is & what characters user wishes to include

  if (passwordLength >= 8 && passwordLength <= 128) {

    var isLowerCase = confirm("Do you wish to include lowercase characters?");
    var isUpperCase = confirm("Do you wish to include uppercase characters?");
    var isNumericChar = confirm("Do you wish to include numeric characters?");
    var isSpecialChar = confirm("Do you wish to include special characters?");

    //sort requires an array, randomizes order of the array
    //oneVariable ensures one of each selected varible is included in the array if true
    //... is spread operator and grabs the content of the array to add to the possibleCharacters array
    if (isLowerCase === true) {
      trueCounter++
      lowerCaseString = lowerCaseString.sort(function (a, b) { return 0.5 - Math.random() });
      oneLowerCase = lowerCaseString[0]
      possibleCharacters = [...lowerCaseString]
    }
    if (isUpperCase === true) {
      trueCounter++
      upperCaseString = upperCaseString.sort(function (a, b) { return 0.5 - Math.random() });
      oneUpperCase = upperCaseString[0]
      possibleCharacters = [...possibleCharacters, ...upperCaseString]
    }
    if (isNumericChar === true) {
      trueCounter++
      numericString = numericString.sort(function (a, b) { return 0.5 - Math.random() });
      oneNumericChar = numericString[0]
      possibleCharacters = [...possibleCharacters, ...numericString]
    }
    if (isSpecialChar === true) {
      trueCounter++
      specialString = specialString.sort(function (a, b) { return 0.5 - Math.random() });
      oneSpecialChar = specialString[0]
      possibleCharacters = [...possibleCharacters, ...specialString]
    }
    // .join converts array to a string
    possibleCharacters = possibleCharacters.join("")
    //reassigns passwordlength to length of amount of conditions - 1
    passwordLength = passwordLength - trueCounter;
    //substring requires string type
    //truncates the string to the the passwordLength
    possibleCharacters = possibleCharacters.substring(0, passwordLength);
    //forms final password by joining all strings
    resultsString = resultsString + possibleCharacters + oneLowerCase + oneUpperCase + oneSpecialChar + oneNumericChar
    //converts back to an array
    possibleCharacters = resultsString.split("")
    console.log(possibleCharacters)
    //rerandomizes the resulting array
    possibleCharacters.sort(function (a, b) { return 0.5 - Math.random() });
    console.log(possibleCharacters)

    //printing password into text box on web page
    document.getElementById("password").value = possibleCharacters.join("")
    //stops running if user does not input a number between 8 & 128
  } else {
    alert("You did not enter a number between 8 and 128!");
  }
})
