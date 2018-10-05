import {
  SAMPLE_MODULE_FETCH,
  SAMPLE_MODULE_SET,
} from './constants'

export type SampleModuleFetchAction = () => SampleModuleFetchActionResponse
export type SampleModuleFetchActionResponse = { type: SAMPLE_MODULE_FETCH }

export type SampleModuleSetAction = (variable: { title: string }) => SampleModuleSetActionResponse
export type SampleModuleSetActionResponse = { type: SAMPLE_MODULE_SET, variable: { title: string } }

export const sampleModuleFetchAction: SampleModuleFetchAction = () => ({
  type: SAMPLE_MODULE_FETCH,
})

export const sampleModuleSetAction: SampleModuleSetAction = (variable: { title: string }) => ({
  type: SAMPLE_MODULE_SET,
  variable,
})

export type Action = SampleModuleFetchActionResponse | SampleModuleSetActionResponse
