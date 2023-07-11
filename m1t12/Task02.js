// Задача #2
//
// Напишите рекурсивную функцию, которая принимает один параметр массив,
// генерирует целое число от 0 до 10 включительно и добавляет его в массив.
//
// Каждый раз после добавления нового числа проверяет сумму элементов массива,
// если она меньше 50 запускается снова передавая себе массив.
// Если сумма 50 или больше, то функция возвращает этот массив.

'use strict';

const recFunc = (arr) => {
  const number = Math.floor(Math.random() * (11));
  arr.push(number);
  const sum = arr.reduce((acc, el) => acc + el, 0);
  if (sum < 50) {
    arr = recFunc(arr);
  }
  return arr;
};

console.warn('Task 2:');
console.log(recFunc([1, 2, 3]));