import React, { useState } from 'react'

const Title = ({ text }) => <h2>{text}</h2>

const Number = ({ persons, search }) => {
  const expression = new RegExp(`.*${search}.*`, 'i')
  const filteredPersons = persons.filter(person => expression.test(person.name))

  return(
    <div>
      {filteredPersons.map(person => {
        return(
          <div key={person.name}>
            <span>{person.name} </span>
            <span>{person.phone}</span>
          </div>
        )
      })}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleSearchChange = (event) => setSearch(event.target.value)

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      phone: newPhone
    }
    setPersons([...persons, newPerson])
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <Title text="Phonebook"></Title>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange}/>
      </div>
      <Title text="Add a new"></Title>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Title text="Numbers"></Title>
      <Number persons={persons} search={search}></Number>
    </div>
  )
}

export default App