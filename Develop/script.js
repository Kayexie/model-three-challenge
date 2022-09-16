
var generateBtn = document.querySelector("#generate"); //the button

function generatePassword() {
var pwdlength = window.prompt("Please input your password length (should be between 8 and 128)")
console.log(pwdlength)
var Upper = window.confirm ("OK to Include Uppercase?")
var Lower = window.confirm ("OK to Include Lowercase?")
var Numbers = window.confirm ("OK to Include Numbers?")
var Symbol = window.confirm ("OK to Include Symbols?")
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var password = "";
for (var i = 0; i <= pwdlength; i++) {
	var randomNumber = Math.floor(Math.random() * chars.length);
	password += chars.substring(randomNumber, randomNumber +1);
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //textarea to show the random password.
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var Pwdlength = window.prompt("Please input your password length (should be between 8 and 128)")
// consolel.log(Pwdlength)
// var Upper = window.confirm ("OK to Include Uppercase?")
// var Lower = window.confirm ("OK to Include Lowercase?")
// var Numbers = window.confirm ("OK to Include Numbers?")
// var Symbol = window.confirm ("OK to Include Symbols?")


// function getRandomUpper(){
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// return uppercase[Math.floor(Math.random()*uppercase.length)]
// }


// function getRandomLower(){
//   var lowercase = "abcdefghijklmnopqrstuvwxyz"
//   return lowercase[Math.floor(Math.random()*lowercase.length)]
// }

// function getRandomNumber(){
//    var numbers = "0123456789"
//    return numbers[Math.floor(Math.random()*numbers.length)]
// }
  
// function getRandomSymbol() {
//     var symbol = "!@#$%^&*(){}[]=<>/,."
//     return symbol[Math.floor(Math.random()*symbol.length)]
// }


// const randomgroup = {
// PickUpper: getRandomUpper(),
// PickLower: getRandomLower(),
// PickNumber: getRandomNumber(),
// PickSymbol: getRandomSymbol()
// };

// function generatePassword(PickUpper, PickLower, PickNumber, PickSymbol, Pwdlength) {
//   console.log(PickUpper, PickLower, PickNumber, PickSymbol, Pwdlength)
//   var generatedPassword = ""
//   const typesCount = PickUpper + PickLower + PickNumber + PickSymbol
//   const typesArr = [{PickUpper}, {PickLower}, {PickNumber}, {PickSymbol}].filter(item => Object.values(item)[0] )
//       if(typesCount === 0) {
//          return false
//        }

//       for(let i = 0; i <= Pwdlength; i +=  typesCount) {
//           typesArr.forEach(type => {
//           const group = Object.keys(type)[0]
//           generatedPassword += randomgroup[group]()
//            })
//      }
//    const finalPassword = generatedPassword.slice(0, Pwdlength)
//    return finalPassword
// }

// console.log(generatePassword())

