import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';

export let appState: AppState = {
	 array:[
		{title:"ee",
		description: "e"},

		{title:"eHE",
		description: "fee"}
	 ]
};

let observers: Observer[] = [];

export const dispatch = (action: any) => {
	console.log('Dispatching action:', action);
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
	console.log(appState)
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};