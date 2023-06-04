// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
//
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const getAverageValue = (arr) => arr.reduce((a,b) => a+b, 0) / arr.length;


const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));
