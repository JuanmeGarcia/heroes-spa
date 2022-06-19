import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DCPage } from '../heroes/pages/DCPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="marvel" element={<MarvelPage />} />
				<Route path="dc" element={<DCPage />} />
				<Route path="login" element={<LoginPage />} />

				<Route path="/" element={<Navigate to='marvel'/>} />
			</Routes>
		</>
	)
}
