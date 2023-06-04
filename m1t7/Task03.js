// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

const addPrefix = (arr, pr) => arr.map(((el) => pr + ' ' + el), pr);

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr.'));