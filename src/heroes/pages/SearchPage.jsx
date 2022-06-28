import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import queryString from 'query-string'
import { getHeroByName } from '../helpers'

export const SearchPage = () => {
	const navitage = useNavigate()
	const location = useLocation()

	const { q = '' } = queryString.parse(location.search)

	const heroes = getHeroByName(q)

	const { text, onInputChange, onResetForm } = useForm({ text: '' })

	const handleSubmit = e => {
		e.preventDefault()
		navitage(`?q=${text.toLowerCase().trim()}`)
		onResetForm()
	}

	const renderHeroes = heroes.map(hero => {
		return <HeroCard key={hero.id} hero={hero} />
	})
	return (
		<>
			<section className="search">
				<h1>Search for a hero</h1>
			</section>

			<section className="searcher">
				<form onSubmit={handleSubmit} className="searcher__form">
					<input
						type="text"
						value={text}
						onChange={onInputChange}
						name={'text'}
						placeholder="Search for a hero"
					/>
					<button type="submit">Search</button>
				</form>

				{q.length <= 0 && !q ? (
					<div className="alert alert-primary animate__animated animate__fadeInRight d-flex ">
						Search a hero!
					</div>
				) : (
					<></>
				)}
				{renderHeroes.length <= 0 && q ? (
					<div className="alert alert-danger animate__animated animate__fadeInRight">
						No hero with <b>{q}</b>
					</div>
				) : (
					<></>
				)}

				{renderHeroes}
			</section>

			{/* // <section className=''>
		// 	<h1>SearchPage</h1>
		// 	<hr />
		// 	<div className="row">
		// 		<div className="col-5">
		// 			<h4>Searching</h4>
		// 			<hr />
		// 			<form onSubmit={handleSubmit}>
		// 				<input
		// 					type="text"
		// 					placeholder="Search a hero"
		// 					className="form-control"
		// 					name="text"
		// 					autoComplete="off"
		// 					value={text}
		// 					onChange={onInputChange}
		// 				/>
		
		// 				<button type="submit" className="btn btn-primary mt-1">
		// 					Search
		// 				</button>
		// 			</form>
		// 		</div>
		
		// 		<div className="col-7">
		// 			<h4>Results</h4>
		// 			<hr />
		
		// 			{q.length <= 0 && !q ? (
		// 				<div className="alert alert-primary animate__animated animate__fadeInRight">
		// 					Search a hero!
		// 				</div>
		// 			) : (
		// 				<></>
		// 			)}
		// 			{renderHeroes.length <= 0 && q ? (
		// 				<div className="alert alert-danger animate__animated animate__fadeInRight">
		// 					No hero with <b>{q}</b>
		// 				</div>
		// 			) : (
		// 				<></>
		// 			)}
		
		// 			{renderHeroes}
		// 		</div>
		// 	</div>
		// </section> */}
		</>
	)
}
