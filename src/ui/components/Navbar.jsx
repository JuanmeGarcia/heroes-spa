import { Link, NavLink } from 'react-router-dom'
import { useChangeURL } from '../../auth/hooks/useChangeURL'

export const Navbar = () => {
	const { handleChangeUrl } = useChangeURL('./login', true)

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>
			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={`nav-item nav-link ${args =>
							args.active ? 'active' : ''}`}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={`nav-item nav-link ${args =>
							args.active ? 'active' : ''}`}
						to="/dc"
					>
						DC
					</NavLink>
					<NavLink
						className={`nav-item nav-link ${args =>
							args.active ? 'active' : ''}`}
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">
						Juanme Garcia
					</span>
					<button
						className="btn nav-item nav-link btn-outline-primary"
						onClick={handleChangeUrl}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	)
}
