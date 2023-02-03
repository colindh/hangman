import React from 'react';
import { setWord } from '../state/guessReducer';
import './startScreen.scss';

function start() {
    setWord('inconcievable');
}

function StartScreen() {
  return (
    <div className="StartScreen">
        <button onClick={start}>Start Game</button>
    </div>
  );
}

export default StartScreen;
