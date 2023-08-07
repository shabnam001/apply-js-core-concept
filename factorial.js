// function factorial(number){
//      var result = 1;
//     for(var i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }

// var multipication = 6;
// console.log(factorial(multipication));

console.log('revese number factorial');
function factorial(number){
    var result = 1;
   for(var i = number; i >= 1; i--){
       result = result * i;
   }
   return result;
}

var multipication = 7;
console.log(factorial(multipication));