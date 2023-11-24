import { AppState } from '../types/store';
import { Actions, infoActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case infoActions.ADDINFO:
      return {
        ...currentState,
        array: payload,
      };
    default:

      return currentState;
  }
};