import { State } from '../types';
import { Action } from './myActions';
import { SET } from './myConstants';

export type MyReducer = { variable: string[] };

const initialState: MyReducer = { variable: [] };

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET: {
      const { variable } = action;
      return {...state, variable };
    }
    default:
      return state;
  }
};

export const selectVariable = (state: State) => {
  return state.myReducer.variable;
};
