import { Demo } from "../models/todo-app-model";
import * as DemoActions from '../actions/todo-app-actions';

const initialState: Demo = {
    title: "Mr",
    firstName: "Mohan",
    lastName: "Swaroop",
    email: "Swaroopreddy223@gmail.com",
    phone: 8008788838
}
export function reducer(state: any = [initialState] , action: any) {
    switch(action.type) {
        case DemoActions.ADD_DEMO:
            return [...state, action.payload];
        case DemoActions.REMOVE_DEMO:
            var result = state.filter((item : any) => item.firstName !== action.payload);
            return result;
        default:
            return state;
    }
}