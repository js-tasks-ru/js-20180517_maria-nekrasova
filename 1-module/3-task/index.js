'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
let min = numbers[0];
let max = numbers[0];
for(let i=0; i<numbers.length; i++){
    let number = numbers[i];
    if (number <= min){
        min = number;
    }
    if(number >= max){
        max = number;
    }
}
return{
    min: min,
    max: max
}
}
function getMinMax(str) {
    const arr = str.split(" ");
    const numbers = extractNumbers(arr);
    const minMax = extractMinMax(numbers);
    console.log(minMax);
    return minMax;

}
getMinMax(inputData);