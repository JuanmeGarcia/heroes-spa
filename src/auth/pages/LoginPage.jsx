import { useChangeURL } from "../hooks/useChangeURL"

export const LoginPage = () => {

  const { handleChangeUrl } = useChangeURL('/marvel', true)

  return (
    <div className="container mt-5">
        <h1>Login page</h1>
        <hr />

        <button 
          className="btn btn-primary"
          onClick={handleChangeUrl}
        >
          Login
        </button>
    </div>
  )
}
