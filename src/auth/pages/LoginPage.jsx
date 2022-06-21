import { useEffect } from "react"
import { useAuthContext } from "../context"
import { useChangeURL } from "../hooks/useChangeURL"

export const LoginPage = () => {
  const lastPath = localStorage.getItem('lastPath') || '/'

  const { login } = useAuthContext()
  const { handleChangeUrl } = useChangeURL(lastPath, true)


  const onLogin = () => {
    login('Juanme :D')
    handleChangeUrl()
  }


  return (
    <div className="container mt-5">
        <h1>Login page</h1>
        <hr />

        <button 
          className="btn btn-primary"
          onClick={() => onLogin()}
        >
          Login
        </button>
    </div>
  )
}
