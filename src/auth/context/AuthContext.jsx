import { createContext, useContext, useEffect, useReducer } from "react";
import { types } from "../types/types";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

const init = () => {
    try{
        const user = JSON.parse(localStorage.getItem('user'))
        return {
            logged: !!user,
            user
        }
    }catch{
        console.log('No user found')
    }
}

const initialState = {
    logged: false
}

export const AuthProvider = ({children}) => {
    const [auth, dispatch] = useReducer(authReducer, initialState, init)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(auth?.user))
    }, [auth])

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: name
        }
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout,

        }
        dispatch(action)
    }
    
    return (
        <AuthContext.Provider value={{
            ...auth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)