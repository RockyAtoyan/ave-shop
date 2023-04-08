import {applyMiddleware, combineReducers, createStore} from "redux";
import {shopReducer} from "./shopReducer";
import thunk from "redux-thunk";


const RootReducer = combineReducers({
    shop:shopReducer
})

export type AppStateType = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer,applyMiddleware(thunk))