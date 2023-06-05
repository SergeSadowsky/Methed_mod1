// Усовершенствуйте игру, которую написали в game01
//
//     бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
//     бот запоминает каждое число которое ввел пользователь и записывает в массив
//     бот отграничивает количество попыток до 30% от количества цифр в диапазоне
//     если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
//     если диапазон от 50 до 100, то попыток бот даёт 15
//     если попытки закончились игра прекращается

{
    let botNumber; 
    let input;
    let range = [];
    let win = false;

    input = prompt("Ваше первое число: ");
    range.push(Number.parseInt(input.trim()));
    input = prompt("Ваше второе число: ");
    range.push(Number.parseInt(input.trim()));

    if(range[0]<range[1]) botNumber = getRandomNumber(range[0],range[1]) // см. Task01
    else botNumber = getRandomNumber(range[1],range[0]); // см. Task01

    let attempts = Math.round(0.3 * Math.abs(range[1]-range[0]));
    const userNumbers = [];

    while(attempts > 0){
        input =  prompt("Ваше число: ");
        if(input == null) break;
        input = Number.parseInt(input.trim());
        if(Number.isNaN(input)){
            console.log('Введи число!');
            continue;
        }
        if(userNumbers.includes(input)){
            console.log('Это число вы уже вводили.');
            continue;
        }
        userNumbers.push(input);
        attempts--;
        if(input > botNumber) console.log('Меньше!');
        if(input < botNumber) console.log('Больше!');
        if(input === botNumber){
            console.log('Правильно!');
            win = true;
            break;
        } 
    }

    if(win) console.log('Поздравляю! Вы выиграли.');
    else console.log("вы програли.");

}