import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// create a root reducer
const reducer = combineReducers({});

export type RootState = ReturnType<typeof reducer>;

// create a makeStore function
const makeStore: MakeStore<RootState> = () => configureStore({ reducer });

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

// selector custom hook
type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;
export function useRootState<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  return useSelector(selector, equalityFn);
}
