export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	array:any[]
};

export enum infoActions {
	'ADDINFO' = 'ADDINFO',
}

export interface AddInfoAction {
	action: infoActions.ADDINFO
	payload: any[]
}

export type Actions = AddInfoAction