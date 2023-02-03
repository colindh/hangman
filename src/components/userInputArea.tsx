import React from 'react';
import { guess } from '../state/guessReducer';
import './userInputArea.scss';

function UserInputArea() {
  return (
    <div className="UserInput">
      <input type="text" onKeyDown={(e) => guess(e.key)}></input>
    </div>
  );
}

export default UserInputArea;
