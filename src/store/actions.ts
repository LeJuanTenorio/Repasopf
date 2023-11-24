import { infoActions } from "../types/store"

export const addInfo = (payload:any) => {
    return {
      action: infoActions.ADDINFO,
      payload,
    }
  };

