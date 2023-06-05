// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

const getRandomArray1 = (n) => {
    const arr = [];
    while(n--){
        arr.push(Math.floor(Math.random() * (101)));
    }
    return arr;
}

console.log('Task 1');
console.log(getRandomArray1(10));