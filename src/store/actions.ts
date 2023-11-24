import { infoActions } from "../types/store"

export const addInfo = (title: string, description: string) => {
    return {
      action: infoActions.ADDINFO,
      payload: {
        title,
        description,
      },
    }
  };

