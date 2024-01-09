const Persons = ({ persons, search, deletePerson }) => {
    const expression = new RegExp(`.*${search}.*`, 'i')
    const filteredPersons = persons.filter(person => expression.test(person.name))
  
    return(
      <div>
        {filteredPersons.map(person => {
          return(
            <form
              key={person.id} 
              onSubmit={deletePerson} 
              idtodelete={person.id} 
              nametodelete={person.name}
            >
              <span>{person.name} </span>
              <span>{person.number}</span>
              <button type="onSubmit">delete</button>
            </form>
          )
        })}
      </div>
    )
}

export default Persons