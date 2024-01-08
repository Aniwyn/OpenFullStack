import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Title from "./components/Title"
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
      .catch(error => console.error(error))
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewPhone(event.target.value)
  const handleSearchChange = (event) => setSearch(event.target.value)

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newPhone
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
      <PersonForm 
        addNumber={addNumber}
        name={newName}
        number={newPhone}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}>
      </PersonForm>
      
      <Title text="Numbers"></Title>
      <Persons persons={persons} search={search}></Persons>
    </div>
  )
}

export default App