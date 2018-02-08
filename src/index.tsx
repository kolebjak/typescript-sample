import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import getStore from './getStore';
import getSaga from './getSaga';

import App from './modules/app/App';
import { appMountedAction } from './modules/app/actions';

const history = createHistory();
const store = getStore(history);

store.runSaga(getSaga());

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root') as HTMLElement,
  () => {
      store.dispatch(appMountedAction());
  }
);
