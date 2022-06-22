import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages'

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DCPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="hero/:heroId" element={<HeroPage />} />

					<Route path="/" element={<Navigate to="marvel" />} />
				</Routes>
		</>
	)
}
