import { Navigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { getHeroById } from '../helpers'
import { useChangeURL } from '../../auth/hooks/useChangeURL'

export const HeroPage = () => {
	const { heroId } = useParams()

	const hero = useMemo(()=>{
    return getHeroById(heroId)
  }, [heroId]) 

	if (!hero) {
		return <Navigate to="/" />
	}

  const { handleChangeUrl } = useChangeURL(-1, false)

	const heroImage = `../assets/heroes/${heroId}.jpg`

	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__fadeInLeft">
				<img
					src={heroImage}
					alt={hero.superhero}
					className="img-thumbnail"
				/>
			</div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
          <li className='list-group-item'>
            <h5 className='mt-3'>Characters:</h5>
            <p className=''>{hero.characters}</p>
          </li>
        </ul>

        <button 
          className='btn btn-outline-primary'
          onClick={handleChangeUrl}
        >
          Regresar
        </button>

      </div>
		</div>
	)
}
