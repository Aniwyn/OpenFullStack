import { useState, useEffect } from 'react'

import axios from 'axios'
import Countries from './components/Countries'


function App() {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
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
      <Countries countries={countries} search={search} details={viewDetails}></Countries>
    </div>
  )
}

export default App
