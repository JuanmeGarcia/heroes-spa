import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../../auth/context'
import { useChangeURL } from '../../auth/hooks/useChangeURL'

export const Navbar = () => {
	const { handleChangeUrl } = useChangeURL('./login', true)
	const { user, logout } = useAuthContext()
	const [isOpen, setIsOpen] = useState(false)

	const onLogout = () => {
		logout()
		handleChangeUrl()
	}

	useEffect(()=>{
		console.log(isOpen)
	}, [isOpen])

	const onToggle = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<nav className="navbar-heroes">
			<Link className="navbar-heroes__title" to="/">
				Heroes SPA
			</Link>

			<div className='navbar-heroes__burguer' onClick={onToggle}>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</div>

			<div className={`navbar-heroes__links ${isOpen && 'active'}`}>
				<ul >
					<NavLink
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						to="/dc"
					>
						DC
					</NavLink>
					<NavLink
						to="/search"
					>
						Search
					</NavLink>

					<button 
						className='logout-button'
						onClick={onLogout}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
		/* 		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>
			<div className="navbar-collapse">
				<div className="navbar-nav">

				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">
						{ user }
					</span>
					<button
						className="btn nav-item nav-link btn-outline-primary"
						onClick={onLogout}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav> */
	)
}
