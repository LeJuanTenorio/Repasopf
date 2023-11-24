export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	array:any[]
};

export enum infoActions {
	'ADDINFO' = 'ADDINFO',
}

export interface AddInfoAction {
	action: infoActions.ADDINFO
	payload: {
        title: string;
        description: string;
      };
}

export type Actions = AddInfoAction