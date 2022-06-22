import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
		<>
		<div className="publisher">
			<h1>Marvel Comics</h1>
		</div>

      <HeroList publisher='marvel comics' />
		</>
  )
}
