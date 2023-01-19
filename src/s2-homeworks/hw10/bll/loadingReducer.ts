const initState = {
    isLoading: false,
}

export type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state:any = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case'CHANGE_LOADING':
                let stateCopy = {...state}
                stateCopy.isLoading = action.isLoading
              return stateCopy
        default:
            return state
    }
}

export  type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
