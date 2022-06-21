import { useAuthContext } from "../auth"
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {
    const { logged } = useAuthContext()


    return (logged)
        ? <Navigate to='/' />
        : children
}
