// Функция game() принимает один параметр (language),
// с помощью которого в игре устанавливается язык
//
// Функция может принимать такие значения “ENG” или “EN”,
// если функция принимает пустой параметр,
// то устанавливается русский язык (по умолчанию)

'use strict';

(function() {
  const FIGURES = {
    ENG: ['rock', 'scissors', 'paper'],
    RUS: ['камень', 'ножницы', 'бумага'],
  };
  const MSG = {
    ENG: {
      win: 'You\'re WON!!!',
      lose: 'You\'re lost.',
      draw: 'It\'s draw.',
      continue: 'Do you want to continue?',
      exit: 'Do you want to exit?',
      comp: 'Computer',
      user: 'User',
      scores: 'Scores',
    },
    RUS: {
      win: 'Вы выиграли!!!',
      lose: 'Вы проиграли',
      draw: 'Ничья.',
      continue: 'Хотите продолжить?',
      exit: 'Хотите выйти?',
      comp: 'Компьютер',
      user: 'Пользователь',
      scores: 'Счёт',
    },
  };

  const getRandomInInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    const figures = FIGURES[lang];
    const msg = MSG[lang];
    const input = prompt(`${figures.join(', ')}?`);
    if (input === null) {
      if (confirm(msg.exit)) return input;
      return getFigure(lang);
    }
    const index = figures.findIndex(element => element.toLowerCase()
      .startsWith(input.toLowerCase()));
    if (index === -1) {
      return getFigure(lang);
    }
    return index;
  };

  const game = (language) => {
    const langSet = new Set(['EN', 'ENG', 'RU', 'RUS']);
    if (!langSet.has(language)) {
      throw new Error('Неверное значение параметра "язык"!');
    }

    const lang = language === 'EN' || language === 'ENG' ?
      'ENG' : 'RUS';
    const figures = FIGURES[lang];
    const msg = MSG[lang];

    const scores = {
      player: 0,
      computer: 0,
    };


    return function start() {
      const userFigure = getFigure(lang);
      if (userFigure !== null) {
        const compFigure = getRandomInInclusive(0, figures.length - 1);
        let result;
        if (userFigure === compFigure) {
          result = msg.draw;
          scores.computer++;
          scores.player++;
        } else {
          const diff = userFigure - compFigure;
          if (diff === -1 || diff === 2) {
            result = msg.win;
            scores.player += 2;
          } else {
            result = msg.lose;
            scores.computer += 2;
          }
        }
        // eslint-disable-next-line max-len
        alert(`${msg.user}: ${figures[userFigure]}\n${msg.comp}: ${figures[compFigure]} \n${result}`);
        if (confirm(msg.continue)) {
          return start();
        }
      }
      // eslint-disable-next-line max-len
      alert(`${msg.scores}:\n${msg.user}: ${scores.player}\n${msg.comp}: ${scores.computer}\n`);
    };
  };

  window.gameRPSAdv = game;
})();
