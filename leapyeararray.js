function getLeapYear(array){
    const leapYearArray = [];
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        if(element % 4 == 0){
            console.log(index, element);
            leapYearArray.push(element);
        }
    } 
    return leapYearArray;   
}

const yearsArray = [2023, 2024, 2025, 2028, 2032, 2038];
console.log(getLeapYear(yearsArray));