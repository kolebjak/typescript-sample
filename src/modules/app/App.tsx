import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../index.css';
import { Routes } from '../routes';

type State = {
  open: boolean;
};

type Props = {};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path={Routes.home} component={() => <div>Hello.</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
