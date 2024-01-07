import React, { useState } from 'react'

const Number = ({ persons }) => {
  return(
    <div>
      {persons.map((person, i) => <div key={i}>{person.name}</div>)}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('This is a note...')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addNumber = (event) => {
    console.log(event);
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons([...persons, newPerson])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>debug: {newName}</div>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
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