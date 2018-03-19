import { RouterState } from 'react-router-redux';
import { MyReducer } from './modules/myReducer';

export type State = {
  routerReducer: RouterState,
  myReducer: MyReducer,
};
