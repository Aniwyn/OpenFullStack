const Countrie = ({ countrie }) => {
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


const Countries = ({ countries, search, details }) => {
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
        {filteredCountries.map(countrie => {
          return(
            <form key={countrie.name.common} onSubmit={details} name={countrie.name.common}>
              <span>{countrie.name.common} </span>
              <button type="submit">show</button>
            </form>
          )
        })}
      </div>
    )
}

export default Countries