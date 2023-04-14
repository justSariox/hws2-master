import {UserType} from '../HW8'
import user from "../User";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
                if (action.payload === "up") {
                    const sortedState = [...state];
                    sortedState.sort((a, b) => a.name.localeCompare(b.name))
                    return sortedState // need to fix
                }
                if (action.payload === 'down') {
                    const sortedState = [...state];
                    sortedState.sort((a, b) => b.name.localeCompare(a.name))
                    return sortedState
                }
                return state
        }
        case 'check': {
            if (action.payload === 18) {
                state = [...state].filter(u => u.age >= 18)
            }
            return state // need to fix
        }
        default:
            return state
    }
}
