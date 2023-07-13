'use strict';


(function() {
  const getBotAnswer = (botBalls) => {
    if (10 - botBalls === 1) return 1;
    return Math.floor(Math.random() * 100) % 2;
  };

  const getNumber = (max) => {
    let input = prompt(`Загадайте целое число от 1 до ${max}`);
    if (!Number.isInteger(parseInt(input))) {
      return getNumber(max);
    }
    input = +input;
    if ((input) < 1 || (input) > max) return getNumber(max);
    return input;
  };

  const game = () => {
    const balls = {
      player: 5,
      computer: 5,
    };

    // eslint-disable-next-line max-len
    alert(`Старт \n\nКоличество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);

    return function start() {
      const playerNum = getNumber(balls.player);
      const botNum = getBotAnswer(balls.computer);
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
      // eslint-disable-next-line max-len
      alert(`Количество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);
      start();
    };
  };
  window.marbleGame = game;
})();
