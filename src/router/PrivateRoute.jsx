import { useAuthContext } from "../auth"
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const { logged } = useAuthContext()

    return (logged)
        ? children
        : <Navigate to="/login" />
}
