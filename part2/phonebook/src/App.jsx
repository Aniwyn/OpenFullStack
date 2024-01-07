import React, { useState } from 'react'

const Number = ({ persons }) => {
  return(
    <div>
      {persons.map(person => {
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
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-1234567',
    },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

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
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <Number persons={persons}></Number>
    </div>
  )
}

export default App