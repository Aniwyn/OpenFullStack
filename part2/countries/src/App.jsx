import { useState, useEffect } from 'react'

import axios from 'axios'

const Countrie = ({ countrie }) => {
  console.log(countrie)
  const languages = Object.entries(countrie.languages)
  return(
    <div>
      <h1>{countrie.name.common}</h1>
      <div>
        <p>Capital: {countrie.capital[0]}</p>
        <p>Population: {countrie.population}</p>
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          {languages.map(language => <li key={language[0]}>{language[1]}</li>)}
        </ul>
      </div>
      <img src={countrie.flags.png} width={100}/>
    </div>
  )
}

const Countries = ({ countries, search }) => {
  const expression = new RegExp(`.*${search}.*`, 'i')
  const filteredCountries = countries.filter(countrie => expression.test(countrie.name.common))

  if (filteredCountries.length >= 10) {
    return(<div>Too many matches, specify another filter</div>)
  }

  if (filteredCountries.length === 1) {
    return(
      <Countrie countrie={filteredCountries[0]}></Countrie>
    )
  }

  return(
    <div>
      {filteredCountries.map(countrie => <p key={countrie.name.common}>{countrie.name.common}</p>)}
    </div>
  )
}

function App() {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearchChange = (event) => setSearch(event.target.value)

  return (
    <div>
      <div>find countries <input value={search} onChange={handleSearchChange}></input></div>
      <Countries countries={countries} search={search}></Countries>
    </div>
  )
}

export default App
