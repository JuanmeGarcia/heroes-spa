import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { useAuthContext } from '../context'
import { useChangeURL } from '../hooks/useChangeURL'

export const LoginPage = () => {
	const lastPath = localStorage.getItem('lastPath') || '/'

	const { login } = useAuthContext()
	const { handleChangeUrl } = useChangeURL(lastPath, true)

	const { loginText, onInputChange} = useForm({loginText: ''})


	console.log(loginText)
	const onLogin = () => {
		if(loginText.length <= 0) return
		
		login(loginText)
		handleChangeUrl()
	}

	return (
		<>
			<nav className="login">
				<h1>Login page</h1>
			</nav>

			<form onSubmit={onLogin} className="login__form">
					<input
						type="text"
						name={'loginText'}
						value={loginText}
						onChange={onInputChange}
						placeholder="Say your name, hero!"
						required
					/>
					<button type="submit">Search</button>
			</form>
		</>
	)
}
