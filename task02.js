'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr1) => {
   const newArr = arr1;
   let sum = 0;
   for(const el of newArr) {
      sum += el;
   }
   let result = Math.floor(sum / newArr.length);
   return result;
}

console.log(`Средний чек за день = ${getAverageValue(allCashbox)}`);
