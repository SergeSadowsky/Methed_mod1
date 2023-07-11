'use strict';

const startGame = window.gameRPS();
startGame();

try {
  const startGameEng = window.gameRPSAdv('ENG');
  startGameEng();
} catch (e) {
  console.error(e.message);
}

try {
  const startGameRus = window.gameRPSAdv('RUS');
  startGameRus();
} catch (e) {
  console.error(e.message);
}

try {
  const startGameErr = window.gameRPSAdv('TUR');
  startGameErr();
} catch (e) {
  console.error(e.message);
}


