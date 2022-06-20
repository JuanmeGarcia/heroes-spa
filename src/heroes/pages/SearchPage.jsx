import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from 'query-string'
import { getHeroByName } from "../helpers"

export const SearchPage = () => {

  const navitage = useNavigate()
  const location = useLocation()


  const { q = ''} = queryString.parse(location.search)

  const heroes = getHeroByName(q)



  const {
    text,
    onInputChange,
    onResetForm
  } = useForm({text:''})


  const handleSubmit = (e) => {
    e.preventDefault()
    navitage(`?q=${text.toLowerCase().trim()}`)
    onResetForm()
  }

  const renderHeroes = heroes.map(hero =>{
    return <HeroCard key={hero.id} hero={hero} />
  })
  return (
    <>
        <h1>SearchPage</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Search a hero"  
                className="form-control"
                name="text"
                autoComplete="off"
                value={text}
                onChange={onInputChange}
              />

              <button 
                type="submit"
                className="btn btn-primary mt-1"
              >
                Search
              </button>
            </form>

          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              q.length <= 0 && !q ? (
                <div className="alert alert-primary">
                  Search a hero!
                </div>
              ) : <></>
            }
            {
              renderHeroes.length <= 0 && q ? (
                <div className="alert alert-danger">
                  No hero with <b>{q}</b>
                </div>
              ) : <></>
            }


            {renderHeroes}

            {/* <HeroCard /> */}
          </div>
        </div>
    </>
  )
}
