import { useState, useEffect } from 'react'

import axios from 'axios'
import Countries from './components/Countries'
import KEY from '../KEY'
// const KEY = ''


function App() {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ weather, setWeather ] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const expression = new RegExp(`.*${search}.*`, 'i')
    const filtered = countries.filter(countrie => expression.test(countrie.name.common))
    setFilteredCountries(filtered)
    if (filtered.length === 10000000) {
      console.log(`\nhttp://api.weatherstack.com/current?access_key=${KEY}&query=${filtered[0].name.common}\n`)
      axios
        .get(`http://api.weatherstack.com/current?access_key=${KEY}&query=${filtered[0].name.common}`)
        .then(r => {
          console.log(r)
          return(r)
        })
        .then(response => setWeather(response))
        .catch(error => console.error(error))
    }
  }, [search])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${KEY}&query=Argentina`)
      .then(r => {
        console.log(r)
        return(r)
      })
      .then(response => setWeather(response))
      .catch(error => console.error(error))
  }, [])

  const handleSearchChange = (event) => setSearch(event.target.value)

  const viewDetails = (event) => {
    event.preventDefault()
    
    const countrie = countries.filter(countrie => countrie.name.common === event.target.name)
    console.log(countrie)

    setSearch(countrie[0].name.common)
  }

  return (
    <div>
      <div>find countries <input value={search} onChange={handleSearchChange}></input></div>
      <Countries
        countries={filteredCountries}
        details={viewDetails}
        weather={weather}>
      </Countries>
    </div>
  )
}

export default App
