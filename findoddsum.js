function getSumOfAnArray(array){
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        console.log(index, element);
    }
}

const myArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];
getSumOfAnArray(myArray);