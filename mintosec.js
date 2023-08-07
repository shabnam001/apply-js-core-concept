function minToSec(minites){
    const sec = minites * 60;
    return sec;
}
const getMinites = 15;
const min = minToSec(getMinites);
console.log(min);