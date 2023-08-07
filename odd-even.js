function myAge(age){
    const remainder = age % 2;
    if(remainder == 0){
        return true;
}
else{
    return false;
}
}

const getAge = myAge(29);
console.log('my age is even:', getAge);



console.log('odd or even number')
function oddOrEven(number){
    const reminder = number % 2;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}
const getNumber = oddOrEven(823776446);
console.log('this number is even:',getNumber);
const giveNumber = oddOrEven(6374683245);
console.log('this is number even:', giveNumber);