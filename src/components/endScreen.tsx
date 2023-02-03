import React from 'react';
import { guessReducer } from '../state/guessReducer';
import {store} from '../state/store';
import './endScreen.scss';

const WIN = (<h1>Congrats, you won!</h1>);
const LOSE = (<h1>Sorry, you're out of guesses</h1>);

function EndScreen() {
  return (
    <div className="UserInput">
        { store.currentTries < store.maxTries ? WIN : LOSE}
    </div>
  );
}

export default EndScreen;
