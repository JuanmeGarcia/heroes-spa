import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./"

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)

    const renderHeroes = heroes.map(hero =>(
        <HeroCard key={hero.id} hero={hero} />
    ))

    return (
        <div 
            className="hero-list"
        >
            {renderHeroes}
        </div>
    )
}
