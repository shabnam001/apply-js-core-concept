function mileToKm(miles){
    const km = miles * 1.609;
    return km;
}

const getMiles = 3;
const getkilometer = mileToKm(getMiles);
console.log("get km:", getkilometer);