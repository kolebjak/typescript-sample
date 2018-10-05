import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../types'
import { selectVariable } from '../reducer'
import {
  SampleModuleFetchAction,
  sampleModuleFetchAction,
} from '../actions'

export type Props = {
  variable: {
    title: string,
  },
  sampleModuleFetch: SampleModuleFetchAction,
}

class SampleModule extends React.Component<Props> {

  componentDidMount() {
    this.props.sampleModuleFetch()
  }

  render() {
    const { variable } = this.props
    return (
      <div>{variable.title}</div>
    )
  }
}

export default connect(
  (state: State) => ({
    variable: selectVariable(state),
  }),
  {
    sampleModuleFetch: sampleModuleFetchAction,
  },
)(SampleModule)
