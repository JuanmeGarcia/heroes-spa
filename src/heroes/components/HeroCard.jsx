import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
	const heroImage = `../assets/heroes/${hero.id}.jpg`

	return (
		<article className="hero-card animate__animated animate__fadeIn">
			<figure className='hero-card__image'>
				<img src={heroImage} alt={hero.superhero} />
			</figure>

			<div className='hero-card__info'>
				<h2>{hero.superhero}</h2>
				<p>{hero.alter_ego}</p>

				{hero.alter_ego !== hero.characters && (
					<p className="card-text">{hero.characters}</p>
				)}
				<p className="card-text">
					<small className="text-muted">
						{hero.first_appearance}
					</small>
				</p>
			</div>
			<Link to={`/hero/${hero.id}`} className='caption'>Ver más...</Link>
		</article>

		// <div className="col animate__animated animate__fadeIn">
		// 	<div className="card">
		// 		<div className="row no-gutters">
		// 			<div className="col-4">
		// 				<img
		// 					src={heroImage}
		// 					alt={`${hero.superhero}`}
		// 					className="card-img"
		// 				/>
		// 			</div>

		// 			<div className="col-8">
		// 				<div className="card-body">
		// 					<h2 className="card-title">{hero.superhero}</h2>

		// 					<p className="card-text">{hero.alter_ego}</p>

		// 					{hero.alter_ego !== hero.characters && (
		// 						<p className="card-text">{hero.characters}</p>
		// 					)}

		// 					<p className="card-text">
		// 						<small className="text-muted">
		// 							{hero.first_appearance}
		// 						</small>
		// 					</p>

		// 					<Link to={`/hero/${hero.id}`}>Mas...</Link>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}
