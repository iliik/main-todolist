export type StatusActionsType = {
    type: 'APP/SET-STATUS'
    status: RequestStatusType
}
export type ErrorActionsType = {
    type: 'APP/SET-ERROR'
    error: null

}

type ActionType = StatusActionsType | ErrorActionsType

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: null) => ({type: 'APP/SET-ERROR', error} as const)
