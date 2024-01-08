const Persons = ({ persons, search }) => {
    const expression = new RegExp(`.*${search}.*`, 'i')
    const filteredPersons = persons.filter(person => expression.test(person.name))
  
    return(
      <div>
        {filteredPersons.map(person => {
          return(
            <div key={person.name}>
              <span>{person.name} </span>
              <span>{person.number}</span>
            </div>
          )
        })}
      </div>
    )
}

export default Persons