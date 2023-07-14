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
    const index = FIGURES.findIndex(element => element.toLowerCase()
      .startsWith(input.toLowerCase()));
    if (index === -1) {
      return getFigure();
    }
    return index;
  };

  const game = () => function start() {
    const userFigure = getFigure();
    if (userFigure !== null) {
      const compFigure = getRandomInInclusive(0, FIGURES.length - 1);
      if (userFigure === compFigure) {
        alert('Ничья.');
        return start();
      } else {
        const diff = userFigure - compFigure;
        if (diff === -1 || diff === 2) {
          alert('Вы выиграли!!!');
          return 1;
        } else {
          alert('Вы проиграли. :(');
          return 0;
        }
      }
    }
  };

  window.gameRPS = game;
})();
