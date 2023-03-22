const initialState: InitialStateType = {
    status: 'loading',
    error: null
}

type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionType =
    | SetErrorActionType
    | SetStatusActionType