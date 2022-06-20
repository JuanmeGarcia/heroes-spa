import { heroes } from '../data/heroes'

export const getHeroesByPublisher = publisher => {
	const validPublishers = ['DC Comics', 'Marvel Comics']

	const publisherToLowerCase = publisher.toLowerCase()

	const publishersToLowerCase = validPublishers
		.map(publisher => publisher.toLowerCase())


	if (!publishersToLowerCase.includes(publisherToLowerCase)) {
		throw new Error(`Invalid publisher: ${publisher}`)
	}

	return heroes.filter(hero => {
		return hero.publisher.toLowerCase() === publisherToLowerCase
	})
}
