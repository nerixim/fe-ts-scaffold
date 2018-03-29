import { List } from 'immutable';
import { ActionCreator, Dispatch } from 'redux';
import { AppAction } from 'STORE/reducers';

const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
const FETCH_TODOS_RESPONSE = 'FETCH_TODOS_RESPONSE';
interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userID: number;
}
export interface FetchTodosRequestAction {
  type: 'FETCH_TODOS_REQUEST';
}
export interface FetchTodosResponseAction {
  type: 'FETCH_TODOS_RESPONSE';
  payload: Todo[];
}
const fetchTodosRequest: ActionCreator<FetchTodosRequestAction> = () => ({
  type: FETCH_TODOS_REQUEST,
});
const fetchTodosResponse: ActionCreator<FetchTodosResponseAction> = (payload: Todo[]) => ({
  payload,
  type: FETCH_TODOS_RESPONSE,
});
export const fetchTodos = () => (dispatch: Dispatch<AppAction>) => {
  dispatch(fetchTodosRequest());
  dispatch(fetchTodosResponse([]));
};
/*
export const fetchPhrase = () => (dispatch) => {
  dispatch(fetchPhraseRequest());
  fromAPI.getPhrase()
    .then((value) => {
      dispatch(fetchPhraseResponse(value));
    })
    .catch((err) => {
      dispatch(fetchPhraseResponse(err));
    });
};
*/
export const idsDefault = List([]);
export default (state: List<number>, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_RESPONSE:
      return List(action.payload.map((o: Todo) => o.id));
    default:
      return state;
  }
};

/*
export function getCounter(state: AppState) {
  return state.get('counter');
}
import { createAction, handleActions } from 'redux-actions';
import * as fromAPI from '../apis/phrase';

// ACTION CREATORS
export const fetchPhrase = () => (dispatch) => {
  dispatch(fetchPhraseRequest());
  fromAPI.getPhrase()
    .then((value) => {
      dispatch(fetchPhraseResponse(value));
    })
    .catch((err) => {
      dispatch(fetchPhraseResponse(err));
    });
};
// REDUCERS
const requested = handleActions({
  [fetchPhraseRequest]() {
    return true;
  },
  [fetchPhraseResponse]() {
    return false;
  },
}, false);
const value = handleActions({
  [fetchPhraseResponse]: {
    next(state, { payload }) {
      return payload;
    },
  },
  [clearPhrase]() {
    return null;
  },
}, null);
const error = handleActions({
  [fetchPhraseResponse]: {
    next() {
      return null;
    },
    throw(state, { payload: { message } }) {
      return message;
    },
  },
  [clearPhrase]() {
    return null;
  },
}, null);
export default combineReducers({
  error,
  requested,
  value,
});
// SELECTORS
export const getPhrase = state => state.phrase.value;
export const getPhraseError = state => state.phrase.error;
export const getPhraseRequested = state => state.phrase.requested;
*/