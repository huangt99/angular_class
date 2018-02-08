import {ActionReducer, Action} from "@ngrx/store";
import { Hero } from '../hero'

interface AppAction extends Action
{
    payload: Hero;
}

export const heroReducer: ActionReducer<Hero> = (state: Hero, action: AppAction) => {
    switch(action.type){
        case 'Update':
            return action.payload;
        case 'Delete':
            return action.payload;
        default:
    }

    return state;
};