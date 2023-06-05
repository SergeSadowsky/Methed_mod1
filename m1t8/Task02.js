// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomArray2 = (q,n,m) => {
    const arr = [];

    if(n<m){
        while(q--){
            arr.push(getRandomNumber(n,m));
        }
    }
    else {
        while(q--){
            arr.push(getRandomNumber(m,n));
        }
    }    
    
    return arr;
}

console.log('Task 2');
console.log(getRandomArray2(10, -5, -15));
