'use strict';

(function() {
  const ANSWERS = ['чёт', 'нечёт'];

  const getBotNumber = (botBalls) => Math.floor(Math.random() *
    Math.min(botBalls, 10 - botBalls) + 1);

  const getBotAnswer = (botBalls) => {
    if (10 - botBalls === 1) return 1;
    return Math.floor(Math.random() * 100) % 2;
  };

  const getUserNumber = (playerBalls) => {
    let input = prompt(`Загадайте целое число от 1 до ${playerBalls}`);
    if (!Number.isInteger(parseInt(input))) {
      return getUserNumber(playerBalls);
    }
    input = +input;
    if (input < 1 || input > playerBalls) {
      return getUserNumber(playerBalls);
    }
    return input;
  };

  const getUserAnswer = (playerBalls) => {
    const input = prompt(`${ANSWERS.join(', ')}?`);
    const index = ANSWERS.findIndex(element => element.toLowerCase()
      .startsWith(input.toLowerCase()));
    if (index === -1) {
      return getUserAnswer();
    }
    return index;
  };

  const userMove = (balls) => {
    const playerNum = getUserNumber(balls.player);
    const botAnswer = getBotAnswer(balls.computer);
    // eslint-disable-next-line max-len
    console.log(playerNum, botAnswer % 2 ? 'Нечёт' : 'Чёт');
    if (playerNum % 2 === botAnswer) {
      balls.player -= playerNum;
      balls.computer += playerNum;
    } else {
      balls.computer -= playerNum;
      balls.player += playerNum;
    }
    return botAnswer % 2 ? 'Нечёт' : 'Чёт';
  };

  const botMove = (balls) => {
    const botNum = getBotNumber(balls.computer);
    const playerAnswer = getUserAnswer(balls.player);
    // eslint-disable-next-line max-len
    console.log(playerAnswer % 2 ? 'Нечёт' : 'Чёт', botNum);
    if (botNum % 2 === playerAnswer) {
      balls.player += botNum;
      balls.computer -= botNum;
    } else {
      balls.computer += botNum;
      balls.player -= botNum;
    }
    return playerAnswer % 2 ? 'Нечёт' : 'Чёт';
  };

  const isGameOver = (balls) => {
    if (balls.player < 1) {
      alert('Вы проиграли!');
      return true;
    }
    if (balls.computer < 1) {
      alert('Вы выиграли!');
      return true;
    }
    return false;
  };

  const game = () => {
    const balls = {
      player: 5,
      computer: 5,
    };

    // eslint-disable-next-line max-len
    alert(`Старт \n\nКоличество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);

    return function start() {
      let oddEven = userMove(balls);
      if (isGameOver(balls)) return;
      // eslint-disable-next-line max-len
      alert(`Бот: ${oddEven}\nКоличество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);

      alert('Бот загадал число.');
      oddEven = botMove(balls);
      if (isGameOver(balls)) return;
      // eslint-disable-next-line max-len
      alert(`Ваш ответ был: ${oddEven}\nКоличество шариков:\nИгрок - ${balls.player}, Бот - ${balls.computer}`);

      start();
    };
  };
  window.marbleGameMid = game;
})();
