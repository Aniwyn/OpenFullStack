import React, { useState } from 'react'
import Title from "./components/Title"
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


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
      <Filter search={search} onChangeSearch={handleSearchChange}></Filter>
      
      <Title text="Add a new"></Title>
      <PersonForm addNumber={addNumber} name={newName} phone={newPhone} onChangeName={handleNameChange} onChangePhone={handlePhoneChange}></PersonForm>
      
      <Title text="Numbers"></Title>
      <Persons persons={persons} search={search}></Persons>
    </div>
  )
}

export default App