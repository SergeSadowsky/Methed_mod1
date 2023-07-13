'use strict';

(function() {
  const ANSWERS = ['чёт', 'нечёт'];

  const getBotNumber = (botBalls) => Math.floor(Math.random() * botBalls + 1);

  const getBotAnswer = (botBalls) => {
    if (10 - botBalls === 1) return 1;
    return Math.floor(Math.random() * 100) % 2;
  };

  const getUserNumber = (max) => {
    const input = prompt(`Загадайте целое число от 1 до ${max}`);
    if (!Number.isInteger(parseInt(input))) {
      return getNumber(max);
    }
    if ((+input) < 1 || (+input) > max) return getNumber(max);
    return +input;
  };

  const getUserAnswer = (max) => {
    const input = prompt(`Загадайте целое число от 1 до ${max}`);
    if (!Number.isInteger(parseInt(input))) {
      return getNumber(max);
    }
    if ((+input) < 1 || (+input) > max) return getNumber(max);
    return +input;
  };

  const game = () => {
    const balls = {
      player: 5,
      computer: 5,
    };

    alert(`Старт \n\nКоличество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);

    return function start() {
      const playerNum = getNumber(balls.player);
      const botNum = botAnswer(balls.computer);
      const botOddEven = botNum % 2 ? 'Нечёт' : 'Чёт';
      alert(`Бот: ${botOddEven}`);
      if (playerNum % 2 === botNum) {
        balls.player -= playerNum;
        balls.computer += playerNum;
        if (balls.player < 1) {
          alert('Вы проиграли!');
          return;
        }
      } else {
        balls.computer -= playerNum;
        balls.player += playerNum;
        if (balls.computer < 1) {
          alert('Вы выиграли!');
          return;
        }
      }
      alert(`Количество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);
      start();
    };
  };
  window.marbleGameMid = game;
})();
