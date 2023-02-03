import {Dispatch} from 'redux';
import {Reducer} from '@reduxjs/toolkit';
interface GuessState {
    currentWord: string,
    currentTries: number,
    correctGuesses: string[],
    maxTries: number,
};

const initialState = {
    currentWord: '',
    currentTries: 0,
    correctGuesses:[],
    maxTries: 6
};

type SetWord = {
    type: 'setWord',
    payload: string
};

type Guess = {
    type: 'guess',
    payload: string
};

type Action = SetWord | Guess;

export const setWord = (word: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'setWord',
            payload: word
        });
    };
};

export const guess = (letter: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'guess',
            payload: letter
        });
    };
};

export const guessReducer = (state: GuessState, action: Action): Reducer<GuessState, Action => {
    switch(action.type) {
        case 'setWord': return {
            currentWord: action.payload,
            currentTries: state.currentTries,
            correctGuesses: state.correctGuesses,
            maxTries: state.maxTries
        };
        case 'guess': let newState = {
            currentWord: state.currentWord,
            currentTries: state.currentTries + 1,
            correctGuesses: state.correctGuesses,
            maxTries: state.maxTries
        }
        if (state.currentWord.includes(action.payload)) {
            newState.correctGuesses.push(action.payload);
            return newState;
        } else {
            return newState;
        }
        default: return state;
    }
}

  