function isLeapYear(year){
    const result = year % 4;
    if(result == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log('2023 is leap years:', isLeapYear(2023));
console.log('2024 is leap years:', isLeapYear(2024));
