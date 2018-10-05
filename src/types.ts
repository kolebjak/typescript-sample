import { RouterState } from 'react-router-redux'
import { SampleModuleReducer } from './modules/sampleModule/reducer'

export type State = {
  routerReducer: RouterState,
  sampleModuleReducer: SampleModuleReducer,
}
