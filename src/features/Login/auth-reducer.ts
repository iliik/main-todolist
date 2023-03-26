import {Dispatch} from "redux";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";
import {authAPI, LoginType} from "../../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGIN-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
export const setISLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGIN-IN', value} as const)

export const loginTC = (data: LoginType) => async (dispatch: Dispatch<ActionType>) => {
dispatch(setAppStatusAC('loading'))
    try {
        const res = await authAPI.login(data)
        if (res.data.resultCode === 0) {
            dispatch(setISLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e: any) {
        handleServerNetworkError(e, dispatch)
    }
    dispatch(setAppStatusAC('loading'))
}
type ActionType = ReturnType<typeof setISLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType
