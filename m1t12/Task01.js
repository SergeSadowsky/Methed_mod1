// Усовершенствуйте игру, которую написали в game01
//
// бот предлагает ввести два числа, и загадывает случайное число
// в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит
// "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается
//
// Переписать игровой бот из 8-го задания
// Функционал остаётся прежний,
// но вместо цикла (while или for) используйте рекурсию

'use strict';

const numberBot = {

  // props

  range: [],
  botNumber: undefined,

  // methods

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  _getRange() {
    const range = [];
    let input = prompt('Ваше первое число: ');
    range.push(Number.parseInt(input.trim()));
    input = prompt('Ваше второе число: ');
    range.push(Number.parseInt(input.trim()));
    if (range[0] > range[1]) return [range[1], range[0]];
    return range;
  },

  _getBotNumber() {
    return this.getRandomNumber(this.range[0], this.range[1]);
  },

  _getAttempts() {
    return Math.round(0.3 * Math.abs(this.range[1] - this.range[0]));
  },

  _getUserNumber(arr) {
    let input = prompt('Ваше число: ');
    if (input === null) return null;

    input = Number.parseInt(input.trim());
    if (Number.isNaN(input)) {
      console.log('Введи число!');
      return this._getUserNumber(arr);
    }
    if (arr.includes(input)) {
      console.log('Это число вы уже вводили.');
      return this._getUserNumber(arr);
    }
    return input;
  },

  _try(attempts, arr) {
    if (attempts === 0) return false;

    const number = this._getUserNumber(arr);
    if (number === null) return null;

    arr.push(number);

    if (number > this.botNumber) console.log('Меньше!');
    if (number < this.botNumber) console.log('Больше!');
    if (number === this.botNumber) return true;

    return this._try(attempts - 1, arr);
  },


  run() {
    this.range = this._getRange();
    this.botNumber = this._getBotNumber();
    const attempts = this._getAttempts();
    const result = this._try(attempts, []);
    switch (result) {
      case true:
        console.log('Поздравляю! Вы выиграли.');
        break;
      case false:
        console.log('Вы програли.');
        break;
      default:
        console.log('Заходите ещё.');
    }
  },
};

console.warn('Task 1:');

numberBot.run();
