// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const getAdvancedRandomNumber = (min, max, option) => {

    result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(option){
        switch(option){
            case 'odd':
                while (result % 2 == 0){
                    result = Math.floor(Math.random() * (max - min + 1)) + min;
                };
                break;
            case 'even':
                while (result % 2){
                    result = Math.floor(Math.random() * (max - min + 1)) + min;
                }
                break;
        }
    }  
    
    return result;
}

const getRandomArray3 = (q,n,m,option) => {
    const arr = [];

    if(typeof option !== 'undefined' && !['even','odd'].includes(option)) return null;

    if(n<m){
        while(q--){ 
            arr.push(getAdvancedRandomNumber(n,m,option));
        }
    }
    else {
        while(q--){
            arr.push(getAdvancedRandomNumber(m,n,option));
        }
    }    
    
    return arr;
}

console.log('Task 3');
console.log(getRandomArray3(10, -5, -150));
console.log(getRandomArray3(10, -5, -150, 'even'));
console.log(getRandomArray3(10, -5, -150, 'odd'));
console.log(getRandomArray3(10, -5, -150, 'oops...'));
console.log(getRandomArray3(10, -175, -150));
console.log(getRandomArray3(10, -175, -150, 'even'));
console.log(getRandomArray3(10, -175, -150, 'odd'));
console.log(getRandomArray3(10, -175, -150, 'oops...'));



