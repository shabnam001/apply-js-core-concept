function hoursToMin(hours){
    const minites = hours*60;
    return minites;
}

const gethours = 5;
const getminites = hoursToMin(gethours);
console.log(getminites);