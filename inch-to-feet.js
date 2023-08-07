function inchToFeet(myinches){
    const feet = myinches / 12;
    return feet;

}
var getInches = 60;
var getFeet = inchToFeet(getInches);
console.log(getFeet);

var anotherInch = 64;
var anotherFeet = inchToFeet(anotherInch);
console.log('another inches:', anotherFeet)