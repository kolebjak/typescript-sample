import { State } from '../../types'
import { Action } from './actions'
import { SAMPLE_MODULE_SET } from './constants'

export type SampleModuleReducer = { variable: { title?: string } }

const initialState: SampleModuleReducer = { variable: {} }

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SAMPLE_MODULE_SET: {
      const { variable } = action
      return { ...state, variable }
    }
    default:
      return state
  }
}

export const selectVariable = (state: State) => {
  return state.sampleModuleReducer.variable
}
