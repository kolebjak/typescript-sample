import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from '../../routes'
import SampleModule from '../../sampleModule/components/SampleModule'
import '../../../index.css'

type State = {
  open: boolean,
}

type Props = {}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path={Routes.home} component={() => <SampleModule />}/>
        </Switch>
      </div>
    )
  }
}

export default App
