const Countrie = ({ countrie, weather }) => {
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
            <div>
                <h2>Weather in {weather.data.location.name}</h2>
                <p><strong>Temperature: </strong>{weather.data.current.temperature} celcius</p>
                <img src={weather.data.current.weather_icons[0]} width={100}/>
                <p><strong>Wind: </strong>{weather.data.current.wind_speed} mph direction {weather.data.current.wind_dir}</p>
            </div>
        </div>
    )
}


const Countries = ({ countries, details, weather }) => {
    if (countries.length >= 10) {
      return(<div>Too many matches, specify another filter</div>)
    }

    if (countries.length === 0) {
        return(<div>No results</div>)
    }
  
    if (countries.length === 1) {
      return(
        <Countrie countrie={countries[0]} weather={weather}></Countrie>
      )
    }
    
    return(
      <div>
        {countries.map(countrie => {
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