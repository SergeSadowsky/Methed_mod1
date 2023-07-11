// Необходимо реализовать функционал игры "Камень ножницы бумага"
// Функционал продемонстрирован видео в уроке!
//
// Нужно использовать 2 файла:
//     game.js, котором будет происходить действия игры
//     script.js в котором эта игра будет запускаться
//
// Пригодится функция getRandomIntInclusive,
// чтобы помочь сделать ход компьютеру.
//
// Как будет написана программа внутри IIFE модуля, решать только вам,
// важно выполнить определенные требования
//
// 1) В функции game() реализуется сам механизм игры.
// 2) Результат поединка и выбранный язык должны храниться в
// замыкании и реализация данной игры должна быть сделана c
// помощью рекурсии без единого цикла
//
// Если пользователь нажимает "отмена" переспрашиваем его
// "точно ли он хочет выйти?"
// Если да то выводится результат всех игр
// (сколько очков у пользователя и у компьютера)
// Если пользователь передумал выходить,
// то игра продолжается дальше сохраняя прежние очки


'use strict';

(function() {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomInInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = () => {
    const input = prompt(`${FIGURES.join(', ')}?`);
    if (input === null) {
      if (confirm('Хотите выйти?')) return input;
      return getFigure();
    }
    const index = FIGURES.findIndex(element => element.toLowerCase()
      .startsWith(input.toLowerCase()));
    if (index === -1) {
      return getFigure();
    }
    return index;
  };

  const game = () => {
    const scores = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const userFigure = getFigure();
      if (userFigure !== null) {
        const compFigure = getRandomInInclusive(0, FIGURES.length - 1);
        let result;
        if (userFigure === compFigure) {
          result = 'Ничья.';
          scores.computer++;
          scores.player++;
        } else {
          const diff = userFigure - compFigure;
          if (diff === -1 || diff === 2) {
            result = 'Вы выиграли!!!';
            scores.player += 2;
          } else {
            result = 'Вы проиграли. :(';
            scores.computer += 2;
          }
        }
        // eslint-disable-next-line max-len
        alert(`Вы: ${FIGURES[userFigure]}\nКомпьютер: ${FIGURES[compFigure]}\n${result}`);
        if (confirm('Сыграем ещё?')) {
          return start();
        }
      }
      // eslint-disable-next-line max-len
      alert(`Счёт:\nПользователь: ${scores.player}\nКомпьютер: ${scores.computer}\n`);
    };
  };

  window.gameRPS = game;
})();
