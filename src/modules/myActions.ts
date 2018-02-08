import { FETCH, SET } from './myConstants';

export type FetchAction = () => FetchActionResponse;
export type FetchActionResponse = { type: FETCH };

export type SetAction = (variable: string[]) => SetActionResponse;
export type SetActionResponse = { type: SET, variable: string[] };

export const fetchAction: FetchAction = () => ({
  type: FETCH,
});

export const setAction: SetAction = (variable: string[]) => ({
  type: SET,
  variable,
});

export type Action = FetchActionResponse | SetActionResponse;
