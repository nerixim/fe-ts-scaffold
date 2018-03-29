import { init, initialState } from 'STORE/reducers';
import { List } from 'immutable';
import * as matchers from 'jest-immutable-matchers';
import adder, { add, getAdder } from './adder';

describe('adder duck', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });
  it('reducer should ignore unknown actions', () => {
    expect(adder(List<string>([]), init())).toEqualImmutable(List<string>([]));
  });
  it('reducer should handle ADD', () => {
    expect(adder(List<string>([]), add('Test'))).toEqualImmutable(List<string>(['Test']));
  });
  it('add should create ADD action', () => {
    expect(add('Test')).toEqual({
      type: 'ADD',
      payload: 'Test',
    });
  });
  it('getAdder should return', () => {
    expect(getAdder(initialState)).toEqualImmutable(List<string>([]));
  });
});