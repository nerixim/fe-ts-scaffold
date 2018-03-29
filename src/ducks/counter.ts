import { ActionCreator } from 'redux';
import { AppAction, AppState } from 'STORE/reducers';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
export interface IncrementAction {
  type: 'INCREMENT';
}
export interface DecrementAction {
  type: 'DECREMENT';
}
export const increment: ActionCreator<IncrementAction> = () => {
  return ({
    type: INCREMENT,
  });
};
export const decrement: ActionCreator<DecrementAction> = () => {
  return ({
    type: DECREMENT,
  });
};
export const counterDefault = 0;
export default (state: number, action: AppAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export const getCounter = (state: AppState) => {
  return state.get('counter');
};
