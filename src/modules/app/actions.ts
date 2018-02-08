import { APP_MOUNTED } from './constants';

export type AppMountedActionResponse = { type: APP_MOUNTED };
type AppMountedAction = () => AppMountedActionResponse;
export const appMountedAction: AppMountedAction = () => ({
  type: APP_MOUNTED
});
