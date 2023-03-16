type StatusActionsType = {
    type: 'APP/SET-STATUS'
    status: RequestStatusType
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: StatusActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

const setAppStatusAC = (status: StatusActionsType) => ({type: 'APP/SET-STATUS', status} as const)
