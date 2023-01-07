import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

        if(action.payload=== 'up'){


            state.sort((a:any,b:any)=> {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
             })

        }
        if(action.payload === 'down'){
            state.sort((a:any, b:any)=>{
                if(a.name < b.name){
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0
            })
        }
            return [...state] // need to fix
        }
        case 'check': {
 let filterstate =  [...state.filter((e)=> e.age >= 18)]
            return filterstate // need to fix
        }
        default:
            return state
    }
}
