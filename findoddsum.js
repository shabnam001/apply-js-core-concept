function getSumOfAnArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
function getSumOfOdd(array){
    const oddArray = [];
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddArray.push(element);
        }
    } 
    return oddArray;   
}

const myArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];
getSumOfAnArray(myArray);
const oddNumberSum = getSumOfAnArray