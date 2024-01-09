import React, { useState, useEffect } from 'react'

import Title from "./components/Title"
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
      .catch(error => console.error(error))
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewPhone(event.target.value)
  const handleSearchChange = (event) => setSearch(event.target.value)

  const addNumber = (event) => {
    event.preventDefault()

    const personFiltered = persons.find(person => person.name === newName)
    if (personFiltered) {
      const shouldReplace  = window.confirm(
        `${personFiltered.name} is already added to phonebook, replace the old number with a new one?`
      )
      
      if (shouldReplace) {
        const newPerson = { ...personFiltered, number: newPhone }
        personService
          .update(personFiltered.id, newPerson)
          .then(newPerson => {
            const newPersons = persons.map(
              person => person.id !== newPerson.id ? person : newPerson
            )
            setPersons(newPersons)
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newPhone
      }
  
      personService
        .create(newPerson)
        .then(person => {
          setPersons([...persons, person])
          setNewName('')
          setNewPhone('')
        })
    }
  }

  const deletePerson = (event) => {
    event.preventDefault()
    const idToDelete = event.target.attributes.idtodelete.value
    const nameToDelete = event.target.attributes.nametodelete.value

    const confirm = window.confirm(`Delete ${nameToDelete}`)

    if (confirm) {
      personService.deleteItem(idToDelete)
      const newPersons = persons.filter(person => person.id !== idToDelete)
      setPersons(newPersons)
    }
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
      <Persons persons={persons} search={search} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App