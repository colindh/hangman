import React from 'react';
import { guessReducer } from '../state/guessReducer';
import './gameStateDisplay.scss';

function GameStateDisplay() {
  return (
    <div className="gameStateDisplay">
      <div className="guessesLeft"></div>
      <div className="wordWithGuesses"></div>
    </div>
  );
}

export default GameStateDisplay;
