import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./"

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)

    const renderHeroes = heroes.map(hero =>(
        <HeroCard key={hero.id} hero={hero} />
    ))
    return (
        <div 
            className="row row-cols-1 row-cols-md-3 g-3"
        >
            {renderHeroes}
        </div>
    )
}
