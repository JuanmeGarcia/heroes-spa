import { useEffect } from 'react'
import { useAuthContext } from '../context'
import { useChangeURL } from '../hooks/useChangeURL'

export const LoginPage = () => {
	const lastPath = localStorage.getItem('lastPath') || '/'

	const { login } = useAuthContext()
	const { handleChangeUrl } = useChangeURL(lastPath, true)

	const onLogin = () => {
		login('Juanme :D')
		handleChangeUrl()
	}

	return (
		<>
			<nav className="login">
				<h1>Login page</h1>
			</nav>

			<form action="" className='login__form'>
				<button className="login__button" onClick={() => onLogin()}>
					Login
				</button>

			</form>
		</>
	)
}
